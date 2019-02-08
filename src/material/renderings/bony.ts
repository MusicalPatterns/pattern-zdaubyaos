import { PitchDuration, Rendering } from '@musical-patterns/pattern'
import {
    apply,
    Block,
    Cardinal,
    ContourPiece,
    deepClone,
    dividesEvenly,
    from,
    Ms,
    negative,
    Ordinal,
    reciprocal,
    repeat,
    sum,
    to,
} from '@musical-patterns/utilities'
import { FIFTEEN, TWENTYFOUR } from '../../constants'
import {
    FIFTEEN_BONY_BLOCK_COUNT_PER_BAR,
    FIFTEEN_BONY_BLOCKS,
    TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR,
    TWENTYFOUR_BONY_BLOCKS,
} from './constants'

const bonyRendering: Rendering<PitchDuration> =
    (block: Block): ContourPiece<PitchDuration> => {
        const blockClone: Block = to.Block(deepClone(block))
        const blocksTotal: Ms = blockClone.reduce(
            (accumulator: Ms, cell: number): Ms =>
                sum(accumulator, to.Ms(cell)),
            to.Ms(0),
        )
        const isBarTargetFifteen: boolean = dividesEvenly(blocksTotal, FIFTEEN)
        const barDivisor: Ms = isBarTargetFifteen ? FIFTEEN : TWENTYFOUR
        const barCount: Cardinal = to.Cardinal(from.Ms(apply.Scalar(
            blocksTotal,
            to.Scalar(from.Ms(reciprocal(barDivisor))),
        )))

        const rhythmicBlocks: Block = to.Block(isBarTargetFifteen ?
            repeat(FIFTEEN_BONY_BLOCKS, apply.Cardinal(barCount, FIFTEEN_BONY_BLOCK_COUNT_PER_BAR)) :
            repeat(TWENTYFOUR_BONY_BLOCKS, apply.Cardinal(barCount, TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR)),
        )

        const contourPiece: ContourPiece<PitchDuration> = to.ContourPiece([])
        let blocksIndexForPitchIndex: Ordinal = to.Ordinal(0)

        rhythmicBlocks.forEach((rhythmicBlockElement: number): void => {
            const pitchIndex: number = apply.Ordinal(block, blocksIndexForPitchIndex)

            blockClone[ 0 ] = apply.Translation(blockClone[ 0 ], to.Translation(negative(rhythmicBlockElement)))
            if (blockClone[ 0 ] < 0) {
                return
            }
            if (blockClone[ 0 ] === 0) {
                blockClone.shift()
                blocksIndexForPitchIndex = apply.Translation(blocksIndexForPitchIndex, to.Translation(1))
            }

            contourPiece.push(to.ContourElement<PitchDuration>([ pitchIndex, rhythmicBlockElement ]))
        })

        return contourPiece
    }

export {
    bonyRendering,
}
