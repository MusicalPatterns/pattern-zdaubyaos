import { from } from '../../../../../src/indexForTest'
import { buildThirtyfiveContours, calculateContourDuration, to } from '../../../src/indexForTest'

describe('thirtyfive contours', () => {
    it('handles yaos bass', () => {
        const { thirtyfiveYaosBassContour } = buildThirtyfiveContours()

        expect(thirtyfiveYaosBassContour).toEqual(to.Contour([
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
        const { thirtyfiveYaosAccidentInspiredContour } = buildThirtyfiveContours()

        expect(thirtyfiveYaosAccidentInspiredContour).toEqual(to.Contour([
            [ 1, 1 ], [ 2, 2 ], [ 3, 3 ],
            [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ],
            [ 1, 1 ], [ 2, 2 ], [ 3, 3 ],
            [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ],
            [ 1, 1 ], [ 2, 2 ],
        ]))

    })

    it('handles zdaub', () => {
        const { thirtyfiveZdaubContour } = buildThirtyfiveContours()

        expect(thirtyfiveZdaubContour).toEqual(to.Contour([
            [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ],
            [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ],
            [ 13, 13 ], [ 10, 10 ], [ 7, 7 ], [ 4, 4 ], [ 1, 1 ],
            [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ], [ 4, 4 ], [ 1, 1 ],
            [ 19, 19 ], [ 16, 16 ],
            [ 13, 13 ], [ 10, 10 ], [ 7, 7 ], [ 4, 4 ], [ 1, 1 ],
        ]))
    })

    it('handles only wiggle', () => {
        const { thirtyfiveZdaubOnlyWiggleContour } = buildThirtyfiveContours()

        expect(thirtyfiveZdaubOnlyWiggleContour).toEqual(to.Contour([
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
            thirtyfiveYaosBassContour,
            thirtyfiveYaosAccidentInspiredContour,
            thirtyfiveZdaubContour,
        } = buildThirtyfiveContours()

        expect(from.Index(calculateContourDuration(thirtyfiveYaosBassContour)) % 35).toBe(0)
        expect(from.Index(calculateContourDuration(thirtyfiveYaosAccidentInspiredContour)) % 35).toBe(0)
        expect(from.Index(calculateContourDuration(thirtyfiveZdaubContour)) % 35).toBe(0)
    })
})
