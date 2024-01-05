//Store Configuratioon
import { Tuple, configureStore } from '@reduxjs/toolkit'
import {empReducer } from './employee'
import {taskReducer} from './task'
import error from '../middleware/error'
import logger from 'redux-logger'


const store = configureStore({
    reducer:{
    Tasks:taskReducer,
    Employees:empReducer
    },
    middleware:(getDefaultMiddleware) =>  [...getDefaultMiddleware(),error]
})




export default store