import { EntityConfig, TimeType } from '../../../src/compile/types'
import { OscillatorName, VoiceType } from '../../../src/types'
import { Scalar } from '../../../src/utilities/nominalTypes'
import {
    zdaubyaosHarmonicOrSubharmonicTrack,
    zdaubyaosSubparticularOrDubparticularTrack,
    zdaubyaosSuperparticularOrDuperparticularTrack,
} from './tracks'

// tslint:disable-next-line:no-any no-magic-numbers
const TO_AVOID_BLOW_OUT: Scalar = 0.2 as any

const zdaubyaosSubparticularOrDubparticularSquare: EntityConfig = {
    notes: zdaubyaosSubparticularOrDubparticularTrack,
    timeType: TimeType.ATOMIC,
    voiceConfig: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
    voiceGain: TO_AVOID_BLOW_OUT,
}

const zdaubyaosSuperparticularOrDuperparticularSaw: EntityConfig = {
    notes: zdaubyaosSuperparticularOrDuperparticularTrack,
    timeType: TimeType.ATOMIC,
    voiceConfig: { timbre: OscillatorName.SAWTOOTH, voiceType: VoiceType.OSCILLATOR },
    voiceGain: TO_AVOID_BLOW_OUT,
}

const zdaubyaosHarmonicOrSubharmonicSine: EntityConfig = {
    notes: zdaubyaosHarmonicOrSubharmonicTrack,
    timeType: TimeType.ATOMIC,
    voiceConfig: { timbre: OscillatorName.SINE, voiceType: VoiceType.OSCILLATOR },
    voiceGain: TO_AVOID_BLOW_OUT,
}

export {
    zdaubyaosSubparticularOrDubparticularSquare,
    zdaubyaosSuperparticularOrDuperparticularSaw,
    zdaubyaosHarmonicOrSubharmonicSine,
}
