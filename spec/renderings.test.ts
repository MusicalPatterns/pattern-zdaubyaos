import { fall, spring, summer } from '../src/renderings'

describe('renderings', () => {
    describe('spring', () => {
        it('ascends from 1, by 1, muting the 1 itself', () => {
            expect(spring(2)).toEqual([0, 2])
            expect(spring(3)).toEqual([0, 2, 3])
            expect(spring(4)).toEqual([0, 2, 3, 4])
            expect(spring(5)).toEqual([0, 2, 3, 4, 5])
            expect(spring(6)).toEqual([0, 2, 3, 4, 5, 6])
            expect(spring(7)).toEqual([0, 2, 3, 4, 5, 6, 7])
        })
    })

    describe('summer', () => {
        it('ascends from 1, by 1, muting all evens', () => {
            expect(summer(2)).toEqual([1, 0])
            expect(summer(3)).toEqual([1, 0, 3])
            expect(summer(4)).toEqual([1, 0, 3, 0])
            expect(summer(5)).toEqual([1, 0, 3, 0, 5])
            expect(summer(6)).toEqual([1, 0, 3, 0, 5, 0])
            expect(summer(7)).toEqual([1, 0, 3, 0, 5, 0, 7])
        })
    })

    describe('fall', () => {
        it('first note pitch and duration 1, second note with the remaining duration and matching pitch', () => {
            expect(fall(2)).toEqual([1, 1])
            expect(fall(3)).toEqual([1, 2])
            expect(fall(4)).toEqual([1, 3])
            expect(fall(5)).toEqual([1, 4])
            expect(fall(6)).toEqual([1, 5])
            expect(fall(7)).toEqual([1, 6])
        })
    })
})
