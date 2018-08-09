import sequence from '../../../../src/utilities/sequence'
import { getYaosNotes } from '../notes/yaosNotes'
import { Part } from '../types'
import { BarDuration, YaosBlockStyle, YaosRendering } from '../zdaubyaosTypes'

const almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart: Part = sequence([
    getYaosNotes(YaosBlockStyle.CHUWOW, BarDuration.FIFTEEN, YaosRendering.FALL),
    getYaosNotes(YaosBlockStyle.CHUWOW, BarDuration.FIFTEEN, YaosRendering.FALL),
    getYaosNotes(YaosBlockStyle.DJIYAI, BarDuration.FIFTEEN, YaosRendering.FALL),
    getYaosNotes(YaosBlockStyle.OUZD, BarDuration.FIFTEEN, YaosRendering.FALL),
    getYaosNotes(YaosBlockStyle.INAI, BarDuration.FIFTEEN, YaosRendering.FALL),
    getYaosNotes(YaosBlockStyle.OUZD, BarDuration.FIFTEEN, YaosRendering.FALL),
    getYaosNotes(YaosBlockStyle.INAI, BarDuration.FIFTEEN, YaosRendering.FALL),
    getYaosNotes(YaosBlockStyle.CHUWOW, BarDuration.TWENTYFOUR, YaosRendering.FALL),
    getYaosNotes(YaosBlockStyle.DJIYAI, BarDuration.TWENTYFOUR, YaosRendering.FALL),
])

export {
    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
}
