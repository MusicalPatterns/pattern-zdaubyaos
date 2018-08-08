import { inaiiiVariety, yaosContoursByBarDurationBlockStyleThenRendering } from '../../src/contours/yaosContours'
import { BarDuration, BlockStyle, Rendering } from '../../src/types'

describe('yaos contours', () => {
    describe('of duration 15', () => {
        describe('spring renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.UMOW][Rendering.SPRING]).toEqual([
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3,
                    ])
                })

                it('handles chuwow spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.CHUWOW][Rendering.SPRING]).toEqual([
                        0, 2, 3,
                        0, 2, 3, 4,
                        0, 2, 3,
                        0, 2, 3, 4, 5,
                    ])
                })

                it('handles iest spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.IEST][Rendering.SPRING]).toEqual([
                        0, 2, 3, 4, 5,
                        0, 2, 3, 4, 5,
                        0, 2, 3, 4, 5,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.INAI][Rendering.SPRING]).toEqual([
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3,
                    ])
                })

                it('handles djiyai spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.DJIYAI][Rendering.SPRING]).toEqual([
                        0, 2, 3,
                        0, 2, 3, 4, 5,
                        0, 2, 3, 4, 5, 6, 7,
                    ])
                })

                it('handles ouzd spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.OUZD][Rendering.SPRING]).toEqual([
                        0, 2, 3, 4, 5, 6, 7, 8,
                        0, 2, 3, 4, 5, 6, 7,
                    ])
                })
            })
        })

        describe('summer renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow summer', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.UMOW][Rendering.SUMMER]).toEqual([
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3,
                    ])
                })

                it('handles chuwow summer', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.CHUWOW][Rendering.SUMMER]).toEqual([
                        1, 0, 3,
                        1, 0, 3, 0,
                        1, 0, 3,
                        1, 0, 3, 0, 5,
                    ])
                })

                it('handles iest summer', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.IEST][Rendering.SUMMER]).toEqual([
                        1, 0, 3, 0, 5,
                        1, 0, 3, 0, 5,
                        1, 0, 3, 0, 5,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai summer', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.INAI][Rendering.SUMMER]).toEqual([
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3,
                    ])
                })

                it('handles djiyai summer', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.DJIYAI][Rendering.SUMMER]).toEqual([
                        1, 0, 3,
                        1, 0, 3, 0, 5,
                        1, 0, 3, 0, 5, 0, 7,
                    ])
                })

                it('handles ouzd summer', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.OUZD][Rendering.SUMMER]).toEqual([
                        1, 0, 3, 0, 5, 0, 7, 0,
                        1, 0, 3, 0, 5, 0, 7,
                    ])
                })
            })
        })

        describe('fall renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow fall', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.UMOW][Rendering.FALL]).toEqual([
                        1, 2,
                        1, 2,
                        1, 2,
                        1, 2,
                        1, 2,
                    ])
                })

                it('handles chuwow fall', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.CHUWOW][Rendering.FALL]).toEqual([
                        1, 2,
                        1, 3,
                        1, 2,
                        1, 4,
                    ])
                })

                it('handles iest fall', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.IEST][Rendering.FALL]).toEqual([
                        1, 4,
                        1, 4,
                        1, 4,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai fall', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.INAI][Rendering.FALL]).toEqual([
                        1, 3,
                        1, 3,
                        1, 3,
                        1, 2,
                    ])
                })

                it('handles djiyai fall', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.DJIYAI][Rendering.FALL]).toEqual([
                        1, 2,
                        1, 4,
                        1, 6,
                    ])
                })

                it('handles ouzd fall', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.OUZD][Rendering.FALL]).toEqual([
                        1, 7,
                        1, 6,
                    ])
                })
            })
        })

        describe('summery spring renderings', () => {
            describe('umowchuwowiest blocks', () => {
                it('handles umow summery spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.UMOW][Rendering.SUMMERY_SPRING]).toEqual([
                        0, 1, 3,
                        0, 1, 3,
                        0, 1, 3,
                        0, 1, 3,
                        0, 1, 3,
                    ])
                })

                it('handles chuwow summery spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.CHUWOW][Rendering.SUMMERY_SPRING]).toEqual([
                        0, 1, 3,
                        0, 1, 3, 5,
                        0, 1, 3,
                        0, 1, 3, 5, 7,
                    ])
                })

                it('handles iest summery spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.IEST][Rendering.SUMMERY_SPRING]).toEqual([
                        0, 1, 3, 5, 7,
                        0, 1, 3, 5, 7,
                        0, 1, 3, 5, 7,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai summery spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.INAI][Rendering.SUMMERY_SPRING]).toEqual([
                        0, 1, 3, 5,
                        0, 1, 3, 5,
                        0, 1, 3, 5,
                        0, 1, 3,
                    ])
                })

                it('handles djiyai summery spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.DJIYAI][Rendering.SUMMERY_SPRING]).toEqual([
                        0, 1, 3,
                        0, 1, 3, 5, 7,
                        0, 1, 3, 5, 7, 9, 11,
                    ])
                })

                it('handles ouzd summery spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][BlockStyle.OUZD][Rendering.SUMMERY_SPRING]).toEqual([
                        0, 1, 3, 5, 7, 9, 11, 13,
                        0, 1, 3, 5, 7, 9, 11,
                    ])
                })
            })
        })
    })

    describe('of duration 24', () => {
        describe('spring renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.UMOW][Rendering.SPRING]).toEqual([
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                    ])
                })

                it('handles chuwow spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.CHUWOW][Rendering.SPRING]).toEqual([
                        0, 2, 3,
                        0, 2, 3, 4,
                        0, 2, 3, 4, 5,
                        0, 2, 3,
                        0, 2, 3, 4, 5,
                        0, 2, 3, 4,
                    ])
                })

                it('handles iest spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.IEST][Rendering.SPRING]).toEqual([
                        0, 2, 3, 4, 5, 6,
                        0, 2, 3, 4, 5, 6,
                        0, 2, 3, 4, 5, 6,
                        0, 2, 3, 4, 5, 6,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.INAI][Rendering.SPRING]).toEqual([
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3,
                    ])
                })

                it('handles djiyai spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.DJIYAI][Rendering.SPRING]).toEqual([
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3, 4, 5,
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3, 4, 5, 6, 7,
                    ])
                })

                it('handles ouzd spring', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.OUZD][Rendering.SPRING]).toEqual([
                        0, 2, 3, 4, 5, 6, 7, 8,
                        0, 2, 3, 4, 5, 6, 7, 8,
                        0, 2, 3, 4, 5, 6, 7, 8,
                    ])
                })
            })
        })

        describe('summer renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow summer', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.UMOW][Rendering.SUMMER]).toEqual([
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                    ])
                })

                it('handles chuwow summer', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.CHUWOW][Rendering.SUMMER]).toEqual([
                        1, 0, 3,
                        1, 0, 3, 0,
                        1, 0, 3, 0, 5,
                        1, 0, 3,
                        1, 0, 3, 0, 5,
                        1, 0, 3, 0,
                    ])
                })

                it('handles iest summer', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.IEST][Rendering.SUMMER]).toEqual([
                        1, 0, 3, 0, 5, 0,
                        1, 0, 3, 0, 5, 0,
                        1, 0, 3, 0, 5, 0,
                        1, 0, 3, 0, 5, 0,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai summer', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.INAI][Rendering.SUMMER]).toEqual([
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3,
                    ])
                })

                it('handles djiyai summer', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.DJIYAI][Rendering.SUMMER]).toEqual([
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3, 0, 5,
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3, 0, 5, 0, 7,
                    ])
                })

                it('handles ouzd summer', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.OUZD][Rendering.SUMMER]).toEqual([
                        1, 0, 3, 0, 5, 0, 7, 0,
                        1, 0, 3, 0, 5, 0, 7, 0,
                        1, 0, 3, 0, 5, 0, 7, 0,
                    ])
                })
            })
        })

        describe('fall renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow fall', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.UMOW][Rendering.FALL]).toEqual([
                        1, 3,
                        1, 3,
                        1, 3,
                        1, 3,
                        1, 3,
                        1, 3,
                    ])
                })

                it('handles chuwow fall', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.CHUWOW][Rendering.FALL]).toEqual([
                        1, 2,
                        1, 3,
                        1, 4,
                        1, 2,
                        1, 4,
                        1, 3,
                    ])
                })

                it('handles iest fall', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.IEST][Rendering.FALL]).toEqual([
                        1, 5,
                        1, 5,
                        1, 5,
                        1, 5,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai fall', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.INAI][Rendering.FALL]).toEqual([
                        1, 2,
                        1, 2,
                        1, 2,
                        1, 2,
                        1, 2,
                        1, 2,
                        1, 2,
                        1, 2,
                    ])
                })

                it('handles djiyai fall', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.DJIYAI][Rendering.FALL]).toEqual([
                        1, 2,
                        1, 2,
                        1, 4,
                        1, 2,
                        1, 2,
                        1, 6,
                    ])
                })

                it('handles ouzd fall', () => {
                    expect(yaosContoursByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR][BlockStyle.OUZD][Rendering.FALL]).toEqual([
                        1, 7,
                        1, 7,
                        1, 7,
                    ])
                })
            })
        })

        describe('other renderings', () => {
            it('handles inai variety', () => {
                expect(inaiiiVariety).toEqual([
                    [0, 1], [2, 1], [3, 1],
                    [1, 1], [0, 1], [3, 1],
                    [0, 1], [2, 1], [3, 1],
                    [1, 1], [0, 1], [3, 1],
                    [0, 1], [2, 1], [3, 1],
                    [1, 1], [0, 1], [3, 1],
                    [1, 1], [2, 2],
                    [1, 1], [2, 2],
                ])
            })
        })
    })
})
