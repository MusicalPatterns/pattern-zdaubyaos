import { Note } from '@musical-patterns/compiler'
import { PitchDuration } from '@musical-patterns/pattern'
import { apply, ContourWhole } from '@musical-patterns/utilities'
import { TRANSLATION_FOR_GAIN_AND_DURATIONS_SCALES } from '../../constants'
import { buildNote } from '../features'
import { applyGainScalar } from './applyGainScalar'
import { applyPitchIndexTranslation } from './applyPitchIndexTranslation'
import { applyScaleIndex } from './applyScaleIndex'
import { NoteStyle } from './types'

const applyNoteStyle: (contourWhole: ContourWhole<PitchDuration>, noteStyle: NoteStyle) => Note[] =
    (contourWhole: ContourWhole<PitchDuration>, noteStyle: NoteStyle): Note[] => {
        let notes: Note[] = contourWhole.map(buildNote)

        const { gainScalar, pitchIndexTranslation, scaleIndex } = noteStyle

        if (pitchIndexTranslation) {
            notes = applyPitchIndexTranslation(notes, pitchIndexTranslation)
        }

        if (gainScalar) {
            notes = applyGainScalar(notes, gainScalar)
        }

        notes = applyScaleIndex(notes, apply.Translation(scaleIndex, TRANSLATION_FOR_GAIN_AND_DURATIONS_SCALES))

        return notes
    }

export {
    applyNoteStyle,
}
