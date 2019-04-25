import { Scale, Segment } from '@musical-patterns/material'
import { as, Gain, negative, Ordinal, Pitch, Scalar } from '@musical-patterns/utilities'
import { computeSegment } from '../../segment'
import { BreatherContourWholes, BreatherSegments } from './types'
import { computeBreatherContourWholes } from './wholes'

const computeBreatherSegments: () => BreatherSegments =
    (): BreatherSegments => {
        const breatherContourWholes: BreatherContourWholes = computeBreatherContourWholes()

        const spring: Segment = computeSegment(
            [
                breatherContourWholes.spring,
                breatherContourWholes.rest,
                breatherContourWholes.rest,
            ],
            [
                { gainScalar: as.UnitScalar<Gain>(0.5), scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(0) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2) },
            ],
        )

        const summer: Segment = computeSegment(
            [
                breatherContourWholes.rest,
                breatherContourWholes.summer,
                breatherContourWholes.rest,
            ],
            [
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(0) },
                { gainScalar: as.UnitScalar<Gain>(0.5), scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(4) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2) },
            ],
        )

        const doubleFallWhichIsGoodIntroForJig: Segment = computeSegment(
            [
                breatherContourWholes.doubleRest,
                breatherContourWholes.doubleRest,
                breatherContourWholes.doubleFall,
            ],
            [
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(0) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1) },
                {
                    gainScalar: as.UnitScalar<Gain>(0.5),
                    pitchIndexShift: as.Cardinal<Ordinal<Array<Scalar<Pitch>>>>(negative(1)),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2),
                },
            ],
        )

        const springAltNiceAsABreatherToABreather: Segment = computeSegment(
            [
                breatherContourWholes.rest,
                breatherContourWholes.springAlt,
                breatherContourWholes.rest,
            ],
            [
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(0) },
                { gainScalar: as.UnitScalar<Gain>(0.5), scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2) },
            ],
        )

        const varietyQuiteTheReveille: Segment = computeSegment(
            [
                breatherContourWholes.variety,
                breatherContourWholes.variety,
                breatherContourWholes.variety,
            ],
            [
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(3) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(4) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(5) },
            ],
        )

        return {
            doubleFallWhichIsGoodIntroForJig,
            spring,
            springAltNiceAsABreatherToABreather,
            summer,
            varietyQuiteTheReveille,
        }
    }

export {
    computeBreatherSegments,
}
