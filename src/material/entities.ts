import { Entity, MaterializeEntities, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildNotes } from './notes'
import { ZdaubyaosNotes } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const notes: ZdaubyaosNotes = buildNotes()

        const subDub: Entity = {
            notes: notes.subDub,
            timbreName: TimbreNameEnum.PHONEME_BAH,
        }

        const superDuper: Entity = {
            notes: notes.superDuper,
            timbreName: TimbreNameEnum.BRIT_BLUES_DRIVEN,
        }

        const harmSubharm: Entity = {
            notes: notes.harmSubharm,
            timbreName: TimbreNameEnum.CELESTE,
        }

        return [
            superDuper,
            harmSubharm,
            subDub,
        ]
    }

export {
    materializeEntities,
}
