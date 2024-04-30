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
    // Chords Major
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
    }
    else {
        return undefined
    }
}

export {
    isNoteInScale
}