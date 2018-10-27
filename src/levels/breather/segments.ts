import { DictionaryOf, Scalar, to } from '../../../../../src'
import { buildSegment } from '../../notes'
import { Segment } from '../../types'
import { buildBreatherParts } from './parts'

const buildBreatherSegments: (songDurationScalar: Scalar) => DictionaryOf<Segment> =
    (songDurationScalar: Scalar): DictionaryOf<Segment> => {
        const {
            breatherRestPart,
            breatherSpringAltPart,
            breatherSpringPart,
            breatherSummerPart,
            breatherVarietyPart,
            doubleBreatherFallPart,
            doubleBreatherRestPart,
        } = buildBreatherParts()

        const breatherSpringSegment: Segment = buildSegment(
            [
                breatherSpringPart,
                breatherRestPart,
                breatherRestPart,
            ],
            [
                { gainScalar: to.Scalar(0.5), scaleIndex: to.Index(0) },
                { scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(2) },
            ],
            songDurationScalar,
        )

        const breatherSummerSegment: Segment = buildSegment(
            [
                breatherRestPart,
                breatherSummerPart,
                breatherRestPart,
            ],
            [
                { scaleIndex: to.Index(0) },
                { gainScalar: to.Scalar(0.5), scaleIndex: to.Index(4) },
                { scaleIndex: to.Index(2) },
            ],
            songDurationScalar,
        )

        const doubleBreatherFallWhichIsGoodIntroForJigSegment: Segment = buildSegment(
            [
                doubleBreatherRestPart,
                doubleBreatherRestPart,
                doubleBreatherFallPart,
            ],
            [
                { scaleIndex: to.Index(0) },
                { scaleIndex: to.Index(1) },
                { gainScalar: to.Scalar(0.5), pitchIndexOffset: to.Offset(-1), scaleIndex: to.Index(2) },
            ],
            songDurationScalar,
        )

        const breatherSpringAltNiceAsABreatherToABreatherSegment: Segment = buildSegment(
            [
                breatherRestPart,
                breatherSpringAltPart,
                breatherRestPart,
            ],
            [
                { scaleIndex: to.Index(0) },
                { gainScalar: to.Scalar(0.5), scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(2) },
            ],
            songDurationScalar,
        )

        const breatherVarietyQuiteTheReveilleSegment: Segment = buildSegment(
            [
                breatherVarietyPart,
                breatherVarietyPart,
                breatherVarietyPart,
            ],
            [
                { scaleIndex: to.Index(3) },
                { scaleIndex: to.Index(4) },
                { scaleIndex: to.Index(5) },
            ],
            songDurationScalar,
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
