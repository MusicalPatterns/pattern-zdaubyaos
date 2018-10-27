// tslint:disable:align

import { DictionaryOf, repeat, to } from '../../../../../src'
import { rest } from '../../rest'
import { BarTarget, BlockStyle, Part, Rendering } from '../../types'
import { buildAlmostTrueContours } from '../almostTrue'
import { buildOtherContours } from '../other'
import { getTrueContours } from '../true'

const buildBreatherParts: () => DictionaryOf<Part> =
    (): DictionaryOf<Part> => {
        const { inaiiiVarietyContour } = buildAlmostTrueContours()
        const { backboneTwentyfourContour } = buildOtherContours()

        const breatherRestPart: Part = rest(to.Index(24))
        const breatherSpringPart: Part = getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            Rendering.SPRING,
        )
        const breatherSummerPart: Part = getTrueContours(
            BlockStyle.INAI,
            BarTarget.TWENTYFOUR,
            Rendering.SUMMER,
        )
        const doubleBreatherFallPart: Part = repeat(backboneTwentyfourContour, to.Count(2))
        const breatherVarietyPart: Part = inaiiiVarietyContour
        const breatherSpringAltPart: Part = getTrueContours(
            BlockStyle.OUZD,
            BarTarget.TWENTYFOUR,
            Rendering.SPRING,
        )
        const doubleBreatherRestPart: Part = rest(to.Index(48))

        return {
            breatherRestPart,
            breatherSpringAltPart,
            breatherSpringPart,
            breatherSummerPart,
            breatherVarietyPart,
            doubleBreatherFallPart,
            doubleBreatherRestPart,
        }
    }

export {
    buildBreatherParts,
}
