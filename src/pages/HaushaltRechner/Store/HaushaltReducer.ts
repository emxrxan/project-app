import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HaushaltRechner_model } from "../../../API-Call/Model/HaushaltRechner.model";
import { requestHaushaltRecher } from "../../../API-Call/api-call.settings";

interface IHaushaltRechner {
    list: HaushaltRechner_model[]
}

const initialState: IHaushaltRechner = {
    list: []
}

const data = createSlice({
    name: "HaushaltRechner_Store",
    initialState,
    reducers: {
        getAll(state: IHaushaltRechner) {
            async () => {
                const response = await requestHaushaltRecher.getAllData()
                state.list = response
            }
        }
    }
})

export const dataAction = data.actions
export const dataReducer = data.reducer