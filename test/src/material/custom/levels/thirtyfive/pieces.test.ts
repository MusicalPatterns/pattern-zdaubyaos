import { computeTotalPitchValueContourValue, PitchValue } from '@musical-patterns/material'
import { as, dividesEvenly } from '@musical-patterns/utilities'
import { ThirtyfiveContourPieces, thunkThirtyfiveContourPieces } from '../../../../../../src/indexForTest'

describe('thirtyfive contour pieces', (): void => {
    let thirtyfiveContourPieces: ThirtyfiveContourPieces
    beforeEach((): void => {
        thirtyfiveContourPieces = thunkThirtyfiveContourPieces()
    })

    it('handles yaos bass', (): void => {
        expect(thirtyfiveContourPieces.yaosBass)
            .toEqual(as.ContourPiece<PitchValue>([
                [ 1, 1 ], [ 5, 5 ],
                [ 1, 1 ], [ 5, 5 ],
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 5, 5 ],
                [ 1, 1 ], [ 5, 5 ],
                [ 1, 1 ], [ 3, 3 ],
                [ 1, 1 ], [ 2, 2 ],
            ]))
    })

    it('handles yaos accident inspired', (): void => {
        expect(thirtyfiveContourPieces.yaosAccidentInspired)
            .toEqual(as.ContourPiece<PitchValue>([
                [ 1, 1 ], [ 2, 2 ], [ 3, 3 ],
                [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ],
                [ 1, 1 ], [ 2, 2 ], [ 3, 3 ],
                [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ],
                [ 1, 1 ], [ 2, 2 ],
            ]))

    })

    it('handles zdaub', (): void => {
        expect(thirtyfiveContourPieces.zdaub)
            .toEqual(as.ContourPiece<PitchValue>([
                [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ],
                [ 13, 13 ], [ 10, 10 ], [ 7, 7 ], [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ],
                [ 19, 19 ], [ 16, 16 ],
                [ 13, 13 ], [ 10, 10 ], [ 7, 7 ], [ 4, 4 ], [ 1, 1 ],
            ]))
    })

    it('handles only wiggle', (): void => {
        expect(thirtyfiveContourPieces.zdaubOnlyWiggle)
            .toEqual(as.ContourPiece<PitchValue>([
                [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ],
            ]))
    })

    it('is the case that they are all actually length multiples of 35', (): void => {
        expect(dividesEvenly(computeTotalPitchValueContourValue(thirtyfiveContourPieces.yaosBass), 35))
            .toBeTruthy()
        expect(dividesEvenly(computeTotalPitchValueContourValue(thirtyfiveContourPieces.yaosAccidentInspired), 35))
            .toBeTruthy()
        expect(dividesEvenly(computeTotalPitchValueContourValue(thirtyfiveContourPieces.zdaub), 35))
            .toBeTruthy()
    })
})
