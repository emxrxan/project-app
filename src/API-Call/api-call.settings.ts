import axios, { AxiosInstance } from "axios";
import { api_haushaltRechner } from "./Api/api_haushaltRechner";

export const API_Call: AxiosInstance = axios.create({
    baseURL: "https://localhost:7261/"
})

export const requestHaushaltRecher = new api_haushaltRechner(API_Call, 'api/HaushaltRechner');