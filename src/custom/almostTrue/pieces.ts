import { Rendering, StandardContour } from '@musical-patterns/pattern'
import { Block, ContourPiece, DictionaryOf, sequence, to } from '@musical-patterns/utilities'
import { buildRenderings, RenderingName, Renderings } from '../../material'
import { BarTarget, BlockStyle } from '../../types'
import { buildTrueBlocks, TrueBlocks } from '../true'
import { buildAlmostTrueBlocks } from './blocks'

const buildAlmostTrueContourPieces: () => DictionaryOf<ContourPiece<StandardContour>> =
    (): DictionaryOf<ContourPiece<StandardContour>> => {
        const { trueGlisVariantBlock } = buildAlmostTrueBlocks()

        const renderings: Renderings = buildRenderings()
        const glis: Rendering<StandardContour> = renderings[ RenderingName.GLIS ]

        const zdaubGlisVariantContourPiece: ContourPiece<StandardContour> = glis(trueGlisVariantBlock)

        const trueBlocks: TrueBlocks = buildTrueBlocks()
        const inai: Block = trueBlocks[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ]
        const inaiiiVarietyContourPiece: ContourPiece<StandardContour> = to.ContourPiece(sequence(
            inai.map((blockElement: number, index: number): ContourPiece<StandardContour> => {
                const renderingsSequence: Array<Rendering<StandardContour>> = [
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.FALL ],
                    renderings[ RenderingName.FALL ],
                ]

                const rendering: Rendering<StandardContour> = renderingsSequence[ index ]

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
