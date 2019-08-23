import { Entity, MaterializeEntities, TimbreNameEnum } from '@musical-patterns/material'
import { computeNotes } from './notes'
import { ZdaubyaosNotes } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const notes: ZdaubyaosNotes = computeNotes()

        const dubpartDuperpart: Entity = {
            sections: [ { notes: notes.subDub } ],
            timbreName: TimbreNameEnum.PHONEME_BAH,
        }

        const subpartSuperpart: Entity = {
            sections: [ { notes: notes.superDuper } ],
            timbreName: TimbreNameEnum.BRIT_BLUES_DRIVEN,
        }

        const harmSubharm: Entity = {
            sections: [ { notes: notes.harmSubharm } ],
            timbreName: TimbreNameEnum.CELESTE,
        }

        return [
            subpartSuperpart,
            harmSubharm,
            dubpartDuperpart,
        ]
    }

export {
    materializeEntities,
}
