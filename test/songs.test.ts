// tslint:disable:no-any no-require-imports no-unsafe-any

import { SongConfig } from '../../../src/songTypes'
import { zdaubyaosSongConfig } from '../src/songs'

declare const require: any

describe('songs', () => {
    it('stays locked down unless i mean to change it', () => {
        const zdaubyaosSnapshot: SongConfig = require('./zdaubyaosSnapshot')

        expect(zdaubyaosSongConfig.entityConfigs).toEqual(zdaubyaosSnapshot.entityConfigs)
        expect(zdaubyaosSongConfig.scales).toEqual(zdaubyaosSnapshot.scales)
    })
})
