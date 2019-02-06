import { NoteSpec } from '@musical-patterns/compiler'
import { apply, Translation } from '@musical-patterns/utilities'

const applyPitchIndexOffset: (part: NoteSpec[], pitchIndexOffset: Translation) => NoteSpec[] =
    (part: NoteSpec[], pitchIndexOffset: Translation): NoteSpec[] =>
        part.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: noteSpec.pitchSpec && {
                ...noteSpec.pitchSpec,
                index: apply.Translation(noteSpec.pitchSpec.index, pitchIndexOffset),
            },
        }))

export {
    applyPitchIndexOffset,
}
