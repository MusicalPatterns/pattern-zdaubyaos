import rest from '../../../../src/rest'
import { backboneTwentyfourCNotes } from '../notes/backboneNotes'
import { inaiiiVarietyNotes, yaosNotesByDurationBlocksThenRendering } from '../notes/yaosNotes'
import { Season } from '../types'

const breatherRest: Season = rest(24)
const breatherSpring: Season = yaosNotesByDurationBlocksThenRendering.twentyfour.inaiii.spring
const breatherSummer: Season = yaosNotesByDurationBlocksThenRendering.twentyfour.inaiii.summer
const breatherFall: Season = backboneTwentyfourCNotes
const breatherVariety: Season = inaiiiVarietyNotes
const breatherSpringAlt: Season = yaosNotesByDurationBlocksThenRendering.twentyfour.ouzddd.spring

export {
    breatherRest,
    breatherSpring,
    breatherSummer,
    breatherFall,
    breatherVariety,
    breatherSpringAlt,
}
