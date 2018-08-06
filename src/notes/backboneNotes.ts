import {
    backboneFifteenA,
    backboneFifteenB,
    backboneFifteenC,
    backboneTwentyfourC,
    backboneTwentyfourE,
    backboneTwentyfourG,
} from '../contours/backboneContours'
import { glisNoteType } from '../noteTypes'
import { Notes } from '../types'

const backboneFifteenANotes: Notes = backboneFifteenA.map(glisNoteType)

const backboneFifteenBNotes: Notes = backboneFifteenB.map(glisNoteType)

const backboneFifteenCNotes: Notes = backboneFifteenC.map(glisNoteType)

const backboneTwentyfourCNotes: Notes = backboneTwentyfourC.map(glisNoteType)

const backboneTwentyfourENotes: Notes = backboneTwentyfourE.map(glisNoteType)

const backboneTwentyfourGNotes: Notes = backboneTwentyfourG.map(glisNoteType)

export {
    backboneFifteenANotes,
    backboneFifteenBNotes,
    backboneFifteenCNotes,
    backboneTwentyfourCNotes,
    backboneTwentyfourENotes,
    backboneTwentyfourGNotes,
}
