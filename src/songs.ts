// tslint:disable:no-console comment-format no-unused-variable

import { Song } from '../../../src/types'
import { ZDAUBYAOS_BASE_PITCH } from './basePitch'
import {
    zdaubyaosDubparticularSaw,
    zdaubyaosDuperparticularSaw,
    zdaubyaosHarmonicSine,
    zdaubyaosSubharmonicSine,
    zdaubyaosSubparticularSquare,
    zdaubyaosSuperparticularSquare,
} from './entities'

const zdaubyaos: Song = {
    baseFrequency: ZDAUBYAOS_BASE_PITCH,
    entityConfigs: [
        zdaubyaosSuperparticularSquare,
        zdaubyaosDuperparticularSaw,
        zdaubyaosSubharmonicSine,
        zdaubyaosDubparticularSaw,
        zdaubyaosHarmonicSine,
        zdaubyaosSubparticularSquare,
    ],
}

// console.log(zdaubyaos)
// console.log(yaosNoteUsagesByDurationBlocksThenRendering)

export {
    zdaubyaos,
}
