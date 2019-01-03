import { ContourPiece, DictionaryOf } from '@musical-patterns/utilities'
import { Rendering } from '@musical-patterns/utilities-pattern'
import { ZdaubyaosContour } from '../../../types'
import { buildRenderings, RenderingName, Renderings } from '../../renderings'
import { buildThirtyfiveBlocks } from './blocks'

const buildThirtyfiveContourPieces: () => DictionaryOf<ContourPiece<ZdaubyaosContour>> =
    (): DictionaryOf<ContourPiece<ZdaubyaosContour>> => {
        const {
            thirtyfiveYaosAccidentInspiredBlock,
            thirtyfiveYaosBassBlock,
            thirtyfiveZdaubBlock,
            thirtyfiveZdaubOnlyWiggleBlock,
        } = buildThirtyfiveBlocks()

        const renderings: Renderings = buildRenderings()

        const glis: Rendering<ZdaubyaosContour> = renderings[ RenderingName.GLIS ]

        const thirtyfiveYaosBassContourPiece: ContourPiece<ZdaubyaosContour> = glis(thirtyfiveYaosBassBlock)
        const thirtyfiveYaosAccidentInspiredContourPiece: ContourPiece<ZdaubyaosContour> =
            glis(thirtyfiveYaosAccidentInspiredBlock)
        const thirtyfiveZdaubContourPiece: ContourPiece<ZdaubyaosContour> = glis(thirtyfiveZdaubBlock)
        const thirtyfiveZdaubOnlyWiggleContourPiece: ContourPiece<ZdaubyaosContour> =
            glis(thirtyfiveZdaubOnlyWiggleBlock)

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
