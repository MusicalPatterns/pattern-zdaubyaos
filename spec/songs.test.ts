import { zdaubyaos } from '../src/songs'

declare const require: any

describe('songs', () => {
    it('stays locked down unless i mean to change it', () => {
        expect(zdaubyaos).toEqual(require('./zdaubyaosSnapshot'))
    })
})
