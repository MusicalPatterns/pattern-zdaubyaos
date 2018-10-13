// tslint:disable:no-any no-require-imports no-unsafe-any

import { SongSpec } from '../../../src/songTypes'
import { zdaubyaosSongSpec } from '../src/songs'

declare const require: any

describe('songs', () => {
    it('stays locked down unless i mean to change it', () => {
        const zdaubyaosSnapshot: SongSpec = require('./zdaubyaosSnapshot')

        expect(zdaubyaosSongSpec.entitySpecs).toEqual(zdaubyaosSnapshot.entitySpecs)
        expect(zdaubyaosSongSpec.scales).toEqual(zdaubyaosSnapshot.scales)
    })
})
