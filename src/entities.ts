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
    zdaubyaosTrackA,
    zdaubyaosTrackB,
    zdaubyaosTrackC,
    zdaubyaosTrackD,
    zdaubyaosTrackE,
    zdaubyaosTrackF,
} from './tracks'

const TO_AVOID_BLOW_OUT: number = 0.2

const zdaubyaosSubparticularSquare: Entity = buildEntity({
    notes: zdaubyaosTrackA,
    pitches: subparticularSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

const zdaubyaosDubparticularSaw: Entity = buildEntity({
    notes: zdaubyaosTrackB,
    pitches: dubparticularSeriesPitches,
    voice: buildVoice('sawtooth'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

const zdaubyaosHarmonicSine: Entity = buildEntity({
    notes: zdaubyaosTrackC,
    pitches: harmonicSeriesPitches,
    voice: buildVoice('sine'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

const zdaubyaosSuperparticularSquare: Entity = buildEntity({
    notes: zdaubyaosTrackD,
    pitches: superparticularSeriesPitches,
    voice: buildVoice('square'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

const zdaubyaosDuperparticularSaw: Entity = buildEntity({
    notes: zdaubyaosTrackE,
    pitches: duperparticularSeriesPitches,
    voice: buildVoice('sawtooth'),
    voiceGain: TO_AVOID_BLOW_OUT,
})

const zdaubyaosSubharmonicSine: Entity = buildEntity({
    notes: zdaubyaosTrackF,
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
    zdaubyaosSubharmonicSine,
}
