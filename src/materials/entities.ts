import { OscillatorName, VoiceType } from '@musical-patterns/performer'
import { Entity } from '../../../../compile'
import { BuildEntitiesFunction } from '../../../types'
import { buildParts } from './parts'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const {
            zdaubyaosSubparticularOrDubparticularPart,
            zdaubyaosHarmonicOrSubharmonicPart,
            zdaubyaosSuperparticularOrDuperparticularPart,
        } = buildParts()

        const zdaubyaosSubparticularOrDubparticularSquareEntity: Entity = {
            partSpec: zdaubyaosSubparticularOrDubparticularPart,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const zdaubyaosSuperparticularOrDuperparticularSawEntity: Entity = {
            partSpec: zdaubyaosSuperparticularOrDuperparticularPart,
            voiceSpec: { timbre: OscillatorName.SAWTOOTH, voiceType: VoiceType.OSCILLATOR },
        }

        const zdaubyaosHarmonicOrSubharmonicSineEntity: Entity = {
            partSpec: zdaubyaosHarmonicOrSubharmonicPart,
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
