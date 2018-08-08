import rest from '../../../../src/rest'
import calculateDuration from '../../../../src/utilities/calculateDuration'
import { Offset, Scalar } from '../../../../src/utilities/nominalTypes'
import { Part, Segment } from '../types'
import offsetPitchIndex from './offsetPitchIndex'
import scaleGain from './scaleGain'

const FLIP_INDEX: number = 3

interface Alteration {
    flipHarmonically?: boolean,
    gainScalar?: Scalar,
    pitchIndexOffset?: Offset,
}

const alterSegmentParts: (segment: Segment, alterations: Alteration[]) => Segment =
    (segment: Segment, alterations: Alteration[]): Segment => {
        const alteredSegment: Segment = []
        segment.forEach((part: Part, index: number): void => {
            let alteredPart: Part = part
            const {flipHarmonically, gainScalar, pitchIndexOffset} = alterations[index]

            if (pitchIndexOffset) {
                alteredPart = offsetPitchIndex(alteredPart, pitchIndexOffset)
            }

            if (gainScalar) {
                alteredPart = scaleGain(alteredPart, gainScalar)
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
