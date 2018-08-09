import repeat from '../../../../src/utilities/repeat'
import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import {
    secretLongChordNotes,
    shiftyFifteenNotes,
    shiftyNotes,
    shiftyTwentyfourNotes,
    shiftyTwentyfourVariantNotes,
} from '../notes/otherNotes'
import { getYaosNotes } from '../notes/yaosNotes'
import { Part } from '../types'
import { BarDuration, YaosBlockResolution, YaosBlockStrategy, YaosRendering } from '../zdaubyaosTypes'

const secretLongChordPart: Part = secretLongChordNotes

const totallyOutTherePart: Part = repeat(
    getYaosNotes(
        YaosBlockResolution.MIDIRREG,
        YaosBlockStrategy.INAIDJIYAIOUZD,
        BarDuration.FIFTEEN,
        YaosRendering.SPRINGY_SUMMER,
    ).slice(0, 8),
    3,
)

const shiftyAPart: Part = sequence([
    repeatCall(() => shiftyFifteenNotes, 3),
    repeatCall(() => shiftyTwentyfourNotes, 4),
    repeatCall(() => shiftyTwentyfourVariantNotes, 3),
])

const shiftyBPart: Part = shiftyNotes

export {
    secretLongChordPart,
    totallyOutTherePart,
    shiftyAPart,
    shiftyBPart,
}
