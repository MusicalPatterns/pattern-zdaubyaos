import {
    inaiiiVariety,
    yaosTwentyfourContoursByBlocksThenRendering,
} from '../../src/contours/yaosTwentyfourContours'

describe('yaos contours of length 24', () => {
    describe('spring renderings', () => {
        describe('umowchuowiest blocks', () => {
            it('handles umowww spring', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.umowww.spring).toEqual([
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                ])
            })

            it('handles chuwowww spring', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.chuwowww.spring).toEqual([
                    0, 2, 3,
                    0, 2, 3, 4,
                    0, 2, 3, 4, 5,
                    0, 2, 3,
                    0, 2, 3, 4, 5,
                    0, 2, 3, 4,
                ])
            })

            it('handles iesttt spring', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.iesttt.spring).toEqual([
                    0, 2, 3, 4, 5, 6,
                    0, 2, 3, 4, 5, 6,
                    0, 2, 3, 4, 5, 6,
                    0, 2, 3, 4, 5, 6,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inaiii spring', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.inaiii.spring).toEqual([
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
                expect(yaosTwentyfourContoursByBlocksThenRendering.djiyaiii.spring).toEqual([
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3, 4, 5,
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3, 4, 5, 6, 7,
                ])
            })

            it('handles ouzddd spring', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.ouzddd.spring).toEqual([
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
                expect(yaosTwentyfourContoursByBlocksThenRendering.umowww.summer).toEqual([
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                ])
            })

            it('handles chuwowww summer', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.chuwowww.summer).toEqual([
                    1, 0, 3,
                    1, 0, 3, 0,
                    1, 0, 3, 0, 5,
                    1, 0, 3,
                    1, 0, 3, 0, 5,
                    1, 0, 3, 0,
                ])
            })

            it('handles iesttt summer', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.iesttt.summer).toEqual([
                    1, 0, 3, 0, 5, 0,
                    1, 0, 3, 0, 5, 0,
                    1, 0, 3, 0, 5, 0,
                    1, 0, 3, 0, 5, 0,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inaiii summer', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.inaiii.summer).toEqual([
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
                expect(yaosTwentyfourContoursByBlocksThenRendering.djiyaiii.summer).toEqual([
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3, 0, 5,
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3, 0, 5, 0, 7,
                ])
            })

            it('handles ouzddd summer', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.ouzddd.summer).toEqual([
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
                expect(yaosTwentyfourContoursByBlocksThenRendering.umowww.fall).toEqual([
                    1, 3,
                    1, 3,
                    1, 3,
                    1, 3,
                    1, 3,
                    1, 3,
                ])
            })

            it('handles chuwowww fall', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.chuwowww.fall).toEqual([
                    1, 2,
                    1, 3,
                    1, 4,
                    1, 2,
                    1, 4,
                    1, 3,
                ])
            })

            it('handles iesttt fall', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.iesttt.fall).toEqual([
                    1, 5,
                    1, 5,
                    1, 5,
                    1, 5,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inaiii fall', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.inaiii.fall).toEqual([
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
                expect(yaosTwentyfourContoursByBlocksThenRendering.djiyaiii.fall).toEqual([
                    1, 2,
                    1, 2,
                    1, 4,
                    1, 2,
                    1, 2,
                    1, 6,
                ])
            })

            it('handles ouzddd fall', () => {
                expect(yaosTwentyfourContoursByBlocksThenRendering.ouzddd.fall).toEqual([
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
