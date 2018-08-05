import sequence from '../../../src/sequence'
import { Note } from '../../../src/types'
import {
    rightNumberOfBackboneNotes,
    setOfBackboneHigherAndHigherNotes, setOfBackboneHigherNotes,
    setOfBackboneNotes,
    shiftedRhythmNotes,
    umowchuwowiestAltNotes,
    umowchuwowiestDoubleAltNotes,
    umowchuwowiestNotes,
} from './compoundNotes'
import {
    backboneTwentyfourNotes,
    shiftedSingSongNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseInbetweenNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotesDelayedHarmonicNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseUmowchuwowiestNotes,
    umowwwAltAndNotNotes,
    umowwwAltNotes,
    umowwwNotes,
    umowwwRestNotes,
} from './notes'

const zdaubyaosOneNotes: Note[] = sequence([
    // Season 1
    umowwwNotes,
    umowchuwowiestNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotes,
    // Season 2
    umowwwRestNotes,
    umowchuwowiestAltNotes,
    umowchuwowiestAltNotes,
    umowchuwowiestDoubleAltNotes,
    // Season 3
    umowwwRestNotes,
    rightNumberOfBackboneNotes,
    rightNumberOfBackboneNotes,
    shiftedRhythmNotes,
    // Season 4
    umowwwRestNotes,
    umowchuwowiestNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseUmowchuwowiestNotes,
    setOfBackboneHigherAndHigherNotes,
])
const zdaubyaosTwoNotes: Note[] = sequence([
    // Season 1
    umowwwRestNotes,
    umowchuwowiestNotes,
    umowchuwowiestNotes,
    // Season 2
    umowwwAltNotes,
    umowchuwowiestAltNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotes,
    umowchuwowiestDoubleAltNotes,
    // Season 3
    umowwwRestNotes,
    rightNumberOfBackboneNotes,
    rightNumberOfBackboneNotes,
    shiftedSingSongNotes,
    // Season 4
    umowwwRestNotes,
    umowchuwowiestAltNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseInbetweenNotes,
    setOfBackboneNotes,
])
const zdaubyaosThreeNotes: Note[] = sequence([
    // Season 1
    umowwwRestNotes,
    umowchuwowiestNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseUmowchuwowiestNotes,
    // Season 2
    umowwwRestNotes,
    umowchuwowiestAltNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotesDelayedHarmonicNotes,
    umowchuwowiestDoubleAltNotes,
    // Season 3
    backboneTwentyfourNotes,
    rightNumberOfBackboneNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseInbetweenNotes,
    shiftedSingSongNotes,
    // Season 4
    umowwwAltAndNotNotes,
    umowchuwowiestDoubleAltNotes,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotes,
    setOfBackboneHigherNotes,
])

export {
    zdaubyaosOneNotes,
    zdaubyaosTwoNotes,
    zdaubyaosThreeNotes,
}
