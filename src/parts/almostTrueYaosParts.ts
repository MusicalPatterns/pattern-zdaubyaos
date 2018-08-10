import sequence from '../../../../src/utilities/sequence'
import { getZdaubyaosNotes } from '../notes/zdaubyaosNotes'
import { Part } from '../types'
import { BarTarget, BlockStyle, Rendering } from '../zdaubyaosTypes'

const almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart: Part = sequence([
    getZdaubyaosNotes(BlockStyle.CHUWOW, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosNotes(BlockStyle.CHUWOW, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosNotes(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosNotes(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosNotes(BlockStyle.INAI, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosNotes(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosNotes(BlockStyle.INAI, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosNotes(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, Rendering.FALL),
    getZdaubyaosNotes(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, Rendering.FALL),
])

export {
    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
}
