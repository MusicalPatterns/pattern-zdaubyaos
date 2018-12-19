import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from './parts'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const {
            subparticularOrDubparticularPart,
            harmonicOrSubharmonicPart,
            superparticularOrDuperparticularPart,
        } = buildParts()

        const subparticularOrDubparticularSquareEntity: Entity = {
            noteSpecs: subparticularOrDubparticularPart,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const superparticularOrDuperparticularSawEntity: Entity = {
            noteSpecs: superparticularOrDuperparticularPart,
            timbreName: TimbreNameEnum.SAWTOOTH,
        }

        const harmonicOrSubharmonicSineEntity: Entity = {
            noteSpecs: harmonicOrSubharmonicPart,
            timbreName: TimbreNameEnum.SINE,
        }

        return [
            superparticularOrDuperparticularSawEntity,
            harmonicOrSubharmonicSineEntity,
            subparticularOrDubparticularSquareEntity,
        ]
    }

export {
    buildEntities,
}
