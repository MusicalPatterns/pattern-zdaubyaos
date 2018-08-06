import { chuwowww, djiyaiii, iesttt, inaiii, ouzddd, umowww } from '../blocks/yaosTwentyfourBlocks'
import render from '../render'
import { fall, spring, summer } from '../renderings'
import { Contour } from '../types'

const umowwwSpring: Contour = render(umowww, spring)
const chuwowwwSpring: Contour = render(chuwowww, spring)
const iestttSpring: Contour = render(iesttt, spring)

const umowwwSummer: Contour = render(umowww, summer)
const chuwowwwSummer: Contour = render(chuwowww, summer)
const iestttSummer: Contour = render(iesttt, summer)

const umowwwFall: Contour = render(umowww, fall)
const chuwowwwFall: Contour = render(chuwowww, fall)
const iestttFall: Contour =  render(iesttt, fall)

const inaiiiSpring: Contour = render(inaiii, spring)
const djiyaiiiSpring: Contour = render(djiyaiii, spring)
const ouzdddSpring: Contour = render(ouzddd, spring)

const inaiiiSummer: Contour = render(inaiii, summer)
const djiyaiiiSummer: Contour = render(djiyaiii, summer)
const ouzdddSummer: Contour = render(ouzddd, summer)

const inaiiiFall: Contour = render(inaiii, fall)
const djiyaiiiFall: Contour = render(djiyaiii, fall)
const ouzdddFall: Contour = render(ouzddd, fall)

const inaiiiVariety: number[][] = [
        [0, 1], [2, 1], [3, 1],
        [1, 1], [0, 1], [3, 1],
        [0, 1], [2, 1], [3, 1],
        [1, 1], [0, 1], [3, 1],
        [0, 1], [2, 1], [3, 1],
        [1, 1], [0, 1], [3, 1],
        [1, 1], [2, 2],
        [1, 1], [2, 2],
]

export {
    umowwwSpring,
    chuwowwwSpring,
    iestttSpring,
    umowwwSummer,
    chuwowwwSummer,
    iestttSummer,
    umowwwFall,
    chuwowwwFall,
    iestttFall,
    inaiiiSpring,
    djiyaiiiSpring,
    ouzdddSpring,
    inaiiiSummer,
    djiyaiiiSummer,
    ouzdddSummer,
    inaiiiFall,
    djiyaiiiFall,
    ouzdddFall,
    inaiiiVariety,
}
