import {
    inscapeTwentyfourBony,
    inscapeTwentyfourGlis,
    inscapeTwentyfourTrem,
    noodlingTwentyfourBony,
    noodlingTwentyfourGlis,
    noodlingTwentyfourTrem,
} from '../contours/zdaubTwentyfourContours'
import { glisNoteType, manualNoteType, tremNoteType } from '../noteTypes'
import { Notes } from '../types'

const inscapeTwentyfourGlisNotes: Notes = inscapeTwentyfourGlis.map(glisNoteType)
const noodlingTwentyfourGlisNotes: Notes = noodlingTwentyfourGlis.map(glisNoteType)
const inscapeTwentyfourTremNotes: Notes = inscapeTwentyfourTrem.map(tremNoteType)
const noodlingTwentyfourTremNotes: Notes = noodlingTwentyfourTrem.map(tremNoteType)
const inscapeTwentyfourBonyNotes: Notes = inscapeTwentyfourBony.map(manualNoteType)
const noodlingTwentyfourBonyNotes: Notes = noodlingTwentyfourBony.map(manualNoteType)

export {
    inscapeTwentyfourGlisNotes,
    noodlingTwentyfourGlisNotes,
    inscapeTwentyfourTremNotes,
    noodlingTwentyfourTremNotes,
    inscapeTwentyfourBonyNotes,
    noodlingTwentyfourBonyNotes,
}
