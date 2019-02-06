import { NoteSpec } from '@musical-patterns/compiler'
import { Ordinal } from '@musical-patterns/utilities'

const applyScaleIndex: (part: NoteSpec[], scaleIndex: Ordinal) => NoteSpec[] =
    (part: NoteSpec[], scaleIndex: Ordinal): NoteSpec[] =>
        part.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: { ...noteSpec.pitchSpec, scaleIndex },
        }))

export {
    applyScaleIndex,
}
