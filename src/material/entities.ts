import { Entity, MaterializeEntities, TimbreNameEnum } from '@musical-patterns/material'
import { thunkNotes } from './notes'
import { ZdaubyaosNotes } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const notes: ZdaubyaosNotes = thunkNotes()

        const subpartSuperpart: Entity = {
            sections: [ { notes: notes.subpartSuperpart } ],
            timbreName: TimbreNameEnum.PHONEME_BAH,
        }

        const dubpartDuperpart: Entity = {
            sections: [ { notes: notes.dubpartDuperpart } ],
            timbreName: TimbreNameEnum.BRIT_BLUES_DRIVEN,
        }

        const harmSubharm: Entity = {
            sections: [ { notes: notes.harmSubharm } ],
            timbreName: TimbreNameEnum.CELESTE,
        }

        return [
            dubpartDuperpart,
            harmSubharm,
            subpartSuperpart,
        ]
    }

export {
    materializeEntities,
}
