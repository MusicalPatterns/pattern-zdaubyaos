import rest from '../../../../src/rest'
import { backboneTwentyfourCNotes } from '../notes/backboneNotes'
import getYaosNotes from '../notes/getYaosNotes'
import { inaiiiVarietyNotes } from '../notes/yaosNotes'
import { Season } from '../types'

const breatherRest: Season = rest(24)
const breatherSpring: Season = getYaosNotes({
    blockresolution: 'lowregular',
    blockstrategy: 'inaidjiyaiouzd',
    duration: 'twentyfour',
    rendering: 'spring',
})
const breatherSummer: Season = getYaosNotes({
    blockresolution: 'lowregular',
    blockstrategy: 'inaidjiyaiouzd',
    duration: 'twentyfour',
    rendering: 'summer',
})
const breatherFall: Season = backboneTwentyfourCNotes
const breatherVariety: Season = inaiiiVarietyNotes
const breatherSpringAlt: Season = getYaosNotes({
    blockresolution: 'highregular',
    blockstrategy: 'inaidjiyaiouzd',
    duration: 'twentyfour',
    rendering: 'spring',
})

export {
    breatherRest,
    breatherSpring,
    breatherSummer,
    breatherFall,
    breatherVariety,
    breatherSpringAlt,
}
