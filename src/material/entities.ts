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
            timbreName: TimbreNameEnum.PHONEME_BAH,
        }

        const superparticularOrDuperparticularSawEntity: Entity = {
            noteSpecs: superparticularOrDuperparticularPart,
            timbreName: TimbreNameEnum.BRIT_BLUES_DRIVEN,
        }

        const harmonicOrSubharmonicSineEntity: Entity = {
            noteSpecs: harmonicOrSubharmonicPart,
            timbreName: TimbreNameEnum.CELESTE,
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
