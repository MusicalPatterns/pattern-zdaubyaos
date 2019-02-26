import { Segment } from '@musical-patterns/pattern'
import { DictionaryOf, to } from '@musical-patterns/utilities'
import { buildSegment } from '../../segments'
import { buildThirtyfiveContourWholes } from './wholes'

const buildThirtyfiveSegments: () => DictionaryOf<Segment> =
    (): DictionaryOf<Segment> => {
        const {
            thirtyfiveYaosAccidentInspiredContourWhole,
            thirtyfiveYaosBassContourWhole,
            thirtyfiveZdaubContourWhole,
        } = buildThirtyfiveContourWholes()

        const thirtyfiveSegment: Segment = buildSegment(
            [
                thirtyfiveZdaubContourWhole,
                thirtyfiveYaosAccidentInspiredContourWhole,
                thirtyfiveYaosBassContourWhole,
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
    buildThirtyfiveSegments,
}
