import repeat from '../../../../src/utilities/repeat'
import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import getYaosNotes from '../notes/getYaosNotes'
import {
    polyrhythmicAscentANotes,
    polyrhythmicAscentBNotes,
    polyrhythmicAscentCNotes,
    secretLongChordNotes,
} from '../notes/otherNotes'
import { BarDuration, BlockResolution, BlockStrategy, Part, Rendering } from '../types'

const experimentWithIestttPart: Part = sequence([
    getYaosNotes(BlockResolution.HIGHREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.TWENTYFOUR, Rendering.FALL),
    getYaosNotes(BlockResolution.HIGHREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.TWENTYFOUR, Rendering.SPRING),
    getYaosNotes(BlockResolution.HIGHREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.TWENTYFOUR, Rendering.SUMMER),
])
const experimentWithUmowwwPart: Part = sequence([
    getYaosNotes(BlockResolution.LOWREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.TWENTYFOUR, Rendering.FALL),
    getYaosNotes(BlockResolution.LOWREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.TWENTYFOUR, Rendering.SPRING),
    getYaosNotes(BlockResolution.LOWREGULAR, BlockStrategy.UMOWCHUWOWIEST, BarDuration.TWENTYFOUR, Rendering.SUMMER),
])

const polyrhythmicYaosFifteenPart: Part = sequence([
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR,
        BlockStrategy.INAIDJIYAIOUZD,
        BarDuration.FIFTEEN,
        Rendering.SUMMER,
    ),         8),
])
const polyrhythmicYaosTwentyfourPart: Part = sequence([
    repeatCall(() => getYaosNotes(
        BlockResolution.MIDIRREGULAR,
        BlockStrategy.UMOWCHUWOWIEST,
        BarDuration.TWENTYFOUR,
        Rendering.SUMMERY_SPRING,
    ),         5),
])

const polyrhythmicAscentAPart: Part = polyrhythmicAscentANotes
const polyrhythmicAscentBPart: Part = polyrhythmicAscentBNotes
const polyrhythmicAscentCPart: Part = polyrhythmicAscentCNotes

const secretLongChordPart: Part = secretLongChordNotes

const totallyOutTherePart: Part = repeat(
    getYaosNotes(
        BlockResolution.MIDIRREGULAR,
        BlockStrategy.INAIDJIYAIOUZD,
        BarDuration.FIFTEEN,
        Rendering.SPRINGY_SUMMER,
    ).slice(0, 8),
    3,
)

export {
    experimentWithIestttPart,
    experimentWithUmowwwPart,
    polyrhythmicYaosFifteenPart,
    polyrhythmicYaosTwentyfourPart,
    polyrhythmicAscentAPart,
    polyrhythmicAscentBPart,
    polyrhythmicAscentCPart,
    secretLongChordPart,
    totallyOutTherePart,
}
