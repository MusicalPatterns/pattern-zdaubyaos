import { DictionaryOf, to } from '@musical-patterns/shared'
import { Segment } from '../../../../../../patternMaterial'
import { buildSegment } from '../../../materials'
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
                { gainScalar: to.Scalar(0.5), scaleIndex: to.Index(0) },
                { scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(2) },
            ],
        )

        const breatherSummerSegment: Segment = buildSegment(
            [
                breatherRestContourWhole,
                breatherSummerContourWhole,
                breatherRestContourWhole,
            ],
            [
                { scaleIndex: to.Index(0) },
                { gainScalar: to.Scalar(0.5), scaleIndex: to.Index(4) },
                { scaleIndex: to.Index(2) },
            ],
        )

        const doubleBreatherFallWhichIsGoodIntroForJigSegment: Segment = buildSegment(
            [
                doubleBreatherRestContourWhole,
                doubleBreatherRestContourWhole,
                doubleBreatherFallContourWhole,
            ],
            [
                { scaleIndex: to.Index(0) },
                { scaleIndex: to.Index(1) },
                { gainScalar: to.Scalar(0.5), pitchIndexOffset: to.Offset(-1), scaleIndex: to.Index(2) },
            ],
        )

        const breatherSpringAltNiceAsABreatherToABreatherSegment: Segment = buildSegment(
            [
                breatherRestContourWhole,
                breatherSpringAltContourWhole,
                breatherRestContourWhole,
            ],
            [
                { scaleIndex: to.Index(0) },
                { gainScalar: to.Scalar(0.5), scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(2) },
            ],
        )

        const breatherVarietyQuiteTheReveilleSegment: Segment = buildSegment(
            [
                breatherVarietyContourWhole,
                breatherVarietyContourWhole,
                breatherVarietyContourWhole,
            ],
            [
                { scaleIndex: to.Index(3) },
                { scaleIndex: to.Index(4) },
                { scaleIndex: to.Index(5) },
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
