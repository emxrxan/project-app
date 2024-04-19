import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { dataReducer } from './HaushaltReducer';

const Store = configureStore({
    reducer: combineReducers({
        test: dataReducer
    })
})

export type StoreType = ReturnType<typeof Store.getState>
export default Store;