import { applyOffset, NoteSpec, Offset } from '../../../../src'

const applyPitchIndexOffset: (notes: NoteSpec[], pitchIndexOffset: Offset) => NoteSpec[] =
    (noteSpecs: NoteSpec[], pitchIndexOffset: Offset): NoteSpec[] =>
        noteSpecs.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: noteSpec.pitchSpec && {
                ...noteSpec.pitchSpec,
                index: applyOffset(noteSpec.pitchSpec.index, pitchIndexOffset),
            },
        }))

export {
    applyPitchIndexOffset,
}
