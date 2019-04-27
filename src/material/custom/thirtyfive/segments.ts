import { Scale, Segment } from '@musical-patterns/material'
import { as, Gain, Pitch } from '@musical-patterns/utilities'
import { computeSegment } from '../../segment'
import { ThirtyfiveContourWholes, ThirtyfiveSegments } from './types'
import { computeThirtyfiveContourWholes } from './wholes'

const computeThirtyfiveSegments: () => ThirtyfiveSegments =
    (): ThirtyfiveSegments => {
        const contourWholes: ThirtyfiveContourWholes = computeThirtyfiveContourWholes()

        const thirtyfiveSegment: Segment = computeSegment(
            [
                contourWholes.thirtyfiveZdaub,
                contourWholes.thirtyfiveYaosAccidentInspired,
                contourWholes.thirtyfiveYaosBass,
            ],
            [
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(0), gainScalar: as.NormalScalar<Gain>(0.66) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(5), gainScalar: as.NormalScalar<Gain>(1) },
            ],
        )

        return {
            thirtyfiveSegment,
        }
    }

export {
    computeThirtyfiveSegments,
}
