import { BuildEntitiesFunction, Entity, OscillatorName, TimeType, VoiceType } from '../../../../src'
import { buildParts } from './parts'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const {
            zdaubyaosSubparticularOrDubparticularPart,
            zdaubyaosHarmonicOrSubharmonicPart,
            zdaubyaosSuperparticularOrDuperparticularPart,
        } = buildParts()

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
    buildEntities,
}
