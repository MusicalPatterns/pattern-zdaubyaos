// tslint:disable:align

import rest from '../../../../src/rest'
import adjustGain from '../adjustGain'
import { backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { inaiiiVarietyNotes } from '../notes/yaosNotes'
import { Season } from '../types'

const breatherRest: Season = rest(24)
const breatherSpring: Season = adjustGain(getYaosNotes({
    blockresolution: 'lowregular',
    blockstrategy: 'inaidjiyaiouzd',
    duration: 'twentyfour',
    rendering: 'spring',
}), 0.5)
const breatherSummer: Season = adjustGain(getYaosNotes({
    blockresolution: 'lowregular',
    blockstrategy: 'inaidjiyaiouzd',
    duration: 'twentyfour',
    rendering: 'summer',
}), 0.5)
const breatherFall: Season = adjustGain(backboneTwentyfourCNotes, 0.5)
const breatherVariety: Season = adjustGain(inaiiiVarietyNotes, 1.5)
const breatherSpringAlt: Season = adjustGain(getYaosNotes({
    blockresolution: 'highregular',
    blockstrategy: 'inaidjiyaiouzd',
    duration: 'twentyfour',
    rendering: 'spring',
}), 0.5)

export {
    breatherRest,
    breatherSpring,
    breatherSummer,
    breatherFall,
    breatherVariety,
    breatherSpringAlt,
}
