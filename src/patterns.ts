// tslint:disable:no-console comment-format no-unused-variable

import { DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR } from '../../../src'
import { PatternId } from '../../patternId'
import { Pattern, PatternMaterial, PatternMetadata, PatternSpec } from '../../types'
import { ZDAUBYAOS_PITCH_SCALAR } from './constants'
import { buildZdaubyaosEntities, buildZdaubyaosScales } from './materials'
import { zdaubyaosContourUsages } from './utilities'

const zdaubyaosPatternMaterial: PatternMaterial = {
    buildEntitiesFunction: buildZdaubyaosEntities,
    buildScalesFunction: buildZdaubyaosScales,
}

const zdaubyaosPatternMetadata: PatternMetadata = {
    description: 'fun with the superparticular series & variants, plus stepwise motion within recurring bounds',
    formattedName: 'Zdaubyaos',
}

const zdaubyaosPatternSpec: PatternSpec = {
    patternDurationScalar: DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR,
    patternPitchScalar: ZDAUBYAOS_PITCH_SCALAR,
}

const zdaubyaosPattern: Pattern = {
    material: zdaubyaosPatternMaterial,
    metadata: zdaubyaosPatternMetadata,
    patternId: PatternId.ZDAUBYAOS,
    spec: zdaubyaosPatternSpec,
}

// console.log(zdaubyaosContourUsages)
// console.log(buildZdaubyaosEntities())

export {
    zdaubyaosPattern,
    zdaubyaosPatternSpec,
}
