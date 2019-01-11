import { PatternMaterial } from '@musical-patterns/compiler'
import { PatternMetadata, PatternSpec } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import { to } from '@musical-patterns/utilities'
import { ZDAUBYAOS_DURATION_SCALAR, ZDAUBYAOS_PITCH_SCALAR } from './constants'
import { buildEntities, buildScales } from './materials'
import { post } from './metadata'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const mostRecentPublish: string = new Date().toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })

const metadata: PatternMetadata = {
    description: post,
    formattedName: 'Zdaubyaos',
    mostRecentPublish,
    musicalIdeaIllustrated: 'superparticular series',
    originalPublish: 'August 4, 2018',
}

const spec: PatternSpec = {
    patternDurationOffset: to.Offset(0),
    patternDurationScalar: ZDAUBYAOS_DURATION_SCALAR,
    patternPitchOffset: to.Offset(0),
    patternPitchScalar: ZDAUBYAOS_PITCH_SCALAR,
}

const pattern: Pattern = {
    material,
    metadata,
    patternId: PatternId.ZDAUBYAOS,
    spec,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
    spec,
}
