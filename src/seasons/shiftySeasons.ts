import repeat from '../../../../src/repeat'
import sequence from '../../../../src/sequence'
import {
    shiftyFifteenNotes,
    shiftyNotes,
    shiftyTwentyfourNotes,
    shiftyTwentyfourVariantNotes,
} from '../notes/shiftyNotes'
import { Season } from '../types'
import repeatCall from '../../../../src/repeatCall'

const shiftyseasonA: Season = sequence([
    repeatCall(() => shiftyFifteenNotes, 3),
    repeatCall(() => shiftyTwentyfourNotes, 4),
    repeatCall(() => shiftyTwentyfourVariantNotes, 3),
])

const shiftyseasonB: Season = shiftyNotes

export {
    shiftyseasonA,
    shiftyseasonB,
}
