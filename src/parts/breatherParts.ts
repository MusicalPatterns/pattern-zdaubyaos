// tslint:disable:align

import rest from '../../../../src/rest'
import repeat from '../../../../src/utilities/repeat'
import * as to from '../../../../src/utilities/to'
import { backboneTwentyfourContour } from '../contours/otherContours'
import { getZdaubyaosContours, inaiiiVarietyContour } from '../contours/zdaubyaosContours'
import { Part } from '../types'
import { BarTarget, BlockStyle, Rendering } from '../zdaubyaosTypes'

const breatherRestPart: Part = rest(to.Time(24))
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
const doubleBreatherFallPart: Part = repeat(backboneTwentyfourContour, 2)
const breatherVarietyPart: Part = inaiiiVarietyContour
const breatherSpringAltPart: Part = getZdaubyaosContours(
    BlockStyle.OUZD,
    BarTarget.TWENTYFOUR,
    Rendering.SPRING,
)
const doubleBreatherRestPart: Part = rest(to.Time(48))

export {
    breatherRestPart,
    breatherSpringPart,
    breatherSummerPart,
    doubleBreatherFallPart,
    breatherVarietyPart,
    breatherSpringAltPart,
    doubleBreatherRestPart,
}
