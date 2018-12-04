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
            partSpec: zdaubyaosSubparticularOrDubparticularPart,
            timbreName: TimbreName.SQUARE,
        }

        const zdaubyaosSuperparticularOrDuperparticularSawEntity: Entity = {
            partSpec: zdaubyaosSuperparticularOrDuperparticularPart,
            timbreName: TimbreName.SAWTOOTH,
        }

        const zdaubyaosHarmonicOrSubharmonicSineEntity: Entity = {
            partSpec: zdaubyaosHarmonicOrSubharmonicPart,
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
