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
    basePitch: ZDAUBYAOS_BASE_PITCH,
    entityConfigs: [
        zdaubyaosSuperparticularSquare,
        zdaubyaosDuperparticularSaw,
        zdaubyaosSubharmonicSine,
        zdaubyaosDubparticularSaw,
        zdaubyaosHarmonicSine,
        zdaubyaosSubparticularSquare,
    ],
}

// tslint:disable-next-line:no-console comment-format
// console.log(zdaubyaos)

export {
    zdaubyaos,
}
