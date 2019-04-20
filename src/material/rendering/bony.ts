import { PitchDuration, Rendering } from '@musical-patterns/material'
import {
    apply,
    arraySet,
    Block,
    Cardinal,
    ContourPiece,
    deepClone,
    dividesEvenly,
    from,
    negative,
    NEXT,
    ofFrom,
    Ordinal,
    reciprocal,
    repeat,
    sum,
    to,
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
        to.Cardinal(apply.Scalar(
            from.Cardinal(blocksTotal),
            to.Scalar(reciprocal(barDivisor)),
        ))

const bonyRendering: Rendering<PitchDuration> =
    (block: Block): ContourPiece<PitchDuration> => {
        const blockClone: Block = to.Block(deepClone(block))
        const blocksTotal: Cardinal = blockClone.reduce(
            // tslint:disable-next-line no-unnecessary-callback-wrapper
            (accumulator: Cardinal, cell: number): Cardinal =>
                sum(accumulator, to.Cardinal(cell)),
            to.Cardinal(0),
        )
        const isBarTargetFifteen: boolean = dividesEvenly(blocksTotal, FIFTEEN)
        const barDivisor: Cardinal = isBarTargetFifteen ? FIFTEEN : TWENTYFOUR
        const barCount: Cardinal = getBarCountIsTrickyBecauseWeKnowItDividesEvenlyButTypesDoNot(blocksTotal, barDivisor)

        const rhythmicBlocks: Block = to.Block(isBarTargetFifteen ?
            repeat(
                FIFTEEN_BONY_BLOCKS,
                apply.Multiple(barCount, to.Multiple(ofFrom(FIFTEEN_BONY_BLOCK_COUNT_PER_BAR))),
            ) :
            repeat(
                TWENTYFOUR_BONY_BLOCKS,
                apply.Multiple(barCount, to.Multiple(ofFrom(TWENTYFOUR_BONY_BLOCK_COUNT_PER_BAR))),
            ),
        )

        const contourPiece: ContourPiece<PitchDuration> = to.ContourPiece([])
        let blocksIndexForPitchIndex: Ordinal = to.Ordinal(0)

        rhythmicBlocks.forEach((rhythmicBlockElement: number): void => {
            const pitchIndex: number = apply.Ordinal(block, blocksIndexForPitchIndex)

            arraySet(
                blockClone,
                ZEROTH,
                apply.Translation(blockClone[ 0 ], to.Translation(negative(rhythmicBlockElement))),
            )
            if (blockClone[ 0 ] < 0) {
                return
            }
            if (blockClone[ 0 ] === 0) {
                blockClone.shift()
                blocksIndexForPitchIndex = apply.Translation(blocksIndexForPitchIndex, NEXT)
            }

            contourPiece.push(to.ContourElement<PitchDuration>([ pitchIndex, rhythmicBlockElement ]))
        })

        return contourPiece
    }

export {
    bonyRendering,
}
