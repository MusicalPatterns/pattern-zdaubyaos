import { DictionaryOf, to } from '@musical-patterns/utilities'
import { Segment } from '../../../../../../src'
import { buildSegment } from '../../../materials'
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
                { scaleIndex: to.Index(0), gainScalar: to.Scalar(0.66) },
                { scaleIndex: to.Index(1) },
                { scaleIndex: to.Index(5), gainScalar: to.Scalar(1.25) },
            ],
        )

        return {
            thirtyfiveSegment,
        }
    }

export {
    buildThirtyfiveSegments,
}
