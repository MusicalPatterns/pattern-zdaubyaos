// tslint:disable:align

import rest from '../../../../src/rest'
import adjustGain from '../alterations/adjustGain'
import adjustPitchIndex from '../alterations/adjustPitchIndex'
import { backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { inaiiiVarietyNotes } from '../notes/yaosNotes'
import { Part } from '../types'

const breatherRestPart: Part = rest(24)
const breatherSpringPart: Part = adjustGain(getYaosNotes({
    blockresolution: 'lowregular',
    blockstrategy: 'inaidjiyaiouzd',
    duration: 'twentyfour',
    rendering: 'spring',
}), 0.5)
const breatherSummerPart: Part = adjustGain(getYaosNotes({
    blockresolution: 'lowregular',
    blockstrategy: 'inaidjiyaiouzd',
    duration: 'twentyfour',
    rendering: 'summer',
}), 0.5)
const breatherFallPart: Part = adjustPitchIndex(adjustGain(backboneTwentyfourCNotes, 0.5), -1)
const breatherVarietyPart: Part = adjustGain(inaiiiVarietyNotes, 1.5)
const breatherSpringAltPart: Part = adjustGain(getYaosNotes({
    blockresolution: 'highregular',
    blockstrategy: 'inaidjiyaiouzd',
    duration: 'twentyfour',
    rendering: 'spring',
}), 0.5)

export {
    breatherRestPart,
    breatherSpringPart,
    breatherSummerPart,
    breatherFallPart,
    breatherVarietyPart,
    breatherSpringAltPart,
}
