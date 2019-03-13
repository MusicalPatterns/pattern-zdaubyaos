import { Segment } from '@musical-patterns/pattern'
import { negative, to } from '@musical-patterns/utilities'
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
                { gainScalar: to.Scalar(to.Amplitude(0.5)), scaleIndex: to.Ordinal(0) },
                { scaleIndex: to.Ordinal(1) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const summer: Segment = computeSegment(
            [
                breatherContourWholes.rest,
                breatherContourWholes.summer,
                breatherContourWholes.rest,
            ],
            [
                { scaleIndex: to.Ordinal(0) },
                { gainScalar: to.Scalar(to.Amplitude(0.5)), scaleIndex: to.Ordinal(4) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const doubleFallWhichIsGoodIntroForJig: Segment = computeSegment(
            [
                breatherContourWholes.doubleRest,
                breatherContourWholes.doubleRest,
                breatherContourWholes.doubleFall,
            ],
            [
                { scaleIndex: to.Ordinal(0) },
                { scaleIndex: to.Ordinal(1) },
                {
                    gainScalar: to.Scalar(to.Amplitude(0.5)),
                    pitchIndexTranslation: to.Translation(negative(1)),
                    scaleIndex: to.Ordinal(2),
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
                { scaleIndex: to.Ordinal(0) },
                { gainScalar: to.Scalar(to.Amplitude(0.5)), scaleIndex: to.Ordinal(1) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const varietyQuiteTheReveille: Segment = computeSegment(
            [
                breatherContourWholes.variety,
                breatherContourWholes.variety,
                breatherContourWholes.variety,
            ],
            [
                { scaleIndex: to.Ordinal(3) },
                { scaleIndex: to.Ordinal(4) },
                { scaleIndex: to.Ordinal(5) },
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
