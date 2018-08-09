import { zdaubContoursByBarDurationBlockStyleThenRendering } from '../../src/contours/zdaubContours'
import { BarDuration, ZdaubBlockStyle, ZdaubRendering } from '../../src/zdaubyaosTypes'
import * as to from '../../src/utilities/to'

describe('zdaub contours', () => {
    describe('of duration 15', () => {
        describe('glis renderings', () => {
            it('handles nodle', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][ZdaubBlockStyle.NODLE][ZdaubRendering.GLIS]).toEqual(to.Contour([
                    3, 4, 3, 2, 1, 2,
                ]))
            })

            it('handles limin', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][ZdaubBlockStyle.LIMIN][ZdaubRendering.GLIS]).toEqual(to.Contour([
                    3, 4, 3, 2, 3,
                ]))
            })

            it('handles scend', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][ZdaubBlockStyle.SCEND][ZdaubRendering.GLIS]).toEqual(to.Contour([
                    4, 5, 6,
                    7, 8,
                    9, 10, 11,
                    // Lasts 2 bars
                ]))
            })
        })

        describe('trem renderings', () => {
            it('handles nodle', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][ZdaubBlockStyle.NODLE][ZdaubRendering.TREM]).toEqual(to.Contour([
                    3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 2, 2,
                ]))
            })

            it('handles limin', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][ZdaubBlockStyle.LIMIN][ZdaubRendering.TREM]).toEqual(to.Contour([
                    3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 3, 3, 3,
                ]))
            })

            it('handles scend', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][ZdaubBlockStyle.SCEND][ZdaubRendering.TREM]).toEqual(to.Contour([
                    4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6,
                    7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8,
                    9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10,
                    10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                ]))
            })
        })

        describe('bony renderings', () => {
            it('handles nodle', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][ZdaubBlockStyle.NODLE][ZdaubRendering.BONY]).toEqual(to.ManualContour([
                    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [1, 1], [2, 2],
                ]))
            })

            it('handles limin', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][ZdaubBlockStyle.LIMIN][ZdaubRendering.BONY]).toEqual(to.ManualContour([
                    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [3, 1], [3, 2],
                ]))
            })

            it('handles scend', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][ZdaubBlockStyle.SCEND][ZdaubRendering.BONY]).toEqual(to.ManualContour([
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
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][ZdaubBlockStyle.NODLE][ZdaubRendering.GLIS]).toEqual(to.Contour([
                    1, 3, 5, 7, 5, 3,
                ]))
            })

            it('handles limin', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][ZdaubBlockStyle.LIMIN][ZdaubRendering.GLIS]).toEqual(to.Contour([
                    9, 7, 5, 3,
                ]))
            })

            it('handles scend', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][ZdaubBlockStyle.SCEND][ZdaubRendering.GLIS]).toEqual(to.Contour([
                    13, 11
                    // Lasts 2 bars
                ]))
            })
        })

        describe('trem renderings', () => {
            it('handles nodle', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][ZdaubBlockStyle.NODLE][ZdaubRendering.TREM]).toEqual(to.Contour([
                    1, 3, 3, 3, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 3, 3, 3,
                ]))
            })

            it('handles limin', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][ZdaubBlockStyle.LIMIN][ZdaubRendering.TREM]).toEqual(to.Contour([
                    9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 3, 3, 3,
                ]))
            })

            it('handles scend', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][ZdaubBlockStyle.SCEND][ZdaubRendering.TREM]).toEqual(to.Contour([
                    13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                    // Lasts 2 bars
                ]))
            })
        })

        describe('bony renderings', () => {
            it('handles nodle', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][ZdaubBlockStyle.NODLE][ZdaubRendering.BONY]).toEqual(to.ManualContour([
                    [1, 1], [3, 3], [5, 1], [5, 3], [5, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
                ]))
            })

            it('handles limin', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][ZdaubBlockStyle.LIMIN][ZdaubRendering.BONY]).toEqual(to.ManualContour([
                    [9, 1], [9, 3], [9, 1], [9, 3], [9, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
                ]))
            })

            it('handles scend', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][ZdaubBlockStyle.SCEND][ZdaubRendering.BONY]).toEqual(to.ManualContour([
                    [13, 1], [13, 3], [13, 1], [13, 3], [13, 1], [13, 3], [13, 1], [11, 3], [11, 1], [11, 3], [11, 1], [11, 3],
                ]))
            })
        })
    })
})