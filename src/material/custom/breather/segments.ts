import { Segment } from '@musical-patterns/pattern'
import { negative, to } from '@musical-patterns/utilities'
import { buildSegment } from '../../segments'
import { BreatherContourWholes, BreatherSegments } from './types'
import { buildBreatherContourWholes } from './wholes'

const buildBreatherSegments: () => BreatherSegments =
    (): BreatherSegments => {
        const breatherContourWholes: BreatherContourWholes = buildBreatherContourWholes()

        const spring: Segment = buildSegment(
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

        const summer: Segment = buildSegment(
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

        const doubleFallWhichIsGoodIntroForJig: Segment = buildSegment(
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

        const springAltNiceAsABreatherToABreather: Segment = buildSegment(
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

        const varietyQuiteTheReveille: Segment = buildSegment(
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
    buildBreatherSegments,
}
