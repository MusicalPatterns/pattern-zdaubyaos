import * as from from '../../../../src/utilities/from'
import { Index, Time } from '../../../../src/utilities/nominalTypes'
import offset from '../../../../src/utilities/offset'
import repeat from '../../../../src/utilities/repeat'
import sequence from '../../../../src/utilities/sequence'
import * as to from '../../../../src/utilities/to'
import { Blocks, Contour, ContourElement, RenderingFunction } from '../types'
import * as zdaubyaosFrom from '../utilities/from'
import { Block } from '../utilities/nominalTypes'
import * as zdaubyaosTo from '../utilities/to'
import { ZdaubRendering } from '../zdaubyaosTypes'

const glisBlock: (block: Block) => Contour =
    (block: Block): Contour =>
        [
            [
                to.Index(zdaubyaosFrom.Block(block)),
                to.Time(zdaubyaosFrom.Block(block)),
            ],
        ]

const glis: RenderingFunction =
    (blocks: Blocks): Contour =>
        sequence(blocks.map(glisBlock))

const tremBlock: (block: Block) => Contour =
    (block: Block): Contour => {
        const contourElement: ContourElement = [to.Index(zdaubyaosFrom.Block(block)), to.Time(1)]

        return repeat([contourElement], zdaubyaosFrom.Block(block))
    }

const trem: RenderingFunction =
    (blocks: Blocks): Contour =>
        sequence(blocks.map(tremBlock))

// tslint:disable-next-line:no-any no-magic-numbers
const FIFTEEN: Time = 15 as any
// tslint:disable-next-line:no-any no-magic-numbers
const TWENTYFOUR: Time = 24 as any

const bony: RenderingFunction = (blocks: Blocks): Contour => {
    const blocksClone: Blocks = blocks.slice()
    const blocksTotal: Time = to.Time(blocksClone.reduce((m: number, n: Block) => m + zdaubyaosFrom.Block(n), 0))
    const isBarDurationFifteen: boolean = from.Time(blocksTotal) % from.Time(FIFTEEN) === 0
    const barDivisor: Time = isBarDurationFifteen ? FIFTEEN : TWENTYFOUR
    const barCount: number = from.Time(blocksTotal) / from.Time(barDivisor)
    const rhythmicBlocks: Blocks = zdaubyaosTo.Blocks(isBarDurationFifteen ?
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
            throw new Error('These blocks cannot be bony.')
        }
        if (blocksClone[0] === zdaubyaosTo.Block(0)) {
            blocksClone.shift()
            blocksIndexForPitchIndex = offset(blocksIndexForPitchIndex, to.Offset(1))
        }

        output.push([pitchIndex, to.Time(zdaubyaosFrom.Block(rhythmicBlock))])
    })

    return output
}

const zdaubRenderings: { [x in ZdaubRendering]: RenderingFunction } = {
    [ZdaubRendering.GLIS]: glis,
    [ZdaubRendering.TREM]: trem,
    [ZdaubRendering.BONY]: bony,
}

export default zdaubRenderings
