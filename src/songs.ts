// tslint:disable:no-console comment-format no-unused-variable

import { defaultSongCompile } from '../../../src/compile/defaultSongCompile'
import { defaultHandleConfigChange } from '../../../src/interface/defaultHandleConfigChange'
import { harmonicSeriesPitches, subharmonicSeriesPitches } from '../../../src/pitches'
import { Song, SongName } from '../../../src/songTypes'
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

const zdaubyaos: Song = {
    compile: defaultSongCompile,
    config: {
        baseFrequency: ZDAUBYAOS_BASE_FREQUENCY,
        durationScalar: to.Scalar(1),
    },
    description: 'fun with the superparticular series & variants, plus stepwise motion within recurring bounds',
    entityConfigs: [
        zdaubyaosSuperparticularOrDuperparticularSaw,
        zdaubyaosHarmonicOrSubharmonicSine,
        zdaubyaosSubparticularOrDubparticularSquare,
    ],
    formattedName: 'Zdaubyaos',
    handleConfigChange: defaultHandleConfigChange,
    name: SongName.ZDAUBYAOS,
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
