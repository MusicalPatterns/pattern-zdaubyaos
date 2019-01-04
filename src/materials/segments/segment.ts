import { NoteSpec } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { ContourWhole } from '@musical-patterns/utilities'
import { ZdaubyaosContour } from '../../types'
import { applyNoteStyle } from './applyNoteStyle'
import { NoteStyle } from './types'

const buildSegment: (contourWholes: Array<ContourWhole<ZdaubyaosContour>>, noteStyles: NoteStyle[]) => Segment =
    (contourWholes: Array<ContourWhole<ZdaubyaosContour>>, noteStyles: NoteStyle[]): Segment =>
        contourWholes.map((contourWhole: ContourWhole<ZdaubyaosContour>, index: number): NoteSpec[] => {
            const noteStyle: NoteStyle = noteStyles[ index ]

            return applyNoteStyle(contourWhole, noteStyle)
        })

export {
    buildSegment,
}
