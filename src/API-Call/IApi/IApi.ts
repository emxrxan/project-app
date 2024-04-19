export interface IApi<TModel> {
    getAllData(): Promise<TModel[]>
    postNewData(newHaushaltRechner: TModel): Promise<TModel>
    updateData(Id: string, updateHaushaltRechner: TModel): Promise<string>
    deleteData(Id: string): Promise<string>
}