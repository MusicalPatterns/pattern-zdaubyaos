import { PitchDuration, Rendering } from '@musical-patterns/pattern'
import { apply, Block, ContourPiece, DictionaryOf, map, Ordinal, sequence, to } from '@musical-patterns/utilities'
import { buildRenderings, RenderingName, Renderings } from '../../material'
import { BarTarget, BlockStyle } from '../../types'
import { buildTrueBlocks, TrueBlocksByBarTargetThenBlockStyle } from '../true'
import { buildAlmostTrueBlocks } from './blocks'

const buildAlmostTrueContourPieces: () => DictionaryOf<ContourPiece<PitchDuration>> =
    (): DictionaryOf<ContourPiece<PitchDuration>> => {
        const { trueGlisVariantBlock } = buildAlmostTrueBlocks()

        const renderings: Renderings = buildRenderings()
        const glis: Rendering<PitchDuration> = renderings[ RenderingName.GLIS ]

        const zdaubGlisVariantContourPiece: ContourPiece<PitchDuration> = glis(trueGlisVariantBlock)

        const trueBlocks: TrueBlocksByBarTargetThenBlockStyle = buildTrueBlocks()
        const inai: Block = trueBlocks[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ]
        const inaiiiVarietyContourPiece: ContourPiece<PitchDuration> = to.ContourPiece(sequence(
            map(inai, (cell: number, index: Ordinal): ContourPiece<PitchDuration> => {
                const renderingsSequence: Array<Rendering<PitchDuration>> = [
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.FALL ],
                    renderings[ RenderingName.FALL ],
                ]

                const rendering: Rendering<PitchDuration> = apply.Ordinal(renderingsSequence, index)

                return rendering(to.Block([ cell ]))
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
