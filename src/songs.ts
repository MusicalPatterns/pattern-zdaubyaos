// tslint:disable:no-console comment-format no-unused-variable

import { defaultSongCompile } from '../../../src/compile/defaultSongCompile'
import { harmonicSeriesPitches, subharmonicSeriesPitches } from '../../../src/pitches'
import { SongConfig, SongID } from '../../../src/songTypes'
import * as to from '../../../src/utilities/to'
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

const zdaubyaosSongConfig: SongConfig = {
    compile: defaultSongCompile,
    config: {
        baseFrequency: ZDAUBYAOS_BASE_FREQUENCY,
        durationScalar: to.Scalar(1),
    },
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
    songId: SongID.ZDAUBYAOS,
}

// console.log(zdaubyaosSongConfig)
// console.log(zdaubyaosContourUsages)

export {
    zdaubyaosSongConfig,
}
