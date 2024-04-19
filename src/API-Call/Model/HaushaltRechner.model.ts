export enum EinnahmeType {
    EINNAHME = 0,
    AUSGABE = 1
}

export type HaushaltRechner_model = {
    id: number
    title: string
    date: Date
    betrag: number
    einnahmeType: EinnahmeType
}