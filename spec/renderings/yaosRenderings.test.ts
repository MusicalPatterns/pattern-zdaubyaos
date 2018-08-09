import yaosRenderings from '../../src/renderings/yaosRenderings'
import { RenderingFunction } from '../../src/types'
import * as to from '../../src/utilities/to'
import { YaosRendering } from '../../src/zdaubyaosTypes'

describe('yaos renderings', () => {
    describe('spring', () => {
        it('ascends from 1, by 1, muting the 1 itself', () => {
            const spring: RenderingFunction = yaosRenderings[YaosRendering.SPRING]
            expect(spring(to.Blocks([2]))).toEqual(to.Contour([
                [0, 1], [2, 1],
            ]))
            expect(spring(to.Blocks([3]))).toEqual(to.Contour([
                [0, 1], [2, 1], [3, 1],
            ]))
            expect(spring(to.Blocks([4]))).toEqual(to.Contour([
                [0, 1], [2, 1], [3, 1], [4, 1],
            ]))
            expect(spring(to.Blocks([5]))).toEqual(to.Contour([
                [0, 1], [2, 1], [3, 1], [4, 1], [5, 1],
            ]))
            expect(spring(to.Blocks([6]))).toEqual(to.Contour([
                [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
            ]))
            expect(spring(to.Blocks([7]))).toEqual(to.Contour([
                [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1],
            ]))
        })
    })

    describe('summer', () => {
        it('ascends from 1, by 1, muting all evens', () => {
            const summer: RenderingFunction = yaosRenderings[YaosRendering.SUMMER]
            expect(summer(to.Blocks([2]))).toEqual(to.Contour([
                [1, 1], [0, 1],
            ]))
            expect(summer(to.Blocks([3]))).toEqual(to.Contour([
                [1, 1], [0, 1], [3, 1],
            ]))
            expect(summer(to.Blocks([4]))).toEqual(to.Contour([
                [1, 1], [0, 1], [3, 1], [0, 1],
            ]))
            expect(summer(to.Blocks([5]))).toEqual(to.Contour([
                [1, 1], [0, 1], [3, 1], [0, 1], [5, 1],
            ]))
            expect(summer(to.Blocks([6]))).toEqual(to.Contour([
                [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1],
            ]))
            expect(summer(to.Blocks([7]))).toEqual(to.Contour([
                [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1], [7, 1],
            ]))
        })
    })

    describe('fall', () => {
        it('first note pitch and duration 1, second note with the remaining duration and matching pitch', () => {
            const fall: RenderingFunction = yaosRenderings[YaosRendering.FALL]
            expect(fall(to.Blocks([2]))).toEqual(to.Contour([
                [1, 1], [1, 1],
            ]))
            expect(fall(to.Blocks([3]))).toEqual(to.Contour([
                [1, 1], [2, 2],
            ]))
            expect(fall(to.Blocks([4]))).toEqual(to.Contour([
                [1, 1], [3, 3],
            ]))
            expect(fall(to.Blocks([5]))).toEqual(to.Contour([
                [1, 1], [4, 4],
            ]))
            expect(fall(to.Blocks([6]))).toEqual(to.Contour([
                [1, 1], [5, 5],
            ]))
            expect(fall(to.Blocks([7]))).toEqual(to.Contour([
                [1, 1], [6, 6],
            ]))
        })
    })

    describe('summery spring', () => {
        it('has the same pattern of mutes as spring with the pitches from summer', () => {
            const summerySpring: RenderingFunction = yaosRenderings[YaosRendering.SUMMERY_SPRING]
            expect(summerySpring(to.Blocks([2]))).toEqual(to.Contour([
                [0, 1], [1, 1],
            ]))
            expect(summerySpring(to.Blocks([3]))).toEqual(to.Contour([
                [0, 1], [1, 1], [3, 1],
            ]))
            expect(summerySpring(to.Blocks([4]))).toEqual(to.Contour([
                [0, 1], [1, 1], [3, 1], [5, 1],
            ]))
            expect(summerySpring(to.Blocks([5]))).toEqual(to.Contour([
                [0, 1], [1, 1], [3, 1], [5, 1], [7, 1],
            ]))
            expect(summerySpring(to.Blocks([6]))).toEqual(to.Contour([
                [0, 1], [1, 1], [3, 1], [5, 1], [7, 1], [9, 1],
            ]))
            expect(summerySpring(to.Blocks([7]))).toEqual(to.Contour([
                [0, 1], [1, 1], [3, 1], [5, 1], [7, 1], [9, 1], [11, 1],
            ]))
        })
    })

    describe('springy summer', () => {
        it('has the same pattern of mutes as summer with the pitches from spring', () => {
            const springySummer: RenderingFunction = yaosRenderings[YaosRendering.SPRINGY_SUMMER]
            expect(springySummer(to.Blocks([2]))).toEqual(to.Contour([
                [2, 1], [0, 1],
            ]))
            expect(springySummer(to.Blocks([3]))).toEqual(to.Contour([
                [2, 1], [0, 1], [3, 1],
            ]))
            expect(springySummer(to.Blocks([4]))).toEqual(to.Contour([
                [2, 1], [0, 1], [3, 1], [0, 1],
            ]))
            expect(springySummer(to.Blocks([5]))).toEqual(to.Contour([
                [2, 1], [0, 1], [3, 1], [0, 1], [4, 1],
            ]))
            expect(springySummer(to.Blocks([6]))).toEqual(to.Contour([
                [2, 1], [0, 1], [3, 1], [0, 1], [4, 1], [0, 1],
            ]))
            expect(springySummer(to.Blocks([7]))).toEqual(to.Contour([
                [2, 1], [0, 1], [3, 1], [0, 1], [4, 1], [0, 1], [5, 1],
            ]))
        })
    })
})
