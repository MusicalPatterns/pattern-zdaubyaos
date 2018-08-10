import * as from from '../../../../src/utilities/from'
import * as to from '../../src/utilities/to'
import calculateContourDuration from '../../src/contours/calculateContourDuration'
import { Contour } from '../../src/types'

describe('calculate contour duration', () => {
    it('totals the durations of the contour', () => {
        const contour: Contour = to.Contour([
            [1,3],[0,4],[7,3],
        ])

        expect(from.Time(calculateContourDuration(contour))).toBe(10)
    })
})
