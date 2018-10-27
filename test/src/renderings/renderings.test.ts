import { buildRenderings, Rendering, RenderingFunction, Renderings, to } from '../../../src/indexForTest'

describe('renderings', () => {
    let renderings: Renderings
    beforeEach(() => {
        renderings = buildRenderings()
    })

    describe('spring', () => {
        it('ascends from 1, by 1, muting the 1 itself', () => {
            const spring: RenderingFunction = renderings[ Rendering.SPRING ]
            expect(spring(to.Blocks([ 2 ])))
                .toEqual(to.Contour([
                    [ 0, 1 ], [ 2, 1 ],
                ]))
            expect(spring(to.Blocks([ 3 ])))
                .toEqual(to.Contour([
                    [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                ]))
            expect(spring(to.Blocks([ 4 ])))
                .toEqual(to.Contour([
                    [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                ]))
            expect(spring(to.Blocks([ 5 ])))
                .toEqual(to.Contour([
                    [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                ]))
            expect(spring(to.Blocks([ 6 ])))
                .toEqual(to.Contour([
                    [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                ]))
            expect(spring(to.Blocks([ 7 ])))
                .toEqual(to.Contour([
                    [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ],
                ]))
        })
    })

    describe('summer', () => {
        it('ascends from 1, by 1, muting all evens', () => {
            const summer: RenderingFunction = renderings[ Rendering.SUMMER ]
            expect(summer(to.Blocks([ 2 ])))
                .toEqual(to.Contour([
                    [ 1, 1 ], [ 0, 1 ],
                ]))
            expect(summer(to.Blocks([ 3 ])))
                .toEqual(to.Contour([
                    [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                ]))
            expect(summer(to.Blocks([ 4 ])))
                .toEqual(to.Contour([
                    [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                ]))
            expect(summer(to.Blocks([ 5 ])))
                .toEqual(to.Contour([
                    [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                ]))
            expect(summer(to.Blocks([ 6 ])))
                .toEqual(to.Contour([
                    [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ],
                ]))
            expect(summer(to.Blocks([ 7 ])))
                .toEqual(to.Contour([
                    [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ],
                ]))
        })
    })

    describe('fall', () => {
        it('first note pitch and duration 1, second note with the remaining duration and matching pitch', () => {
            const fall: RenderingFunction = renderings[ Rendering.FALL ]
            expect(fall(to.Blocks([ 2 ])))
                .toEqual(to.Contour([
                    [ 1, 1 ], [ 1, 1 ],
                ]))
            expect(fall(to.Blocks([ 3 ])))
                .toEqual(to.Contour([
                    [ 1, 1 ], [ 2, 2 ],
                ]))
            expect(fall(to.Blocks([ 4 ])))
                .toEqual(to.Contour([
                    [ 1, 1 ], [ 3, 3 ],
                ]))
            expect(fall(to.Blocks([ 5 ])))
                .toEqual(to.Contour([
                    [ 1, 1 ], [ 4, 4 ],
                ]))
            expect(fall(to.Blocks([ 6 ])))
                .toEqual(to.Contour([
                    [ 1, 1 ], [ 5, 5 ],
                ]))
            expect(fall(to.Blocks([ 7 ])))
                .toEqual(to.Contour([
                    [ 1, 1 ], [ 6, 6 ],
                ]))
        })
    })

    describe('summery spring', () => {
        it('has the same pattern of mutes as spring with the pitches from summer', () => {
            const summerySpring: RenderingFunction = renderings[ Rendering.SUMMERY_SPRING ]
            expect(summerySpring(to.Blocks([ 2 ])))
                .toEqual(to.Contour([
                    [ 0, 1 ], [ 1, 1 ],
                ]))
            expect(summerySpring(to.Blocks([ 3 ])))
                .toEqual(to.Contour([
                    [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                ]))
            expect(summerySpring(to.Blocks([ 4 ])))
                .toEqual(to.Contour([
                    [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                ]))
            expect(summerySpring(to.Blocks([ 5 ])))
                .toEqual(to.Contour([
                    [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                ]))
            expect(summerySpring(to.Blocks([ 6 ])))
                .toEqual(to.Contour([
                    [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ],
                ]))
            expect(summerySpring(to.Blocks([ 7 ])))
                .toEqual(to.Contour([
                    [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 11, 1 ],
                ]))
        })
    })

    describe('springy summer', () => {
        it('has the same pattern of mutes as summer with the pitches from spring', () => {
            const springySummer: RenderingFunction = renderings[ Rendering.SPRINGY_SUMMER ]
            expect(springySummer(to.Blocks([ 2 ])))
                .toEqual(to.Contour([
                    [ 2, 1 ], [ 0, 1 ],
                ]))
            expect(springySummer(to.Blocks([ 3 ])))
                .toEqual(to.Contour([
                    [ 2, 1 ], [ 0, 1 ], [ 3, 1 ],
                ]))
            expect(springySummer(to.Blocks([ 4 ])))
                .toEqual(to.Contour([
                    [ 2, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                ]))
            expect(springySummer(to.Blocks([ 5 ])))
                .toEqual(to.Contour([
                    [ 2, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 4, 1 ],
                ]))
            expect(springySummer(to.Blocks([ 6 ])))
                .toEqual(to.Contour([
                    [ 2, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 4, 1 ], [ 0, 1 ],
                ]))
            expect(springySummer(to.Blocks([ 7 ])))
                .toEqual(to.Contour([
                    [ 2, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 4, 1 ], [ 0, 1 ], [ 5, 1 ],
                ]))
        })
    })

    describe('glis', () => {
        it('sustains a single note the entire block', () => {
            const glis: RenderingFunction = renderings[ Rendering.GLIS ]
            expect(glis(to.Blocks([ 2 ])))
                .toEqual(to.Contour([
                    [ 2, 2 ],
                ]))
            expect(glis(to.Blocks([ 3 ])))
                .toEqual(to.Contour([
                    [ 3, 3 ],
                ]))
            expect(glis(to.Blocks([ 4 ])))
                .toEqual(to.Contour([
                    [ 4, 4 ],
                ]))
            expect(glis(to.Blocks([ 5 ])))
                .toEqual(to.Contour([
                    [ 5, 5 ],
                ]))
            expect(glis(to.Blocks([ 6 ])))
                .toEqual(to.Contour([
                    [ 6, 6 ],
                ]))
            expect(glis(to.Blocks([ 7 ])))
                .toEqual(to.Contour([
                    [ 7, 7 ],
                ]))
        })
    })

    describe('trem', () => {
        it('fills the block with x notes of duration 1 with pitch x each', () => {
            const trem: RenderingFunction = renderings[ Rendering.TREM ]
            expect(trem(to.Blocks([ 2 ])))
                .toEqual(to.Contour([
                    [ 2, 1 ], [ 2, 1 ],
                ]))
            expect(trem(to.Blocks([ 3 ])))
                .toEqual(to.Contour([
                    [ 3, 1 ], [ 3, 1 ], [ 3, 1 ],
                ]))
            expect(trem(to.Blocks([ 4 ])))
                .toEqual(to.Contour([
                    [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ],
                ]))
            expect(trem(to.Blocks([ 5 ])))
                .toEqual(to.Contour([
                    [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ],
                ]))
            expect(trem(to.Blocks([ 6 ])))
                .toEqual(to.Contour([
                    [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ],
                ]))
            expect(trem(to.Blocks([ 7 ])))
                .toEqual(to.Contour([
                    [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ],
                ]))
        })
    })

    describe('bony', () => {
        describe('when the sum of the blocks is 15', () => {
            it('alternates rhythmically 1 and 2', () => {
                const bony: RenderingFunction = renderings[ Rendering.BONY ]
                expect(bony(to.Blocks([ 1, 2, 3, 4, 5 ])))
                    .toEqual(to.Contour([
                        [ 1, 1 ], [ 2, 2 ], [ 3, 1 ], [ 3, 2 ], [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 5, 2 ], [ 5, 1 ], [ 5, 2 ],
                    ]))
            })
        })

        describe('when the sum of the blocks is 24', () => {
            it('alternates rhythmically 1 and 3', () => {
                const bony: RenderingFunction = renderings[ Rendering.BONY ]
                expect(bony(to.Blocks([ 9, 7, 5, 3 ])))
                    .toEqual(to.Contour([
                        [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 7, 3 ], [ 7, 1 ], [ 7, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 3, 3 ],
                    ]))
            })
        })
    })
})
