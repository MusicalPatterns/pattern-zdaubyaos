import * as to from '../../src/utilities/to'
import { BarTarget, BlockStyle, Rendering } from '../../src/zdaubyaosTypes'
import {
    inaiiiVarietyContour,
    zdaubyaosContoursByBarTargetBlockStyleThenRendering
} from '../../src/contours/zdaubyaosContours'

describe('yaos contours', () => {
    describe('of duration 15', () => {
        describe('spring renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.UMOW][Rendering.SPRING]).toEqual(to.Contour([
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                    ]))
                })

                it('handles chuwow spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.CHUWOW][Rendering.SPRING]).toEqual(to.Contour([
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1],
                    ]))
                })

                it('handles iest spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.IEST][Rendering.SPRING]).toEqual(to.Contour([
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1],
                    ]))
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.INAI][Rendering.SPRING]).toEqual(to.Contour([
                        [0, 1], [2, 1], [3, 1], [4, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1],
                        [0, 1], [2, 1], [3, 1],
                    ]))
                })

                it('handles djiyai spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.DJIYAI][Rendering.SPRING]).toEqual(to.Contour([
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1],
                    ]))
                })

                it('handles ouzd spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.OUZD][Rendering.SPRING]).toEqual(to.Contour([
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1],
                    ]))
                })
            })
        })

        describe('summer renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow summer', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.UMOW][Rendering.SUMMER]).toEqual(to.Contour([
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                    ]))
                })

                it('handles chuwow summer', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.CHUWOW][Rendering.SUMMER]).toEqual(to.Contour([
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1],
                    ]))
                })

                it('handles iest summer', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.IEST][Rendering.SUMMER]).toEqual(to.Contour([
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1],
                    ]))
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai summer', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.INAI][Rendering.SUMMER]).toEqual(to.Contour([
                        [1, 1], [0, 1], [3, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1],
                    ]))
                })

                it('handles djiyai summer', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.DJIYAI][Rendering.SUMMER]).toEqual(to.Contour([
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1], [7, 1],
                    ]))
                })

                it('handles ouzd summer', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.OUZD][Rendering.SUMMER]).toEqual(to.Contour([
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1], [7, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1], [7, 1],
                    ]))
                })
            })
        })

        describe('fall renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow fall', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.UMOW][Rendering.FALL]).toEqual(to.Contour([
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                    ]))
                })

                it('handles chuwow fall', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.CHUWOW][Rendering.FALL]).toEqual(to.Contour([
                        [1, 1], [2, 2],
                        [1, 1], [3, 3],
                        [1, 1], [2, 2],
                        [1, 1], [4, 4],
                    ]))
                })

                it('handles iest fall', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.IEST][Rendering.FALL]).toEqual(to.Contour([
                        [1, 1], [4, 4],
                        [1, 1], [4, 4],
                        [1, 1], [4, 4],
                    ]))
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai fall', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.INAI][Rendering.FALL]).toEqual(to.Contour([
                        [1, 1], [3, 3],
                        [1, 1], [3, 3],
                        [1, 1], [3, 3],
                        [1, 1], [2, 2],
                    ]))
                })

                it('handles djiyai fall', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.DJIYAI][Rendering.FALL]).toEqual(to.Contour([
                        [1, 1], [2, 2],
                        [1, 1], [4, 4],
                        [1, 1], [6, 6],
                    ]))
                })

                it('handles ouzd fall', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.OUZD][Rendering.FALL]).toEqual(to.Contour([
                        [1, 1], [7, 7],
                        [1, 1], [6, 6],
                    ]))
                })
            })
        })

        describe('summery spring renderings', () => {
            describe('umowchuwowiest blocks', () => {
                it('handles umow summery spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.UMOW][Rendering.SUMMERY_SPRING]).toEqual(to.Contour([
                        [0, 1], [1, 1], [3, 1],
                        [0, 1], [1, 1], [3, 1],
                        [0, 1], [1, 1], [3, 1],
                        [0, 1], [1, 1], [3, 1],
                        [0, 1], [1, 1], [3, 1],
                    ]))
                })

                it('handles chuwow summery spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.CHUWOW][Rendering.SUMMERY_SPRING]).toEqual(to.Contour([
                        [0, 1], [1, 1], [3, 1],
                        [0, 1], [1, 1], [3, 1], [5, 1],
                        [0, 1], [1, 1], [3, 1],
                        [0, 1], [1, 1], [3, 1], [5, 1], [7, 1],
                    ]))
                })

                it('handles iest summery spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.IEST][Rendering.SUMMERY_SPRING]).toEqual(to.Contour([
                        [0, 1], [1, 1], [3, 1], [5, 1], [7, 1],
                        [0, 1], [1, 1], [3, 1], [5, 1], [7, 1],
                        [0, 1], [1, 1], [3, 1], [5, 1], [7, 1],
                    ]))
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai summery spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.INAI][Rendering.SUMMERY_SPRING]).toEqual(to.Contour([
                        [0, 1], [1, 1], [3, 1], [5, 1],
                        [0, 1], [1, 1], [3, 1], [5, 1],
                        [0, 1], [1, 1], [3, 1], [5, 1],
                        [0, 1], [1, 1], [3, 1],
                    ]))
                })

                it('handles djiyai summery spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.DJIYAI][Rendering.SUMMERY_SPRING]).toEqual(to.Contour([
                        [0, 1], [1, 1], [3, 1],
                        [0, 1], [1, 1], [3, 1], [5, 1], [7, 1],
                        [0, 1], [1, 1], [3, 1], [5, 1], [7, 1], [9, 1], [11, 1],
                    ]))
                })

                it('handles ouzd summery spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.OUZD][Rendering.SUMMERY_SPRING]).toEqual(to.Contour([
                        [0, 1], [1, 1], [3, 1], [5, 1], [7, 1], [9, 1], [11, 1], [13, 1],
                        [0, 1], [1, 1], [3, 1], [5, 1], [7, 1], [9, 1], [11, 1],
                    ]))
                })
            })
        })
    })

    describe('of duration 24', () => {
        describe('spring renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.UMOW][Rendering.SPRING]).toEqual(to.Contour([
                        [0, 1], [2, 1], [3, 1], [4, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1],
                    ]))
                })

                it('handles chuwow spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.CHUWOW][Rendering.SPRING]).toEqual(to.Contour([
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1],
                    ]))
                })

                it('handles iest spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.IEST][Rendering.SPRING]).toEqual(to.Contour([
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
                    ]))
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.INAI][Rendering.SPRING]).toEqual(to.Contour([
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                    ]))
                })

                it('handles djiyai spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.DJIYAI][Rendering.SPRING]).toEqual(to.Contour([
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1],
                    ]))
                })

                it('handles ouzd spring', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.OUZD][Rendering.SPRING]).toEqual(to.Contour([
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1],
                        [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1],
                    ]))
                })
            })
        })

        describe('summer renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow summer', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.UMOW][Rendering.SUMMER]).toEqual(to.Contour([
                        [1, 1], [0, 1], [3, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1],
                    ]))
                })

                it('handles chuwow summer', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.CHUWOW][Rendering.SUMMER]).toEqual(to.Contour([
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1],
                    ]))
                })

                it('handles iest summer', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.IEST][Rendering.SUMMER]).toEqual(to.Contour([
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1],
                    ]))
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai summer', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.INAI][Rendering.SUMMER]).toEqual(to.Contour([
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                    ]))
                })

                it('handles djiyai summer', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.DJIYAI][Rendering.SUMMER]).toEqual(to.Contour([
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1], [7, 1],
                    ]))
                })

                it('handles ouzd summer', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.OUZD][Rendering.SUMMER]).toEqual(to.Contour([
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1], [7, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1], [7, 1], [0, 1],
                        [1, 1], [0, 1], [3, 1], [0, 1], [5, 1], [0, 1], [7, 1], [0, 1],
                    ]))
                })
            })
        })

        describe('fall renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow fall', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.UMOW][Rendering.FALL]).toEqual(to.Contour([
                        [1, 1], [3, 3],
                        [1, 1], [3, 3],
                        [1, 1], [3, 3],
                        [1, 1], [3, 3],
                        [1, 1], [3, 3],
                        [1, 1], [3, 3],
                    ]))
                })

                it('handles chuwow fall', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.CHUWOW][Rendering.FALL]).toEqual(to.Contour([
                        [1, 1], [2, 2],
                        [1, 1], [3, 3],
                        [1, 1], [4, 4],
                        [1, 1], [2, 2],
                        [1, 1], [4, 4],
                        [1, 1], [3, 3],
                    ]))
                })

                it('handles iest fall', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.IEST][Rendering.FALL]).toEqual(to.Contour([
                        [1, 1], [5, 5],
                        [1, 1], [5, 5],
                        [1, 1], [5, 5],
                        [1, 1], [5, 5],
                    ]))
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai fall', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.INAI][Rendering.FALL]).toEqual(to.Contour([
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                    ]))
                })

                it('handles djiyai fall', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.DJIYAI][Rendering.FALL]).toEqual(to.Contour([
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                        [1, 1], [4, 4],
                        [1, 1], [2, 2],
                        [1, 1], [2, 2],
                        [1, 1], [6, 6],
                    ]))
                })

                it('handles ouzd fall', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.OUZD][Rendering.FALL]).toEqual(to.Contour([
                        [1, 1], [7, 7],
                        [1, 1], [7, 7],
                        [1, 1], [7, 7],
                    ]))
                })
            })
        })

        describe('other renderings', () => {
            it('handles inaiii variety', () => {
                expect(inaiiiVarietyContour).toEqual(to.Contour([
                    [0, 1], [2, 1], [3, 1],
                    [1, 1], [0, 1], [3, 1],
                    [0, 1], [2, 1], [3, 1],
                    [1, 1], [0, 1], [3, 1],
                    [0, 1], [2, 1], [3, 1],
                    [1, 1], [0, 1], [3, 1],
                    [1, 1], [2, 2],
                    [1, 1], [2, 2],
                ]))
            })
        })
    })
})
