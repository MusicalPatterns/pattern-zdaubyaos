// tslint:disable:no-any no-require-imports no-unsafe-any

import { Entity } from '../../../../src/indexForTest'
import { buildZdaubyaosEntities, zdaubyaosSongSpec } from '../../src/indexForTest'

declare const require: any

describe('entities', () => {
    it('stay locked down unless I mean to change them', () => {
        const zdaubyaosEntitiesSnapshot: Entity[] = require('../support/zdaubyaosEntitiesSnapshot')

        expect(buildZdaubyaosEntities(zdaubyaosSongSpec))
            .toEqual(zdaubyaosEntitiesSnapshot)
    })
})
