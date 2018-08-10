// tslint:disable:align

import rest from '../../../../src/rest'
import repeat from '../../../../src/utilities/repeat'
import * as to from '../../../../src/utilities/to'
import { backboneTwentyfourNotes } from '../notes/otherNotes'
import { getZdaubyaosNotes, inaiiiVarietyNotes } from '../notes/zdaubyaosNotes'
import { Part } from '../types'
import { BarTarget, BlockStyle, Rendering } from '../zdaubyaosTypes'

const breatherRestPart: Part = rest(to.Time(24))
const breatherSpringPart: Part = getZdaubyaosNotes(
    BlockStyle.INAI,
    BarTarget.TWENTYFOUR,
    Rendering.SPRING,
)
const breatherSummerPart: Part = getZdaubyaosNotes(
    BlockStyle.INAI,
    BarTarget.TWENTYFOUR,
    Rendering.SUMMER,
)
const doubleBreatherFallPart: Part = repeat(backboneTwentyfourNotes, 2)
const breatherVarietyPart: Part = inaiiiVarietyNotes
const breatherSpringAltPart: Part = getZdaubyaosNotes(
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
