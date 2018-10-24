// tslint:disable:no-any no-require-imports no-unsafe-any

import { Entities } from '../../../../src/compile/types'
import { buildZdaubyaosEntities } from '../../src/entities'
import { zdaubyaosSongSpec } from '../../src/songSpecs'

declare const require: any

describe('entities', () => {
    it('stay locked down unless I mean to change them', () => {
        const zdaubyaosEntitiesSnapshot: Entities = require('../support/zdaubyaosEntitiesSnapshot')

        expect(buildZdaubyaosEntities(zdaubyaosSongSpec)).toEqual(zdaubyaosEntitiesSnapshot)
    })
})
