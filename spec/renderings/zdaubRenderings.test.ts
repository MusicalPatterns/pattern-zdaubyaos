import { RenderingFunction } from '../../src/types'
import * as to from '../../src/utilities/to'
import zdaubyaosRenderings from '../../src/renderings/zdaubyaosRenderings'
import { Rendering } from '../../src/zdaubyaosTypes'

describe('zdaub renderings', () => {
    describe('glis', () => {
        it('sustains a single note the entire block', () => {
            const glis: RenderingFunction = zdaubyaosRenderings[Rendering.GLIS]
            expect(glis(to.Blocks([2]))).toEqual(to.Contour([
                [2, 2]
            ]))
            expect(glis(to.Blocks([3]))).toEqual(to.Contour([
                [3, 3]
            ]))
            expect(glis(to.Blocks([4]))).toEqual(to.Contour([
                [4, 4]
            ]))
            expect(glis(to.Blocks([5]))).toEqual(to.Contour([
                [5, 5]
            ]))
            expect(glis(to.Blocks([6]))).toEqual(to.Contour([
                [6, 6]
            ]))
            expect(glis(to.Blocks([7]))).toEqual(to.Contour([
                [7, 7]
            ]))
        })
    })

    describe('trem', () => {
        it('fills the block with x notes of duration 1 with pitch x each', () => {
            const trem: RenderingFunction = zdaubyaosRenderings[Rendering.TREM]
            expect(trem(to.Blocks([2]))).toEqual(to.Contour([
                [2, 1], [2, 1],
            ]))
            expect(trem(to.Blocks([3]))).toEqual(to.Contour([
                [3, 1], [3, 1], [3, 1],
            ]))
            expect(trem(to.Blocks([4]))).toEqual(to.Contour([
                [4, 1], [4, 1], [4, 1], [4, 1],
            ]))
            expect(trem(to.Blocks([5]))).toEqual(to.Contour([
                [5, 1], [5, 1], [5, 1], [5, 1], [5, 1],
            ]))
            expect(trem(to.Blocks([6]))).toEqual(to.Contour([
                [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1],
            ]))
            expect(trem(to.Blocks([7]))).toEqual(to.Contour([
                [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1],
            ]))
        })
    })

    describe('bony', () => {
        describe('when the sum of the blocks is 15', () => {
            it('alternates rhythmically 1 and 2', () => {
                const bony: RenderingFunction = zdaubyaosRenderings[Rendering.BONY]
                expect(bony(to.Blocks([1, 2, 3, 4, 5]))).toEqual(to.Contour([
                    [1, 1], [2, 2], [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [5, 2], [5, 1], [5, 2],
                ]))
            })
        })

        describe('when the sum of the blocks is 24', () => {
            it('alternates rhythmically 1 and 3', () => {
                const bony: RenderingFunction = zdaubyaosRenderings[Rendering.BONY]
                expect(bony(to.Blocks([9, 7, 5, 3]))).toEqual(to.Contour([
                    [9, 1], [9, 3], [9, 1], [9, 3], [9, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
                ]))
            })
        })
    })
})
