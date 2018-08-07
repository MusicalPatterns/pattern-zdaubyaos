// tslint:disable:align

import rest from '../../../../src/rest'
import repeat from '../../../../src/utilities/repeat'
import { backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { inaiiiVarietyNotes } from '../notes/yaosNotes'
import { Part } from '../types'

const breatherRestPart: Part = rest(24)
const breatherSpringPart: Part = getYaosNotes('lowregular', 'inaidjiyaiouzd', 'twentyfour', 'spring')
const breatherSummerPart: Part = getYaosNotes('lowregular', 'inaidjiyaiouzd', 'twentyfour', 'summer')
const doubleBreatherFallPart: Part = repeat(backboneTwentyfourCNotes, 2)
const breatherVarietyPart: Part = inaiiiVarietyNotes
const breatherSpringAltPart: Part = getYaosNotes('highregular', 'inaidjiyaiouzd', 'twentyfour', 'spring')
const doubleBreatherRestPart: Part = rest(48)

export {
    breatherRestPart,
    breatherSpringPart,
    breatherSummerPart,
    doubleBreatherFallPart,
    breatherVarietyPart,
    breatherSpringAltPart,
    doubleBreatherRestPart,
}
