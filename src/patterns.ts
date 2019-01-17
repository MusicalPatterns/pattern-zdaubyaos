import { PatternMaterial } from '@musical-patterns/compiler'
import { PatternMetadata, standardPatternSpecAttributes } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import { buildEntities, buildScales } from './materials'
import { post } from './metadata'
import { initialSpec } from './specs'

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

const pattern: Pattern = {
    initialSpec,
    material,
    metadata,
    patternId: PatternId.ZDAUBYAOS,
    specAttributes: standardPatternSpecAttributes,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
}
