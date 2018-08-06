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
                it('handles umowww spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.umowww.spring).toEqual([
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                        0, 2, 3, 4,
                    ])
                })

                it('handles chuwowww spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.chuwowww.spring).toEqual([
                        0, 2, 3,
                        0, 2, 3, 4,
                        0, 2, 3, 4, 5,
                        0, 2, 3,
                        0, 2, 3, 4, 5,
                        0, 2, 3, 4,
                    ])
                })

                it('handles iesttt spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.iesttt.spring).toEqual([
                        0, 2, 3, 4, 5, 6,
                        0, 2, 3, 4, 5, 6,
                        0, 2, 3, 4, 5, 6,
                        0, 2, 3, 4, 5, 6,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inaiii spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.inaiii.spring).toEqual([
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

                it('handles djiyaiii spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.djiyaiii.spring).toEqual([
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3, 4, 5,
                        0, 2, 3,
                        0, 2, 3,
                        0, 2, 3, 4, 5, 6, 7,
                    ])
                })

                it('handles ouzddd spring', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.ouzddd.spring).toEqual([
                        0, 2, 3, 4, 5, 6, 7, 8,
                        0, 2, 3, 4, 5, 6, 7, 8,
                        0, 2, 3, 4, 5, 6, 7, 8,
                    ])
                })
            })
        })

        describe('summer renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umowww summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.umowww.summer).toEqual([
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                        1, 0, 3, 0,
                    ])
                })

                it('handles chuwowww summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.chuwowww.summer).toEqual([
                        1, 0, 3,
                        1, 0, 3, 0,
                        1, 0, 3, 0, 5,
                        1, 0, 3,
                        1, 0, 3, 0, 5,
                        1, 0, 3, 0,
                    ])
                })

                it('handles iesttt summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.iesttt.summer).toEqual([
                        1, 0, 3, 0, 5, 0,
                        1, 0, 3, 0, 5, 0,
                        1, 0, 3, 0, 5, 0,
                        1, 0, 3, 0, 5, 0,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inaiii summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.inaiii.summer).toEqual([
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

                it('handles djiyaiii summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.djiyaiii.summer).toEqual([
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3, 0, 5,
                        1, 0, 3,
                        1, 0, 3,
                        1, 0, 3, 0, 5, 0, 7,
                    ])
                })

                it('handles ouzddd summer', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.ouzddd.summer).toEqual([
                        1, 0, 3, 0, 5, 0, 7, 0,
                        1, 0, 3, 0, 5, 0, 7, 0,
                        1, 0, 3, 0, 5, 0, 7, 0,
                    ])
                })
            })
        })

        describe('fall renderings', () => {
            describe('umowchuowiest blocks', () => {
                it('handles umowww fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.umowww.fall).toEqual([
                        1, 3,
                        1, 3,
                        1, 3,
                        1, 3,
                        1, 3,
                        1, 3,
                    ])
                })

                it('handles chuwowww fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.chuwowww.fall).toEqual([
                        1, 2,
                        1, 3,
                        1, 4,
                        1, 2,
                        1, 4,
                        1, 3,
                    ])
                })

                it('handles iesttt fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.iesttt.fall).toEqual([
                        1, 5,
                        1, 5,
                        1, 5,
                        1, 5,
                    ])
                })
            })

            describe('inaidjiyaiouzd blocks', () => {
                it('handles inaiii fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.inaiii.fall).toEqual([
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

                it('handles djiyaiii fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.djiyaiii.fall).toEqual([
                        1, 2,
                        1, 2,
                        1, 4,
                        1, 2,
                        1, 2,
                        1, 6,
                    ])
                })

                it('handles ouzddd fall', () => {
                    expect(yaosContoursByDurationBlocksThenRendering.twentyfour.ouzddd.fall).toEqual([
                        1, 7,
                        1, 7,
                        1, 7,
                    ])
                })
            })
        })

        describe('other renderings', () => {
            it('handles inaiii variety', () => {
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
