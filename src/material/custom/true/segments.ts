// tslint:disable max-file-line-count

import { Scale, Segment } from '@musical-patterns/material'
import { as, negative, Ordinal, Scalar } from '@musical-patterns/utilities'
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
                { scaleIndex: as.Ordinal<Scale>(0) },
                { scaleIndex: as.Ordinal<Scale>(1) },
                { scaleIndex: as.Ordinal<Scale>(2) },
            ],
        )

        const allYaosAllRhythmsAtOnce: Segment = computeSegment(
            [
                trueContourWholes.yaosUmowchuwowiestSpringToSummer,
                trueContourWholes.yaosUmowchuwowiestSummerToSpring,
                trueContourWholes.yaosInaidjiyaiouzdSummerToSpring,
            ],
            [
                { scaleIndex: as.Ordinal<Scale>(3) },
                { scaleIndex: as.Ordinal<Scale>(4) },
                { scaleIndex: as.Ordinal<Scale>(2) },
            ],
        )

        const summerAllYaosUmowchuwowiestWithSomeHarmonicallyFlipped: Segment = computeSegment(
            [
                trueContourWholes.yaosUmowchuwowiestSummerToSpring,
                trueContourWholes.yaosUmowchuwowiestSummerToSpring,
                trueContourWholes.yaosUmowchuwowiestSummerToSpring,
            ],
            [
                { scaleIndex: as.Ordinal<Scale>(3) },
                { scaleIndex: as.Ordinal<Scale>(1) },
                { scaleIndex: as.Ordinal<Scale>(2) },
            ],
        )

        const springWithZdaub: Segment = computeSegment(
            [
                trueContourWholes.zdaubGlis,
                trueContourWholes.yaosUmowchuwowiestSpringToSummer,
                trueContourWholes.zdaubTrem,
            ],
            [
                { scaleIndex: as.Ordinal<Scale>(0) },
                { scaleIndex: as.Ordinal<Scale>(1) },
                { scaleIndex: as.Ordinal<Scale>(2) },
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
                    { scaleIndex: as.Ordinal<Scale>(3), pitchIndexTranslation: as.Translation<Ordinal<Scalar>>(2) },
                    { scaleIndex: as.Ordinal<Scale>(1) },
                    { scaleIndex: as.Ordinal<Scale>(2) },
                ],
            )

        const springySummerTotallyOutThere: Segment = computeSegment(
            [
                trueContourWholes.yaosSpringySummerStraightIntoZdaubInaidjiyaiouzd,
                trueContourWholes.zdaubGlis,
                trueContourWholes.yaosSpringySummerStraightIntoZdaubInaidjiyaiouzd,
            ],
            [
                {
                    pitchIndexTranslation: as.Translation<Ordinal<Scalar>>(2),
                    scaleIndex: as.Ordinal<Scale>(0),
                },
                {
                    pitchIndexTranslation: as.Translation<Ordinal<Scalar>>(negative(2)),
                    scaleIndex: as.Ordinal<Scale>(1),
                },
                {
                    pitchIndexTranslation: as.Translation<Ordinal<Scalar>>(negative(3)),
                    scaleIndex: as.Ordinal<Scale>(2),
                },
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
