// tslint:disable:no-any no-require-imports no-unsafe-any

import { Entity } from '../../../../../src/indexForTest'
import { buildZdaubyaosEntities } from '../../../src/indexForTest'

declare const require: any

describe('zdaubyaos entities', () => {
    it('stay locked down unless I mean to change them', () => {
        const zdaubyaosEntitiesSnapshot: Entity[] = require('../../support/zdaubyaosEntitiesSnapshot')

        expect(buildZdaubyaosEntities())
            .toEqual(zdaubyaosEntitiesSnapshot)
    })
})
