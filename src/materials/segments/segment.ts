import { PartSpec } from '@musical-patterns/compiler'
import { ContourWhole, Segment } from '@musical-patterns/pattern'
import { applyNoteStyle } from './applyNoteStyle'
import { NoteStyle } from './types'

const buildSegment: (contourWholes: ContourWhole[], noteStyles: NoteStyle[]) => Segment =
    (contourWholes: ContourWhole[], noteStyles: NoteStyle[]): Segment =>
        contourWholes.map((contourWhole: ContourWhole, index: number): PartSpec => {
            const noteStyle: NoteStyle = noteStyles[ index ]

            return applyNoteStyle(contourWhole, noteStyle)
        })

export {
    buildSegment,
}
