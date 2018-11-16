import { PatternId } from '../../patternId'
import { Pattern, PatternMaterial, PatternMetadata, PatternSpec } from '../../types'
import { ZDAUBYAOS_DURATION_SCALAR, ZDAUBYAOS_PITCH_SCALAR } from './constants'
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
    patternDurationScalar: ZDAUBYAOS_DURATION_SCALAR,
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
