import sequence from '../../../src/sequence'
import { Blocks, Contour, Rendering } from './types'

const render: (_: Blocks, __: Rendering) => Contour =
    (contour: Blocks, rendering: Rendering): Contour =>
        sequence(contour.map(rendering))

export default render
