
import store from "./store/configureStore.js";
import { addTask,removeTask ,completedTask} from "./store/task.js";
import { addEmp,removeEmp} from "./store/employee.js";
//  const unsubscribe = store.subscribe(() =>{
//     console.log('Updated',store.getState())
// })
// store.dispatch(addTask({task:"Task 1"}))
// store.dispatch(addTask({task:"Task 2"}))
// console.log(store.getState())

// store.dispatch(completedTask({id:1}))
// console.log(store.getState())
// // unsubscribe() 
// store.dispatch(removeTask({id:2}))
// console.log(store.getState())



// store.dispatch(addEmp({name:"Sunny"}))
store.dispatch(addEmp({name:"Sarthak"}))
store.dispatch({type:"SHOW_ERROR",payload:{error:"User not found"}})
// console.log(store.getState())
// store.dispatch(removeEmp({id:2}))
// console.log(store.getState())
