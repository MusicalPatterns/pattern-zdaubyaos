import * as from from '../../../../src/utilities/from'
import { Index, Time } from '../../../../src/utilities/nominalTypes'
import offset from '../../../../src/utilities/offset'
import repeat from '../../../../src/utilities/repeat'
import * as to from '../../../../src/utilities/to'
import { FIFTEEN, TWENTYFOUR } from '../constants'
import { Blocks, Contour, RenderingFunction } from '../types'
import * as zdaubyaosFrom from '../utilities/from'
import { Block } from '../utilities/nominalTypes'
import * as zdaubyaosTo from '../utilities/to'

const bony: RenderingFunction = (blocks: Blocks): Contour => {
    const blocksClone: Blocks = blocks.slice()
    const blocksTotal: Time = to.Time(blocksClone.reduce((m: number, n: Block) => m + zdaubyaosFrom.Block(n), 0))
    const isBarTargetFifteen: boolean = from.Time(blocksTotal) % from.Time(FIFTEEN) === 0
    const barDivisor: Time = isBarTargetFifteen ? FIFTEEN : TWENTYFOUR
    const barCount: number = from.Time(blocksTotal) / from.Time(barDivisor)
    const rhythmicBlocks: Blocks = zdaubyaosTo.Blocks(isBarTargetFifteen ?
        // tslint:disable-next-line:no-magic-numbers
        repeat([1, 2], barCount * 5) :
        // tslint:disable-next-line:no-magic-numbers
        repeat([1, 3], barCount * 6))
    const output: Contour = []
    let blocksIndexForPitchIndex: Index = to.Index(0)

    rhythmicBlocks.forEach((rhythmicBlock: Block): void => {
        const pitchIndex: Index = to.Index(zdaubyaosFrom.Block(blocks[from.Index(blocksIndexForPitchIndex)]))

        blocksClone[0] = offset(blocksClone[0], to.Offset(-zdaubyaosFrom.Block(rhythmicBlock)))
        if (blocksClone[0] < zdaubyaosTo.Block(0)) {
            return
        }
        if (blocksClone[0] === zdaubyaosTo.Block(0)) {
            blocksClone.shift()
            blocksIndexForPitchIndex = offset(blocksIndexForPitchIndex, to.Offset(1))
        }

        output.push([pitchIndex, to.Time(zdaubyaosFrom.Block(rhythmicBlock))])
    })

    return output
}

export default bony
