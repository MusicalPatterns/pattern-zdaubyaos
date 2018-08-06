import { chuwowww, djiyaiii, iesttt, inaiii, ouzddd, umowww } from '../blocks/yaosTwentyfourBlocks'
import render from '../render'
import renderings from '../renderings'
import { Contour } from '../types'

const umowwwSpring: Contour = render(umowww, renderings.spring)
const chuwowwwSpring: Contour = render(chuwowww, renderings.spring)
const iestttSpring: Contour = render(iesttt, renderings.spring)

const umowwwSummer: Contour = render(umowww, renderings.summer)
const chuwowwwSummer: Contour = render(chuwowww, renderings.summer)
const iestttSummer: Contour = render(iesttt, renderings.summer)

const umowwwFall: Contour = render(umowww, renderings.fall)
const chuwowwwFall: Contour = render(chuwowww, renderings.fall)
const iestttFall: Contour =  render(iesttt, renderings.fall)

const inaiiiSpring: Contour = render(inaiii, renderings.spring)
const djiyaiiiSpring: Contour = render(djiyaiii, renderings.spring)
const ouzdddSpring: Contour = render(ouzddd, renderings.spring)

const inaiiiSummer: Contour = render(inaiii, renderings.summer)
const djiyaiiiSummer: Contour = render(djiyaiii, renderings.summer)
const ouzdddSummer: Contour = render(ouzddd, renderings.summer)

const inaiiiFall: Contour = render(inaiii, renderings.fall)
const djiyaiiiFall: Contour = render(djiyaiii, renderings.fall)
const ouzdddFall: Contour = render(ouzddd, renderings.fall)

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

const djiyaiiiSpringySummer: Contour = render(djiyaiii, renderings.springySummer)

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
    djiyaiiiSpringySummer,
}
