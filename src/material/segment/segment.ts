import { Note, PitchDuration, Segment } from '@musical-patterns/material'
import { apply, ContourWhole, map, Ordinal } from '@musical-patterns/utilities'
import { applyNoteStyle } from './applyNoteStyle'
import { NoteStyle } from './types'

const computeSegment: (contourWholes: Array<ContourWhole<PitchDuration>>, noteStyles: NoteStyle[]) => Segment =
    (contourWholes: Array<ContourWhole<PitchDuration>>, noteStyles: NoteStyle[]): Segment =>
        map(contourWholes, (contourWhole: ContourWhole<PitchDuration>, index: Ordinal): Note[] => {
            const noteStyle: NoteStyle = apply.Ordinal(noteStyles, index)

            return applyNoteStyle(contourWhole, noteStyle)
        })

export {
    computeSegment,
}
