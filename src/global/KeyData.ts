const allKeys: string[] = ['C','C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const keys: string[] = [];

for (let octave=4; octave<= 5; octave++) {
    for( const key of allKeys ) {
        keys.push(key + octave)
    }
}

export {
    keys,
}