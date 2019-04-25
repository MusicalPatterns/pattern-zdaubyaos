import { Note, PitchDuration } from '@musical-patterns/material'
import { ContourWhole, use } from '@musical-patterns/utilities'
import { SHIFT_PAST_GAIN_AND_DURATION_SCALES_TO_PITCH_SCALE } from '../../constants'
import { computeNote } from '../features'
import { applyGainScalar } from './applyGainScalar'
import { applyPitchIndexShift } from './applyPitchIndexShift'
import { applyScaleIndex } from './applyScaleIndex'
import { NoteStyle } from './types'

const applyNoteStyle: (contourWhole: ContourWhole<PitchDuration>, noteStyle: NoteStyle) => Note[] =
    (contourWhole: ContourWhole<PitchDuration>, noteStyle: NoteStyle): Note[] => {
        let notes: Note[] = contourWhole.map(computeNote)

        const { gainScalar, pitchIndexShift, scaleIndex } = noteStyle

        if (pitchIndexShift) {
            notes = applyPitchIndexShift(notes, pitchIndexShift)
        }

        if (gainScalar) {
            notes = applyGainScalar(notes, gainScalar)
        }

        notes = applyScaleIndex(notes, use.Cardinal(scaleIndex, SHIFT_PAST_GAIN_AND_DURATION_SCALES_TO_PITCH_SCALE))

        return notes
    }

export {
    applyNoteStyle,
}
