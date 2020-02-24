import { PitchValue, Rendering } from '@musical-patterns/material'
import { as } from '@musical-patterns/utilities'
import { RenderingName, Renderings, thunkRenderings } from '../../../../../src/indexForTest'

describe('rendering functions', (): void => {
    let renderings: Renderings
    beforeEach((): void => {
        renderings = thunkRenderings()
    })

    describe('spring', (): void => {
        it('ascends from 1, by 1, muting the 1 itself', (): void => {
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

    describe('summer', (): void => {
        it('ascends from 1, by 1, muting all evens', (): void => {
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

    describe('fall', (): void => {
        it('first note pitch and value 1, second note with the remaining value and matching pitch', (): void => {
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

    describe('summery spring', (): void => {
        it('has the same pattern of mutes as spring with the pitches from summer', (): void => {
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

    describe('springy summer', (): void => {
        it('has the same pattern of mutes as summer with the pitches from spring', (): void => {
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

    describe('glis', (): void => {
        it('sustains a single note the entire block', (): void => {
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

    describe('trem', (): void => {
        it('fills the block with x notes of value 1 with pitch x each', (): void => {
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

    describe('bony', (): void => {
        describe('when the sum of the blocks is 15', (): void => {
            it('alternates rhythmically 1 and 2', (): void => {
                const bony: Rendering<PitchValue> = renderings[ RenderingName.BONY ]
                expect(bony(as.Block([ 1, 2, 3, 4, 5 ])))
                    .toEqual(as.ContourPiece<PitchValue>([
                        [ 1, 1 ], [ 2, 2 ], [ 3, 1 ], [ 3, 2 ], [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 5, 2 ], [ 5, 1 ], [ 5, 2 ],
                    ]))
            })
        })

        describe('when the sum of the blocks is 24', (): void => {
            it('alternates rhythmically 1 and 3', (): void => {
                const bony: Rendering<PitchValue> = renderings[ RenderingName.BONY ]
                expect(bony(as.Block([ 9, 7, 5, 3 ])))
                    .toEqual(as.ContourPiece<PitchValue>([
                        [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 7, 3 ], [ 7, 1 ], [ 7, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 3, 3 ],
                    ]))
            })
        })
    })

    describe('flatline', (): void => {
        it('sustains a single note the entire block, but sets the pitch index to one', (): void => {
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
