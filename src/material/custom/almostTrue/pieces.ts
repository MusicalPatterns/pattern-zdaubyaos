import { PitchDuration, Rendering } from '@musical-patterns/material'
import { as, Block, ContourPiece, insteadOf, map, Ordinal, sequence, use } from '@musical-patterns/utilities'
import { computeRenderings, RenderingName, Renderings } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { computeTrueBlocks, TrueBlocksByBarTargetThenBlockStyle } from '../true'
import { computeAlmostTrueBlocks } from './blocks'
import { AlmostTrueBlocks, AlmostTrueContourPieces } from './types'

const computeAlmostTrueContourPieces: () => AlmostTrueContourPieces =
    (): AlmostTrueContourPieces => {
        const blocks: AlmostTrueBlocks = computeAlmostTrueBlocks()

        const renderings: Renderings = computeRenderings()
        const glis: Rendering<PitchDuration> = renderings[ RenderingName.GLIS ]

        const zdaubGlisVariant: ContourPiece<PitchDuration> = glis(blocks.trueGlisVariant)

        const trueBlocks: TrueBlocksByBarTargetThenBlockStyle = computeTrueBlocks()
        const inai: Block = trueBlocks[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ]
        const inaiiiVariety: ContourPiece<PitchDuration> = as.ContourPiece(sequence(
            ...map(inai, (cell: number, index: Ordinal): ContourPiece<PitchDuration> => {
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

                const rendering: Rendering<PitchDuration> = use.Ordinal(
                    renderingsSequence,
                    insteadOf<Ordinal, Array<Rendering<PitchDuration>>>(index),
                )

                return rendering(as.Block([ cell ]))
            }),
        ))

        return {
            inaiiiVariety,
            zdaubGlisVariant,
        }
    }

export {
    computeAlmostTrueContourPieces,
}
