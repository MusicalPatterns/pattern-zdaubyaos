import { Notes } from '../../../../src/types'
import { Index, Offset, Scalar } from '../../../../src/utilities/nominalTypes'
import { Part, Segment } from '../types'
import applyScaleIndex from './applyScaleIndex'
import makeNote from './makeNote'
import offsetPitchIndex from './offsetPitchIndex'
import scaleGain from './scaleGain'

interface NoteStyle {
    gainScalar?: Scalar,
    pitchIndexOffset?: Offset,
    scaleIndex: Index,
}

const makeSegment: (parts: Part[], noteStyle: NoteStyle[]) => Segment =
    (parts: Part[], noteStyle: NoteStyle[]): Segment =>
        parts.map((part: Part, index: number): Notes => {
            let notes: Notes = part.map(makeNote)

            const { gainScalar, pitchIndexOffset, scaleIndex } = noteStyle[index]

            if (pitchIndexOffset) {
                notes = offsetPitchIndex(notes, pitchIndexOffset)
            }

            if (gainScalar) {
                notes = scaleGain(notes, gainScalar)
            }

            notes = applyScaleIndex(notes, scaleIndex)

            return notes
        })

export default makeSegment
