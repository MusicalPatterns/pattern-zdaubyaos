import buildEntity from '../../src/buildEntity'
import buildVoice from '../../src/buildVoice'
import { harmonicSeriesPitches } from '../../src/pitches'
import { Entity } from '../../src/types'
import { dubparticularSeriesPitches, subparticularSeriesPitches } from './pitches'
import {
    zdaubyaosOneNotes,
    zdaubyaosThreeNotes,
    zdaubyaosTwoNotes,
} from './tracks'

const TO_AVOID_BLOW_OUT: number = 0.2

const zdaubyaosOne: Entity = buildEntity({
    notes: zdaubyaosOneNotes,
    pitches: subparticularSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

const zdaubyaosTwo: Entity = buildEntity({
    notes: zdaubyaosTwoNotes,
    pitches: dubparticularSeriesPitches,
    voice: buildVoice('sawtooth'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

const zdaubyaosThree: Entity = buildEntity({
    notes: zdaubyaosThreeNotes,
    pitches: harmonicSeriesPitches,
    voice: buildVoice('sine'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

export {
    zdaubyaosOne,
    zdaubyaosTwo,
    zdaubyaosThree,
}
