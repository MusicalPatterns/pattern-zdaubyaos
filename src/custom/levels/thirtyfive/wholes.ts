import { DictionaryOf, repeat, sequence, to } from '../../../../../../src'
import { to as zdaubyaosTo } from '../../../nominal'
import { ContourWhole } from '../../../types'
import { calculateContourDuration } from '../../../utilities'
import { rest } from '../../rest'
import { buildThirtyfiveContourPieces } from './pieces'

const buildThirtyfiveContourWholes: () => DictionaryOf<ContourWhole> =
    (): DictionaryOf<ContourWhole> => {
        const {
            thirtyfiveYaosBassContourPiece,
            thirtyfiveYaosAccidentInspiredContourPiece,
            thirtyfiveZdaubContourPiece,
            thirtyfiveZdaubOnlyWiggleContourPiece,
        } = buildThirtyfiveContourPieces()

        const thirtyfiveYaosBassContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(sequence([
            repeat(thirtyfiveYaosBassContourPiece, to.Count(30)),
        ]))

        const thirtyfiveYaosAccidentInspiredContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(sequence([
            repeat(thirtyfiveYaosAccidentInspiredContourPiece, to.Count(30)),
        ]))

        const thirtyfiveZdaubContourWhole: ContourWhole = zdaubyaosTo.ContourWhole(sequence([
            rest(calculateContourDuration(thirtyfiveZdaubContourPiece)),
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
