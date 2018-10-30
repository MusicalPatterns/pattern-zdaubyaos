import { DictionaryOf } from '../../../../../../src'
import { ContourPiece } from '../../../types'
import {
    buildZdaubyaosRenderings,
    Rendering,
    RenderingName,
    Renderings,
} from '../../renderings'
import { buildThirtyfiveBlocks } from './blocks'

const buildThirtyfiveContourPieces: () => DictionaryOf<ContourPiece> =
    (): DictionaryOf<ContourPiece> => {
        const {
            thirtyfiveYaosAccidentInspiredBlock,
            thirtyfiveYaosBassBlock,
            thirtyfiveZdaubBlock,
            thirtyfiveZdaubOnlyWiggleBlock,
        } = buildThirtyfiveBlocks()

        const renderings: Renderings = buildZdaubyaosRenderings()

        const glis: Rendering = renderings[ RenderingName.GLIS ]

        const thirtyfiveYaosBassContourPiece: ContourPiece = glis(thirtyfiveYaosBassBlock)
        const thirtyfiveYaosAccidentInspiredContourPiece: ContourPiece = glis(thirtyfiveYaosAccidentInspiredBlock)
        const thirtyfiveZdaubContourPiece: ContourPiece = glis(thirtyfiveZdaubBlock)
        const thirtyfiveZdaubOnlyWiggleContourPiece: ContourPiece = glis(thirtyfiveZdaubOnlyWiggleBlock)

        return {
            thirtyfiveYaosAccidentInspiredContourPiece,
            thirtyfiveYaosBassContourPiece,
            thirtyfiveZdaubContourPiece,
            thirtyfiveZdaubOnlyWiggleContourPiece,
        }
    }

export {
    buildThirtyfiveContourPieces,
}
