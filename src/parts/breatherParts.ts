// tslint:disable:align

import rest from '../../../../src/rest'
import repeat from '../../../../src/utilities/repeat'
import * as to from '../../../../src/utilities/to'
import getYaosNotes from '../notes/getYaosNotes'
import { backboneTwentyfourNotes } from '../notes/otherNotes'
import { inaiiiVarietyNotes } from '../notes/yaosNotes'
import { BarDuration, YaosBlockResolution, YaosBlockStrategy, Part, YaosRendering } from '../types'

const breatherRestPart: Part = rest(to.Time(24))
const breatherSpringPart: Part = getYaosNotes(
    YaosBlockResolution.LOWREGULAR,
    YaosBlockStrategy.INAIDJIYAIOUZD,
    BarDuration.TWENTYFOUR,
    YaosRendering.SPRING,
)
const breatherSummerPart: Part = getYaosNotes(
    YaosBlockResolution.LOWREGULAR,
    YaosBlockStrategy.INAIDJIYAIOUZD,
    BarDuration.TWENTYFOUR,
    YaosRendering.SUMMER,
)
const doubleBreatherFallPart: Part = repeat(backboneTwentyfourNotes, 2)
const breatherVarietyPart: Part = inaiiiVarietyNotes
const breatherSpringAltPart: Part = getYaosNotes(
    YaosBlockResolution.HIGHREGULAR,
    YaosBlockStrategy.INAIDJIYAIOUZD,
    BarDuration.TWENTYFOUR,
    YaosRendering.SPRING,
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
