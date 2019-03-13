// tslint:disable max-file-line-count

import { Segment } from '@musical-patterns/pattern'
import { negative, to } from '@musical-patterns/utilities'
import { computeSegment } from '../../segment'
import { TrueContourWholes, TrueSegments } from './types'
import { computeTrueContourWholes } from './wholes'

const computeTrueSegments: () => TrueSegments =
    (): TrueSegments => {
        const trueContourWholes: TrueContourWholes = computeTrueContourWholes()

        const springAllYaosUmowchuwowiest: Segment = computeSegment(
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

        const allYaosAllRhythmsAtOnce: Segment = computeSegment(
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

        const summerAllYaosUmowchuwowiestWithSomeHarmonicallyFlipped: Segment = computeSegment(
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

        const springWithZdaub: Segment = computeSegment(
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

        const summerWithZdaubAndSeparationVariantBecomesPleasantlyGnarlyHarmonically: Segment =
            computeSegment(
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

        const springySummerTotallyOutThere: Segment = computeSegment(
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
            summerWithZdaubAndSeparationVariantBecomesPleasantlyGnarlyHarmonically,
        }
    }

export {
    computeTrueSegments,
}
