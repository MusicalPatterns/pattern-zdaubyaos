import {
    chuwowFall,
    chuwowSpring,
    chuwowSummer,
    djiyaiFall,
    djiyaiSpring,
    djiyaiSummer,
    iestFall,
    iestSpring,
    iestSummer,
    inaiFall,
    inaiSpring,
    inaiSummer,
    ouzdFall,
    ouzdSpring,
    ouzdSummer,
    umowFall,
    umowSpring,
    umowSummer,
} from '../../src/contours/yaosFifteenContours'

describe('yaos contours of length 15', () => {
    describe('spring renderings', () => {
        describe('umowchuowiest blocks', () => {
            it('handles umow spring', () => {
                expect(umowSpring).toEqual([
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3,
                ])
            })

            it('handles chuwow spring', () => {
                expect(chuwowSpring).toEqual([
                    0, 2, 3,
                    0, 2, 3, 4,
                    0, 2, 3,
                    0, 2, 3, 4, 5,
                ])
            })

            it('handles iest spring', () => {
                expect(iestSpring).toEqual([
                    0, 2, 3, 4, 5,
                    0, 2, 3, 4, 5,
                    0, 2, 3, 4, 5,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inai spring', () => {
                expect(inaiSpring).toEqual([
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3,
                ])
            })

            it('handles djiyai spring', () => {
                expect(djiyaiSpring).toEqual([
                    0, 2, 3,
                    0, 2, 3, 4, 5,
                    0, 2, 3, 4, 5, 6, 7,
                ])
            })

            it('handles ouzd spring', () => {
                expect(ouzdSpring).toEqual([
                    0, 2, 3, 4, 5, 6, 7, 8,
                    0, 2, 3, 4, 5, 6, 7,
                ])
            })
        })
    })

    describe('summer renderings', () => {
        describe('umowchuowiest blocks', () => {
            it('handles umow summer', () => {
                expect(umowSummer).toEqual([
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3,
                ])
            })

            it('handles chuwow summer', () => {
                expect(chuwowSummer).toEqual([
                    1, 0, 3,
                    1, 0, 3, 0,
                    1, 0, 3,
                    1, 0, 3, 0, 5,
                ])
            })

            it('handles iest summer', () => {
                expect(iestSummer).toEqual([
                    1, 0, 3, 0, 5,
                    1, 0, 3, 0, 5,
                    1, 0, 3, 0, 5,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inai summer', () => {
                expect(inaiSummer).toEqual([
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3,
                ])
            })

            it('handles djiyai summer', () => {
                expect(djiyaiSummer).toEqual([
                    1, 0, 3,
                    1, 0, 3, 0, 5,
                    1, 0, 3, 0, 5, 0, 7,
                ])
            })

            it('handles ouzd summer', () => {
                expect(ouzdSummer).toEqual([
                    1, 0, 3, 0, 5, 0, 7, 0,
                    1, 0, 3, 0, 5, 0, 7,
                ])
            })
        })
    })

    describe('fall renderings', () => {
        describe('umowchuowiest blocks', () => {
            it('handles umow fall', () => {
                expect(umowFall).toEqual([
                    1, 2,
                    1, 2,
                    1, 2,
                    1, 2,
                    1, 2,
                ])
            })

            it('handles chuwow fall', () => {
                expect(chuwowFall).toEqual([
                    1, 2,
                    1, 3,
                    1, 2,
                    1, 4,
                ])
            })

            it('handles iest fall', () => {
                expect(iestFall).toEqual([
                    1, 4,
                    1, 4,
                    1, 4,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inai fall', () => {
                expect(inaiFall).toEqual([
                    1, 3,
                    1, 3,
                    1, 3,
                    1, 2,
                ])
            })

            it('handles djiyai fall', () => {
                expect(djiyaiFall).toEqual([
                    1, 2,
                    1, 4,
                    1, 6,
                ])
            })

            it('handles ouzd fall', () => {
                expect(ouzdFall).toEqual([
                    1, 7,
                    1, 6,
                ])
            })
        })
    })
})
