import { Rendering } from '@musical-patterns/pattern'
import { Block, ContourPiece, DictionaryOf, sequence, to } from '@musical-patterns/utilities'
import { BarTarget, BlockStyle, ZdaubyaosContour } from '../../../types'
import { buildRenderings, RenderingName, Renderings } from '../../renderings'
import { buildTrueBlocks, TrueBlocks } from '../true'
import { buildAlmostTrueBlocks } from './blocks'

const buildAlmostTrueContourPieces: () => DictionaryOf<ContourPiece<ZdaubyaosContour>> =
    (): DictionaryOf<ContourPiece<ZdaubyaosContour>> => {
        const { trueGlisVariantBlock } = buildAlmostTrueBlocks()

        const renderings: Renderings = buildRenderings()
        const glis: Rendering<ZdaubyaosContour> = renderings[ RenderingName.GLIS ]

        const zdaubGlisVariantContourPiece: ContourPiece<ZdaubyaosContour> = glis(trueGlisVariantBlock)

        const trueBlocks: TrueBlocks = buildTrueBlocks()
        const inai: Block = trueBlocks[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ]
        const inaiiiVarietyContourPiece: ContourPiece<ZdaubyaosContour> = to.ContourPiece(sequence(
            inai.map((blockElement: number, index: number): ContourPiece<ZdaubyaosContour> => {
                const renderingsSequence: Array<Rendering<ZdaubyaosContour>> = [
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.FALL ],
                    renderings[ RenderingName.FALL ],
                ]

                const rendering: Rendering<ZdaubyaosContour> = renderingsSequence[ index ]

                return rendering(to.Block([ blockElement ]))
            }),
        ))

        return {
            inaiiiVarietyContourPiece,
            zdaubGlisVariantContourPiece,
        }
    }

export {
    buildAlmostTrueContourPieces,
}
