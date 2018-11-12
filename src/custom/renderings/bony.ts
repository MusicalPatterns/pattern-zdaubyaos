import {
    applyCount,
    applyOffset,
    Block,
    ContourPiece,
    Count,
    dereference,
    from,
    Index,
    repeat,
    Time,
    to,
} from '../../../../../src'
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
        const blockClone: Block = to.Block(block.slice())
        const blocksTotal: Time = blockClone.reduce(
            (accumulator: Time, blockElement: Index): Time =>
                to.Time(from.Time(accumulator) + from.Index(blockElement)),
            to.Time(0),
        )
        const isBarTargetFifteen: boolean = from.Time(blocksTotal) % from.Time(FIFTEEN) === 0
        const barDivisor: Time = isBarTargetFifteen ? FIFTEEN : TWENTYFOUR
        const barCount: Count = to.Count(from.Time(blocksTotal) / from.Time(barDivisor))

        const rhythmicBlocks: Block = to.Block(isBarTargetFifteen ?
            repeat(FIFTEEN_BONY_BLOCKS, applyCount(barCount, FIFTEEN_BONY_BLOCK_COUNT_PER_BAR)) :
            repeat(TWENTYFOUR_BONY_BLOCKS, applyCount(barCount, TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR)),
        )

        const contourPiece: ContourPiece = to.ContourPiece([])
        let blocksIndexForPitchIndex: Index = to.Index(0)

        rhythmicBlocks.forEach((rhythmicBlockElement: Index): void => {
            const pitchIndex: Index = dereference(block, blocksIndexForPitchIndex)

            blockClone[ 0 ] = applyOffset(blockClone[ 0 ], to.Offset(-from.Index(rhythmicBlockElement)))
            if (blockClone[ 0 ] < to.Index(0)) {
                return
            }
            if (blockClone[ 0 ] === to.Index(0)) {
                blockClone.shift()
                blocksIndexForPitchIndex = applyOffset(blocksIndexForPitchIndex, to.Offset(1))
            }

            contourPiece.push([ from.Index(pitchIndex), from.Index(rhythmicBlockElement) ])
        })

        return contourPiece
    }

export {
    bonyRendering,
}
