import { PitchValue, Rendering } from '@musical-patterns/material'
import { as, Block, ContourPiece, insteadOf, map, Ordinal, sequence, Thunk, use } from '@musical-patterns/utilities'
import { RenderingName, Renderings, thunkRenderings } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { thunkTrueBlocks, TrueBlocksByBarTargetThenBlockStyle } from '../true'
import { thunkAlmostTrueBlocks } from './blocks'
import { AlmostTrueBlocks, AlmostTrueContourPieces } from './types'

const thunkAlmostTrueContourPieces: Thunk<AlmostTrueContourPieces> =
    (): AlmostTrueContourPieces => {
        const blocks: AlmostTrueBlocks = thunkAlmostTrueBlocks()

        const renderings: Renderings = thunkRenderings()
        const glis: Rendering<PitchValue> = renderings[ RenderingName.GLIS ]

        const zdaubGlisVariant: ContourPiece<PitchValue> = glis(blocks.trueGlisVariant)

        const trueBlocks: TrueBlocksByBarTargetThenBlockStyle = thunkTrueBlocks()
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
    thunkAlmostTrueContourPieces,
}
