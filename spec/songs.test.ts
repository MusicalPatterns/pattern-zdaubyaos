// tslint:disable:no-any no-require-imports no-unsafe-any

import { Song } from '../../../src/songTypes'
import { zdaubyaos } from '../src/songs'

declare const require: any

describe('songs', () => {
    it('stays locked down unless i mean to change it', () => {
        const zdaubyaosSnapshot: Song = require('./zdaubyaosSnapshot')

        expect(zdaubyaos.entityConfigs).toEqual(zdaubyaosSnapshot.entityConfigs)
        expect(zdaubyaos.scales).toEqual(zdaubyaosSnapshot.scales)
    })
})
