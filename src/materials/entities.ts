import { BuildEntitiesFunction, Entity, TimbreName } from '@musical-patterns/compiler'
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
            timbreName: TimbreName.SQUARE,
        }

        const zdaubyaosSuperparticularOrDuperparticularSawEntity: Entity = {
            noteSpecs: zdaubyaosSuperparticularOrDuperparticularPart,
            timbreName: TimbreName.SAWTOOTH,
        }

        const zdaubyaosHarmonicOrSubharmonicSineEntity: Entity = {
            noteSpecs: zdaubyaosHarmonicOrSubharmonicPart,
            timbreName: TimbreName.SINE,
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
