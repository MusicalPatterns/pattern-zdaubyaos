import { thirtyfiveANotes, thirtyfiveBNotes, thirtyfiveCNotes } from '../../src/notes/otherNotes'
import calculateDuration from '../../../../src/calculateDuration'

describe('thirtyfive notes', () => {
    it('is the case that they are all actually length multiples of 35', () => {
        expect(calculateDuration(thirtyfiveANotes) % 35).toBe(0)
        expect(calculateDuration(thirtyfiveBNotes) % 35).toBe(0)
        expect(calculateDuration(thirtyfiveCNotes) % 35).toBe(0)
    })
})
