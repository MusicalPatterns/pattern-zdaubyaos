import calculateDuration from '../../../src/calculateDuration'
import rest from '../../../src/rest'
import { Part, Segment } from './types'

const FLIP_INDEX: number = 3

interface Alteration {
   flipHarmonically?: boolean,
}

const alterSegmentParts: (segment: Segment, alterations: Alteration[]) => Segment =
    (segment: Segment, alterations: Alteration[]): Segment => {
        const alteredSegment: Segment = []
        segment.forEach((part: Part, index: number): void => {
            if (alterations[index].flipHarmonically) {
                alteredSegment[index] = rest(calculateDuration(part))
                alteredSegment[index + FLIP_INDEX] = part
            } else {
                alteredSegment[index] = part
                alteredSegment[index + FLIP_INDEX] = rest(calculateDuration(part))
            }
        })

        return alteredSegment
    }

export default alterSegmentParts
