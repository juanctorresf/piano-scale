import { 
    aMajorIonian,
    aSharpMajorIonian,
    bMajorIonian,
    cMajorIonian, 
    cSharpMajorIonian, 
    dMajorIonian, 
    dSharpMajorIonian, 
    eMajorIonian,
    fMajorIonian,
    fSharpMajorIonian,
    gMajorIonian,
    gSharpMajorIonian} 
from "../global/ScaleMajor"
import { aMinorNatural, aSharpMinorNatural, bMinorNatural, cMinorNatural, cSharpMinorNatural, dMinorNatural, dSharpMinorNatural, eMinorNatural, fMinorNatural, fSharpMinorNatural, gMinorNatural, gSharpMinorNatural } from "../global/ScaleMinor";

enum mode {
    major= "Major",
    minor= "Minor"
}

function isNoteInScale( 
    noteSelected: string, 
    modality: string, 
    type: string, 
    noteKey:string 
): boolean | undefined {
    // ---------- Chords Major ---------------
    if( noteSelected === "C" && modality === mode.major && type === "Ionian" ) {
        return cMajorIonian.includes(noteKey);
    } else 
    if( noteSelected === "C#" && modality === mode.major && type === "Ionian" ) {
        return cSharpMajorIonian.includes(noteKey);
    } else 
    if( noteSelected === "D" && modality === mode.major && type === "Ionian" ) {
        return dMajorIonian.includes(noteKey)
    } else 
    if( noteSelected === "D#" && modality === mode.major && type === "Ionian" ){
        return dSharpMajorIonian.includes(noteKey)
    } else
    if( noteSelected === "E" && modality === mode.major && type === "Ionian" ) {
        return eMajorIonian.includes(noteKey)
    } else
    if( noteSelected === "F" && modality === mode.major && type === "Ionian" ) {
        return fMajorIonian.includes(noteKey)
    } else
    if( noteSelected === "F#" && modality === mode.major && type === "Ionian" ) {
        return fSharpMajorIonian.includes(noteKey)
    } else
    if( noteSelected === "G" && modality === mode.major && type === "Ionian" ) {
        return gMajorIonian.includes(noteKey)
    } else
    if( noteSelected === "G#" && modality === mode.major && type === "Ionian" ) {
        return gSharpMajorIonian.includes(noteKey)
    } else
    if( noteSelected === "A" && modality === mode.major && type === "Ionian" ) {
        return aMajorIonian.includes(noteKey)
    } else
    if( noteSelected === "A#" && modality === mode.major && type === "Ionian" ) {
        return aSharpMajorIonian.includes(noteKey)
    } else
    if( noteSelected === "B" && modality === mode.major && type === "Ionian" ) {
        return bMajorIonian.includes(noteKey)
    } else
    // ---------- Add Minor Chords -------------
    if( noteSelected === "C" && modality === mode.minor && type === "Natural" ) {
        return cMinorNatural.includes(noteKey)
    } else 
    if( noteSelected === "C#" && modality === mode.minor && type === "Natural" ) {
        return cSharpMinorNatural.includes(noteKey)
    } else 
    if( noteSelected === "D" && modality === mode.minor && type === "Natural" ) {
        return dMinorNatural.includes(noteKey)
    } else 
    if( noteSelected === "D#" && modality === mode.minor && type === "Natural" ) {
        return dSharpMinorNatural.includes(noteKey)
    } else 
    if( noteSelected === "E" && modality === mode.minor && type === "Natural" ) {
        return eMinorNatural.includes(noteKey)
    } else 
    if( noteSelected === "F" && modality === mode.minor && type === "Natural" ) {
        return fMinorNatural.includes(noteKey)
    } else 
    if( noteSelected === "F#" && modality === mode.minor && type === "Natural" ) {
        return fSharpMinorNatural.includes(noteKey)
    } else 
    if( noteSelected === "G" && modality === mode.minor && type === "Natural" ) {
        return gMinorNatural.includes(noteKey)
    } else 
    if( noteSelected === "G#" && modality === mode.minor && type === "Natural" ) {
        return gSharpMinorNatural.includes(noteKey)
    } else
    if( noteSelected === "A" && modality === mode.minor && type === "Natural" ) {
        return aMinorNatural.includes(noteKey)
    } else 
    if( noteSelected === "A#" && modality === mode.minor && type === "Natural" ) {
        return aSharpMinorNatural.includes(noteKey)
    } else
    if( noteSelected === "B" && modality === mode.minor && type === "Natural" ) {
        return bMinorNatural.includes(noteKey)
    } else {
        return undefined
    }
}

export {
    isNoteInScale
}