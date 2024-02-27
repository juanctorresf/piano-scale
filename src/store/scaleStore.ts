import { create } from "zustand";

type ScaleState = {
    note: string,
    modality: string,
    type: string
}

type ScaleAction = {
    changeNote: ( newNote: string ) => void,
    changeModality: ( newModality: string ) => void,
    changeType: ( newType: string ) => void
}

export const useScaleStore = create<ScaleState & ScaleAction>( (set) => ({
    note: "C",
    modality: "Major",
    type: "Ionian",
    changeNote: (newNote:string) => set( () => ({ note: newNote }) ),
    changeModality: (newModality:string ) => set( () => ({ modality: newModality }) ),
    changeType: ( newType:string ) => set( () => ({type: newType }) )
}));