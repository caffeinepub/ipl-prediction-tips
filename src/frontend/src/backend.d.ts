import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Prediction {
    team1: string;
    team2: string;
    predictedWinner: string;
    confidenceLevel: bigint;
    matchDate: bigint;
}
export interface backendInterface {
    addPrediction(team1: string, team2: string, matchDate: bigint, predictedWinner: string, confidenceLevel: bigint): Promise<bigint>;
    getAllPredictions(): Promise<Array<Prediction>>;
    getPrediction(id: bigint): Promise<Prediction>;
}
