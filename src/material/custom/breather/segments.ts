import { Scale, Segment } from '@musical-patterns/material'
import { Amplitude, as, negative, Ordinal, Scalar } from '@musical-patterns/utilities'
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
                { gainScalar: as.NormalScalar<Amplitude>(0.5), scaleIndex: as.Ordinal<Scale>(0) },
                { scaleIndex: as.Ordinal<Scale>(1) },
                { scaleIndex: as.Ordinal<Scale>(2) },
            ],
        )

        const summer: Segment = computeSegment(
            [
                breatherContourWholes.rest,
                breatherContourWholes.summer,
                breatherContourWholes.rest,
            ],
            [
                { scaleIndex: as.Ordinal<Scale>(0) },
                { gainScalar: as.NormalScalar<Amplitude>(0.5), scaleIndex: as.Ordinal<Scale>(4) },
                { scaleIndex: as.Ordinal<Scale>(2) },
            ],
        )

        const doubleFallWhichIsGoodIntroForJig: Segment = computeSegment(
            [
                breatherContourWholes.doubleRest,
                breatherContourWholes.doubleRest,
                breatherContourWholes.doubleFall,
            ],
            [
                { scaleIndex: as.Ordinal<Scale>(0) },
                { scaleIndex: as.Ordinal<Scale>(1) },
                {
                    gainScalar: as.NormalScalar<Amplitude>(0.5),
                    pitchIndexTranslation: as.Translation<Ordinal<Scalar>>(negative(1)),
                    scaleIndex: as.Ordinal<Scale>(2),
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
                { scaleIndex: as.Ordinal<Scale>(0) },
                { gainScalar: as.NormalScalar<Amplitude>(0.5), scaleIndex: as.Ordinal<Scale>(1) },
                { scaleIndex: as.Ordinal<Scale>(2) },
            ],
        )

        const varietyQuiteTheReveille: Segment = computeSegment(
            [
                breatherContourWholes.variety,
                breatherContourWholes.variety,
                breatherContourWholes.variety,
            ],
            [
                { scaleIndex: as.Ordinal<Scale>(3) },
                { scaleIndex: as.Ordinal<Scale>(4) },
                { scaleIndex: as.Ordinal<Scale>(5) },
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
