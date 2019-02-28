import { PitchDuration, Rendering } from '@musical-patterns/pattern'
import { apply, Block, ContourPiece, map, Ordinal, sequence, to } from '@musical-patterns/utilities'
import { buildRenderings, RenderingName, Renderings } from '../../renderings'
import { BarTarget, BlockStyle } from '../../types'
import { buildTrueBlocks, TrueBlocksByBarTargetThenBlockStyle } from '../true'
import { buildAlmostTrueBlocks } from './blocks'
import { AlmostTrueBlocks, AlmostTrueContourPieces } from './types'

const buildAlmostTrueContourPieces: () => AlmostTrueContourPieces =
    (): AlmostTrueContourPieces => {
        const blocks: AlmostTrueBlocks = buildAlmostTrueBlocks()

        const renderings: Renderings = buildRenderings()
        const glis: Rendering<PitchDuration> = renderings[ RenderingName.GLIS ]

        const zdaubGlisVariant: ContourPiece<PitchDuration> = glis(blocks.trueGlisVariant)

        const trueBlocks: TrueBlocksByBarTargetThenBlockStyle = buildTrueBlocks()
        const inai: Block = trueBlocks[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ]
        const inaiiiVariety: ContourPiece<PitchDuration> = to.ContourPiece(sequence(
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
            inaiiiVariety,
            zdaubGlisVariant,
        }
    }

export {
    buildAlmostTrueContourPieces,
}
