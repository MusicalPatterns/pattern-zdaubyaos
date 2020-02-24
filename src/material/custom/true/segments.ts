// tslint:disable max-file-line-count

import { Scale, Segment } from '@musical-patterns/material'
import { as, negative, Pitch, Scalar, Thunk } from '@musical-patterns/utilities'
import { computeSegment } from '../../segment'
import { TrueContourWholes, TrueSegments } from './types'
import { thunkTrueContourWholes } from './wholes'

const thunkTrueSegments: Thunk<TrueSegments> =
    (): TrueSegments => {
        const trueContourWholes: TrueContourWholes = thunkTrueContourWholes()

        const springAllYaosUmowchuwowiest: Segment = computeSegment(
            [
                trueContourWholes.yaosUmowchuwowiestSpringToSummer,
                trueContourWholes.yaosUmowchuwowiestSpringToSummer,
                trueContourWholes.yaosUmowchuwowiestSpringToSummer,
            ],
            [
                {},
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

        const summerAllYaosUmowchuwowiestWithOneHarmonicallyFlipped: Segment = computeSegment(
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
                {},
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
                        pitchIndexShift: as.Transition<Array<Scalar<Pitch>>>(2),
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
                    pitchIndexShift: as.Transition<Array<Scalar<Pitch>>>(2),
                },
                {
                    pitchIndexShift: as.Transition<Array<Scalar<Pitch>>>(negative(2)),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1),
                },
                {
                    pitchIndexShift: as.Transition<Array<Scalar<Pitch>>>(negative(3)),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2),
                },
            ],
        )

        return {
            allYaosAllRhythmsAtOnce,
            springAllYaosUmowchuwowiest,
            springWithZdaub,
            springySummerTotallyOutThere,
            summerAllYaosUmowchuwowiestWithOneHarmonicallyFlipped,
            summerWithZdaubAndSeparationVariantBecomesPleasantlyGnarlyHarmonically,
        }
    }

export {
    thunkTrueSegments,
}
