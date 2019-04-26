import { PitchDuration, Rendering } from '@musical-patterns/material'
import {
    arraySet,
    as,
    Block,
    Cardinal,
    ContourPiece,
    deepClone,
    dividesEvenly,
    negative,
    NEXT,
    ofNotAs,
    Ordinal,
    reciprocal,
    repeat,
    sum,
    use,
    ZEROTH,
} from '@musical-patterns/utilities'
import { FIFTEEN, TWENTYFOUR } from '../../constants'
import {
    FIFTEEN_BONY_BLOCK_COUNT_PER_BAR,
    FIFTEEN_BONY_BLOCKS,
    TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR,
    TWENTYFOUR_BONY_BLOCKS,
} from './constants'

const getBarCountIsTrickyBecauseWeKnowItDividesEvenlyButTypesDoNot:
    (blocksTotal: Cardinal, barDivisor: Cardinal) => Cardinal =
    (blocksTotal: Cardinal, barDivisor: Cardinal): Cardinal =>
        as.Cardinal(use.Scalar(
            as.number(blocksTotal),
            as.Scalar(as.number(reciprocal(barDivisor))),
        ))

const bonyRendering: Rendering<PitchDuration> =
    (block: Block): ContourPiece<PitchDuration> => {
        const blockClone: Block = as.Block(deepClone(block))
        const blocksTotal: Cardinal = blockClone.reduce(
            // tslint:disable-next-line no-unnecessary-callback-wrapper
            (accumulator: Cardinal, cell: number): Cardinal =>
                sum(accumulator, as.Cardinal(cell)),
            as.Cardinal(0),
        )
        const isBarTargetFifteen: boolean = dividesEvenly(blocksTotal, FIFTEEN)
        const barDivisor: Cardinal = isBarTargetFifteen ? FIFTEEN : TWENTYFOUR
        const barCount: Cardinal = getBarCountIsTrickyBecauseWeKnowItDividesEvenlyButTypesDoNot(blocksTotal, barDivisor)

        const rhythmicBlocks: Block = as.Block(isBarTargetFifteen ?
            repeat(
                FIFTEEN_BONY_BLOCKS,
                as.Cardinal<Block>(as.number(use.Multiple(
                    barCount,
                    as.Multiple(ofNotAs(FIFTEEN_BONY_BLOCK_COUNT_PER_BAR)),
                ))),
            ) :
            repeat(
                TWENTYFOUR_BONY_BLOCKS,
                as.Cardinal<Block>(as.number(use.Multiple(
                    barCount,
                    as.Multiple(ofNotAs(TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR)),
                ))),
            ),
        )

        const contourPiece: ContourPiece<PitchDuration> = as.ContourPiece([])
        let blocksIndexForPitchIndex: Ordinal = as.Ordinal(0)

        rhythmicBlocks.forEach((rhythmicBlockElement: number): void => {
            const pitchIndex: number = use.Ordinal(block, blocksIndexForPitchIndex)

            arraySet(
                blockClone,
                ZEROTH,
                use.Translation(blockClone[ 0 ], as.Translation(negative(rhythmicBlockElement))),
            )
            if (blockClone[ 0 ] < 0) {
                return
            }
            if (blockClone[ 0 ] === 0) {
                blockClone.shift()
                blocksIndexForPitchIndex = use.Cardinal(blocksIndexForPitchIndex, NEXT)
            }

            contourPiece.push(as.ContourElement<PitchDuration>([ pitchIndex, rhythmicBlockElement ]))
        })

        return contourPiece
    }

export {
    bonyRendering,
}
