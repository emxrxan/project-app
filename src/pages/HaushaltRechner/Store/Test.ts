import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICounter {
    counter: number
}

const initialState: ICounter = {
    counter: 0
}

const testData = createSlice({
    name: 'Test',
    initialState,
    reducers: {
        update(state: ICounter, action: PayloadAction<number>) {
            state.counter += action.payload
        }
    }
})

export const testDataAction = testData.actions
export const testDataReducer = testData.reducer