import {
    calculateTotalContourDuration,
    ContourWhole,
    DictionaryOf,
    repeat,
    rest,
    sequence,
    to,
} from '../../../../../../src'
import { buildThirtyfiveContourPieces } from './pieces'

const buildThirtyfiveContourWholes: () => DictionaryOf<ContourWhole> =
    (): DictionaryOf<ContourWhole> => {
        const {
            thirtyfiveYaosBassContourPiece,
            thirtyfiveYaosAccidentInspiredContourPiece,
            thirtyfiveZdaubContourPiece,
            thirtyfiveZdaubOnlyWiggleContourPiece,
        } = buildThirtyfiveContourPieces()

        const thirtyfiveYaosBassContourWhole: ContourWhole = to.ContourWhole(sequence([
            repeat(thirtyfiveYaosBassContourPiece, to.Count(30)),
        ]))

        const thirtyfiveYaosAccidentInspiredContourWhole: ContourWhole = to.ContourWhole(sequence([
            repeat(thirtyfiveYaosAccidentInspiredContourPiece, to.Count(30)),
        ]))

        const thirtyfiveZdaubContourWhole: ContourWhole = to.ContourWhole(sequence([
            rest(calculateTotalContourDuration(thirtyfiveZdaubContourPiece)),
            repeat(thirtyfiveZdaubContourPiece, to.Count(2)),
            repeat(thirtyfiveZdaubOnlyWiggleContourPiece, to.Count(12)),
        ]))

        return {
            thirtyfiveYaosAccidentInspiredContourWhole,
            thirtyfiveYaosBassContourWhole,
            thirtyfiveZdaubContourWhole,
        }
    }

export {
    buildThirtyfiveContourWholes,
}
