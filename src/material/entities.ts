import { Entity, MaterializeEntities, TimbreNameEnum } from '@musical-patterns/material'
import { computeNotes } from './notes'
import { ZdaubyaosNotes } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const notes: ZdaubyaosNotes = computeNotes()

        const subDub: Entity = {
            sections: [ { notes: notes.subDub } ],
            timbreName: TimbreNameEnum.PHONEME_BAH,
        }

        const superDuper: Entity = {
            sections: [ { notes: notes.superDuper } ],
            timbreName: TimbreNameEnum.BRIT_BLUES_DRIVEN,
        }

        const harmSubharm: Entity = {
            sections: [ { notes: notes.harmSubharm } ],
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
