import calculateDuration from '../../../../src/calculateDuration'
import {
    chuwowFallNotes,
    chuwowSpringNotes,
    chuwowSummerNotes,
    djiyaiSummerNotes,
    iestFallNotes,
    iestSpringNotes,
    iestSummerNotes,
    inaiSummerNotes,
    ouzdSpringNotes,
    ouzdSummerNotes,
    umowFallNotes,
    umowSpringNotes,
    umowSummerNotes,
} from '../../src/notes/yaosFifteenNotes'

describe('yaos notes of length 15', () => {
    it('is true that they all have length 15', () => {
        expect(calculateDuration(umowSpringNotes)).toBe(15)
        expect(calculateDuration(chuwowSpringNotes)).toBe(15)
        expect(calculateDuration(iestSpringNotes)).toBe(15)
        expect(calculateDuration(ouzdSpringNotes)).toBe(15)
        expect(calculateDuration(umowSummerNotes)).toBe(15)
        expect(calculateDuration(chuwowSummerNotes)).toBe(15)
        expect(calculateDuration(iestSummerNotes)).toBe(15)
        expect(calculateDuration(inaiSummerNotes)).toBe(15)
        expect(calculateDuration(djiyaiSummerNotes)).toBe(15)
        expect(calculateDuration(ouzdSummerNotes)).toBe(15)
        expect(calculateDuration(umowFallNotes)).toBe(15)
        expect(calculateDuration(chuwowFallNotes)).toBe(15)
        expect(calculateDuration(iestFallNotes)).toBe(15)
    })
})
