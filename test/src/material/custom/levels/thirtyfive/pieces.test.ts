import { calculateTotalPitchDurationContourDuration, PitchDuration } from '@musical-patterns/pattern'
import { dividesEvenly, to } from '@musical-patterns/utilities'
import { buildThirtyfiveContourPieces, ThirtyfiveContourPieces } from '../../../../../../src/indexForTest'

describe('thirtyfive contour pieces', () => {
    let thirtyfiveContourPieces: ThirtyfiveContourPieces
    beforeEach(() => {
        thirtyfiveContourPieces = buildThirtyfiveContourPieces()
    })

    it('handles yaos bass', () => {
        expect(thirtyfiveContourPieces.yaosBass)
            .toEqual(to.ContourPiece<PitchDuration>([
                [ 1, 1 ], [ 5, 5 ],
                [ 1, 1 ], [ 5, 5 ],
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 5, 5 ],
                [ 1, 1 ], [ 5, 5 ],
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 2, 2 ],
            ]))
    })

    it('handles yaos accident inspired', () => {
        expect(thirtyfiveContourPieces.yaosAccidentInspired)
            .toEqual(to.ContourPiece<PitchDuration>([
                [ 1, 1 ], [ 2, 2 ], [ 3, 3 ],
                [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ],
                [ 1, 1 ], [ 2, 2 ], [ 3, 3 ],
                [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ],
                [ 1, 1 ], [ 2, 2 ],
            ]))

    })

    it('handles zdaub', () => {
        expect(thirtyfiveContourPieces.zdaub)
            .toEqual(to.ContourPiece<PitchDuration>([
                [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ],
                [ 13, 13 ], [ 10, 10 ], [ 7, 7 ], [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ],
                [ 19, 19 ], [ 16, 16 ],
                [ 13, 13 ], [ 10, 10 ], [ 7, 7 ], [ 4, 4 ], [ 1, 1 ],
            ]))
    })

    it('handles only wiggle', () => {
        expect(thirtyfiveContourPieces.zdaubOnlyWiggle)
            .toEqual(to.ContourPiece<PitchDuration>([
                [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ],
            ]))
    })

    it('is the case that they are all actually length multiples of 35', () => {
        expect(dividesEvenly(calculateTotalPitchDurationContourDuration(thirtyfiveContourPieces.yaosBass), 35))
            .toBeTruthy()
        expect(dividesEvenly(calculateTotalPitchDurationContourDuration(thirtyfiveContourPieces.yaosAccidentInspired), 35))
            .toBeTruthy()
        expect(dividesEvenly(calculateTotalPitchDurationContourDuration(thirtyfiveContourPieces.zdaub), 35))
            .toBeTruthy()
    })
})
