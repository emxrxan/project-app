import { AxiosInstance } from "axios"
import { IApi } from "../IApi/IApi"
import { HaushaltRechner_model } from "../Model/HaushaltRechner.model"

export class api_haushaltRechner implements IApi<HaushaltRechner_model> {
    constructor(private base_request: AxiosInstance, private api_haushaltRechner_path: string) {
        this.base_request = base_request
        this.api_haushaltRechner_path = api_haushaltRechner_path
    }

    async getAllData(): Promise<HaushaltRechner_model[]>{
        try {
            const fetchData = await this.base_request.get(`${this.api_haushaltRechner_path}`)
            return fetchData.data
        } catch {
            throw new Error("Failed to get all Data")
        }
    }

    async postNewData(newHaushaltRechner: HaushaltRechner_model): Promise<HaushaltRechner_model>{
        try {
            const fetchData = await this.base_request.post(`${this.api_haushaltRechner_path}`, newHaushaltRechner)
            return fetchData.data
        } catch {
            throw new Error("Failed to create Data")
        }
    }

    async updateData(Id: string, updateHaushaltRechner: HaushaltRechner_model): Promise<string>{
        try {
            await this.base_request.put(`${this.api_haushaltRechner_path}/${Id}`, updateHaushaltRechner)
            return Promise.resolve("Succesfully geupdated")
        } catch {
            throw new Error("Failed to update Data")
        }
    }

    async deleteData(Id: string): Promise<string>{
        try {
            await this.base_request.delete(`${this.api_haushaltRechner_path}/${Id}`)
            return Promise.resolve("Succesfully deleted")
        } catch {
            throw new Error("Failed to delete Data")
        }
    }

}