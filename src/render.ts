import sequence from '../../../src/utilities/sequence'
import { Blocks, Contour, Rendering } from './types'

const render: (contour: Blocks, rendering: Rendering) => Contour =
    (contour: Blocks, rendering: Rendering): Contour =>
        sequence(contour.map(rendering))

export default render
