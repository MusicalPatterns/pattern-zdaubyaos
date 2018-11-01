import { BuildEntitiesFunction, Entity, OscillatorName, TimeType, VoiceType } from '../../../../src'
import { buildZdaubyaosParts } from './parts'

const buildZdaubyaosEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const {
            zdaubyaosSubparticularOrDubparticularPart,
            zdaubyaosHarmonicOrSubharmonicPart,
            zdaubyaosSuperparticularOrDuperparticularPart,
        } = buildZdaubyaosParts()

        const zdaubyaosSubparticularOrDubparticularSquareEntity: Entity = {
            part: zdaubyaosSubparticularOrDubparticularPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const zdaubyaosSuperparticularOrDuperparticularSawEntity: Entity = {
            part: zdaubyaosSuperparticularOrDuperparticularPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SAWTOOTH, voiceType: VoiceType.OSCILLATOR },
        }

        const zdaubyaosHarmonicOrSubharmonicSineEntity: Entity = {
            part: zdaubyaosHarmonicOrSubharmonicPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SINE, voiceType: VoiceType.OSCILLATOR },
        }

        return [
            zdaubyaosSuperparticularOrDuperparticularSawEntity,
            zdaubyaosHarmonicOrSubharmonicSineEntity,
            zdaubyaosSubparticularOrDubparticularSquareEntity,
        ]
    }

export {
    buildZdaubyaosEntities,
}
