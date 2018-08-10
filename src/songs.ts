// tslint:disable:no-console comment-format no-unused-variable

import { harmonicSeriesPitches, subharmonicSeriesPitches } from '../../../src/pitches'
import { Song } from '../../../src/types'
import { ZDAUBYAOS_BASE_PITCH } from './basePitch'
import {
    zdaubyaosHarmonicOrSubharmonicSine,
    zdaubyaosSubparticularOrDubparticularSquare,
    zdaubyaosSuperparticularOrDuperparticularSaw,
} from './entities'
import {
    dubparticularSeriesPitches,
    duperparticularSeriesPitches,
    subparticularSeriesPitches,
    superparticularSeriesPitches,
} from './pitches'
import { zdaubyaosContourUsages } from './utilities/zdaubyaosContourUsage'

const zdaubyaos: Song = {
    baseFrequency: ZDAUBYAOS_BASE_PITCH,
    entityConfigs: [
        zdaubyaosSuperparticularOrDuperparticularSaw,
        zdaubyaosHarmonicOrSubharmonicSine,
        zdaubyaosSubparticularOrDubparticularSquare,
    ],
    scales: [
        subparticularSeriesPitches,
        dubparticularSeriesPitches,
        harmonicSeriesPitches,
        superparticularSeriesPitches,
        duperparticularSeriesPitches,
        subharmonicSeriesPitches,
    ],
}

// console.log(zdaubyaos)
// console.log(zdaubyaosContourUsages)

export {
    zdaubyaos,
}
