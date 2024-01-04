
import store from "./store/configureStore.js";
import { addTask,removeTask ,completedTask,fetchTodo} from "./store/task.js";


 const unsubscribe = store.subscribe(() =>{
    console.log('Updated',store.getState())
})
store.dispatch(addTask("Task 1"))
store.dispatch(addTask("Task 2"))
console.log(store.getState())

// store.dispatch(completedTask(2))
// console.log(store.getState())
// unsubscribe() 
// store.dispatch(removeTask(1))
store.dispatch(fetchTodo())
console.log(store.getState())