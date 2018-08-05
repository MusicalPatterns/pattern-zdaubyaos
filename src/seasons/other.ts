import repeat from '../../../../src/repeat'
import sequence from '../../../../src/sequence'
import { backboneFifteenANotes, backboneTwentyfourCNotes } from '../notes/backbone'
import { Season } from '../types'

const trueseasonYetOfBackbone: Season = sequence([
    repeat(backboneFifteenANotes, 8),
    repeat(backboneTwentyfourCNotes, 4),
])

export {
    trueseasonYetOfBackbone,
}
