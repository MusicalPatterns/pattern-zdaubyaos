import { from } from '../../../../../src/indexForTest'
import { calculateContourDuration, ContourPiece, to } from '../../../src/indexForTest'

describe('calculate contour duration', () => {
    it('totals the durations of the contour', () => {
        const contour: ContourPiece = to.ContourPiece([
            [ 1, 3 ], [ 0, 4 ], [ 7, 3 ],
        ])

        expect(from.Index(calculateContourDuration(contour)))
            .toBe(10)
    })
})
