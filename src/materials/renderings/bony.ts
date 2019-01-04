import { Rendering } from '@musical-patterns/pattern'
import { apply, Block, ContourPiece, Count, from, Index, repeat, Time, to } from '@musical-patterns/utilities'
import { FIFTEEN, TWENTYFOUR } from '../../constants'
import { ZdaubyaosContour } from '../../types'
import {
    FIFTEEN_BONY_BLOCK_COUNT_PER_BAR,
    FIFTEEN_BONY_BLOCKS,
    TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR,
    TWENTYFOUR_BONY_BLOCKS,
} from './constants'

const bonyRendering: Rendering<ZdaubyaosContour> =
    (block: Block): ContourPiece<ZdaubyaosContour> => {
        const blockClone: Block = to.Block(block.slice())
        const blocksTotal: Time = blockClone.reduce(
            (accumulator: Time, blockElement: number): Time =>
                to.Time(from.Time(accumulator) + blockElement),
            to.Time(0),
        )
        const isBarTargetFifteen: boolean = from.Time(blocksTotal) % from.Time(FIFTEEN) === 0
        const barDivisor: Time = isBarTargetFifteen ? FIFTEEN : TWENTYFOUR
        const barCount: Count = to.Count(from.Time(blocksTotal) / from.Time(barDivisor))

        const rhythmicBlocks: Block = to.Block(isBarTargetFifteen ?
            repeat(FIFTEEN_BONY_BLOCKS, apply.Count(barCount, FIFTEEN_BONY_BLOCK_COUNT_PER_BAR)) :
            repeat(TWENTYFOUR_BONY_BLOCKS, apply.Count(barCount, TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR)),
        )

        const contourPiece: ContourPiece<ZdaubyaosContour> = to.ContourPiece([])
        let blocksIndexForPitchIndex: Index = to.Index(0)

        rhythmicBlocks.forEach((rhythmicBlockElement: number): void => {
            const pitchIndex: number = apply.Index(block, blocksIndexForPitchIndex)

            blockClone[ 0 ] = apply.Offset(blockClone[ 0 ], to.Offset(-rhythmicBlockElement))
            if (blockClone[ 0 ] < 0) {
                return
            }
            if (blockClone[ 0 ] === 0) {
                blockClone.shift()
                blocksIndexForPitchIndex = apply.Offset(blocksIndexForPitchIndex, to.Offset(1))
            }

            contourPiece.push([ pitchIndex, rhythmicBlockElement ])
        })

        return contourPiece
    }

export {
    bonyRendering,
}
