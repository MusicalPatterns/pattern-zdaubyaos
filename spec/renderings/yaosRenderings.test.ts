import yaosRenderings from '../../src/renderings/yaosRenderings'
import * as to from '../../src/utilities/to'
import { YaosRendering } from '../../src/zdaubyaosTypes'

describe('yaos renderings', () => {
    describe('spring', () => {
        it('ascends from 1, by 1, muting the 1 itself', () => {
            const spring = yaosRenderings[YaosRendering.SPRING]
            expect(spring(to.Blocks([2]))).toEqual(to.Contour([0, 2]))
            expect(spring(to.Blocks([3]))).toEqual(to.Contour([0, 2, 3]))
            expect(spring(to.Blocks([4]))).toEqual(to.Contour([0, 2, 3, 4]))
            expect(spring(to.Blocks([5]))).toEqual(to.Contour([0, 2, 3, 4, 5]))
            expect(spring(to.Blocks([6]))).toEqual(to.Contour([0, 2, 3, 4, 5, 6]))
            expect(spring(to.Blocks([7]))).toEqual(to.Contour([0, 2, 3, 4, 5, 6, 7]))
        })
    })

    describe('summer', () => {
        it('ascends from 1, by 1, muting all evens', () => {
            const summer = yaosRenderings[YaosRendering.SUMMER]
            expect(summer(to.Blocks([2]))).toEqual(to.Contour([1, 0]))
            expect(summer(to.Blocks([3]))).toEqual(to.Contour([1, 0, 3]))
            expect(summer(to.Blocks([4]))).toEqual(to.Contour([1, 0, 3, 0]))
            expect(summer(to.Blocks([5]))).toEqual(to.Contour([1, 0, 3, 0, 5]))
            expect(summer(to.Blocks([6]))).toEqual(to.Contour([1, 0, 3, 0, 5, 0]))
            expect(summer(to.Blocks([7]))).toEqual(to.Contour([1, 0, 3, 0, 5, 0, 7]))
        })
    })

    describe('fall', () => {
        it('first note pitch and duration 1, second note with the remaining duration and matching pitch', () => {
            const fall = yaosRenderings[YaosRendering.FALL]
            expect(fall(to.Blocks([2]))).toEqual(to.Contour([1, 1]))
            expect(fall(to.Blocks([3]))).toEqual(to.Contour([1, 2]))
            expect(fall(to.Blocks([4]))).toEqual(to.Contour([1, 3]))
            expect(fall(to.Blocks([5]))).toEqual(to.Contour([1, 4]))
            expect(fall(to.Blocks([6]))).toEqual(to.Contour([1, 5]))
            expect(fall(to.Blocks([7]))).toEqual(to.Contour([1, 6]))
        })
    })

    describe('summery spring', () => {
        it('has the same pattern of mutes as spring with the pitches from summer', () => {
            let summerySpring = yaosRenderings[YaosRendering.SUMMERY_SPRING]
            expect(summerySpring(to.Blocks([2]))).toEqual(to.Contour([0, 1]))
            expect(summerySpring(to.Blocks([3]))).toEqual(to.Contour([0, 1, 3]))
            expect(summerySpring(to.Blocks([4]))).toEqual(to.Contour([0, 1, 3, 5]))
            expect(summerySpring(to.Blocks([5]))).toEqual(to.Contour([0, 1, 3, 5, 7]))
            expect(summerySpring(to.Blocks([6]))).toEqual(to.Contour([0, 1, 3, 5, 7, 9]))
            expect(summerySpring(to.Blocks([7]))).toEqual(to.Contour([0, 1, 3, 5, 7, 9, 11]))
        })
    })

    describe('springy summer', () => {
        it('has the same pattern of mutes as summer with the pitches from spring', () => {
            let springySummer = yaosRenderings[YaosRendering.SPRINGY_SUMMER]
            expect(springySummer(to.Blocks([2]))).toEqual(to.Contour([2, 0]))
            expect(springySummer(to.Blocks([3]))).toEqual(to.Contour([2, 0, 3]))
            expect(springySummer(to.Blocks([4]))).toEqual(to.Contour([2, 0, 3, 0]))
            expect(springySummer(to.Blocks([5]))).toEqual(to.Contour([2, 0, 3, 0, 4]))
            expect(springySummer(to.Blocks([6]))).toEqual(to.Contour([2, 0, 3, 0, 4, 0]))
            expect(springySummer(to.Blocks([7]))).toEqual(to.Contour([2, 0, 3, 0, 4, 0, 5]))
        })
    })
})
