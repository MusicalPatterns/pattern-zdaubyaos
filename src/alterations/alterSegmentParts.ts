import rest from '../../../../src/rest'
import calculateDuration from '../../../../src/utilities/calculateDuration'
import { Part, Segment } from '../types'
import adjustGain from './adjustGain'
import adjustPitchIndex from './adjustPitchIndex'

const FLIP_INDEX: number = 3

interface Alteration {
    flipHarmonically?: boolean,
    gainAdjust?: number,
    pitchIndexOffset?: number,
}

const alterSegmentParts: (segment: Segment, alterations: Alteration[]) => Segment =
    (segment: Segment, alterations: Alteration[]): Segment => {
        const alteredSegment: Segment = []
        segment.forEach((part: Part, index: number): void => {
            let alteredPart: Part = part
            const {flipHarmonically, gainAdjust, pitchIndexOffset} = alterations[index]

            if (pitchIndexOffset) {
                alteredPart = adjustPitchIndex(alteredPart, pitchIndexOffset)
            }

            if (gainAdjust) {
                alteredPart = adjustGain(alteredPart, gainAdjust)
            }

            if (flipHarmonically) {
                alteredSegment[index] = rest(calculateDuration(alteredPart))
                alteredSegment[index + FLIP_INDEX] = alteredPart
            } else {
                alteredSegment[index] = alteredPart
                alteredSegment[index + FLIP_INDEX] = rest(calculateDuration(alteredPart))
            }
        })

        return alteredSegment
    }

export default alterSegmentParts
