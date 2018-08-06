import {
    chuwowwwFall,
    chuwowwwSpring,
    chuwowwwSummer,
    djiyaiiiFall,
    djiyaiiiSpring,
    djiyaiiiSummer,
    iestttFall,
    iestttSpring,
    iestttSummer,
    inaiiiFall,
    inaiiiSpring,
    inaiiiSummer,
    inaiiiVariety,
    ouzdddFall,
    ouzdddSpring,
    ouzdddSummer,
    umowwwFall,
    umowwwSpring,
    umowwwSummer,
} from '../../src/contours/yaosTwentyfourContours'

describe('yaos contours of length 24', () => {
    describe('spring renderings', () => {
        describe('umowchuowiest blocks', () => {
            it('handles umowww spring', () => {
                expect(umowwwSpring).toEqual([
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                    0, 2, 3, 4,
                ])
            })

            it('handles chuwowww spring', () => {
                expect(chuwowwwSpring).toEqual([
                    0, 2, 3,
                    0, 2, 3, 4,
                    0, 2, 3, 4, 5,
                    0, 2, 3,
                    0, 2, 3, 4, 5,
                    0, 2, 3, 4,
                ])
            })

            it('handles iesttt spring', () => {
                expect(iestttSpring).toEqual([
                    0, 2, 3, 4, 5, 6,
                    0, 2, 3, 4, 5, 6,
                    0, 2, 3, 4, 5, 6,
                    0, 2, 3, 4, 5, 6,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inaiii spring', () => {
                expect(inaiiiSpring).toEqual([
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
                expect(djiyaiiiSpring).toEqual([
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3, 4, 5,
                    0, 2, 3,
                    0, 2, 3,
                    0, 2, 3, 4, 5, 6, 7,
                ])
            })

            it('handles ouzddd spring', () => {
                expect(ouzdddSpring).toEqual([
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
                expect(umowwwSummer).toEqual([
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                    1, 0, 3, 0,
                ])
            })

            it('handles chuwowww summer', () => {
                expect(chuwowwwSummer).toEqual([
                    1, 0, 3,
                    1, 0, 3, 0,
                    1, 0, 3, 0, 5,
                    1, 0, 3,
                    1, 0, 3, 0, 5,
                    1, 0, 3, 0,
                ])
            })

            it('handles iesttt summer', () => {
                expect(iestttSummer).toEqual([
                    1, 0, 3, 0, 5, 0,
                    1, 0, 3, 0, 5, 0,
                    1, 0, 3, 0, 5, 0,
                    1, 0, 3, 0, 5, 0,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inaiii summer', () => {
                expect(inaiiiSummer).toEqual([
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
                expect(djiyaiiiSummer).toEqual([
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3, 0, 5,
                    1, 0, 3,
                    1, 0, 3,
                    1, 0, 3, 0, 5, 0, 7,
                ])
            })

            it('handles ouzddd summer', () => {
                expect(ouzdddSummer).toEqual([
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
                expect(umowwwFall).toEqual([
                    1, 3,
                    1, 3,
                    1, 3,
                    1, 3,
                    1, 3,
                    1, 3,
                ])
            })

            it('handles chuwowww fall', () => {
                expect(chuwowwwFall).toEqual([
                    1, 2,
                    1, 3,
                    1, 4,
                    1, 2,
                    1, 4,
                    1, 3,
                ])
            })

            it('handles iesttt fall', () => {
                expect(iestttFall).toEqual([
                    1, 5,
                    1, 5,
                    1, 5,
                    1, 5,
                ])
            })
        })

        describe('inaidjiyaiouzd blocks', () => {
            it('handles inaiii fall', () => {
                expect(inaiiiFall).toEqual([
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
                expect(djiyaiiiFall).toEqual([
                    1, 2,
                    1, 2,
                    1, 4,
                    1, 2,
                    1, 2,
                    1, 6,
                ])
            })

            it('handles ouzddd fall', () => {
                expect(ouzdddFall).toEqual([
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
