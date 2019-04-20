import { Note, PitchDuration, Segment } from '@musical-patterns/material'
import { ContourWhole, insteadOf, map, Ordinal, use } from '@musical-patterns/utilities'
import { applyNoteStyle } from './applyNoteStyle'
import { NoteStyle } from './types'

const computeSegment: (contourWholes: Array<ContourWhole<PitchDuration>>, noteStyles: NoteStyle[]) => Segment =
    (contourWholes: Array<ContourWhole<PitchDuration>>, noteStyles: NoteStyle[]): Segment =>
        map(
            contourWholes,
            (contourWhole: ContourWhole<PitchDuration>, index: Ordinal<ContourWhole<PitchDuration>>): Note[] => {
                const noteStyle: NoteStyle = use.Ordinal(noteStyles, insteadOf<Ordinal, NoteStyle>(index))

                return applyNoteStyle(contourWhole, noteStyle)
            },
        )

export {
    computeSegment,
}
