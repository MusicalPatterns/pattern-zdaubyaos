// tslint:disable:no-console comment-format no-unused-variable

import { DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR } from '../../../src'
import { SongId } from '../../songId'
import { Song, SongMaterial, SongMetadata, SongSpec } from '../../types'
import { ZDAUBYAOS_PITCH_SCALAR } from './constants'
import { buildZdaubyaosEntities, buildZdaubyaosScales } from './materials'
import { zdaubyaosContourUsages } from './utilities'

const zdaubyaosSongMaterial: SongMaterial = {
    buildEntitiesFunction: buildZdaubyaosEntities,
    buildScalesFunction: buildZdaubyaosScales,
}

const zdaubyaosSongMetadata: SongMetadata = {
    description: 'fun with the superparticular series & variants, plus stepwise motion within recurring bounds',
    formattedName: 'Zdaubyaos',
}

const zdaubyaosSongSpec: SongSpec = {
    songDurationScalar: DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR,
    songPitchScalar: ZDAUBYAOS_PITCH_SCALAR,
}

const zdaubyaosSong: Song = {
    material: zdaubyaosSongMaterial,
    metadata: zdaubyaosSongMetadata,
    songId: SongId.ZDAUBYAOS,
    spec: zdaubyaosSongSpec,
}

// console.log(zdaubyaosContourUsages)
// console.log(buildZdaubyaosEntities())

export {
    zdaubyaosSong,
    zdaubyaosSongSpec,
}
