// tslint:disable:align

import rest from '../../../../src/rest'
import repeat from '../../../../src/utilities/repeat'
import * as to from '../../../../src/utilities/to'
import { backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { inaiiiVarietyNotes } from '../notes/yaosNotes'
import { BarDuration, BlockResolution, BlockStrategy, Part, Rendering } from '../types'

const breatherRestPart: Part = rest(to.Time(24))
const breatherSpringPart: Part = getYaosNotes(
    BlockResolution.LOWREGULAR,
    BlockStrategy.INAIDJIYAIOUZD,
    BarDuration.TWENTYFOUR,
    Rendering.SPRING,
)
const breatherSummerPart: Part = getYaosNotes(
    BlockResolution.LOWREGULAR,
    BlockStrategy.INAIDJIYAIOUZD,
    BarDuration.TWENTYFOUR,
    Rendering.SUMMER,
)
const doubleBreatherFallPart: Part = repeat(backboneTwentyfourCNotes, 2)
const breatherVarietyPart: Part = inaiiiVarietyNotes
const breatherSpringAltPart: Part = getYaosNotes(
    BlockResolution.HIGHREGULAR,
    BlockStrategy.INAIDJIYAIOUZD,
    BarDuration.TWENTYFOUR,
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
