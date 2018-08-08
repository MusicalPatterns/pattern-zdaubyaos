import { harmonicSeriesPitches, subharmonicSeriesPitches } from '../../../src/pitches'
import { EntityConfig, OscillatorName, VoiceType } from '../../../src/types'
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
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
    voiceGain: TO_AVOID_BLOW_OUT,
}

const zdaubyaosDubparticularSaw: EntityConfig = {
    notes: zdaubyaosTrackB,
    pitches: dubparticularSeriesPitches,
    voiceConfig: {timbre: OscillatorName.SAWTOOTH, voiceType: VoiceType.OSCILLATOR},
    voiceGain: TO_AVOID_BLOW_OUT,
}

const zdaubyaosHarmonicSine: EntityConfig = {
    notes: zdaubyaosTrackC,
    pitches: harmonicSeriesPitches,
    voiceConfig: {timbre: OscillatorName.SINE, voiceType: VoiceType.OSCILLATOR},
    voiceGain: TO_AVOID_BLOW_OUT,
}

const zdaubyaosSuperparticularSquare: EntityConfig = {
    notes: zdaubyaosTrackD,
    pitches: superparticularSeriesPitches,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
    voiceGain: TO_AVOID_BLOW_OUT,
}

const zdaubyaosDuperparticularSaw: EntityConfig = {
    notes: zdaubyaosTrackE,
    pitches: duperparticularSeriesPitches,
    voiceConfig: {timbre: OscillatorName.SAWTOOTH, voiceType: VoiceType.OSCILLATOR},
    voiceGain: TO_AVOID_BLOW_OUT,
}

const zdaubyaosSubharmonicSine: EntityConfig = {
    notes: zdaubyaosTrackF,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: OscillatorName.SINE, voiceType: VoiceType.OSCILLATOR},
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
