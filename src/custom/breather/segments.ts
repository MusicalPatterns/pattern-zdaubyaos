import { Segment } from '@musical-patterns/pattern'
import { DictionaryOf, to } from '@musical-patterns/utilities'
import { buildSegment } from '../../material'
import { buildBreatherContourWholes } from './wholes'

const buildBreatherSegments: () => DictionaryOf<Segment> =
    (): DictionaryOf<Segment> => {
        const {
            breatherRestContourWhole,
            breatherSpringAltContourWhole,
            breatherSpringContourWhole,
            breatherSummerContourWhole,
            breatherVarietyContourWhole,
            doubleBreatherFallContourWhole,
            doubleBreatherRestContourWhole,
        } = buildBreatherContourWholes()

        const breatherSpringSegment: Segment = buildSegment(
            [
                breatherSpringContourWhole,
                breatherRestContourWhole,
                breatherRestContourWhole,
            ],
            [
                { gainScalar: to.Scalar(0.5), scaleIndex: to.Ordinal(0) },
                { scaleIndex: to.Ordinal(1) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const breatherSummerSegment: Segment = buildSegment(
            [
                breatherRestContourWhole,
                breatherSummerContourWhole,
                breatherRestContourWhole,
            ],
            [
                { scaleIndex: to.Ordinal(0) },
                { gainScalar: to.Scalar(0.5), scaleIndex: to.Ordinal(4) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const doubleBreatherFallWhichIsGoodIntroForJigSegment: Segment = buildSegment(
            [
                doubleBreatherRestContourWhole,
                doubleBreatherRestContourWhole,
                doubleBreatherFallContourWhole,
            ],
            [
                { scaleIndex: to.Ordinal(0) },
                { scaleIndex: to.Ordinal(1) },
                { gainScalar: to.Scalar(0.5), pitchIndexTranslation: to.Translation(-1), scaleIndex: to.Ordinal(2) },
            ],
        )

        const breatherSpringAltNiceAsABreatherToABreatherSegment: Segment = buildSegment(
            [
                breatherRestContourWhole,
                breatherSpringAltContourWhole,
                breatherRestContourWhole,
            ],
            [
                { scaleIndex: to.Ordinal(0) },
                { gainScalar: to.Scalar(0.5), scaleIndex: to.Ordinal(1) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const breatherVarietyQuiteTheReveilleSegment: Segment = buildSegment(
            [
                breatherVarietyContourWhole,
                breatherVarietyContourWhole,
                breatherVarietyContourWhole,
            ],
            [
                { scaleIndex: to.Ordinal(3) },
                { scaleIndex: to.Ordinal(4) },
                { scaleIndex: to.Ordinal(5) },
            ],
        )

        return {
            breatherSpringAltNiceAsABreatherToABreatherSegment,
            breatherSpringSegment,
            breatherSummerSegment,
            breatherVarietyQuiteTheReveilleSegment,
            doubleBreatherFallWhichIsGoodIntroForJigSegment,
        }
    }

export {
    buildBreatherSegments,
}
