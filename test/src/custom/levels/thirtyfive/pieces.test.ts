import { calculateTotalPitchDurationContourDuration } from '@musical-patterns/pattern'
import { dividesEvenly, to } from '@musical-patterns/utilities'
import { buildThirtyfiveContourPieces } from '../../../../../src/indexForTest'

describe('thirtyfive contour pieces', () => {
    it('handles yaos bass', () => {
        const { thirtyfiveYaosBassContourPiece } = buildThirtyfiveContourPieces()

        expect(thirtyfiveYaosBassContourPiece)
            .toEqual(to.ContourPiece([
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
        const { thirtyfiveYaosAccidentInspiredContourPiece } = buildThirtyfiveContourPieces()

        expect(thirtyfiveYaosAccidentInspiredContourPiece)
            .toEqual(to.ContourPiece([
                [ 1, 1 ], [ 2, 2 ], [ 3, 3 ],
                [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ],
                [ 1, 1 ], [ 2, 2 ], [ 3, 3 ],
                [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ],
                [ 1, 1 ], [ 2, 2 ],
            ]))

    })

    it('handles zdaub', () => {
        const { thirtyfiveZdaubContourPiece } = buildThirtyfiveContourPieces()

        expect(thirtyfiveZdaubContourPiece)
            .toEqual(to.ContourPiece([
                [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ],
                [ 13, 13 ], [ 10, 10 ], [ 7, 7 ], [ 4, 4 ], [ 1, 1 ],
                [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ],
                [ 19, 19 ], [ 16, 16 ],
                [ 13, 13 ], [ 10, 10 ], [ 7, 7 ], [ 4, 4 ], [ 1, 1 ],
            ]))
    })

    it('handles only wiggle', () => {
        const { thirtyfiveZdaubOnlyWiggleContourPiece } = buildThirtyfiveContourPieces()

        expect(thirtyfiveZdaubOnlyWiggleContourPiece)
            .toEqual(to.ContourPiece([
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
        const {
            thirtyfiveYaosBassContourPiece,
            thirtyfiveYaosAccidentInspiredContourPiece,
            thirtyfiveZdaubContourPiece,
        } = buildThirtyfiveContourPieces()

        expect(dividesEvenly(calculateTotalPitchDurationContourDuration(thirtyfiveYaosBassContourPiece), 35))
            .toBeTruthy()
        expect(dividesEvenly(calculateTotalPitchDurationContourDuration(thirtyfiveYaosAccidentInspiredContourPiece), 35))
            .toBeTruthy()
        expect(dividesEvenly(calculateTotalPitchDurationContourDuration(thirtyfiveZdaubContourPiece), 35))
            .toBeTruthy()
    })
})
