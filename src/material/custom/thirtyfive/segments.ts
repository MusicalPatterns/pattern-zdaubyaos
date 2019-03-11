import { Segment } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { computeSegment } from '../../segments'
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
                { scaleIndex: to.Ordinal(0), gainScalar: to.Scalar(to.Amplitude(0.66)) },
                { scaleIndex: to.Ordinal(1) },
                { scaleIndex: to.Ordinal(5), gainScalar: to.Scalar(to.Amplitude(1.25)) },
            ],
        )

        return {
            thirtyfiveSegment,
        }
    }

export {
    computeThirtyfiveSegments,
}
