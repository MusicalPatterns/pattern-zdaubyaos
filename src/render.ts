import sequence from '../../../src/utilities/sequence'
import { Blocks, Contour, RenderingFunction } from './types'

const render: (contour: Blocks, rendering: RenderingFunction) => Contour =
    (contour: Blocks, rendering: RenderingFunction): Contour =>
        sequence(contour.map(rendering))

export default render
