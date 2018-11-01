// tslint:disable:no-any no-require-imports no-unsafe-any

import { buildZdaubyaosEntities, buildZdaubyaosScales, zdaubyaosPatternSpec } from '../../../src/indexForTest'

declare const require: any

describe('zdaubyaos snapshot', () => {
    it('stays locked down unless I mean to change the pattern', async (done: DoneFn) => {
        const zdaubyaosSnapshot: any = require('../../support/zdaubyaosSnapshot')

        const actual: any = {
            entities: buildZdaubyaosEntities(zdaubyaosPatternSpec),
            scales: buildZdaubyaosScales(zdaubyaosPatternSpec),
        }

        expect(actual)
            .toEqual(zdaubyaosSnapshot)

        done()
    })
})
