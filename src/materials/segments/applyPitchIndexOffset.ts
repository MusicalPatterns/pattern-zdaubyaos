import { applyOffset, NoteSpec, Offset, Part } from '../../../../../src'

const applyPitchIndexOffset: (part: Part, pitchIndexOffset: Offset) => Part =
    (part: Part, pitchIndexOffset: Offset): Part =>
        part.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: noteSpec.pitchSpec && {
                ...noteSpec.pitchSpec,
                index: applyOffset(noteSpec.pitchSpec.index, pitchIndexOffset),
            },
        }))

export {
    applyPitchIndexOffset,
}
