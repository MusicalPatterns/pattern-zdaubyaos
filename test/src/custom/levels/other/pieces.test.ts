import { to } from '@musical-patterns/pattern'
import { buildOtherContourPieces } from '../../../../../src/indexForTest'

describe('other contour pieces', () => {
    it('handles backbone fifteen', () => {
        const { backboneFifteenContourPiece } = buildOtherContourPieces()

        expect(backboneFifteenContourPiece)
            .toEqual(to.ContourPiece([
                [ 1, 1 ], [ 2, 2 ],
                [ 1, 1 ], [ 2, 2 ],
                [ 1, 1 ], [ 2, 2 ],
                [ 1, 1 ], [ 2, 2 ],
                [ 1, 1 ], [ 2, 2 ],
            ]))
    })

    it('handles backbone twentyfour', () => {
        const { backboneTwentyfourContourPiece } = buildOtherContourPieces()

        expect(backboneTwentyfourContourPiece)
            .toEqual(to.ContourPiece([
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 3, 3 ],
            ]))
    })

    it('handles shifty fifteen', () => {
        const { shiftyFifteenContourPiece } = buildOtherContourPieces()

        expect(shiftyFifteenContourPiece)
            .toEqual(to.ContourPiece([
                [ 2, 2 ], [ 1, 1 ],
                [ 5, 5 ], [ 1, 1 ],
                [ 2, 2 ], [ 4, 4 ],
            ]))
    })

    it('handles shifty twentyfour', () => {
        const { shiftyTwentyfourContourPiece } = buildOtherContourPieces()

        expect(shiftyTwentyfourContourPiece)
            .toEqual(to.ContourPiece([
                [ 3, 3 ], [ 1, 1 ],
                [ 3, 3 ], [ 1, 1 ],
                [ 3, 3 ], [ 4, 4 ],
                [ 5, 5 ], [ 4, 4 ],
            ]))
    })

    it('handles shifty twentyfour variant', () => {
        const { shiftyTwentyfourVariantContourPiece } = buildOtherContourPieces()

        expect(shiftyTwentyfourVariantContourPiece)
            .toEqual(to.ContourPiece([
                [ 4, 4 ], [ 7, 7 ], [ 4, 4 ],
                [ 1, 1 ], [ 3, 3 ], [ 1, 1 ], [ 3, 3 ], [ 1, 1 ],
            ]))
    })

    it('handles shifty', () => {
        const { shiftyContourPiece } = buildOtherContourPieces()

        expect(shiftyContourPiece)
            .toEqual(to.ContourPiece([
                [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ],
                [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ],
                [ 3, 3 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ],
                [ 3, 3 ], [ 5, 5 ], [ 7, 7 ], [ 9, 9 ],
                [ 11, 11 ], [ 13, 13 ],
                [ 15, 15 ], [ 17, 17 ], [ 19, 19 ], [ 21, 21 ],
                // (this spreads across 3 bars)
                // (this spreads across 3 bars)
                [ 23, 23 ], [ 25, 25 ],
                // (this spreads across 2 bars)
            ]))
    })
})
