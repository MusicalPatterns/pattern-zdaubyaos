import repeat from '../../../../src/repeat'
import sequence from '../../../../src/sequence'
import { shiftyFifteenNotes, shiftyNotes, shiftyTwentyfourNotes, shiftyTwentyfourVariantNotes } from '../notes/shifty'
import { Season } from '../types'

const shiftyseasonA: Season = sequence([
    repeat(shiftyFifteenNotes, 3),
    repeat(shiftyTwentyfourNotes, 4),
    repeat(shiftyTwentyfourVariantNotes, 3),
])

const shiftyseasonB: Season = shiftyNotes

export {
    shiftyseasonA,
    shiftyseasonB,
}
