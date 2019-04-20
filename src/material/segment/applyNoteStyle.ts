import { Note, PitchDuration } from '@musical-patterns/material'
import { ContourWhole, use } from '@musical-patterns/utilities'
import { TRANSLATION_FOR_GAIN_AND_DURATIONS_SCALES } from '../../constants'
import { computeNote } from '../features'
import { applyGainScalar } from './applyGainScalar'
import { applyPitchIndexTranslation } from './applyPitchIndexTranslation'
import { applyScaleIndex } from './applyScaleIndex'
import { NoteStyle } from './types'

const applyNoteStyle: (contourWhole: ContourWhole<PitchDuration>, noteStyle: NoteStyle) => Note[] =
    (contourWhole: ContourWhole<PitchDuration>, noteStyle: NoteStyle): Note[] => {
        let notes: Note[] = contourWhole.map(computeNote)

        const { gainScalar, pitchIndexTranslation, scaleIndex } = noteStyle

        if (pitchIndexTranslation) {
            notes = applyPitchIndexTranslation(notes, pitchIndexTranslation)
        }

        if (gainScalar) {
            notes = applyGainScalar(notes, gainScalar)
        }

        notes = applyScaleIndex(notes, use.Translation(scaleIndex, TRANSLATION_FOR_GAIN_AND_DURATIONS_SCALES))

        return notes
    }

export {
    applyNoteStyle,
}
