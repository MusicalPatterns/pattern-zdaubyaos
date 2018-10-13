import { EntitySpec, TimeType } from '../../../src/compile/types'
import { OscillatorName, VoiceType } from '../../../src/types'
import { Scalar } from '../../../src/utilities/nominalTypes'
import {
    zdaubyaosHarmonicOrSubharmonicTrack,
    zdaubyaosSubparticularOrDubparticularTrack,
    zdaubyaosSuperparticularOrDuperparticularTrack,
} from './tracks'

// tslint:disable-next-line:no-any no-magic-numbers
const TO_AVOID_BLOW_OUT: Scalar = 0.2 as any

const zdaubyaosSubparticularOrDubparticularSquareEntitySpec: EntitySpec = {
    notes: zdaubyaosSubparticularOrDubparticularTrack,
    timeType: TimeType.ATOMIC,
    voiceGain: TO_AVOID_BLOW_OUT,
    voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
}

const zdaubyaosSuperparticularOrDuperparticularSawEntitySpec: EntitySpec = {
    notes: zdaubyaosSuperparticularOrDuperparticularTrack,
    timeType: TimeType.ATOMIC,
    voiceGain: TO_AVOID_BLOW_OUT,
    voiceSpec: { timbre: OscillatorName.SAWTOOTH, voiceType: VoiceType.OSCILLATOR },
}

const zdaubyaosHarmonicOrSubharmonicSineEntitySpec: EntitySpec = {
    notes: zdaubyaosHarmonicOrSubharmonicTrack,
    timeType: TimeType.ATOMIC,
    voiceGain: TO_AVOID_BLOW_OUT,
    voiceSpec: { timbre: OscillatorName.SINE, voiceType: VoiceType.OSCILLATOR },
}

export {
    zdaubyaosSubparticularOrDubparticularSquareEntitySpec,
    zdaubyaosSuperparticularOrDuperparticularSawEntitySpec,
    zdaubyaosHarmonicOrSubharmonicSineEntitySpec,
}
