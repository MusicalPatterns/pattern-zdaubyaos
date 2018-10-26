import {
    backboneFifteenContour,
    backboneTwentyfourContour,
    shiftyContour,
    shiftyFifteenContour,
    shiftyTwentyfourContour,
    shiftyTwentyfourVariantContour,
    to,
} from '../../../src/indexForTest'

describe('other contours', () => {
    it('handles backbone fifteen', () => {
        expect(backboneFifteenContour).toEqual(to.Contour([
            [ 1, 1 ], [ 2, 2 ],
            [ 1, 1 ], [ 2, 2 ],
            [ 1, 1 ], [ 2, 2 ],
            [ 1, 1 ], [ 2, 2 ],
            [ 1, 1 ], [ 2, 2 ],
        ]))
    })

    it('handles backbone twentyfour', () => {
        expect(backboneTwentyfourContour).toEqual(to.Contour([
            [ 1, 1 ], [ 3, 3 ],
            [ 1, 1 ], [ 3, 3 ],
            [ 1, 1 ], [ 3, 3 ],
            [ 1, 1 ], [ 3, 3 ],
            [ 1, 1 ], [ 3, 3 ],
            [ 1, 1 ], [ 3, 3 ],
        ]))
    })

    it('handles shifty fifteen', () => {
        expect(shiftyFifteenContour).toEqual(to.Contour([
            [ 2, 2 ], [ 1, 1 ],
            [ 5, 5 ], [ 1, 1 ],
            [ 2, 2 ], [ 4, 4 ],
        ]))
    })

    it('handles shifty twentyfour', () => {
        expect(shiftyTwentyfourContour).toEqual(to.Contour([
            [ 3, 3 ], [ 1, 1 ],
            [ 3, 3 ], [ 1, 1 ],
            [ 3, 3 ], [ 4, 4 ],
            [ 5, 5 ], [ 4, 4 ],
        ]))
    })

    it('handles shifty twentyfour variant', () => {
        expect(shiftyTwentyfourVariantContour).toEqual(to.Contour([
            [ 4, 4 ], [ 7, 7 ], [ 4, 4 ],
            [ 1, 1 ], [ 3, 3 ], [ 1, 1 ], [ 3, 3 ], [ 1, 1 ],
        ]))
    })

    it('handles shifty', () => {
        expect(shiftyContour).toEqual(to.Contour([
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
