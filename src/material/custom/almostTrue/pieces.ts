import { PitchValue, Rendering } from '@musical-patterns/material'
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
        const glis: Rendering<PitchValue> = renderings[ RenderingName.GLIS ]

        const zdaubGlisVariant: ContourPiece<PitchValue> = glis(blocks.trueGlisVariant)

        const trueBlocks: TrueBlocksByBarTargetThenBlockStyle = computeTrueBlocks()
        const inai: Block = trueBlocks[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ]
        const inaiiiVariety: ContourPiece<PitchValue> = as.ContourPiece<PitchValue>(sequence(
            ...map(inai, (blockElement: number, index: Ordinal): ContourPiece<PitchValue> => {
                const renderingsSequence: Array<Rendering<PitchValue>> = [
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.FALL ],
                    renderings[ RenderingName.FALL ],
                ]

                const rendering: Rendering<PitchValue> = use.Ordinal(
                    renderingsSequence,
                    insteadOf<Ordinal, Array<Rendering<PitchValue>>>(index),
                )

                return rendering(as.Block([ blockElement ]))
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
