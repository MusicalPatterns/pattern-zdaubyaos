import calculateDuration from '../../../../src/utilities/calculateDuration'
import * as from from '../../../../src/utilities/from'
import { thirtyfiveYaosAccidentInspiredNotes, thirtyfiveYaosBassNotes, thirtyfiveZdaubNotes } from '../../src/notes/thirtyfiveNotes'

describe('thirtyfive notes', () => {
    it('is the case that they are all actually length multiples of 35', () => {
        expect(from.Time(calculateDuration(thirtyfiveYaosBassNotes)) % 35).toBe(0)
        expect(from.Time(calculateDuration(thirtyfiveYaosAccidentInspiredNotes)) % 35).toBe(0)
        expect(from.Time(calculateDuration(thirtyfiveZdaubNotes)) % 35).toBe(0)
    })
})
