import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { testDataReducer } from './Test'

const Store = configureStore({
    reducer: combineReducers({
        test: testDataReducer
    })
})

export type StoreType = ReturnType<typeof Store.getState>
export default Store;