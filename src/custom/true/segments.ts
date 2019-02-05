// tslint:disable max-file-line-count

import { Segment } from '@musical-patterns/pattern'
import { DictionaryOf, to } from '@musical-patterns/utilities'
import { buildSegment } from '../../material'
import { buildTrueContourWholes } from './wholes'

const buildTrueSegments: () => DictionaryOf<Segment> =
    (): DictionaryOf<Segment> => {
        const {
            trueYaosInaidjiyaiouzdSummerToSpringContourWhole,
            trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdContourWhole,
            trueYaosUmowchuwowiestSpringToSummerContourWhole,
            trueYaosUmowchuwowiestSummerToSpringContourWhole,
            trueZdaubGlisContourWhole,
            trueZdaubGlisVariantContourWhole,
            trueZdaubTremContourWhole,
        } = buildTrueContourWholes()

        const trueSpringAllYaosUmowchuwowiestSegment: Segment = buildSegment(
            [
                trueYaosUmowchuwowiestSpringToSummerContourWhole,
                trueYaosUmowchuwowiestSpringToSummerContourWhole,
                trueYaosUmowchuwowiestSpringToSummerContourWhole,
            ],
            [
                { scaleIndex: to.Index(0) },
                { scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(2) },
            ],
        )

        const trueAllYaosAllRhythmsAtOnceSegment: Segment = buildSegment(
            [
                trueYaosUmowchuwowiestSpringToSummerContourWhole,
                trueYaosUmowchuwowiestSummerToSpringContourWhole,
                trueYaosInaidjiyaiouzdSummerToSpringContourWhole,
            ],
            [
                { scaleIndex: to.Index(3) },
                { scaleIndex: to.Index(4) },
                { scaleIndex: to.Index(2) },
            ],
        )

        const trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment: Segment = buildSegment(
            [
                trueYaosUmowchuwowiestSummerToSpringContourWhole,
                trueYaosUmowchuwowiestSummerToSpringContourWhole,
                trueYaosUmowchuwowiestSummerToSpringContourWhole,
            ],
            [
                { scaleIndex: to.Index(3) },
                { scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(2) },
            ],
        )

        const trueSpringWithZdaubSegment: Segment = buildSegment(
            [
                trueZdaubGlisContourWhole,
                trueYaosUmowchuwowiestSpringToSummerContourWhole,
                trueZdaubTremContourWhole,
            ],
            [
                { scaleIndex: to.Index(0) },
                { scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(2) },
            ],
        )

        const trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment: Segment =
            buildSegment(
                [
                    trueYaosUmowchuwowiestSummerToSpringContourWhole,
                    trueZdaubGlisContourWhole,
                    trueZdaubGlisVariantContourWhole,
                ],
                [
                    { scaleIndex: to.Index(3), pitchIndexOffset: to.Offset(2) },
                    { scaleIndex: to.Index(1) },
                    { scaleIndex: to.Index(2) },
                ],
            )

        const trueSpringySummerTotallyOutThereSegment: Segment = buildSegment(
            [
                trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdContourWhole,
                trueZdaubGlisContourWhole,
                trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdContourWhole,
            ],
            [
                { scaleIndex: to.Index(0), pitchIndexOffset: to.Offset(2) },
                { scaleIndex: to.Index(1), pitchIndexOffset: to.Offset(-2) },
                { scaleIndex: to.Index(2), pitchIndexOffset: to.Offset(-3) },
            ],
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
