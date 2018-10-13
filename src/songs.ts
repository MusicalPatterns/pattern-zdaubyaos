// tslint:disable:no-console comment-format no-unused-variable

import { defaultCompileSong } from '../../../src/compile/defaultCompileSong'
import { harmonicSeriesScale, subharmonicSeriesScale } from '../../../src/scales'
import { SongID, SongSpec } from '../../../src/songTypes'
import * as to from '../../../src/utilities/to'
import { ZDAUBYAOS_BASE_FREQUENCY } from './basePitch'
import {
    zdaubyaosHarmonicOrSubharmonicSineEntitySpec,
    zdaubyaosSubparticularOrDubparticularSquareEntitySpec,
    zdaubyaosSuperparticularOrDuperparticularSawEntitySpec,
} from './entities'
import {
    dubparticularSeriesScale,
    duperparticularSeriesScale,
    subparticularSeriesScale,
    superparticularSeriesScale,
} from './scales'
import { zdaubyaosContourUsages } from './utilities/zdaubyaosContourUsage'

const zdaubyaosSongSpec: SongSpec = {
    compile: defaultCompileSong,
    config: {
        baseFrequency: ZDAUBYAOS_BASE_FREQUENCY,
        durationScalar: to.Scalar(1),
    },
    entitySpecs: [
        zdaubyaosSuperparticularOrDuperparticularSawEntitySpec,
        zdaubyaosHarmonicOrSubharmonicSineEntitySpec,
        zdaubyaosSubparticularOrDubparticularSquareEntitySpec,
    ],
    scales: [
        subparticularSeriesScale,
        dubparticularSeriesScale,
        harmonicSeriesScale,
        superparticularSeriesScale,
        duperparticularSeriesScale,
        subharmonicSeriesScale,
    ],
    songId: SongID.ZDAUBYAOS,
}

// console.log(zdaubyaosSongSpec)
// console.log(zdaubyaosContourUsages)

export {
    zdaubyaosSongSpec,
}
