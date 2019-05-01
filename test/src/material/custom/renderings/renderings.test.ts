import { PitchValue, Rendering } from '@musical-patterns/material'
import { as } from '@musical-patterns/utilities'
import { computeRenderings, RenderingName, Renderings } from '../../../../../src/indexForTest'

describe('rendering functions', () => {
    let renderings: Renderings
    beforeEach(() => {
        renderings = computeRenderings()
    })

    describe('spring', () => {
        it('ascends from 1, by 1, muting the 1 itself', () => {
            const spring: Rendering<PitchValue> = renderings[ RenderingName.SPRING ]
            expect(spring(as.Block([ 2 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ -1, 1 ], [ 2, 1 ],
                ]))
            expect(spring(as.Block([ 3 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                ]))
            expect(spring(as.Block([ 4 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                ]))
            expect(spring(as.Block([ 5 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                ]))
            expect(spring(as.Block([ 6 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                ]))
            expect(spring(as.Block([ 7 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ],
                ]))
        })
    })

    describe('summer', () => {
        it('ascends from 1, by 1, muting all evens', () => {
            const summer: Rendering<PitchValue> = renderings[ RenderingName.SUMMER ]
            expect(summer(as.Block([ 2 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 1 ], [ -1, 1 ],
                ]))
            expect(summer(as.Block([ 3 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                ]))
            expect(summer(as.Block([ 4 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                ]))
            expect(summer(as.Block([ 5 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ],
                ]))
            expect(summer(as.Block([ 6 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ],
                ]))
            expect(summer(as.Block([ 7 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ], [ 7, 1 ],
                ]))
        })
    })

    describe('fall', () => {
        it('first note pitch and value 1, second note with the remaining value and matching pitch', () => {
            const fall: Rendering<PitchValue> = renderings[ RenderingName.FALL ]
            expect(fall(as.Block([ 2 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 1 ], [ 1, 1 ],
                ]))
            expect(fall(as.Block([ 3 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 1 ], [ 2, 2 ],
                ]))
            expect(fall(as.Block([ 4 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 1 ], [ 3, 3 ],
                ]))
            expect(fall(as.Block([ 5 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 1 ], [ 4, 4 ],
                ]))
            expect(fall(as.Block([ 6 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 1 ], [ 5, 5 ],
                ]))
            expect(fall(as.Block([ 7 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 1 ], [ 6, 6 ],
                ]))
        })
    })

    describe('summery spring', () => {
        it('has the same pattern of mutes as spring with the pitches from summer', () => {
            const summerySpring: Rendering<PitchValue> = renderings[ RenderingName.SUMMERY_SPRING ]
            expect(summerySpring(as.Block([ 2 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ -1, 1 ], [ 1, 1 ],
                ]))
            expect(summerySpring(as.Block([ 3 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ -1, 1 ], [ 1, 1 ], [ 3, 1 ],
                ]))
            expect(summerySpring(as.Block([ 4 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                ]))
            expect(summerySpring(as.Block([ 5 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                ]))
            expect(summerySpring(as.Block([ 6 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ],
                ]))
            expect(summerySpring(as.Block([ 7 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 11, 1 ],
                ]))
        })
    })

    describe('springy summer', () => {
        it('has the same pattern of mutes as summer with the pitches from spring', () => {
            const springySummer: Rendering<PitchValue> = renderings[ RenderingName.SPRINGY_SUMMER ]
            expect(springySummer(as.Block([ 2 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 2, 1 ], [ -1, 1 ],
                ]))
            expect(springySummer(as.Block([ 3 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 2, 1 ], [ -1, 1 ], [ 3, 1 ],
                ]))
            expect(springySummer(as.Block([ 4 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 2, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                ]))
            expect(springySummer(as.Block([ 5 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 2, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 4, 1 ],
                ]))
            expect(springySummer(as.Block([ 6 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 2, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 4, 1 ], [ -1, 1 ],
                ]))
            expect(springySummer(as.Block([ 7 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 2, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 4, 1 ], [ -1, 1 ], [ 5, 1 ],
                ]))
        })
    })

    describe('glis', () => {
        it('sustains a single note the entire block', () => {
            const glis: Rendering<PitchValue> = renderings[ RenderingName.GLIS ]
            expect(glis(as.Block([ 2 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 2, 2 ],
                ]))
            expect(glis(as.Block([ 3 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 3, 3 ],
                ]))
            expect(glis(as.Block([ 4 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 4, 4 ],
                ]))
            expect(glis(as.Block([ 5 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 5, 5 ],
                ]))
            expect(glis(as.Block([ 6 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 6, 6 ],
                ]))
            expect(glis(as.Block([ 7 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 7, 7 ],
                ]))
        })
    })

    describe('trem', () => {
        it('fills the block with x notes of value 1 with pitch x each', () => {
            const trem: Rendering<PitchValue> = renderings[ RenderingName.TREM ]
            expect(trem(as.Block([ 2 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 2, 1 ], [ 2, 1 ],
                ]))
            expect(trem(as.Block([ 3 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 3, 1 ], [ 3, 1 ], [ 3, 1 ],
                ]))
            expect(trem(as.Block([ 4 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ],
                ]))
            expect(trem(as.Block([ 5 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ],
                ]))
            expect(trem(as.Block([ 6 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ],
                ]))
            expect(trem(as.Block([ 7 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ],
                ]))
        })
    })

    describe('bony', () => {
        describe('when the sum of the blocks is 15', () => {
            it('alternates rhythmically 1 and 2', () => {
                const bony: Rendering<PitchValue> = renderings[ RenderingName.BONY ]
                expect(bony(as.Block([ 1, 2, 3, 4, 5 ])))
                    .toEqual(as.ContourPiece<PitchValue>([
                        [ 1, 1 ], [ 2, 2 ], [ 3, 1 ], [ 3, 2 ], [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 5, 2 ], [ 5, 1 ], [ 5, 2 ],
                    ]))
            })
        })

        describe('when the sum of the blocks is 24', () => {
            it('alternates rhythmically 1 and 3', () => {
                const bony: Rendering<PitchValue> = renderings[ RenderingName.BONY ]
                expect(bony(as.Block([ 9, 7, 5, 3 ])))
                    .toEqual(as.ContourPiece<PitchValue>([
                        [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 7, 3 ], [ 7, 1 ], [ 7, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 3, 3 ],
                    ]))
            })
        })
    })

    describe('flatline', () => {
        it('sustains a single note the entire block, but sets the pitch index to one', () => {
            const flatline: Rendering<PitchValue> = renderings[ RenderingName.FLATLINE ]
            expect(flatline(as.Block([ 2 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 2 ],
                ]))
            expect(flatline(as.Block([ 3 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 3 ],
                ]))
            expect(flatline(as.Block([ 4 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 4 ],
                ]))
            expect(flatline(as.Block([ 5 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 5 ],
                ]))
            expect(flatline(as.Block([ 6 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 6 ],
                ]))
            expect(flatline(as.Block([ 7 ])))
                .toEqual(as.ContourPiece<PitchValue>([
                    [ 1, 7 ],
                ]))
        })
    })
})
