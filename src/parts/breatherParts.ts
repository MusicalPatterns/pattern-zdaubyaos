// tslint:disable:align

import rest from '../../../../src/rest'
import { backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { inaiiiVarietyNotes } from '../notes/yaosNotes'
import { Part } from '../types'

const breatherRestPart: Part = rest(24)
const breatherSpringPart: Part = getYaosNotes('lowregular', 'inaidjiyaiouzd', 'twentyfour', 'spring')
const breatherSummerPart: Part = getYaosNotes('lowregular', 'inaidjiyaiouzd', 'twentyfour', 'summer')
const breatherFallPart: Part = backboneTwentyfourCNotes
const breatherVarietyPart: Part = inaiiiVarietyNotes
const breatherSpringAltPart: Part = getYaosNotes('highregular', 'inaidjiyaiouzd', 'twentyfour', 'spring')

export {
    breatherRestPart,
    breatherSpringPart,
    breatherSummerPart,
    breatherFallPart,
    breatherVarietyPart,
    breatherSpringAltPart,
}
