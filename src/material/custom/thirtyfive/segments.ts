import { Scale, Segment } from '@musical-patterns/material'
import { Amplitude, as } from '@musical-patterns/utilities'
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
                { scaleIndex: as.Ordinal<Scale>(0), gainScalar: as.NormalScalar<Amplitude>(0.66) },
                { scaleIndex: as.Ordinal<Scale>(1) },
                { scaleIndex: as.Ordinal<Scale>(5), gainScalar: as.NormalScalar<Amplitude>(1) },
            ],
        )

        return {
            thirtyfiveSegment,
        }
    }

export {
    computeThirtyfiveSegments,
}
