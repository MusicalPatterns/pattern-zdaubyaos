import { Note, PitchDuration } from '@musical-patterns/material'
import { ContourWhole, use } from '@musical-patterns/utilities'
import { SHIFT_FOR_GAIN_AND_DURATIONS_SCALES } from '../../constants'
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

        notes = applyScaleIndex(notes, use.Cardinal(scaleIndex, SHIFT_FOR_GAIN_AND_DURATIONS_SCALES))

        return notes
    }

export {
    applyNoteStyle,
}
