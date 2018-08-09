import sequence from '../../../../src/utilities/sequence'
import { getYaosNotes } from '../notes/yaosNotes'
import { Part } from '../types'
import {
    BarDuration,
    YaosBlockResolution,
    YaosBlockStrategy,
    YaosRendering,
} from '../zdaubyaosTypes'

const almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart: Part = sequence([
    getYaosNotes(
        YaosBlockResolution.MIDIRREG,
        YaosBlockStrategy.UMOWCHUWOWIEST,
        BarDuration.FIFTEEN,
        YaosRendering.FALL,
    ),
    getYaosNotes(
        YaosBlockResolution.MIDIRREG,
        YaosBlockStrategy.UMOWCHUWOWIEST,
        BarDuration.FIFTEEN,
        YaosRendering.FALL,
    ),
    getYaosNotes(
        YaosBlockResolution.MIDIRREG,
        YaosBlockStrategy.INAIDJIYAIOUZD,
        BarDuration.FIFTEEN,
        YaosRendering.FALL,
    ),
    getYaosNotes(
        YaosBlockResolution.HIGHREG,
        YaosBlockStrategy.INAIDJIYAIOUZD,
        BarDuration.FIFTEEN,
        YaosRendering.FALL,
    ),
    getYaosNotes(
        YaosBlockResolution.LOWREG,
        YaosBlockStrategy.INAIDJIYAIOUZD,
        BarDuration.FIFTEEN,
        YaosRendering.FALL,
    ),
    getYaosNotes(
        YaosBlockResolution.HIGHREG,
        YaosBlockStrategy.INAIDJIYAIOUZD,
        BarDuration.FIFTEEN,
        YaosRendering.FALL,
    ),
    getYaosNotes(
        YaosBlockResolution.LOWREG,
        YaosBlockStrategy.INAIDJIYAIOUZD,
        BarDuration.FIFTEEN,
        YaosRendering.FALL,
    ),
    getYaosNotes(
        YaosBlockResolution.MIDIRREG,
        YaosBlockStrategy.UMOWCHUWOWIEST,
        BarDuration.TWENTYFOUR,
        YaosRendering.FALL,
    ),
    getYaosNotes(
        YaosBlockResolution.MIDIRREG,
        YaosBlockStrategy.INAIDJIYAIOUZD,
        BarDuration.TWENTYFOUR,
        YaosRendering.FALL,
    ),
])

export {
    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
}
