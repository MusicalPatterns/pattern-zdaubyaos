// tslint:disable:align

import rest from '../../../../src/rest'
import repeat from '../../../../src/utilities/repeat'
import * as to from '../../../../src/utilities/to'
import { backboneTwentyfourNotes } from '../notes/otherNotes'
import { getYaosNotes, inaiiiVarietyNotes } from '../notes/yaosNotes'
import { Part } from '../types'
import { BarDuration, YaosBlockStyle, YaosRendering } from '../zdaubyaosTypes'

const breatherRestPart: Part = rest(to.Time(24))
const breatherSpringPart: Part = getYaosNotes(YaosBlockStyle.INAI, BarDuration.TWENTYFOUR, YaosRendering.SPRING)
const breatherSummerPart: Part = getYaosNotes(YaosBlockStyle.INAI, BarDuration.TWENTYFOUR, YaosRendering.SUMMER)
const doubleBreatherFallPart: Part = repeat(backboneTwentyfourNotes, 2)
const breatherVarietyPart: Part = inaiiiVarietyNotes
const breatherSpringAltPart: Part = getYaosNotes(YaosBlockStyle.OUZD, BarDuration.TWENTYFOUR, YaosRendering.SPRING)
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
