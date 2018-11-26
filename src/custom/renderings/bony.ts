import { apply, Count, from, Index, repeat, Time, to } from '@musical-patterns/utilities'
import { Block, ContourPiece, to as labTo } from '../../../../../nominal'
import { FIFTEEN, TWENTYFOUR } from '../../constants'
import {
    FIFTEEN_BONY_BLOCK_COUNT_PER_BAR,
    FIFTEEN_BONY_BLOCKS,
    TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR,
    TWENTYFOUR_BONY_BLOCKS,
} from './constants'
import { Rendering } from './types'

const bonyRendering: Rendering =
    (block: Block): ContourPiece => {
        const blockClone: Block = labTo.Block(block.slice())
        const blocksTotal: Time = blockClone.reduce(
            (accumulator: Time, blockElement: Index): Time =>
                to.Time(from.Time(accumulator) + from.Index(blockElement)),
            to.Time(0),
        )
        const isBarTargetFifteen: boolean = from.Time(blocksTotal) % from.Time(FIFTEEN) === 0
        const barDivisor: Time = isBarTargetFifteen ? FIFTEEN : TWENTYFOUR
        const barCount: Count = to.Count(from.Time(blocksTotal) / from.Time(barDivisor))

        const rhythmicBlocks: Block = labTo.Block(isBarTargetFifteen ?
            repeat(FIFTEEN_BONY_BLOCKS, apply.Count(barCount, FIFTEEN_BONY_BLOCK_COUNT_PER_BAR)) :
            repeat(TWENTYFOUR_BONY_BLOCKS, apply.Count(barCount, TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR)),
        )

        const contourPiece: ContourPiece = labTo.ContourPiece([])
        let blocksIndexForPitchIndex: Index = to.Index(0)

        rhythmicBlocks.forEach((rhythmicBlockElement: Index): void => {
            const pitchIndex: Index = apply.Index(block, blocksIndexForPitchIndex)

            blockClone[ 0 ] = apply.Offset(blockClone[ 0 ], to.Offset(-from.Index(rhythmicBlockElement)))
            if (blockClone[ 0 ] < to.Index(0)) {
                return
            }
            if (blockClone[ 0 ] === to.Index(0)) {
                blockClone.shift()
                blocksIndexForPitchIndex = apply.Offset(blocksIndexForPitchIndex, to.Offset(1))
            }

            contourPiece.push([ from.Index(pitchIndex), from.Index(rhythmicBlockElement) ])
        })

        return contourPiece
    }

export {
    bonyRendering,
}
