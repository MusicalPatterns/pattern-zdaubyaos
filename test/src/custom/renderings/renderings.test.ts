import { to } from '@musical-patterns/pattern'
import { buildRenderings, Rendering, RenderingName, Renderings } from '../../../../src/indexForTest'

describe('zdaubyaos rendering functions', () => {
    let renderings: Renderings
    beforeEach(() => {
        renderings = buildRenderings()
    })

    describe('spring', () => {
        it('ascends from 1, by 1, muting the 1 itself', () => {
            const spring: Rendering = renderings[ RenderingName.SPRING ]
            expect(spring(to.Block([ 2 ])))
                .toEqual(to.ContourPiece([
                    [ 0, 1 ], [ 2, 1 ],
                ]))
            expect(spring(to.Block([ 3 ])))
                .toEqual(to.ContourPiece([
                    [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                ]))
            expect(spring(to.Block([ 4 ])))
                .toEqual(to.ContourPiece([
                    [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                ]))
            expect(spring(to.Block([ 5 ])))
                .toEqual(to.ContourPiece([
                    [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                ]))
            expect(spring(to.Block([ 6 ])))
                .toEqual(to.ContourPiece([
                    [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                ]))
            expect(spring(to.Block([ 7 ])))
                .toEqual(to.ContourPiece([
                    [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ],
                ]))
        })
    })

    describe('summer', () => {
        it('ascends from 1, by 1, muting all evens', () => {
            const summer: Rendering = renderings[ RenderingName.SUMMER ]
            expect(summer(to.Block([ 2 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 1 ], [ 0, 1 ],
                ]))
            expect(summer(to.Block([ 3 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                ]))
            expect(summer(to.Block([ 4 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                ]))
            expect(summer(to.Block([ 5 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                ]))
            expect(summer(to.Block([ 6 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ],
                ]))
            expect(summer(to.Block([ 7 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ],
                ]))
        })
    })

    describe('fall', () => {
        it('first note pitch and duration 1, second note with the remaining duration and matching pitch', () => {
            const fall: Rendering = renderings[ RenderingName.FALL ]
            expect(fall(to.Block([ 2 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 1 ], [ 1, 1 ],
                ]))
            expect(fall(to.Block([ 3 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 1 ], [ 2, 2 ],
                ]))
            expect(fall(to.Block([ 4 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 1 ], [ 3, 3 ],
                ]))
            expect(fall(to.Block([ 5 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 1 ], [ 4, 4 ],
                ]))
            expect(fall(to.Block([ 6 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 1 ], [ 5, 5 ],
                ]))
            expect(fall(to.Block([ 7 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 1 ], [ 6, 6 ],
                ]))
        })
    })

    describe('summery spring', () => {
        it('has the same pattern of mutes as spring with the pitches from summer', () => {
            const summerySpring: Rendering = renderings[ RenderingName.SUMMERY_SPRING ]
            expect(summerySpring(to.Block([ 2 ])))
                .toEqual(to.ContourPiece([
                    [ 0, 1 ], [ 1, 1 ],
                ]))
            expect(summerySpring(to.Block([ 3 ])))
                .toEqual(to.ContourPiece([
                    [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                ]))
            expect(summerySpring(to.Block([ 4 ])))
                .toEqual(to.ContourPiece([
                    [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                ]))
            expect(summerySpring(to.Block([ 5 ])))
                .toEqual(to.ContourPiece([
                    [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                ]))
            expect(summerySpring(to.Block([ 6 ])))
                .toEqual(to.ContourPiece([
                    [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ],
                ]))
            expect(summerySpring(to.Block([ 7 ])))
                .toEqual(to.ContourPiece([
                    [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 11, 1 ],
                ]))
        })
    })

    describe('springy summer', () => {
        it('has the same pattern of mutes as summer with the pitches from spring', () => {
            const springySummer: Rendering = renderings[ RenderingName.SPRINGY_SUMMER ]
            expect(springySummer(to.Block([ 2 ])))
                .toEqual(to.ContourPiece([
                    [ 2, 1 ], [ 0, 1 ],
                ]))
            expect(springySummer(to.Block([ 3 ])))
                .toEqual(to.ContourPiece([
                    [ 2, 1 ], [ 0, 1 ], [ 3, 1 ],
                ]))
            expect(springySummer(to.Block([ 4 ])))
                .toEqual(to.ContourPiece([
                    [ 2, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                ]))
            expect(springySummer(to.Block([ 5 ])))
                .toEqual(to.ContourPiece([
                    [ 2, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 4, 1 ],
                ]))
            expect(springySummer(to.Block([ 6 ])))
                .toEqual(to.ContourPiece([
                    [ 2, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 4, 1 ], [ 0, 1 ],
                ]))
            expect(springySummer(to.Block([ 7 ])))
                .toEqual(to.ContourPiece([
                    [ 2, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 4, 1 ], [ 0, 1 ], [ 5, 1 ],
                ]))
        })
    })

    describe('glis', () => {
        it('sustains a single note the entire block', () => {
            const glis: Rendering = renderings[ RenderingName.GLIS ]
            expect(glis(to.Block([ 2 ])))
                .toEqual(to.ContourPiece([
                    [ 2, 2 ],
                ]))
            expect(glis(to.Block([ 3 ])))
                .toEqual(to.ContourPiece([
                    [ 3, 3 ],
                ]))
            expect(glis(to.Block([ 4 ])))
                .toEqual(to.ContourPiece([
                    [ 4, 4 ],
                ]))
            expect(glis(to.Block([ 5 ])))
                .toEqual(to.ContourPiece([
                    [ 5, 5 ],
                ]))
            expect(glis(to.Block([ 6 ])))
                .toEqual(to.ContourPiece([
                    [ 6, 6 ],
                ]))
            expect(glis(to.Block([ 7 ])))
                .toEqual(to.ContourPiece([
                    [ 7, 7 ],
                ]))
        })
    })

    describe('trem', () => {
        it('fills the block with x notes of duration 1 with pitch x each', () => {
            const trem: Rendering = renderings[ RenderingName.TREM ]
            expect(trem(to.Block([ 2 ])))
                .toEqual(to.ContourPiece([
                    [ 2, 1 ], [ 2, 1 ],
                ]))
            expect(trem(to.Block([ 3 ])))
                .toEqual(to.ContourPiece([
                    [ 3, 1 ], [ 3, 1 ], [ 3, 1 ],
                ]))
            expect(trem(to.Block([ 4 ])))
                .toEqual(to.ContourPiece([
                    [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ],
                ]))
            expect(trem(to.Block([ 5 ])))
                .toEqual(to.ContourPiece([
                    [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ],
                ]))
            expect(trem(to.Block([ 6 ])))
                .toEqual(to.ContourPiece([
                    [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ],
                ]))
            expect(trem(to.Block([ 7 ])))
                .toEqual(to.ContourPiece([
                    [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ],
                ]))
        })
    })

    describe('bony', () => {
        describe('when the sum of the blocks is 15', () => {
            it('alternates rhythmically 1 and 2', () => {
                const bony: Rendering = renderings[ RenderingName.BONY ]
                expect(bony(to.Block([ 1, 2, 3, 4, 5 ])))
                    .toEqual(to.ContourPiece([
                        [ 1, 1 ], [ 2, 2 ], [ 3, 1 ], [ 3, 2 ], [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 5, 2 ], [ 5, 1 ], [ 5, 2 ],
                    ]))
            })
        })

        describe('when the sum of the blocks is 24', () => {
            it('alternates rhythmically 1 and 3', () => {
                const bony: Rendering = renderings[ RenderingName.BONY ]
                expect(bony(to.Block([ 9, 7, 5, 3 ])))
                    .toEqual(to.ContourPiece([
                        [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 7, 3 ], [ 7, 1 ], [ 7, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 3, 3 ],
                    ]))
            })
        })
    })

    describe('flatline', () => {
        it('sustains a single note the entire block, but sets the pitch index to one', () => {
            const flatline: Rendering = renderings[ RenderingName.FLATLINE ]
            expect(flatline(to.Block([ 2 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 2 ],
                ]))
            expect(flatline(to.Block([ 3 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 3 ],
                ]))
            expect(flatline(to.Block([ 4 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 4 ],
                ]))
            expect(flatline(to.Block([ 5 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 5 ],
                ]))
            expect(flatline(to.Block([ 6 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 6 ],
                ]))
            expect(flatline(to.Block([ 7 ])))
                .toEqual(to.ContourPiece([
                    [ 1, 7 ],
                ]))
        })
    })
})
