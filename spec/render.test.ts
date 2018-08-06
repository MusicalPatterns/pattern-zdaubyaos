import render from '../src/render'
import { spring } from '../src/renderings'

describe('render', () => {
    it('applies a rendering to a set of blocks, sequencing the result', () => {
        expect(render([3, 4], spring)).toEqual([0, 2, 3, 0, 2, 3, 4])
    })
})
