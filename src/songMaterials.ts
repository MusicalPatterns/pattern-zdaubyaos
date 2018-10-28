import { SongMaterial } from '../../types'
import { buildZdaubyaosEntities } from './entities'
import { buildZdaubyaosScales } from './scales'

const zdaubyaosSongMaterial: SongMaterial = {
    buildEntitiesFunction: buildZdaubyaosEntities,
    buildScalesFunction: buildZdaubyaosScales,
}

export {
    zdaubyaosSongMaterial,
}
