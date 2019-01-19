import { PatternMaterial } from '@musical-patterns/compiler'
import { PatternMetadata } from '@musical-patterns/pattern'
import { buildPatterns, PatternId, Patterns, StandardPattern } from '@musical-patterns/registry'
import { buildEntities, buildScales } from './materials'
import { post } from './metadata'
import { specData } from './specs'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: PatternMetadata = {
    description: post,
    formattedName: 'Zdaubyaos',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-08-04T07:00:00.000Z',
    musicalIdeaIllustrated: 'superparticular series',
    originalPublish: '2018-08-04T07:00:00.000Z',
}

const pattern: StandardPattern = {
    material,
    metadata,
    patternId: PatternId.ZDAUBYAOS,
    specData,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
}
