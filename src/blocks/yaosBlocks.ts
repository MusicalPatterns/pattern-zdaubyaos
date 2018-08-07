import repeat from '../../../../src/utilities/repeat'
import { Blocks } from '../types'

const yaosBlocksByDuration: { [index: string]: { [index: string]: Blocks } } = {
    fifteen: {
        chuwow: [3, 4, 3, 5],
        djiyai: [3, 5, 7],
        iest: repeat([5], 3),
        inai: [4, 4, 4, 3],
        ouzd: [8, 7],
        umow: repeat([3], 5),
    },
    twentyfour: {
        chuwow: [3, 4, 5, 3, 5, 4],
        djiyai: [3, 3, 5, 3, 3, 7],
        iest: repeat([6], 4),
        inai: repeat([3], 8),
        ouzd: repeat([8], 3),
        umow: repeat([4], 6),
    },
}

export {
    yaosBlocksByDuration,
}
