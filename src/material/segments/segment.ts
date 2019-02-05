import { NoteSpec } from '@musical-patterns/compiler'
import { PitchDuration, Segment } from '@musical-patterns/pattern'
import { ContourWhole } from '@musical-patterns/utilities'
import { applyNoteStyle } from './applyNoteStyle'
import { NoteStyle } from './types'

const buildSegment: (contourWholes: Array<ContourWhole<PitchDuration>>, noteStyles: NoteStyle[]) => Segment =
    (contourWholes: Array<ContourWhole<PitchDuration>>, noteStyles: NoteStyle[]): Segment =>
        contourWholes.map((contourWhole: ContourWhole<PitchDuration>, index: number): NoteSpec[] => {
            const noteStyle: NoteStyle = noteStyles[ index ]

            return applyNoteStyle(contourWhole, noteStyle)
        })

export {
    buildSegment,
}
