// tslint:disable:max-file-line-count

import { DictionaryOf, Scalar, to } from '../../../../../src'
import { buildSegment } from '../../notes'
import { Segment } from '../../types'
import { buildTrueParts } from './parts'

const buildTrueSegments: (songDurationScalar: Scalar) => DictionaryOf<Segment> =
    (songDurationScalar: Scalar): DictionaryOf<Segment> => {
        const {
            trueYaosInaidjiyaiouzdSummerToSpringPart,
            trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
            trueYaosUmowchuwowiestSpringToSummerPart,
            trueYaosUmowchuwowiestSummerToSpringPart,
            trueZdaubGlisPart,
            trueZdaubGlisVariantPart,
            trueZdaubTremPart,
        } = buildTrueParts()

        const trueSpringAllYaosUmowchuwowiestSegment: Segment = buildSegment(
            [
                trueYaosUmowchuwowiestSpringToSummerPart,
                trueYaosUmowchuwowiestSpringToSummerPart,
                trueYaosUmowchuwowiestSpringToSummerPart,
            ],
            [
                { scaleIndex: to.Index(0) },
                { scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(2) },
            ],
            songDurationScalar,
        )

        const trueAllYaosAllRhythmsAtOnceSegment: Segment = buildSegment(
            [
                trueYaosUmowchuwowiestSpringToSummerPart,
                trueYaosUmowchuwowiestSummerToSpringPart,
                trueYaosInaidjiyaiouzdSummerToSpringPart,
            ],
            [
                { scaleIndex: to.Index(3) },
                { scaleIndex: to.Index(4) },
                { scaleIndex: to.Index(2) },
            ],
            songDurationScalar,
        )

        const trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment: Segment = buildSegment(
            [
                trueYaosUmowchuwowiestSummerToSpringPart,
                trueYaosUmowchuwowiestSummerToSpringPart,
                trueYaosUmowchuwowiestSummerToSpringPart,
            ],
            [
                { scaleIndex: to.Index(3) },
                { scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(2) },
            ],
            songDurationScalar,
        )

        const trueSpringWithZdaubSegment: Segment = buildSegment(
            [
                trueZdaubGlisPart,
                trueYaosUmowchuwowiestSpringToSummerPart,
                trueZdaubTremPart,
            ],
            [
                { scaleIndex: to.Index(0) },
                { scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(2) },
            ],
            songDurationScalar,
        )

        const trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment: Segment = buildSegment(
            [
                trueYaosUmowchuwowiestSummerToSpringPart,
                trueZdaubGlisPart,
                trueZdaubGlisVariantPart,
            ],
            [
                { scaleIndex: to.Index(3), pitchIndexOffset: to.Offset(2) },
                { scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(2) },
            ],
            songDurationScalar,
        )

        const trueSpringySummerTotallyOutThereSegment: Segment = buildSegment(
            [
                trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
                trueZdaubGlisPart,
                trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdPart,
            ],
            [
                { scaleIndex: to.Index(0), pitchIndexOffset: to.Offset(2) },
                { scaleIndex: to.Index(1), pitchIndexOffset: to.Offset(-2) },
                { scaleIndex: to.Index(2), pitchIndexOffset: to.Offset(-3) },
            ],
            songDurationScalar,
        )

        return {
            trueAllYaosAllRhythmsAtOnceSegment,
            trueSpringAllYaosUmowchuwowiestSegment,
            trueSpringWithZdaubSegment,
            trueSpringySummerTotallyOutThereSegment,
            trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
            trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
        }
    }

export {
    buildTrueSegments,
}
