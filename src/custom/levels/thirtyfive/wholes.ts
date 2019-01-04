import { calculateTotalStandardContourDuration, standardRest } from '@musical-patterns/pattern'
import { ContourWhole, DictionaryOf, repeat, sequence, to } from '@musical-patterns/utilities'
import { ZdaubyaosContour } from '../../../types'
import { buildThirtyfiveContourPieces } from './pieces'

const buildThirtyfiveContourWholes: () => DictionaryOf<ContourWhole<ZdaubyaosContour>> =
    (): DictionaryOf<ContourWhole<ZdaubyaosContour>> => {
        const {
            thirtyfiveYaosBassContourPiece,
            thirtyfiveYaosAccidentInspiredContourPiece,
            thirtyfiveZdaubContourPiece,
            thirtyfiveZdaubOnlyWiggleContourPiece,
        } = buildThirtyfiveContourPieces()

        const thirtyfiveYaosBassContourWhole: ContourWhole<ZdaubyaosContour> = to.ContourWhole(sequence([
            repeat(thirtyfiveYaosBassContourPiece, to.Count(30)),
        ]))

        const thirtyfiveYaosAccidentInspiredContourWhole: ContourWhole<ZdaubyaosContour> = to.ContourWhole(sequence([
            repeat(thirtyfiveYaosAccidentInspiredContourPiece, to.Count(30)),
        ]))

        const thirtyfiveZdaubContourWhole: ContourWhole<ZdaubyaosContour> = to.ContourWhole(sequence([
            standardRest(calculateTotalStandardContourDuration(thirtyfiveZdaubContourPiece)),
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
