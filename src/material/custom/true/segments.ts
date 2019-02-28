// tslint:disable max-file-line-count

import { Segment } from '@musical-patterns/pattern'
import { negative, to } from '@musical-patterns/utilities'
import { buildSegment } from '../../segments'
import { TrueContourWholes, TrueSegments } from './types'
import { buildTrueContourWholes } from './wholes'

const buildTrueSegments: () => TrueSegments =
    (): TrueSegments => {
        const trueContourWholes: TrueContourWholes = buildTrueContourWholes()

        const springAllYaosUmowchuwowiest: Segment = buildSegment(
            [
                trueContourWholes.yaosUmowchuwowiestSpringToSummer,
                trueContourWholes.yaosUmowchuwowiestSpringToSummer,
                trueContourWholes.yaosUmowchuwowiestSpringToSummer,
            ],
            [
                { scaleIndex: to.Ordinal(0) },
                { scaleIndex: to.Ordinal(1) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const allYaosAllRhythmsAtOnce: Segment = buildSegment(
            [
                trueContourWholes.yaosUmowchuwowiestSpringToSummer,
                trueContourWholes.yaosUmowchuwowiestSummerToSpring,
                trueContourWholes.yaosInaidjiyaiouzdSummerToSpring,
            ],
            [
                { scaleIndex: to.Ordinal(3) },
                { scaleIndex: to.Ordinal(4) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const summerAllYaosUmowchuwowiestWithSomeHarmonicallyFlipped: Segment = buildSegment(
            [
                trueContourWholes.yaosUmowchuwowiestSummerToSpring,
                trueContourWholes.yaosUmowchuwowiestSummerToSpring,
                trueContourWholes.yaosUmowchuwowiestSummerToSpring,
            ],
            [
                { scaleIndex: to.Ordinal(3) },
                { scaleIndex: to.Ordinal(1) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const springWithZdaub: Segment = buildSegment(
            [
                trueContourWholes.zdaubGlis,
                trueContourWholes.yaosUmowchuwowiestSpringToSummer,
                trueContourWholes.zdaubTrem,
            ],
            [
                { scaleIndex: to.Ordinal(0) },
                { scaleIndex: to.Ordinal(1) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const summerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonically: Segment =
            buildSegment(
                [
                    trueContourWholes.yaosUmowchuwowiestSummerToSpring,
                    trueContourWholes.zdaubGlis,
                    trueContourWholes.zdaubGlisVariant,
                ],
                [
                    { scaleIndex: to.Ordinal(3), pitchIndexTranslation: to.Translation(2) },
                    { scaleIndex: to.Ordinal(1) },
                    { scaleIndex: to.Ordinal(2) },
                ],
            )

        const springySummerTotallyOutThere: Segment = buildSegment(
            [
                trueContourWholes.yaosSpringySummerStraightIntoZdaubInaidjiyaiouzd,
                trueContourWholes.zdaubGlis,
                trueContourWholes.yaosSpringySummerStraightIntoZdaubInaidjiyaiouzd,
            ],
            [
                { scaleIndex: to.Ordinal(0), pitchIndexTranslation: to.Translation(2) },
                { scaleIndex: to.Ordinal(1), pitchIndexTranslation: to.Translation(negative(2)) },
                { scaleIndex: to.Ordinal(2), pitchIndexTranslation: to.Translation(negative(3)) },
            ],
        )

        return {
            allYaosAllRhythmsAtOnce,
            springAllYaosUmowchuwowiest,
            springWithZdaub,
            springySummerTotallyOutThere,
            summerAllYaosUmowchuwowiestWithSomeHarmonicallyFlipped,
            summerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonically,
        }
    }

export {
    buildTrueSegments,
}
