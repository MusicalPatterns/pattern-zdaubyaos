import { PitchDuration, Rendering } from '@musical-patterns/pattern'
import { ContourPiece, DictionaryOf } from '@musical-patterns/utilities'
import { buildRenderings, RenderingName, Renderings } from '../../material'
import { buildThirtyfiveBlocks } from './blocks'

const buildThirtyfiveContourPieces: () => DictionaryOf<ContourPiece<PitchDuration>> =
    (): DictionaryOf<ContourPiece<PitchDuration>> => {
        const {
            thirtyfiveYaosAccidentInspiredBlock,
            thirtyfiveYaosBassBlock,
            thirtyfiveZdaubBlock,
            thirtyfiveZdaubOnlyWiggleBlock,
        } = buildThirtyfiveBlocks()

        const renderings: Renderings = buildRenderings()

        const glis: Rendering<PitchDuration> = renderings[ RenderingName.GLIS ]

        const thirtyfiveYaosBassContourPiece: ContourPiece<PitchDuration> = glis(thirtyfiveYaosBassBlock)
        const thirtyfiveYaosAccidentInspiredContourPiece: ContourPiece<PitchDuration> =
            glis(thirtyfiveYaosAccidentInspiredBlock)
        const thirtyfiveZdaubContourPiece: ContourPiece<PitchDuration> = glis(thirtyfiveZdaubBlock)
        const thirtyfiveZdaubOnlyWiggleContourPiece: ContourPiece<PitchDuration> =
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
