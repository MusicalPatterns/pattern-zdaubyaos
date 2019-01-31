import { Rendering, StandardContour } from '@musical-patterns/pattern'
import { ContourPiece, DictionaryOf } from '@musical-patterns/utilities'
import { buildRenderings, RenderingName, Renderings } from '../../material'
import { buildThirtyfiveBlocks } from './blocks'

const buildThirtyfiveContourPieces: () => DictionaryOf<ContourPiece<StandardContour>> =
    (): DictionaryOf<ContourPiece<StandardContour>> => {
        const {
            thirtyfiveYaosAccidentInspiredBlock,
            thirtyfiveYaosBassBlock,
            thirtyfiveZdaubBlock,
            thirtyfiveZdaubOnlyWiggleBlock,
        } = buildThirtyfiveBlocks()

        const renderings: Renderings = buildRenderings()

        const glis: Rendering<StandardContour> = renderings[ RenderingName.GLIS ]

        const thirtyfiveYaosBassContourPiece: ContourPiece<StandardContour> = glis(thirtyfiveYaosBassBlock)
        const thirtyfiveYaosAccidentInspiredContourPiece: ContourPiece<StandardContour> =
            glis(thirtyfiveYaosAccidentInspiredBlock)
        const thirtyfiveZdaubContourPiece: ContourPiece<StandardContour> = glis(thirtyfiveZdaubBlock)
        const thirtyfiveZdaubOnlyWiggleContourPiece: ContourPiece<StandardContour> =
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
