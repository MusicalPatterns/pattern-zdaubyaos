import { NoteSpec } from '@musical-patterns/compiler'
import { apply, Offset } from '@musical-patterns/utilities'

const applyPitchIndexOffset: (part: NoteSpec[], pitchIndexOffset: Offset) => NoteSpec[] =
    (part: NoteSpec[], pitchIndexOffset: Offset): NoteSpec[] =>
        part.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: noteSpec.pitchSpec && {
                ...noteSpec.pitchSpec,
                index: apply.Offset(noteSpec.pitchSpec.index, pitchIndexOffset),
            },
        }))

export {
    applyPitchIndexOffset,
}
