import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from './parts'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const {
            zdaubyaosSubparticularOrDubparticularPart,
            zdaubyaosHarmonicOrSubharmonicPart,
            zdaubyaosSuperparticularOrDuperparticularPart,
        } = buildParts()

        const zdaubyaosSubparticularOrDubparticularSquareEntity: Entity = {
            noteSpecs: zdaubyaosSubparticularOrDubparticularPart,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const zdaubyaosSuperparticularOrDuperparticularSawEntity: Entity = {
            noteSpecs: zdaubyaosSuperparticularOrDuperparticularPart,
            timbreName: TimbreNameEnum.SAWTOOTH,
        }

        const zdaubyaosHarmonicOrSubharmonicSineEntity: Entity = {
            noteSpecs: zdaubyaosHarmonicOrSubharmonicPart,
            timbreName: TimbreNameEnum.SINE,
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
