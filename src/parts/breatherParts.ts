// tslint:disable:align

import rest from '../../../../src/rest'
import { backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { inaiiiVarietyNotes } from '../notes/yaosNotes'
import { Part } from '../types'

const breatherRestPart: Part = rest(24)
const breatherSpringPart: Part = getYaosNotes({
    blockresolution: 'lowregular',
    blockstrategy: 'inaidjiyaiouzd',
    duration: 'twentyfour',
    rendering: 'spring',
})
const breatherSummerPart: Part = getYaosNotes({
    blockresolution: 'lowregular',
    blockstrategy: 'inaidjiyaiouzd',
    duration: 'twentyfour',
    rendering: 'summer',
})
const breatherFallPart: Part = backboneTwentyfourCNotes
const breatherVarietyPart: Part = inaiiiVarietyNotes
const breatherSpringAltPart: Part = getYaosNotes({
    blockresolution: 'highregular',
    blockstrategy: 'inaidjiyaiouzd',
    duration: 'twentyfour',
    rendering: 'spring',
})

export {
    breatherRestPart,
    breatherSpringPart,
    breatherSummerPart,
    breatherFallPart,
    breatherVarietyPart,
    breatherSpringAltPart,
}
