// tslint:disable:no-console comment-format no-unused-variable

import { SongId } from '../../songId'
import { Song } from '../../types'
import { buildZdaubyaosEntities } from './entities'
import { zdaubyaosSongMaterial } from './songMaterials'
import { zdaubyaosSongMetadata } from './songMetadata'
import { zdaubyaosSongSpec } from './songSpecs'
import { zdaubyaosContourUsages } from './utilities'

const zdaubyaosSong: Song = {
    material: zdaubyaosSongMaterial,
    metadata: zdaubyaosSongMetadata,
    songId: SongId.ZDAUBYAOS,
    spec: zdaubyaosSongSpec,
}

// console.log(zdaubyaosContourUsages)
// console.log(buildZdaubyaosEntities(zdaubyaosSongSpec))

export {
    zdaubyaosSong,
}
