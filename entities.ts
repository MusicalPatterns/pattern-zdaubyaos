import buildVoice from '../../src/buildVoice'
import {
    zdaubyaosOneNotes,
    zdaubyaosTwoNotes,
    zdaubyaosThreeNotes,
} from './notes'
import {dubparticularSeriesPitches, subparticularSeriesPitches} from './pitches'
import {harmonicSeriesPitches} from '../../src/pitches'

const zdaubyaosOne = {
    notes: zdaubyaosOneNotes,
    pitches: subparticularSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: .2,
    id: 10,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const zdaubyaosTwo = {
    notes: zdaubyaosTwoNotes,
    pitches: dubparticularSeriesPitches,
    voice: buildVoice('sawtooth'),
    voiceGain: .2,
    id: 14,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}
const zdaubyaosThree = {
    notes: zdaubyaosThreeNotes,
    pitches: harmonicSeriesPitches,
    voice: buildVoice('sine'),
    voiceGain: .2,
    id: 15,
    noteIndex: 0,
    nextOnset: 0,
    nextOffset: 0,
}

const zdaubyaos = [
    zdaubyaosOne,
    zdaubyaosTwo,
    zdaubyaosThree,
]

export {
    zdaubyaos,
}