import { to } from '@musical-patterns/utilities'
import {
    calculateTotalContourDuration,
    ContourWhole,
    DictionaryOf,
    repeat,
    rest,
    sequence,
    to as labTo,
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

        const thirtyfiveYaosBassContourWhole: ContourWhole = labTo.ContourWhole(sequence([
            repeat(thirtyfiveYaosBassContourPiece, to.Count(30)),
        ]))

        const thirtyfiveYaosAccidentInspiredContourWhole: ContourWhole = labTo.ContourWhole(sequence([
            repeat(thirtyfiveYaosAccidentInspiredContourPiece, to.Count(30)),
        ]))

        const thirtyfiveZdaubContourWhole: ContourWhole = labTo.ContourWhole(sequence([
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
