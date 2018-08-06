import calculateDuration from '../../../../src/calculateDuration'
import {
    chuwowwwFallNotes,
    chuwowwwSpringNotes,
    chuwowwwSummerNotes,
    djiyaiiiSummerNotes,
    iestttFallNotes,
    iestttSpringNotes,
    iestttSummerNotes,
    inaiiiSummerNotes,
    ouzdddSpringNotes,
    ouzdddSummerNotes,
    umowwwFallNotes,
    umowwwSpringNotes,
    umowwwSummerNotes,
} from '../../src/notes/yaosTwentyfourNotes'

describe('yaos notes of length 24', () => {
    it('is true that they all have length 24', () => {
        expect(calculateDuration(umowwwSpringNotes)).toBe(24)
        expect(calculateDuration(chuwowwwSpringNotes)).toBe(24)
        expect(calculateDuration(iestttSpringNotes)).toBe(24)
        expect(calculateDuration(ouzdddSpringNotes)).toBe(24)
        expect(calculateDuration(umowwwSummerNotes)).toBe(24)
        expect(calculateDuration(chuwowwwSummerNotes)).toBe(24)
        expect(calculateDuration(iestttSummerNotes)).toBe(24)
        expect(calculateDuration(inaiiiSummerNotes)).toBe(24)
        expect(calculateDuration(djiyaiiiSummerNotes)).toBe(24)
        expect(calculateDuration(ouzdddSummerNotes)).toBe(24)
        expect(calculateDuration(umowwwFallNotes)).toBe(24)
        expect(calculateDuration(chuwowwwFallNotes)).toBe(24)
        expect(calculateDuration(iestttFallNotes)).toBe(24)
    })
})
