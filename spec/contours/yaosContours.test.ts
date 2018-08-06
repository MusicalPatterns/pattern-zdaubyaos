import { inaiiiVariety, yaosContoursByDurationBlocksThenRendering } from '../../src/contours/yaosContours'

describe('yaos contours', () => {
    describe('of duration 15', () => {
        describe('spring renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.umow.spring).toEqual([
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3,
                    ])
                })

                it('handles chuwow spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.chuwow.spring).toEqual([
                        0, 2, 3,
                        0, 2, 3, 4,
                        0, 2, 3,
                        0, 2, 3, 4, 5,
                    ])
                })

                it('handles iest spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.iest.spring).toEqual([
                        0, 2, 3, 4, 5,
                        0, 2, 3, 4, 5,
                        0, 2, 3, 4, 5,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.inai.spring).toEqual([
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3,
                    ])
                })

                it('handles djiyai spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.djiyai.spring).toEqual([
                        0, 2, 3,
                        0, 2, 3, 4, 5,
                        0, 2, 3, 4, 5, 6, 7,
                    ])
                })

                it('handles ouzd spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.ouzd.spring).toEqual([
                        0, 2, 3, 4, 5, 6, 7, 8,
                        0, 2, 3, 4, 5, 6, 7,
                    ])
                })
            })
        })

        describe('summer renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.umow.summer).toEqual([
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3,
                    ])
                })

                it('handles chuwow summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.chuwow.summer).toEqual([
                        1, 0, 3,
                        1, 0, 3, 0,
                        1, 0, 3,
                        1, 0, 3, 0, 5,
                    ])
                })

                it('handles iest summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.iest.summer).toEqual([
                        1, 0, 3, 0, 5,
                        1, 0, 3, 0, 5,
                        1, 0, 3, 0, 5,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.inai.summer).toEqual([
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3,
                    ])
                })

                it('handles djiyai summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.djiyai.summer).toEqual([
                        1, 0, 3,
                        1, 0, 3, 0, 5,
                        1, 0, 3, 0, 5, 0, 7,
                    ])
                })

                it('handles ouzd summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.ouzd.summer).toEqual([
                        1, 0, 3, 0, 5, 0, 7, 0,
                        1, 0, 3, 0, 5, 0, 7,
                    ])
                })
            })
        })

        describe('fall renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umow fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.umow.fall).toEqual([
                        1, 2,
                        1, 2,
                        1, 2,
                        1, 2,
                        1, 2,
                    ])
                })

                it('handles chuwow fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.chuwow.fall).toEqual([
                        1, 2,
                        1, 3,
                        1, 2,
                        1, 4,
                    ])
                })

                it('handles iest fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.iest.fall).toEqual([
                        1, 4,
                        1, 4,
                        1, 4,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.inai.fall).toEqual([
                        1, 3,
                        1, 3,
                        1, 3,
                        1, 2,
                    ])
                })

                it('handles djiyai fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.djiyai.fall).toEqual([
                        1, 2,
                        1, 4,
                        1, 6,
                    ])
                })

                it('handles ouzd fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.ouzd.fall).toEqual([
                        1, 7,
                        1, 6,
                    ])
                })
            })
        })

        describe('summery spring renderings', () => {
            describe('umowchuwowiest blocks', () => {
                it('handles umow summery spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.umow.summerySpring).toEqual([
                        0, 1, 3,
                        0, 1, 3,
                        0, 1, 3,
                        0, 1, 3,
                        0, 1, 3,
                    ])
                })

                it('handles chuwow summery spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.chuwow.summerySpring).toEqual([
                        0, 1, 3,
                        0, 1, 3, 5,
                        0, 1, 3,
                        0, 1, 3, 5, 7,
                    ])
                })

                it('handles iest summery spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.iest.summerySpring).toEqual([
                        0, 1, 3, 5, 7,
                        0, 1, 3, 5, 7,
                        0, 1, 3, 5, 7,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai summery spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.inai.summerySpring).toEqual([
                        0, 1, 3, 5,
                        0, 1, 3, 5,
                        0, 1, 3, 5,
                        0, 1, 3,
                    ])
                })

                it('handles djiyai summery spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.djiyai.summerySpring).toEqual([
                        0, 1, 3,
                        0, 1, 3, 5, 7,
                        0, 1, 3, 5, 7, 9, 11,
                    ])
                })

                it('handles ouzd summery spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.fifteen.ouzd.summerySpring).toEqual([
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
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.umow.spring).toEqual([
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                    ])
                })

                it('handles chuwow spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.chuwow.spring).toEqual([
                        0, 2, 3,
                        0, 2, 3, 4,
                        0, 2, 3, 4, 5,
                        0, 2, 3,
                        0, 2, 3, 4, 5,
                        0, 2, 3, 4,
                    ])
                })

                it('handles iest spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.iest.spring).toEqual([
                        0, 2, 3, 4, 5, 6,
                        0, 2, 3, 4, 5, 6,
                        0, 2, 3, 4, 5, 6,
                        0, 2, 3, 4, 5, 6,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.inai.spring).toEqual([
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
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.djiyai.spring).toEqual([
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3, 4, 5,
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3, 4, 5, 6, 7,
                    ])
                })

                it('handles ouzd spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.ouzd.spring).toEqual([
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
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.umow.summer).toEqual([
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                    ])
                })

                it('handles chuwow summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.chuwow.summer).toEqual([
                        1, 0, 3,
                        1, 0, 3, 0,
                        1, 0, 3, 0, 5,
                        1, 0, 3,
                        1, 0, 3, 0, 5,
                        1, 0, 3, 0,
                    ])
                })

                it('handles iest summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.iest.summer).toEqual([
                        1, 0, 3, 0, 5, 0,
                        1, 0, 3, 0, 5, 0,
                        1, 0, 3, 0, 5, 0,
                        1, 0, 3, 0, 5, 0,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.inai.summer).toEqual([
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
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.djiyai.summer).toEqual([
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3, 0, 5,
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3, 0, 5, 0, 7,
                    ])
                })

                it('handles ouzd summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.ouzd.summer).toEqual([
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
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.umow.fall).toEqual([
                        1, 3,
                        1, 3,
                        1, 3,
                        1, 3,
                        1, 3,
                        1, 3,
                    ])
                })

                it('handles chuwow fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.chuwow.fall).toEqual([
                        1, 2,
                        1, 3,
                        1, 4,
                        1, 2,
                        1, 4,
                        1, 3,
                    ])
                })

                it('handles iest fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.iest.fall).toEqual([
                        1, 5,
                        1, 5,
                        1, 5,
                        1, 5,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inai fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.inai.fall).toEqual([
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
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.djiyai.fall).toEqual([
                        1, 2,
                        1, 2,
                        1, 4,
                        1, 2,
                        1, 2,
                        1, 6,
                    ])
                })

                it('handles ouzd fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.ouzd.fall).toEqual([
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
