import sequence from '../../../../src/utilities/sequence'
import { getZdaubyaosContours } from '../contours/zdaubyaosContours'
import { Part } from '../types'
import { BarTarget, BlockStyle, Rendering } from '../zdaubyaosTypes'

const almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart: Part = sequence([
    getZdaubyaosContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.INAI, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.INAI, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, Rendering.FALL),
])

export {
    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
}
