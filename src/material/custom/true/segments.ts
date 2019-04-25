// tslint:disable max-file-line-count

import { Scale, Segment } from '@musical-patterns/material'
import { as, negative, Ordinal, Pitch, Scalar } from '@musical-patterns/utilities'
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
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(0) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2) },
            ],
        )

        const allYaosAllRhythmsAtOnce: Segment = computeSegment(
            [
                trueContourWholes.yaosUmowchuwowiestSpringToSummer,
                trueContourWholes.yaosUmowchuwowiestSummerToSpring,
                trueContourWholes.yaosInaidjiyaiouzdSummerToSpring,
            ],
            [
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(3) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(4) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2) },
            ],
        )

        const summerAllYaosUmowchuwowiestWithSomeHarmonicallyFlipped: Segment = computeSegment(
            [
                trueContourWholes.yaosUmowchuwowiestSummerToSpring,
                trueContourWholes.yaosUmowchuwowiestSummerToSpring,
                trueContourWholes.yaosUmowchuwowiestSummerToSpring,
            ],
            [
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(3) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2) },
            ],
        )

        const springWithZdaub: Segment = computeSegment(
            [
                trueContourWholes.zdaubGlis,
                trueContourWholes.yaosUmowchuwowiestSpringToSummer,
                trueContourWholes.zdaubTrem,
            ],
            [
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(0) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2) },
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
                    {
                        pitchIndexShift: as.Cardinal<Ordinal<Array<Scalar<Pitch>>>>(2),
                        scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(3),
                    },
                    { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1) },
                    { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2) },
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
                    pitchIndexShift: as.Cardinal<Ordinal<Array<Scalar<Pitch>>>>(2),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(0),
                },
                {
                    pitchIndexShift: as.Cardinal<Ordinal<Array<Scalar<Pitch>>>>(negative(2)),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1),
                },
                {
                    pitchIndexShift: as.Cardinal<Ordinal<Array<Scalar<Pitch>>>>(negative(3)),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2),
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
