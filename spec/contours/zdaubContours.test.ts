import * as to from '../../src/utilities/to'
import { BarTarget, BlockStyle, Rendering } from '../../src/zdaubyaosTypes'
import {
    zdaubGlisVariantContour,
    zdaubyaosContoursByBarTargetBlockStyleThenRendering
} from '../../src/contours/zdaubyaosContours'

describe('zdaub contours', () => {
    describe('of duration 15', () => {
        describe('glis renderings', () => {
            it('handles nodle', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.NODLE][Rendering.GLIS]).toEqual(to.Contour([
                    [3, 3], [4, 4], [3, 3], [2, 2], [1, 1], [2, 2],
                ]))
            })

            it('handles limin', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.LIMIN][Rendering.GLIS]).toEqual(to.Contour([
                    [3, 3], [4, 4], [3, 3], [2, 2], [3, 3],
                ]))
            })

            it('handles scend', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.SCEND][Rendering.GLIS]).toEqual(to.Contour([
                    [4, 4], [5, 5], [6, 6],
                    [7, 7], [8, 8],
                    [9, 9], [10, 10], [11, 11],
                    // Lasts 2 bars
                ]))
            })
        })

        describe('trem renderings', () => {
            it('handles nodle', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.NODLE][Rendering.TREM]).toEqual(to.Contour([
                    [3, 1], [3, 1], [3, 1], [4, 1], [4, 1], [4, 1], [4, 1], [3, 1], [3, 1], [3, 1], [2, 1], [2, 1], [1, 1], [2, 1], [2, 1],
                ]))
            })

            it('handles limin', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.LIMIN][Rendering.TREM]).toEqual(to.Contour([
                    [3, 1], [3, 1], [3, 1], [4, 1], [4, 1], [4, 1], [4, 1], [3, 1], [3, 1], [3, 1], [2, 1], [2, 1], [3, 1], [3, 1], [3, 1],
                ]))
            })

            it('handles scend', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.SCEND][Rendering.TREM]).toEqual(to.Contour([
                    [4, 1], [4, 1], [4, 1], [4, 1], [5, 1], [5, 1], [5, 1], [5, 1], [5, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1],
                    [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1],
                    [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1],
                    [10, 1], [10, 1], [10, 1], [10, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1],
                ]))
            })
        })

        describe('bony renderings', () => {
            it('handles nodle', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.NODLE][Rendering.BONY]).toEqual(to.Contour([
                    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [1, 1], [2, 2],
                ]))
            })

            it('handles limin', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.LIMIN][Rendering.BONY]).toEqual(to.Contour([
                    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [3, 1], [3, 2],
                ]))
            })

            it('handles scend', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.SCEND][Rendering.BONY]).toEqual(to.Contour([
                    [4, 1], [4, 2], [4, 1], [5, 2], [5, 1], [5, 2], [6, 1], [6, 2], [6, 1], [6, 2],
                    [7, 1], [7, 2], [7, 1], [7, 2], [7, 1], [8, 2], [8, 1], [8, 2], [8, 1], [8, 2],
                    [9, 1], [9, 2], [9, 1], [9, 2], [9, 1], [9, 2], [10, 1], [10, 2], [10, 1], [10, 2],
                    [10, 1], [10, 2], [10, 1], [11, 2], [11, 1], [11, 2], [11, 1], [11, 2], [11, 1], [11, 2],
                ]))
            })
        })
    })

    describe('of duration 24', () => {
        describe('glis renderings', () => {
            it('handles nodle', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.NODLE][Rendering.GLIS]).toEqual(to.Contour([
                    [1, 1], [3, 3], [5, 5], [7, 7], [5, 5], [3, 3],
                ]))
            })

            it('handles limin', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.LIMIN][Rendering.GLIS]).toEqual(to.Contour([
                    [9, 9], [7, 7], [5, 5], [3, 3],
                ]))
            })

            it('handles scend', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.SCEND][Rendering.GLIS]).toEqual(to.Contour([
                    [13, 13], [11, 11],
                    // Lasts 2 bars
                ]))
            })
        })

        describe('trem renderings', () => {
            it('handles nodle', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.NODLE][Rendering.TREM]).toEqual(to.Contour([
                    [1, 1], [3, 1], [3, 1], [3, 1], [5, 1], [5, 1], [5, 1], [5, 1], [5, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [5, 1], [5, 1], [5, 1], [5, 1], [5, 1], [3, 1], [3, 1], [3, 1],
                ]))
            })

            it('handles limin',  () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.LIMIN][Rendering.TREM]).toEqual(to.Contour([
                    [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [5, 1], [5, 1], [5, 1], [5, 1], [5, 1], [3, 1], [3, 1], [3, 1],
                ]))
            })

            it('handles scend', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.SCEND][Rendering.TREM]).toEqual(to.Contour([
                    [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1],
                    // Lasts 2 bars
                ]))
            })
        })

        describe('bony renderings', () => {
            it('handles nodle', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.NODLE][Rendering.BONY]).toEqual(to.Contour([
                    [1, 1], [3, 3], [5, 1], [5, 3], [5, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
                ]))
            })

            it('handles limin', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.LIMIN][Rendering.BONY]).toEqual(to.Contour([
                    [9, 1], [9, 3], [9, 1], [9, 3], [9, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
                ]))
            })

            it('handles scend', () => {
                expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.SCEND][Rendering.BONY]).toEqual(to.Contour([
                    [13, 1], [13, 3], [13, 1], [13, 3], [13, 1], [13, 3], [13, 1], [11, 3], [11, 1], [11, 3], [11, 1], [11, 3],
                ]))
            })
        })
    })

    describe('other durations', () => {
        it('handles glis variant', () => {
            expect(zdaubGlisVariantContour).toEqual(to.Contour([
                [4, 4], [5, 5], [6, 6],
                [7, 7], [8, 8],
                [9, 9], [8, 8],
                [6, 6], [4, 4], [2, 2], [4, 4], [6, 6],
                [8, 8], [6, 6], [4, 4], [2, 2], [4, 4],
                [6, 6], [4, 4], [2, 2], [4, 4], [6, 6],
                [8, 8], [6, 6], [4, 4], [2, 2], [4, 4], [2, 2],
            ]))
        })
    })
})
