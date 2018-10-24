import * as from from '../../../../../src/utilities/from'
import { Contour } from '../../../src/types'
import calculateContourDuration from '../../../src/utilities/calculateContourDuration'
import * as to from '../../../src/utilities/to'

describe('calculate contour duration', () => {
    it('totals the durations of the contour', () => {
        const contour: Contour = to.Contour([
            [ 1, 3 ], [ 0, 4 ], [ 7, 3 ],
        ])

        expect(from.Index(calculateContourDuration(contour))).toBe(10)
    })
})
