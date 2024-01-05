import { createSlice} from "@reduxjs/toolkit"

let id = 0
const taskSlice = createSlice({
    name:"Tasks",
    initialState:[],
    reducers:{
        //action:function
        addTask:(state,action) =>{
            state.push({
                id:++id,
                task:action.payload.task,
                completed:false
            })
        
        },
        removeTask:(state,action) =>{
            const index = state.findIndex(task=>task.id===action.payload.id)
            state.splice(index,1)
        },
        completedTask:(state,action)=>{
            const index = state.findIndex(task => task.id === action.payload.id)
            state[index].completed = true
        },
        
    }
})
// console.log(taskSlice)



export const {addTask,completedTask,removeTask} = taskSlice.actions


export const taskReducer = taskSlice.reducer