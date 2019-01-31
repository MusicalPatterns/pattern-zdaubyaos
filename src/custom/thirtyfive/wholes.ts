import { calculateTotalStandardContourDuration, StandardContour, standardRest } from '@musical-patterns/pattern'
import { ContourWhole, DictionaryOf, repeat, sequence, to } from '@musical-patterns/utilities'
import { buildThirtyfiveContourPieces } from './pieces'

const buildThirtyfiveContourWholes: () => DictionaryOf<ContourWhole<StandardContour>> =
    (): DictionaryOf<ContourWhole<StandardContour>> => {
        const {
            thirtyfiveYaosBassContourPiece,
            thirtyfiveYaosAccidentInspiredContourPiece,
            thirtyfiveZdaubContourPiece,
            thirtyfiveZdaubOnlyWiggleContourPiece,
        } = buildThirtyfiveContourPieces()

        const thirtyfiveYaosBassContourWhole: ContourWhole<StandardContour> = to.ContourWhole(sequence([
            repeat(thirtyfiveYaosBassContourPiece, to.Count(30)),
        ]))

        const thirtyfiveYaosAccidentInspiredContourWhole: ContourWhole<StandardContour> = to.ContourWhole(sequence([
            repeat(thirtyfiveYaosAccidentInspiredContourPiece, to.Count(30)),
        ]))

        const thirtyfiveZdaubContourWhole: ContourWhole<StandardContour> = to.ContourWhole(sequence([
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
