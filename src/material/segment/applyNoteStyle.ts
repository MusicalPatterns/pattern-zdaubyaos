import { Note, PitchValue } from '@musical-patterns/material'
import { ContourWhole } from '@musical-patterns/utilities'
import { computeNote } from '../features'
import { applyIntensityScalar } from './applyIntensityScalar'
import { applyPitchIndexShift } from './applyPitchIndexShift'
import { applyScaleIndex } from './applyScaleIndex'
import { NoteStyle } from './types'

const applyNoteStyle: (contourWhole: ContourWhole<PitchValue>, noteStyle: NoteStyle) => Note[] =
    (contourWhole: ContourWhole<PitchValue>, noteStyle: NoteStyle): Note[] => {
        let notes: Note[] = contourWhole.map(computeNote)

        const { intensityScalar, pitchIndexShift, scaleIndex } = noteStyle

        if (pitchIndexShift) {
            notes = applyPitchIndexShift(notes, pitchIndexShift)
        }

        if (intensityScalar) {
            notes = applyIntensityScalar(notes, intensityScalar)
        }

        notes = applyScaleIndex(notes, scaleIndex)

        return notes
    }

export {
    applyNoteStyle,
}
