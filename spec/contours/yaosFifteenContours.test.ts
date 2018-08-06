import {
    contoursByBlocksThenRendering,
    contoursByRenderingThenBlocks,
} from '../../src/contours/yaosFifteenContours'

describe('yaos contours of length 15', () => {
    it('is the case that the two different methods of grouping agree with each other', () => {
        expect(contoursByRenderingThenBlocks.fall.umow).toEqual(contoursByBlocksThenRendering.umow.fall)
    })

    describe('spring renderings', () => {
        describe('umowchuowiest blocks', () => {
            it('handles umow spring', () => {
                expect(contoursByRenderingThenBlocks.spring.umow).toEqual([
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3,
                ])
            })

            it('handles chuwow spring', () => {
                expect(contoursByRenderingThenBlocks.spring.chuwow).toEqual([
                    0, 2, 3,
                    0, 2, 3, 4,
                    0, 2, 3,
                    0, 2, 3, 4, 5,
                ])
            })

            it('handles iest spring', () => {
                expect(contoursByRenderingThenBlocks.spring.iest).toEqual([
                    0, 2, 3, 4, 5,
                    0, 2, 3, 4, 5,
                    0, 2, 3, 4, 5,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inai spring', () => {
                expect(contoursByRenderingThenBlocks.spring.inai).toEqual([
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3,
                ])
            })

            it('handles djiyai spring', () => {
                expect(contoursByRenderingThenBlocks.spring.djiyai).toEqual([
                    0, 2, 3,
                    0, 2, 3, 4, 5,
                    0, 2, 3, 4, 5, 6, 7,
                ])
            })

            it('handles ouzd spring', () => {
                expect(contoursByRenderingThenBlocks.spring.ouzd).toEqual([
                    0, 2, 3, 4, 5, 6, 7, 8,
                    0, 2, 3, 4, 5, 6, 7,
                ])
            })
        })
    })

    describe('summer renderings', () => {
        describe('umowchuowiest blocks', () => {
            it('handles umow summer', () => {
                expect(contoursByRenderingThenBlocks.summer.umow).toEqual([
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3,
                ])
            })

            it('handles chuwow summer', () => {
                expect(contoursByRenderingThenBlocks.summer.chuwow).toEqual([
                    1, 0, 3,
                    1, 0, 3, 0,
                    1, 0, 3,
                    1, 0, 3, 0, 5,
                ])
            })

            it('handles iest summer', () => {
                expect(contoursByRenderingThenBlocks.summer.iest).toEqual([
                    1, 0, 3, 0, 5,
                    1, 0, 3, 0, 5,
                    1, 0, 3, 0, 5,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inai summer', () => {
                expect(contoursByRenderingThenBlocks.summer.inai).toEqual([
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3,
                ])
            })

            it('handles djiyai summer', () => {
                expect(contoursByRenderingThenBlocks.summer.djiyai).toEqual([
                    1, 0, 3,
                    1, 0, 3, 0, 5,
                    1, 0, 3, 0, 5, 0, 7,
                ])
            })

            it('handles ouzd summer', () => {
                expect(contoursByRenderingThenBlocks.summer.ouzd).toEqual([
                    1, 0, 3, 0, 5, 0, 7, 0,
                    1, 0, 3, 0, 5, 0, 7,
                ])
            })
        })
    })

    describe('fall renderings', () => {
        describe('umowchuowiest blocks', () => {
            it('handles umow fall', () => {
                expect(contoursByRenderingThenBlocks.fall.umow).toEqual([
                    1, 2,
                    1, 2,
                    1, 2,
                    1, 2,
                    1, 2,
                ])
            })

            it('handles chuwow fall', () => {
                expect(contoursByRenderingThenBlocks.fall.chuwow).toEqual([
                    1, 2,
                    1, 3,
                    1, 2,
                    1, 4,
                ])
            })

            it('handles iest fall', () => {
                expect(contoursByRenderingThenBlocks.fall.iest).toEqual([
                    1, 4,
                    1, 4,
                    1, 4,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inai fall', () => {
                expect(contoursByRenderingThenBlocks.fall.inai).toEqual([
                    1, 3,
                    1, 3,
                    1, 3,
                    1, 2,
                ])
            })

            it('handles djiyai fall', () => {
                expect(contoursByRenderingThenBlocks.fall.djiyai).toEqual([
                    1, 2,
                    1, 4,
                    1, 6,
                ])
            })

            it('handles ouzd fall', () => {
                expect(contoursByRenderingThenBlocks.fall.ouzd).toEqual([
                    1, 7,
                    1, 6,
                ])
            })
        })
    })

    describe('summery spring renderings', () => {
        describe('umowchuwowiest blocks', () => {
            it('handles umow summery spring', () => {
                expect(contoursByRenderingThenBlocks.summerySpring.umow).toEqual([
                    0, 1, 3,
                    0, 1, 3,
                    0, 1, 3,
                    0, 1, 3,
                    0, 1, 3,
                ])
            })

            it('handles chuwow summery spring', () => {
                expect(contoursByRenderingThenBlocks.summerySpring.chuwow).toEqual([
                    0, 1, 3,
                    0, 1, 3, 5,
                    0, 1, 3,
                    0, 1, 3, 5, 7,
                ])
            })

            it('handles iest summery spring', () => {
                expect(contoursByRenderingThenBlocks.summerySpring.iest).toEqual([
                    0, 1, 3, 5, 7,
                    0, 1, 3, 5, 7,
                    0, 1, 3, 5, 7,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inai summery spring', () => {
                expect(contoursByRenderingThenBlocks.summerySpring.inai).toEqual([
                    0, 1, 3, 5,
                    0, 1, 3, 5,
                    0, 1, 3, 5,
                    0, 1, 3,
                ])
            })

            it('handles djiyai summery spring', () => {
                expect(contoursByRenderingThenBlocks.summerySpring.djiyai).toEqual([
                    0, 1, 3,
                    0, 1, 3, 5, 7,
                    0, 1, 3, 5, 7, 9, 11,
                ])
            })

            it('handles ouzd summery spring', () => {
                expect(contoursByRenderingThenBlocks.summerySpring.ouzd).toEqual([
                    0, 1, 3, 5, 7, 9, 11, 13,
                    0, 1, 3, 5, 7, 9, 11,
                ])
            })
        })
    })
})
