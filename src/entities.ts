import buildEntity from '../../../src/buildEntity'
import buildVoice from '../../../src/buildVoice'
import { harmonicSeriesPitches, subharmonicSeriesPitches } from '../../../src/pitches'
import { Entity } from '../../../src/types'
import {
    dubparticularSeriesPitches,
    duperparticularSeriesPitches,
    subparticularSeriesPitches,
    superparticularSeriesPitches,
} from './pitches'
import {
    zdaubyaosOneNotes,
    zdaubyaosThreeNotes,
    zdaubyaosTwoNotes,
} from './tracks'

const TO_AVOID_BLOW_OUT: number = 0.2

const zdaubyaosSubparticularSquare: Entity = buildEntity({
    notes: zdaubyaosOneNotes,
    pitches: subparticularSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

const zdaubyaosDubparticularSaw: Entity = buildEntity({
    notes: zdaubyaosTwoNotes,
    pitches: dubparticularSeriesPitches,
    voice: buildVoice('sawtooth'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

const zdaubyaosHarmonicSine: Entity = buildEntity({
    notes: zdaubyaosThreeNotes,
    pitches: harmonicSeriesPitches,
    voice: buildVoice('sine'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

const zdaubyaosSuperparticularSquare: Entity = buildEntity({
    notes: zdaubyaosOneNotes,
    pitches: superparticularSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

const zdaubyaosDuperparticularSaw: Entity = buildEntity({
    notes: zdaubyaosTwoNotes,
    pitches: duperparticularSeriesPitches,
    voice: buildVoice('sawtooth'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

const zdaubyaosSubarmonicSine: Entity = buildEntity({
    notes: zdaubyaosThreeNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('sine'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

export {
    zdaubyaosSubparticularSquare,
    zdaubyaosDubparticularSaw,
    zdaubyaosHarmonicSine,
    zdaubyaosSuperparticularSquare,
    zdaubyaosDuperparticularSaw,
    zdaubyaosSubarmonicSine,
}
