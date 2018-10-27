import { DictionaryOf, repeat, sequence, to } from '../../../../../src'
import { rest } from '../../rest'
import { Part } from '../../types'
import { calculateContourDuration } from '../../utilities'
import { buildThirtyfiveContours } from './contours'

const buildThirtyfiveParts: () => DictionaryOf<Part> =
    (): DictionaryOf<Part> => {
        const {
            thirtyfiveYaosBassContour,
            thirtyfiveYaosAccidentInspiredContour,
            thirtyfiveZdaubContour,
            thirtyfiveZdaubOnlyWiggleContour,
        } = buildThirtyfiveContours()

        const thirtyfiveYaosBassPart: Part = sequence([
            repeat(thirtyfiveYaosBassContour, to.Count(30)),
        ])

        const thirtyfiveYaosAccidentInspiredPart: Part = sequence([
            repeat(thirtyfiveYaosAccidentInspiredContour, to.Count(30)),
        ])

        const thirtyfiveZdaubPart: Part = sequence([
            rest(calculateContourDuration(thirtyfiveZdaubContour)),
            repeat(thirtyfiveZdaubContour, to.Count(2)),
            repeat(thirtyfiveZdaubOnlyWiggleContour, to.Count(12)),
        ])

        return {
            thirtyfiveYaosAccidentInspiredPart,
            thirtyfiveYaosBassPart,
            thirtyfiveZdaubPart,
        }
    }

export {
    buildThirtyfiveParts,
}
