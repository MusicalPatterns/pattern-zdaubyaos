import { NoteSpec } from '@musical-patterns/compiler'
import { apply, Translation } from '@musical-patterns/utilities'

const applyPitchIndexTranslation: (part: NoteSpec[], pitchIndexTranslation: Translation) => NoteSpec[] =
    (part: NoteSpec[], pitchIndexTranslation: Translation): NoteSpec[] =>
        part.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: noteSpec.pitchSpec && {
                ...noteSpec.pitchSpec,
                index: apply.Translation(noteSpec.pitchSpec.index, pitchIndexTranslation),
            },
        }))

export {
    applyPitchIndexTranslation,
}
