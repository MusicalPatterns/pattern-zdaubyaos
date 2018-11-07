import { DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR } from '../../../src'
import { PatternId } from '../../patternId'
import { Pattern, PatternMaterial, PatternMetadata, PatternSpec } from '../../types'
import { ZDAUBYAOS_PITCH_SCALAR } from './constants'
import { buildEntities, buildScales } from './materials'

const zdaubyaosPatternMaterial: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const zdaubyaosPatternMetadata: PatternMetadata = {
    description: 'fun with the superparticular series & variants, plus stepwise motion within recurring bounds',
    formattedName: 'Zdaubyaos',
    musicalIdeaIllustrated: 'superparticular series',
}

const patternSpec: PatternSpec = {
    patternDurationScalar: DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR,
    patternPitchScalar: ZDAUBYAOS_PITCH_SCALAR,
}

const pattern: Pattern = {
    material: zdaubyaosPatternMaterial,
    metadata: zdaubyaosPatternMetadata,
    patternId: PatternId.ZDAUBYAOS,
    spec: patternSpec,
}

export {
    pattern,
    patternSpec,
}
