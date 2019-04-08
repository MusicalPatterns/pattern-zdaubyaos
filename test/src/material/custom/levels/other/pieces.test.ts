import { PitchDuration } from '@musical-patterns/material'
import { to } from '@musical-patterns/utilities'
import { computeOtherContourPieces, OtherContourPieces } from '../../../../../../src/indexForTest'

describe('other contour pieces', () => {
    let otherContourPieces: OtherContourPieces
    beforeEach(() => {
        otherContourPieces = computeOtherContourPieces()
    })

    it('handles backbone fifteen', () => {
        expect(otherContourPieces.backboneFifteen)
            .toEqual(to.ContourPiece<PitchDuration>([
                [ 1, 1 ], [ 2, 2 ],
                [ 1, 1 ], [ 2, 2 ],
                [ 1, 1 ], [ 2, 2 ],
                [ 1, 1 ], [ 2, 2 ],
                [ 1, 1 ], [ 2, 2 ],
            ]))
    })

    it('handles backbone twentyfour', () => {
        expect(otherContourPieces.backboneTwentyfour)
            .toEqual(to.ContourPiece<PitchDuration>([
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 3, 3 ],
            ]))
    })

    it('handles shifty fifteen', () => {
        expect(otherContourPieces.shiftyFifteen)
            .toEqual(to.ContourPiece<PitchDuration>([
                [ 2, 2 ], [ 1, 1 ],
                [ 5, 5 ], [ 1, 1 ],
                [ 2, 2 ], [ 4, 4 ],
            ]))
    })

    it('handles shifty twentyfour', () => {
        expect(otherContourPieces.shiftyTwentyfour)
            .toEqual(to.ContourPiece<PitchDuration>([
                [ 3, 3 ], [ 1, 1 ],
                [ 3, 3 ], [ 1, 1 ],
                [ 3, 3 ], [ 4, 4 ],
                [ 5, 5 ], [ 4, 4 ],
            ]))
    })

    it('handles shifty twentyfour variant', () => {
        expect(otherContourPieces.shiftyTwentyfourVariant)
            .toEqual(to.ContourPiece<PitchDuration>([
                [ 4, 4 ], [ 7, 7 ], [ 4, 4 ],
                [ 1, 1 ], [ 3, 3 ], [ 1, 1 ], [ 3, 3 ], [ 1, 1 ],
            ]))
    })

    it('handles shifty', () => {
        expect(otherContourPieces.shifty)
            .toEqual(to.ContourPiece<PitchDuration>([
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
