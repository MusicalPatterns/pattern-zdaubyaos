import renderings from '../src/renderings'

describe('renderings', () => {
    describe('spring', () => {
        it('ascends from 1, by 1, muting the 1 itself', () => {
            expect(renderings.spring(2)).toEqual([0, 2])
            expect(renderings.spring(3)).toEqual([0, 2, 3])
            expect(renderings.spring(4)).toEqual([0, 2, 3, 4])
            expect(renderings.spring(5)).toEqual([0, 2, 3, 4, 5])
            expect(renderings.spring(6)).toEqual([0, 2, 3, 4, 5, 6])
            expect(renderings.spring(7)).toEqual([0, 2, 3, 4, 5, 6, 7])
        })
    })

    describe('summer', () => {
        it('ascends from 1, by 1, muting all evens', () => {
            expect(renderings.summer(2)).toEqual([1, 0])
            expect(renderings.summer(3)).toEqual([1, 0, 3])
            expect(renderings.summer(4)).toEqual([1, 0, 3, 0])
            expect(renderings.summer(5)).toEqual([1, 0, 3, 0, 5])
            expect(renderings.summer(6)).toEqual([1, 0, 3, 0, 5, 0])
            expect(renderings.summer(7)).toEqual([1, 0, 3, 0, 5, 0, 7])
        })
    })

    describe('fall', () => {
        it('first note pitch and duration 1, second note with the remaining duration and matching pitch', () => {
            expect(renderings.fall(2)).toEqual([1, 1])
            expect(renderings.fall(3)).toEqual([1, 2])
            expect(renderings.fall(4)).toEqual([1, 3])
            expect(renderings.fall(5)).toEqual([1, 4])
            expect(renderings.fall(6)).toEqual([1, 5])
            expect(renderings.fall(7)).toEqual([1, 6])
        })
    })

    describe('summery spring', () => {
        it('has the same pattern of mutes as spring with the pitches from summer', () => {
            expect(renderings.summerySpring(2)).toEqual([0, 1])
            expect(renderings.summerySpring(3)).toEqual([0, 1, 3])
            expect(renderings.summerySpring(4)).toEqual([0, 1, 3, 5])
            expect(renderings.summerySpring(5)).toEqual([0, 1, 3, 5, 7])
            expect(renderings.summerySpring(6)).toEqual([0, 1, 3, 5, 7, 9])
            expect(renderings.summerySpring(7)).toEqual([0, 1, 3, 5, 7, 9, 11])
        })
    })

    describe('springy summer', () => {
        it('has the same pattern of mutes as summer with the pitches from spring', () => {
            expect(renderings.springySummer(2)).toEqual([2, 0])
            expect(renderings.springySummer(3)).toEqual([2, 0, 3])
            expect(renderings.springySummer(4)).toEqual([2, 0, 3, 0])
            expect(renderings.springySummer(5)).toEqual([2, 0, 3, 0, 4])
            expect(renderings.springySummer(6)).toEqual([2, 0, 3, 0, 4, 0])
            expect(renderings.springySummer(7)).toEqual([2, 0, 3, 0, 4, 0, 5])
        })
    })
})
