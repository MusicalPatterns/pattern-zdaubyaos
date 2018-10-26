import { applyOffset, applyScale, Count, from, Index, repeat, Time, to } from '../../../../src'
import { FIFTEEN, TWENTYFOUR } from '../constants'
import { Block, from as zdaubyaosFrom, to as zdaubyaosTo } from '../nominal'
import { Contour, RenderingFunction } from '../types'

const bony: RenderingFunction = (blocks: Block[]): Contour => {
    const blocksClone: Block[] = blocks.slice()
    const blocksTotal: Time = blocksClone.reduce(
        (m: Time, n: Block): Time => to.Time(from.Time(m) + zdaubyaosFrom.Block(n)),
        to.Time(0),
    )
    const isBarTargetFifteen: boolean = from.Time(blocksTotal) % from.Time(FIFTEEN) === 0
    const barDivisor: Time = isBarTargetFifteen ? FIFTEEN : TWENTYFOUR
    const barCount: Count = to.Count(from.Time(blocksTotal) / from.Time(barDivisor))
    const rhythmicBlocks: Block[] = zdaubyaosTo.Blocks(isBarTargetFifteen ?
        // tslint:disable-next-line:no-magic-numbers
        repeat([ 1, 2 ], applyScale(barCount, to.Scalar(5))) :
        // tslint:disable-next-line:no-magic-numbers
        repeat([ 1, 3 ], applyScale(barCount, to.Scalar(6))),
    )
    const output: Contour = []
    let blocksIndexForPitchIndex: Index = to.Index(0)

    rhythmicBlocks.forEach((rhythmicBlock: Block): void => {
        const pitchIndex: Index = to.Index(zdaubyaosFrom.Block(blocks[ from.Index(blocksIndexForPitchIndex) ]))

        blocksClone[ 0 ] = applyOffset(blocksClone[ 0 ], to.Offset(-zdaubyaosFrom.Block(rhythmicBlock)))
        if (blocksClone[ 0 ] < zdaubyaosTo.Block(0)) {
            return
        }
        if (blocksClone[ 0 ] === zdaubyaosTo.Block(0)) {
            blocksClone.shift()
            blocksIndexForPitchIndex = applyOffset(blocksIndexForPitchIndex, to.Offset(1))
        }

        output.push([ pitchIndex, to.Index(zdaubyaosFrom.Block(rhythmicBlock)) ])
    })

    return output
}

export {
    bony,
}
