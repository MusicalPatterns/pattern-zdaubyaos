import { Index, NoteSpec } from '../../../../src'

const applyScaleIndex: (noteSpecs: NoteSpec[], scaleIndex: Index) => NoteSpec[] =
    (noteSpecs: NoteSpec[], scaleIndex: Index): NoteSpec[] =>
        noteSpecs.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: { ...noteSpec.pitchSpec, scaleIndex },
        }))

export {
    applyScaleIndex,
}
