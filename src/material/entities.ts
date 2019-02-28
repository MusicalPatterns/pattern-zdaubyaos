import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from './parts'
import { ZdaubyaosParts } from './types'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const parts: ZdaubyaosParts = buildParts()

        const subDub: Entity = {
            noteSpecs: parts.subDub,
            timbreName: TimbreNameEnum.PHONEME_BAH,
        }

        const superDuper: Entity = {
            noteSpecs: parts.superDuper,
            timbreName: TimbreNameEnum.BRIT_BLUES_DRIVEN,
        }

        const harmSubharm: Entity = {
            noteSpecs: parts.harmSubharm,
            timbreName: TimbreNameEnum.CELESTE,
        }

        return [
            superDuper,
            harmSubharm,
            subDub,
        ]
    }

export {
    buildEntities,
}
