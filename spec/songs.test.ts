// tslint:disable:no-any no-require-imports no-unsafe-any

import { zdaubyaos } from '../src/songs'

declare const require: any

describe('songs', () => {
    it('stays locked down unless i mean to change it', () => {
        delete zdaubyaos.compile

        expect(zdaubyaos).toEqual(require('./zdaubyaosSnapshot'))
    })
})
