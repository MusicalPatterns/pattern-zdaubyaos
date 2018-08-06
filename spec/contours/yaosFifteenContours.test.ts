import { yaosFifteenContoursByBlocksThenRendering } from '../../src/contours/yaosFifteenContours'

describe('yaos contours of length 15', () => {
    describe('spring renderings', () => {
        describe('umowchuowiest blocks', () => {
            it('handles umow spring', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.umow.spring).toEqual([
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3,
                ])
            })

            it('handles chuwow spring', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.chuwow.spring).toEqual([
                    0, 2, 3,
                    0, 2, 3, 4,
                    0, 2, 3,
                    0, 2, 3, 4, 5,
                ])
            })

            it('handles iest spring', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.iest.spring).toEqual([
                    0, 2, 3, 4, 5,
                    0, 2, 3, 4, 5,
                    0, 2, 3, 4, 5,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inai spring', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.inai.spring).toEqual([
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3,
                ])
            })

            it('handles djiyai spring', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.djiyai.spring).toEqual([
                    0, 2, 3,
                    0, 2, 3, 4, 5,
                    0, 2, 3, 4, 5, 6, 7,
                ])
            })

            it('handles ouzd spring', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.ouzd.spring).toEqual([
                    0, 2, 3, 4, 5, 6, 7, 8,
                    0, 2, 3, 4, 5, 6, 7,
                ])
            })
        })
    })

    describe('summer renderings', () => {
        describe('umowchuowiest blocks', () => {
            it('handles umow summer', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.umow.summer).toEqual([
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3,
                ])
            })

            it('handles chuwow summer', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.chuwow.summer).toEqual([
                    1, 0, 3,
                    1, 0, 3, 0,
                    1, 0, 3,
                    1, 0, 3, 0, 5,
                ])
            })

            it('handles iest summer', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.iest.summer).toEqual([
                    1, 0, 3, 0, 5,
                    1, 0, 3, 0, 5,
                    1, 0, 3, 0, 5,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inai summer', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.inai.summer).toEqual([
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3,
                ])
            })

            it('handles djiyai summer', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.djiyai.summer).toEqual([
                    1, 0, 3,
                    1, 0, 3, 0, 5,
                    1, 0, 3, 0, 5, 0, 7,
                ])
            })

            it('handles ouzd summer', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.ouzd.summer).toEqual([
                    1, 0, 3, 0, 5, 0, 7, 0,
                    1, 0, 3, 0, 5, 0, 7,
                ])
            })
        })
    })

    describe('fall renderings', () => {
        describe('umowchuowiest blocks', () => {
            it('handles umow fall', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.umow.fall).toEqual([
                    1, 2,
                    1, 2,
                    1, 2,
                    1, 2,
                    1, 2,
                ])
            })

            it('handles chuwow fall', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.chuwow.fall).toEqual([
                    1, 2,
                    1, 3,
                    1, 2,
                    1, 4,
                ])
            })

            it('handles iest fall', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.iest.fall).toEqual([
                    1, 4,
                    1, 4,
                    1, 4,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inai fall', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.inai.fall).toEqual([
                    1, 3,
                    1, 3,
                    1, 3,
                    1, 2,
                ])
            })

            it('handles djiyai fall', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.djiyai.fall).toEqual([
                    1, 2,
                    1, 4,
                    1, 6,
                ])
            })

            it('handles ouzd fall', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.ouzd.fall).toEqual([
                    1, 7,
                    1, 6,
                ])
            })
        })
    })

    describe('summery spring renderings', () => {
        describe('umowchuwowiest blocks', () => {
            it('handles umow summery spring', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.umow.summerySpring).toEqual([
                    0, 1, 3,
                    0, 1, 3,
                    0, 1, 3,
                    0, 1, 3,
                    0, 1, 3,
                ])
            })

            it('handles chuwow summery spring', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.chuwow.summerySpring).toEqual([
                    0, 1, 3,
                    0, 1, 3, 5,
                    0, 1, 3,
                    0, 1, 3, 5, 7,
                ])
            })

            it('handles iest summery spring', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.iest.summerySpring).toEqual([
                    0, 1, 3, 5, 7,
                    0, 1, 3, 5, 7,
                    0, 1, 3, 5, 7,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inai summery spring', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.inai.summerySpring).toEqual([
                    0, 1, 3, 5,
                    0, 1, 3, 5,
                    0, 1, 3, 5,
                    0, 1, 3,
                ])
            })

            it('handles djiyai summery spring', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.djiyai.summerySpring).toEqual([
                    0, 1, 3,
                    0, 1, 3, 5, 7,
                    0, 1, 3, 5, 7, 9, 11,
                ])
            })

            it('handles ouzd summery spring', () => {
                expect(yaosFifteenContoursByBlocksThenRendering.ouzd.summerySpring).toEqual([
                    0, 1, 3, 5, 7, 9, 11, 13,
                    0, 1, 3, 5, 7, 9, 11,
                ])
            })
        })
    })
})
