import rest from '../../../../src/rest'
import { backboneTwentyfourCNotes } from '../notes/backboneNotes'
import {
    inaiiiSpringNotes,
    inaiiiSummerNotes,
    inaiiiVarietyNotes,
    ouzdddSpringNotes,
} from '../notes/yaosTwentyfourNotes'
import { Season } from '../types'

const breatherRest: Season = rest(24)
const breatherSpring: Season = inaiiiSpringNotes
const breatherSummer: Season = inaiiiSummerNotes
const breatherFall: Season = backboneTwentyfourCNotes
const breatherVariety: Season = inaiiiVarietyNotes
const breatherSpringAlt: Season = ouzdddSpringNotes

export {
    breatherRest,
    breatherSpring,
    breatherSummer,
    breatherFall,
    breatherVariety,
    breatherSpringAlt,
}
