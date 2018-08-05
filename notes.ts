import { Note } from '../../src/types'
import {
    backboneFifteen,
    backboneFifteenHigher,
    backboneFifteenHigherAndHigher,
    backboneFifteenShiftedInspired,
    backboneTwentyfour,
    backboneTwentyfourHigher,
    backboneTwentyfourHigherAndHigher,
    backboneTwentyfourShiftedInspired,
    backboneTwentyfourShiftedInspiredAlt,
} from './contours/backbones'
import {
    shiftedSingSong,
} from './contours/other'
import {
    stepwiseForUmowchuwowiestCrossedWithStepwiseInbetween,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwise,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotesDelayedHarmonic,
    stepwiseForUmowchuwowiestCrossedWithStepwiseUmowchuwowiest,
} from './contours/singSong'
import {
    umowww,
    umowwwAlt,
    umowwwAltAndNot,
    umowwwRest,
} from './contours/twentyfour'
import { inbetweenNoteType, stepwiseForUmowchuwowiestNoteType, umowchuwowiestNoteType } from './noteTypes'

const umowwwNotes: Note[] = umowww.map(umowchuwowiestNoteType)

const umowwwAltNotes: Note[] = umowwwAlt.map(umowchuwowiestNoteType)

const umowwwAltAndNotNotes: Note[] = umowwwAltAndNot.map(umowchuwowiestNoteType)

const umowwwRestNotes: Note[] = umowwwRest.map(umowchuwowiestNoteType)

const stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotes: Note[] =
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwise.map(stepwiseForUmowchuwowiestNoteType)

const stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotesDelayedHarmonicNotes: Note[] =
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotesDelayedHarmonic.map(stepwiseForUmowchuwowiestNoteType)

const stepwiseForUmowchuwowiestCrossedWithStepwiseInbetweenNotes: Note[] =
    stepwiseForUmowchuwowiestCrossedWithStepwiseInbetween.map(inbetweenNoteType)

const stepwiseForUmowchuwowiestCrossedWithStepwiseUmowchuwowiestNotes: Note[] =
    stepwiseForUmowchuwowiestCrossedWithStepwiseUmowchuwowiest.map(umowchuwowiestNoteType)

const shiftedSingSongNotes: Note[] = shiftedSingSong.map(stepwiseForUmowchuwowiestNoteType)

const backboneFifteenNotes: Note[] = backboneFifteen.map(stepwiseForUmowchuwowiestNoteType)

const backboneTwentyfourNotes: Note[] = backboneTwentyfour.map(stepwiseForUmowchuwowiestNoteType)

const backboneFifteenShiftedInspiredNotes: Note[] =
    backboneFifteenShiftedInspired.map(stepwiseForUmowchuwowiestNoteType)

const backboneTwentyfourShiftedInspiredNotes: Note[] =
    backboneTwentyfourShiftedInspired.map(stepwiseForUmowchuwowiestNoteType)

const backboneTwentyfourShiftedInspiredAltNotes: Note[] =
    backboneTwentyfourShiftedInspiredAlt.map(stepwiseForUmowchuwowiestNoteType)

const backboneFifteenHigherNotes: Note[] =
    backboneFifteenHigher.map(stepwiseForUmowchuwowiestNoteType)

const backboneFifteenHigherAndHigherNotes: Note[] =
    backboneFifteenHigherAndHigher.map(stepwiseForUmowchuwowiestNoteType)

const backboneTwentyfourHigherNotes: Note[] =
    backboneTwentyfourHigher.map(stepwiseForUmowchuwowiestNoteType)

const backboneTwentyfourHigherAndHigherNotes: Note[] =
    backboneTwentyfourHigherAndHigher.map(stepwiseForUmowchuwowiestNoteType)

export {
    umowwwNotes,
    umowwwAltNotes,
    umowwwAltAndNotNotes,
    umowwwRestNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotesDelayedHarmonicNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseInbetweenNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseUmowchuwowiestNotes,
    shiftedSingSongNotes,
    backboneTwentyfourNotes,
    backboneFifteenNotes,
    backboneFifteenHigherNotes,
    backboneTwentyfourHigherNotes,
    backboneFifteenHigherAndHigherNotes,
    backboneTwentyfourHigherAndHigherNotes,
    backboneFifteenShiftedInspiredNotes,
    backboneTwentyfourShiftedInspiredNotes,
    backboneTwentyfourShiftedInspiredAltNotes,
}
