// tslint:disable:align

import { repeat, to } from '../../../../../src'
import { rest } from '../../rest'
import { BarTarget, BlockStyle, Part, Rendering } from '../../types'
import { backboneTwentyfourContour } from '../other'
import { getZdaubyaosContours, inaiiiVarietyContour } from '../true'

const breatherRestPart: Part = rest(to.Index(24))
const breatherSpringPart: Part = getZdaubyaosContours(
    BlockStyle.INAI,
    BarTarget.TWENTYFOUR,
    Rendering.SPRING,
)
const breatherSummerPart: Part = getZdaubyaosContours(
    BlockStyle.INAI,
    BarTarget.TWENTYFOUR,
    Rendering.SUMMER,
)
const doubleBreatherFallPart: Part = repeat(backboneTwentyfourContour, to.Count(2))
const breatherVarietyPart: Part = inaiiiVarietyContour
const breatherSpringAltPart: Part = getZdaubyaosContours(
    BlockStyle.OUZD,
    BarTarget.TWENTYFOUR,
    Rendering.SPRING,
)
const doubleBreatherRestPart: Part = rest(to.Index(48))

export {
    breatherRestPart,
    breatherSpringPart,
    breatherSummerPart,
    doubleBreatherFallPart,
    breatherVarietyPart,
    breatherSpringAltPart,
    doubleBreatherRestPart,
}
