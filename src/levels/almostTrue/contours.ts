import { DictionaryOf, sequence } from '../../../../../src'
import { Block } from '../../nominal'
import { buildRenderings, Renderings } from '../../renderings'
import { BarTarget, BlockStyle, Contour, Rendering } from '../../types'
import { buildTrueBlocks } from '../true'
import { buildAlmostTrueBlocks } from './blocks'

const buildAlmostTrueContours: () => DictionaryOf<Contour> =
    (): DictionaryOf<Contour> => {
        const {
            trueGlisVariantBlocks,
        } = buildAlmostTrueBlocks()

        const renderings: Renderings = buildRenderings()

        const zdaubGlisVariantContour: Contour = renderings[ Rendering.GLIS ](trueGlisVariantBlocks)

        const inaiiiVarietyContour: Contour = sequence(
            buildTrueBlocks()[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ].map(
                (block: Block, index: number): Contour =>
                    [
                        renderings[ Rendering.SPRING ],
                        renderings[ Rendering.SUMMER ],
                        renderings[ Rendering.SPRING ],
                        renderings[ Rendering.SUMMER ],
                        renderings[ Rendering.SPRING ],
                        renderings[ Rendering.SUMMER ],
                        renderings[ Rendering.FALL ],
                        renderings[ Rendering.FALL ],
                    ][ index ]([ block ])),
        )

        return {
            inaiiiVarietyContour,
            zdaubGlisVariantContour,
        }
    }

export {
    buildAlmostTrueContours,
}
