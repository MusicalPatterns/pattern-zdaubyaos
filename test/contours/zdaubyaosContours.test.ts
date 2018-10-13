import * as from from '../../../../src/utilities/from'
import {
    getZdaubyaosContours,
    inaiiiVarietyContour, zdaubGlisVariantContour,
    zdaubyaosContoursByBarTargetBlockStyleThenRendering,
} from '../../src/contours/zdaubyaosContours'
import { BarTarget, BlockStyle, Contour, Rendering } from '../../src/types'
import calculateContourDuration from '../../src/utilities/calculateContourDuration'
import * as to from '../../src/utilities/to'

describe('zdaubyaos contours', () => {
    describe('zdaub contours', () => {
        describe('of duration 15', () => {
            describe('glis renderings', () => {
                it('handles nodle', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.NODLE][Rendering.GLIS]).toEqual(to.Contour([
                        [ 3, 3 ], [ 4, 4 ], [ 3, 3 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ],
                    ]))
                })

                it('handles limin', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.LIMIN][Rendering.GLIS]).toEqual(to.Contour([
                        [ 3, 3 ], [ 4, 4 ], [ 3, 3 ], [ 2, 2 ], [ 3, 3 ],
                    ]))
                })

                it('handles scend', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.SCEND][Rendering.GLIS]).toEqual(to.Contour([
                        [ 4, 4 ], [ 5, 5 ], [ 6, 6 ],
                        [ 7, 7 ], [ 8, 8 ],
                        [ 9, 9 ], [ 10, 10 ], [ 11, 11 ],
                        // Lasts 2 bars
                    ]))
                })
            })

            describe('trem renderings', () => {
                it('handles nodle', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.NODLE][Rendering.TREM]).toEqual(to.Contour([
                        [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 2, 1 ], [ 2, 1 ], [ 1, 1 ], [ 2, 1 ], [ 2, 1 ],
                    ]))
                })

                it('handles limin', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.LIMIN][Rendering.TREM]).toEqual(to.Contour([
                        [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 2, 1 ], [ 2, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ],
                    ]))
                })

                it('handles scend', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.SCEND][Rendering.TREM]).toEqual(to.Contour([
                        [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ],
                        [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ],
                        [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ],
                        [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ],
                    ]))
                })
            })

            describe('bony renderings', () => {
                it('handles nodle', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.NODLE][Rendering.BONY]).toEqual(to.Contour([
                        [ 3, 1 ], [ 3, 2 ], [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 3, 2 ], [ 3, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ],
                    ]))
                })

                it('handles limin', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.LIMIN][Rendering.BONY]).toEqual(to.Contour([
                        [ 3, 1 ], [ 3, 2 ], [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 3, 2 ], [ 3, 1 ], [ 2, 2 ], [ 3, 1 ], [ 3, 2 ],
                    ]))
                })

                it('handles scend', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.SCEND][Rendering.BONY]).toEqual(to.Contour([
                        [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 5, 2 ], [ 5, 1 ], [ 5, 2 ], [ 6, 1 ], [ 6, 2 ], [ 6, 1 ], [ 6, 2 ],
                        [ 7, 1 ], [ 7, 2 ], [ 7, 1 ], [ 7, 2 ], [ 7, 1 ], [ 8, 2 ], [ 8, 1 ], [ 8, 2 ], [ 8, 1 ], [ 8, 2 ],
                        [ 9, 1 ], [ 9, 2 ], [ 9, 1 ], [ 9, 2 ], [ 9, 1 ], [ 9, 2 ], [ 10, 1 ], [ 10, 2 ], [ 10, 1 ], [ 10, 2 ],
                        [ 10, 1 ], [ 10, 2 ], [ 10, 1 ], [ 11, 2 ], [ 11, 1 ], [ 11, 2 ], [ 11, 1 ], [ 11, 2 ], [ 11, 1 ], [ 11, 2 ],
                    ]))
                })
            })
        })

        describe('of duration 24', () => {
            describe('glis renderings', () => {
                it('handles nodle', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.NODLE][Rendering.GLIS]).toEqual(to.Contour([
                        [ 1, 1 ], [ 3, 3 ], [ 5, 5 ], [ 7, 7 ], [ 5, 5 ], [ 3, 3 ],
                    ]))
                })

                it('handles limin', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.LIMIN][Rendering.GLIS]).toEqual(to.Contour([
                        [ 9, 9 ], [ 7, 7 ], [ 5, 5 ], [ 3, 3 ],
                    ]))
                })

                it('handles scend', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.SCEND][Rendering.GLIS]).toEqual(to.Contour([
                        [ 13, 13 ], [ 11, 11 ],
                        // Lasts 2 bars
                    ]))
                })
            })

            describe('trem renderings', () => {
                it('handles nodle', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.NODLE][Rendering.TREM]).toEqual(to.Contour([
                        [ 1, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ],
                    ]))
                })

                it('handles limin', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.LIMIN][Rendering.TREM]).toEqual(to.Contour([
                        [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ],
                    ]))
                })

                it('handles scend', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.SCEND][Rendering.TREM]).toEqual(to.Contour([
                        [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ],
                        // Lasts 2 bars
                    ]))
                })
            })

            describe('bony renderings', () => {
                it('handles nodle', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.NODLE][Rendering.BONY]).toEqual(to.Contour([
                        [ 1, 1 ], [ 3, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 7, 3 ], [ 7, 1 ], [ 7, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 3, 3 ],
                    ]))
                })

                it('handles limin', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.LIMIN][Rendering.BONY]).toEqual(to.Contour([
                        [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 7, 3 ], [ 7, 1 ], [ 7, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 3, 3 ],
                    ]))
                })

                it('handles scend', () => {
                    expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.SCEND][Rendering.BONY]).toEqual(to.Contour([
                        [ 13, 1 ], [ 13, 3 ], [ 13, 1 ], [ 13, 3 ], [ 13, 1 ], [ 13, 3 ], [ 13, 1 ], [ 11, 3 ], [ 11, 1 ], [ 11, 3 ], [ 11, 1 ], [ 11, 3 ],
                    ]))
                })
            })
        })

        describe('other durations', () => {
            it('handles glis variant', () => {
                expect(zdaubGlisVariantContour).toEqual(to.Contour([
                    [ 4, 4 ], [ 5, 5 ], [ 6, 6 ],
                    [ 7, 7 ], [ 8, 8 ],
                    [ 9, 9 ], [ 8, 8 ],
                    [ 6, 6 ], [ 4, 4 ], [ 2, 2 ], [ 4, 4 ], [ 6, 6 ],
                    [ 8, 8 ], [ 6, 6 ], [ 4, 4 ], [ 2, 2 ], [ 4, 4 ],
                    [ 6, 6 ], [ 4, 4 ], [ 2, 2 ], [ 4, 4 ], [ 6, 6 ],
                    [ 8, 8 ], [ 6, 6 ], [ 4, 4 ], [ 2, 2 ], [ 4, 4 ], [ 2, 2 ],
                ]))
            })
        })
    })

    describe('yaos contours', () => {
        describe('of duration 15', () => {
            it('is true that when rendered with certain renderings their durations are multiples of 15', () => {
                Object.entries(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN]).forEach(
                    // @ts-ignore
                    ([ blockStyle, contoursByRendering ]: [BlockStyle, { [x in Rendering]: Contour }]): void => {
                        // @ts-ignore
                        Object.entries(contoursByRendering).forEach(([ rendering, contours ]: [Rendering, Contour]) => {
                            switch (rendering) {
                                case Rendering.SPRING:
                                case Rendering.SUMMER:
                                case Rendering.FALL:
                                case Rendering.SUMMERY_SPRING:
                                case Rendering.SPRINGY_SUMMER:
                                    expect(from.Time(calculateContourDuration(contours)) % 15).toBe(0, `rendering ${blockStyle} as ${rendering}`)
                                    break
                                default:
                            }
                        })
                    })
            })

            describe('spring renderings', () => {
                describe('umowchuowiest blocks', () => {
                    it('handles umow spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.UMOW][Rendering.SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                        ]))
                    })

                    it('handles chuwow spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.CHUWOW][Rendering.SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                        ]))
                    })

                    it('handles iest spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.IEST][Rendering.SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                        ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.INAI][Rendering.SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                        ]))
                    })

                    it('handles djiyai spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.DJIYAI][Rendering.SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ],
                        ]))
                    })

                    it('handles ouzd spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.OUZD][Rendering.SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ],
                        ]))
                    })
                })
            })

            describe('summer renderings', () => {
                describe('umowchuowiest blocks', () => {
                    it('handles umow summer', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.UMOW][Rendering.SUMMER]).toEqual(to.Contour([
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                        ]))
                    })

                    it('handles chuwow summer', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.CHUWOW][Rendering.SUMMER]).toEqual(to.Contour([
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                        ]))
                    })

                    it('handles iest summer', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.IEST][Rendering.SUMMER]).toEqual(to.Contour([
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                        ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai summer', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.INAI][Rendering.SUMMER]).toEqual(to.Contour([
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                        ]))
                    })

                    it('handles djiyai summer', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.DJIYAI][Rendering.SUMMER]).toEqual(to.Contour([
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ],
                        ]))
                    })

                    it('handles ouzd summer', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.OUZD][Rendering.SUMMER]).toEqual(to.Contour([
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ],
                        ]))
                    })
                })
            })

            describe('fall renderings', () => {
                describe('umowchuowiest blocks', () => {
                    it('handles umow fall', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.UMOW][Rendering.FALL]).toEqual(to.Contour([
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                        ]))
                    })

                    it('handles chuwow fall', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.CHUWOW][Rendering.FALL]).toEqual(to.Contour([
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 3, 3 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 4, 4 ],
                        ]))
                    })

                    it('handles iest fall', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.IEST][Rendering.FALL]).toEqual(to.Contour([
                            [ 1, 1 ], [ 4, 4 ],
                            [ 1, 1 ], [ 4, 4 ],
                            [ 1, 1 ], [ 4, 4 ],
                        ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai fall', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.INAI][Rendering.FALL]).toEqual(to.Contour([
                            [ 1, 1 ], [ 3, 3 ],
                            [ 1, 1 ], [ 3, 3 ],
                            [ 1, 1 ], [ 3, 3 ],
                            [ 1, 1 ], [ 2, 2 ],
                        ]))
                    })

                    it('handles djiyai fall', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.DJIYAI][Rendering.FALL]).toEqual(to.Contour([
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 4, 4 ],
                            [ 1, 1 ], [ 6, 6 ],
                        ]))
                    })

                    it('handles ouzd fall', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.OUZD][Rendering.FALL]).toEqual(to.Contour([
                            [ 1, 1 ], [ 7, 7 ],
                            [ 1, 1 ], [ 6, 6 ],
                        ]))
                    })
                })
            })

            describe('summery spring renderings', () => {
                describe('umowchuwowiest blocks', () => {
                    it('handles umow summery spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.UMOW][Rendering.SUMMERY_SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                        ]))
                    })

                    it('handles chuwow summery spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.CHUWOW][Rendering.SUMMERY_SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                        ]))
                    })

                    it('handles iest summery spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.IEST][Rendering.SUMMERY_SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                        ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai summery spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.INAI][Rendering.SUMMERY_SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                        ]))
                    })

                    it('handles djiyai summery spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.DJIYAI][Rendering.SUMMERY_SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 11, 1 ],
                        ]))
                    })

                    it('handles ouzd summery spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN][BlockStyle.OUZD][Rendering.SUMMERY_SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 11, 1 ], [ 13, 1 ],
                            [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 11, 1 ],
                        ]))
                    })
                })
            })
        })

        describe('of duration 24', () => {
            it('is true that when rendered with certain renderings their durations are multiples of 24', () => {
                Object.entries(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR]).forEach(
                    // @ts-ignore
                    ([ blockStyle, contoursByRendering ]: [BlockStyle, { [x in Rendering]: Contour }]): void => {
                        // @ts-ignore
                        Object.entries(contoursByRendering).forEach(([ rendering, contours ]: [Rendering, Contour]): void => {
                            switch (rendering) {
                                case Rendering.GLIS:
                                case Rendering.TREM:
                                    expect(from.Time(calculateContourDuration(contours)) % 24).toBe(0, `rendering ${blockStyle} as ${rendering}`)
                                    break
                                case Rendering.BONY:
                                    switch (blockStyle) {
                                        case BlockStyle.CHUWOW:
                                        case BlockStyle.DJIYAI:
                                        case BlockStyle.IEST:
                                        case BlockStyle.INAI:
                                            break
                                        default:
                                            expect(from.Time(calculateContourDuration(contours)) % 24).toBe(0, `rendering ${blockStyle} as ${rendering}`)
                                    }
                                    break
                                default:
                            }
                        })
                    })
            })

            describe('spring renderings', () => {
                describe('umowchuowiest blocks', () => {
                    it('handles umow spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.UMOW][Rendering.SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                        ]))
                    })

                    it('handles chuwow spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.CHUWOW][Rendering.SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                        ]))
                    })

                    it('handles iest spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.IEST][Rendering.SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                        ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.INAI][Rendering.SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                        ]))
                    })

                    it('handles djiyai spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.DJIYAI][Rendering.SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ],
                        ]))
                    })

                    it('handles ouzd spring', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.OUZD][Rendering.SPRING]).toEqual(to.Contour([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
                        ]))
                    })
                })
            })

            describe('summer renderings', () => {
                describe('umowchuowiest blocks', () => {
                    it('handles umow summer', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.UMOW][Rendering.SUMMER]).toEqual(to.Contour([
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                        ]))
                    })

                    it('handles chuwow summer', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.CHUWOW][Rendering.SUMMER]).toEqual(to.Contour([
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                        ]))
                    })

                    it('handles iest summer', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.IEST][Rendering.SUMMER]).toEqual(to.Contour([
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ],
                        ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai summer', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.INAI][Rendering.SUMMER]).toEqual(to.Contour([
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                        ]))
                    })

                    it('handles djiyai summer', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.DJIYAI][Rendering.SUMMER]).toEqual(to.Contour([
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ],
                        ]))
                    })

                    it('handles ouzd summer', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.OUZD][Rendering.SUMMER]).toEqual(to.Contour([
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ], [ 0, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ], [ 0, 1 ],
                        ]))
                    })
                })
            })

            describe('fall renderings', () => {
                describe('umowchuowiest blocks', () => {
                    it('handles umow fall', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.UMOW][Rendering.FALL]).toEqual(to.Contour([
                            [ 1, 1 ], [ 3, 3 ],
                            [ 1, 1 ], [ 3, 3 ],
                            [ 1, 1 ], [ 3, 3 ],
                            [ 1, 1 ], [ 3, 3 ],
                            [ 1, 1 ], [ 3, 3 ],
                            [ 1, 1 ], [ 3, 3 ],
                        ]))
                    })

                    it('handles chuwow fall', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.CHUWOW][Rendering.FALL]).toEqual(to.Contour([
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 3, 3 ],
                            [ 1, 1 ], [ 4, 4 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 4, 4 ],
                            [ 1, 1 ], [ 3, 3 ],
                        ]))
                    })

                    it('handles iest fall', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.IEST][Rendering.FALL]).toEqual(to.Contour([
                            [ 1, 1 ], [ 5, 5 ],
                            [ 1, 1 ], [ 5, 5 ],
                            [ 1, 1 ], [ 5, 5 ],
                            [ 1, 1 ], [ 5, 5 ],
                        ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai fall', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.INAI][Rendering.FALL]).toEqual(to.Contour([
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                        ]))
                    })

                    it('handles djiyai fall', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.DJIYAI][Rendering.FALL]).toEqual(to.Contour([
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 4, 4 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 6, 6 ],
                        ]))
                    })

                    it('handles ouzd fall', () => {
                        expect(zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.OUZD][Rendering.FALL]).toEqual(to.Contour([
                            [ 1, 1 ], [ 7, 7 ],
                            [ 1, 1 ], [ 7, 7 ],
                            [ 1, 1 ], [ 7, 7 ],
                        ]))
                    })
                })
            })

            describe('other renderings', () => {
                it('handles inaiii variety', () => {
                    expect(inaiiiVarietyContour).toEqual(to.Contour([
                        [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                        [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                        [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                        [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                        [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                        [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                        [ 1, 1 ], [ 2, 2 ],
                        [ 1, 1 ], [ 2, 2 ],
                    ]))
                })
            })
        })

        it('gets the right set of contours out of its stash', () => {
            expect(getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, Rendering.SUMMER)).toEqual(
                zdaubyaosContoursByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.DJIYAI][Rendering.SUMMER],
            )
        })
    })
})
