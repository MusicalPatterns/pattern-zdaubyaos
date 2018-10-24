import { Scalar } from '../../../../src/utilities/nominalTypes'
import * as to from '../../../../src/utilities/to'
import buildSegment from '../notes/buildSegment'
import { SegmentsObject } from '../notes/types'
import { secretLongChordPart, shiftyAPart, shiftyBPart, totallyOutTherePart } from '../parts/otherParts'
import { Segment } from '../types'

const buildOtherSegments: (songDurationScalar: Scalar) => SegmentsObject =
    (songDurationScalar: Scalar): SegmentsObject => {
        const secretLongChordSegment: Segment = buildSegment(
            [
                secretLongChordPart,
                secretLongChordPart,
                secretLongChordPart,
            ],
            [
                { pitchIndexOffset: to.Offset(4), scaleIndex: to.Index(3), gainScalar: to.Scalar(0.8) },
                { pitchIndexOffset: to.Offset(6), scaleIndex: to.Index(4), gainScalar: to.Scalar(0.8) },
                { pitchIndexOffset: to.Offset(3), scaleIndex: to.Index(5), gainScalar: to.Scalar(0.8) },
            ],
            songDurationScalar,
        )

        const totallyOutThereIntroSegment: Segment = buildSegment(
            [
                totallyOutTherePart,
                totallyOutTherePart,
                totallyOutTherePart,
            ],
            [
                { pitchIndexOffset: to.Offset(2), scaleIndex: to.Index(0) },
                { pitchIndexOffset: to.Offset(-2), scaleIndex: to.Index(1) },
                { pitchIndexOffset: to.Offset(-3), scaleIndex: to.Index(2) },
            ],
            songDurationScalar,
        )

        const shiftySegment: Segment = buildSegment(
            [
                shiftyAPart,
                shiftyBPart,
                shiftyBPart,
            ],
            [
                { scaleIndex: to.Index(3) },
                { scaleIndex: to.Index(4) },
                { scaleIndex: to.Index(5) },
            ],
            songDurationScalar,
        )

        return {
            secretLongChordSegment,
            shiftySegment,
            totallyOutThereIntroSegment,
        }
    }

export {
    buildOtherSegments,
}
