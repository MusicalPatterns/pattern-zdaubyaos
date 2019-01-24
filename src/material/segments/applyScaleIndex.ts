import { NoteSpec } from '@musical-patterns/compiler'
import { Index } from '@musical-patterns/utilities'

const applyScaleIndex: (part: NoteSpec[], scaleIndex: Index) => NoteSpec[] =
    (part: NoteSpec[], scaleIndex: Index): NoteSpec[] =>
        part.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: { ...noteSpec.pitchSpec, scaleIndex },
        }))

export {
    applyScaleIndex,
}
