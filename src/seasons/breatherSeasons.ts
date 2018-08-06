import rest from '../../../../src/rest'
import { backboneTwentyfourCNotes } from '../notes/backboneNotes'
import { inaiiiVarietyNotes, yaosTwentyfourNotesByBlocksThenRendering } from '../notes/yaosTwentyfourNotes'
import { Season } from '../types'

const breatherRest: Season = rest(24)
const breatherSpring: Season = yaosTwentyfourNotesByBlocksThenRendering.inaiii.spring
const breatherSummer: Season = yaosTwentyfourNotesByBlocksThenRendering.inaiii.summer
const breatherFall: Season = backboneTwentyfourCNotes
const breatherVariety: Season = inaiiiVarietyNotes
const breatherSpringAlt: Season = yaosTwentyfourNotesByBlocksThenRendering.ouzddd.spring

export {
    breatherRest,
    breatherSpring,
    breatherSummer,
    breatherFall,
    breatherVariety,
    breatherSpringAlt,
}
