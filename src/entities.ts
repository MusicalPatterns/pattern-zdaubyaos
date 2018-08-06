import { harmonicSeriesPitches, subharmonicSeriesPitches } from '../../../src/pitches'
import { EntityConfig } from '../../../src/types'
import {
    zdaubyaosTrackA,
    zdaubyaosTrackB,
    zdaubyaosTrackC,
    zdaubyaosTrackD,
    zdaubyaosTrackE,
    zdaubyaosTrackF,
} from './convertSegmentsToTracks'
import {
    dubparticularSeriesPitches,
    duperparticularSeriesPitches,
    subparticularSeriesPitches,
    superparticularSeriesPitches,
} from './pitches'

const TO_AVOID_BLOW_OUT: number = 0.2

const zdaubyaosSubparticularSquare: EntityConfig = {
    notes: zdaubyaosTrackA,
    pitches: subparticularSeriesPitches,
    voiceConfig: {timbre: 'square', voiceType: 'oscillator'},
    voiceGain: TO_AVOID_BLOW_OUT,
}

const zdaubyaosDubparticularSaw: EntityConfig = {
    notes: zdaubyaosTrackB,
    pitches: dubparticularSeriesPitches,
    voiceConfig: {timbre: 'sawtooth', voiceType: 'oscillator'},
    voiceGain: TO_AVOID_BLOW_OUT,
}

const zdaubyaosHarmonicSine: EntityConfig = {
    notes: zdaubyaosTrackC,
    pitches: harmonicSeriesPitches,
    voiceConfig: {timbre: 'sine', voiceType: 'oscillator'},
    voiceGain: TO_AVOID_BLOW_OUT,
}

const zdaubyaosSuperparticularSquare: EntityConfig = {
    notes: zdaubyaosTrackD,
    pitches: superparticularSeriesPitches,
    voiceConfig: {timbre: 'square', voiceType: 'oscillator'},
    voiceGain: TO_AVOID_BLOW_OUT,
}

const zdaubyaosDuperparticularSaw: EntityConfig = {
    notes: zdaubyaosTrackE,
    pitches: duperparticularSeriesPitches,
    voiceConfig: {timbre: 'sawtooth', voiceType: 'oscillator'},
    voiceGain: TO_AVOID_BLOW_OUT,
}

const zdaubyaosSubharmonicSine: EntityConfig = {
    notes: zdaubyaosTrackF,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'sine', voiceType: 'oscillator'},
    voiceGain: TO_AVOID_BLOW_OUT,
}

export {
    zdaubyaosSubparticularSquare,
    zdaubyaosDubparticularSaw,
    zdaubyaosHarmonicSine,
    zdaubyaosSuperparticularSquare,
    zdaubyaosDuperparticularSaw,
    zdaubyaosSubharmonicSine,
}
