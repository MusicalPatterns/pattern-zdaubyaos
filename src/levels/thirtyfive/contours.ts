import { DictionaryOf } from '../../../../../src'
import { buildRenderings, Renderings } from '../../renderings'
import { Contour, Rendering, RenderingFunction } from '../../types'
import { buildThirtyfiveBlocks } from './blocks'

const buildThirtyfiveContours: () => DictionaryOf<Contour> =
    (): DictionaryOf<Contour> => {
        const {
            thirtyfiveYaosAccidentInspiredBlocks,
            thirtyfiveYaosBassBlocks,
            thirtyfiveZdaubBlocks,
            thirtyfiveZdaubOnlyWiggleBlocks,
        } = buildThirtyfiveBlocks()

        const renderings: Renderings = buildRenderings()

        const glis: RenderingFunction = renderings[ Rendering.GLIS ]

        const thirtyfiveYaosBassContour: Contour = glis(thirtyfiveYaosBassBlocks)
        const thirtyfiveYaosAccidentInspiredContour: Contour = glis(thirtyfiveYaosAccidentInspiredBlocks)
        const thirtyfiveZdaubContour: Contour = glis(thirtyfiveZdaubBlocks)
        const thirtyfiveZdaubOnlyWiggleContour: Contour = glis(thirtyfiveZdaubOnlyWiggleBlocks)

        return {
            thirtyfiveYaosAccidentInspiredContour,
            thirtyfiveYaosBassContour,
            thirtyfiveZdaubContour,
            thirtyfiveZdaubOnlyWiggleContour,
        }
    }

export {
    buildThirtyfiveContours,
}
