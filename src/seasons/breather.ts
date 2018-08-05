import rest from '../../../../src/rest'
import { backboneTwentyfourCNotes } from '../notes/backbone'
import { inaiiiAlternatingspringandsummerNotes, inaiiiSpringNotes, inaiiiSummerNotes } from '../notes/yaosTwentyfour'
import { Season } from '../types'

const breatherRest: Season = rest(24)
const breatherSpring: Season = inaiiiSpringNotes
const breatherSummer: Season = inaiiiSummerNotes
const breatherFall: Season = backboneTwentyfourCNotes
const breatherWinter: Season = inaiiiAlternatingspringandsummerNotes

export {
    breatherRest,
    breatherSpring,
    breatherSummer,
    breatherFall,
    breatherWinter,
}
