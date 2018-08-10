import { Index, Offset, Scalar } from '../../../../src/utilities/nominalTypes'
import { Part, Segment } from '../types'
import applyScaleIndex from './applyScaleIndex'
import offsetPitchIndex from './offsetPitchIndex'
import scaleGain from './scaleGain'

interface Alteration {
    flipHarmonically?: boolean,
    gainScalar?: Scalar,
    pitchIndexOffset?: Offset,
    scaleIndex: Index,
}

const alterSegmentParts: (segment: Segment, alterations: Alteration[]) => Segment =
    (segment: Segment, alterations: Alteration[]): Segment =>
        segment.map((part: Part, index: number): Part => {
            let alteredPart: Part = part
            const {gainScalar, pitchIndexOffset, scaleIndex} = alterations[index]

            if (pitchIndexOffset) {
                alteredPart = offsetPitchIndex(alteredPart, pitchIndexOffset)
            }

            if (gainScalar) {
                alteredPart = scaleGain(alteredPart, gainScalar)
            }

            alteredPart = applyScaleIndex(alteredPart, scaleIndex)

            return alteredPart
        })

export default alterSegmentParts
