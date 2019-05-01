import { Note, PitchValue, Segment } from '@musical-patterns/material'
import { ContourWhole, insteadOf, map, Ordinal, use } from '@musical-patterns/utilities'
import { applyNoteStyle } from './applyNoteStyle'
import { NoteStyle } from './types'

const computeSegment: (contourWholes: Array<ContourWhole<PitchValue>>, noteStyles: NoteStyle[]) => Segment =
    (contourWholes: Array<ContourWhole<PitchValue>>, noteStyles: NoteStyle[]): Segment =>
        map(
            contourWholes,
            (contourWhole: ContourWhole<PitchValue>, index: Ordinal<Array<ContourWhole<PitchValue>>>): Note[] => {
                const noteStyle: NoteStyle = use.Ordinal(noteStyles, insteadOf<Ordinal, NoteStyle[]>(index))

                return applyNoteStyle(contourWhole, noteStyle)
            },
        )

export {
    computeSegment,
}
