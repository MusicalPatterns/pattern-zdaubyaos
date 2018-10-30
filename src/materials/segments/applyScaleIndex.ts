import { Index, NoteSpec, Part } from '../../../../../src'

const applyScaleIndex: (part: Part, scaleIndex: Index) => Part =
    (part: Part, scaleIndex: Index): Part =>
        part.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: { ...noteSpec.pitchSpec, scaleIndex },
        }))

export {
    applyScaleIndex,
}
