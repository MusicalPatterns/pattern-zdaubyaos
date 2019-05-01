import { Scale, Segment } from '@musical-patterns/material'
import { as, Intensity, Pitch } from '@musical-patterns/utilities'
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
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(0), intensityScalar: as.NormalScalar<Intensity>(0.66) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(5), intensityScalar: as.NormalScalar<Intensity>(1) },
            ],
        )

        return {
            thirtyfiveSegment,
        }
    }

export {
    computeThirtyfiveSegments,
}
