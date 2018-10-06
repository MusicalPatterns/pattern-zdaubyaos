// tslint:disable:no-console comment-format no-unused-variable

import { defaultSongCompile } from '../../../src/compile/defaultSongCompile'
import { harmonicSeriesPitches, subharmonicSeriesPitches } from '../../../src/pitches'
import { Song, SongName } from '../../../src/songTypes'
import { ZDAUBYAOS_BASE_FREQUENCY } from './basePitch'
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
    compile: defaultSongCompile,
    customConfig: {},
    description: 'fun with the superparticular series & variants, plus stepwise motion within recurring bounds',
    entityConfigs: [
        zdaubyaosSuperparticularOrDuperparticularSaw,
        zdaubyaosHarmonicOrSubharmonicSine,
        zdaubyaosSubparticularOrDubparticularSquare,
    ],
    formattedName: 'Zdaubyaos',
    name: SongName.ZDAUBYAOS,
    scales: [
        subparticularSeriesPitches,
        dubparticularSeriesPitches,
        harmonicSeriesPitches,
        superparticularSeriesPitches,
        duperparticularSeriesPitches,
        subharmonicSeriesPitches,
    ],
    standardConfig: {
        baseFrequency: ZDAUBYAOS_BASE_FREQUENCY,
    },
}

// console.log(zdaubyaos)
// console.log(zdaubyaosContourUsages)

export {
    zdaubyaos,
}
