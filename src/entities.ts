import { EntityConfig } from '../../../src/compile/types'
import { harmonicSeriesPitches, subharmonicSeriesPitches } from '../../../src/pitches'
import { OscillatorName, VoiceType } from '../../../src/types'
import { Scalar } from '../../../src/utilities/nominalTypes'
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

// tslint:disable-next-line:no-any no-magic-numbers
const TO_AVOID_BLOW_OUT: Scalar = 0.2 as any

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
