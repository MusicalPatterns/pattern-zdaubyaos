import { chuwow, djiyai, iest, inai, ouzd, umow } from '../blocks/yaosFifteenBlocks'
import render from '../render'
import { fall, spring, summer } from '../renderings'
import { Contour } from '../types'

const umowSpring: Contour = render(umow, spring)
const chuwowSpring: Contour = render(chuwow, spring)
const iestSpring: Contour = render(iest, spring)

const umowSummer: Contour = render(umow, summer)
const chuwowSummer: Contour = render(chuwow, summer)
const iestSummer: Contour = render(iest, summer)

const umowFall: Contour = render(umow, fall)
const chuwowFall: Contour = render(chuwow, fall)
const iestFall: Contour =  render(iest, fall)

const inaiSpring: Contour = render(inai, spring)
const djiyaiSpring: Contour = render(djiyai, spring)
const ouzdSpring: Contour = render(ouzd, spring)

const inaiSummer: Contour = render(inai, summer)
const djiyaiSummer: Contour = render(djiyai, summer)
const ouzdSummer: Contour = render(ouzd, summer)

const inaiFall: Contour = render(inai, fall)
const djiyaiFall: Contour = render(djiyai, fall)
const ouzdFall: Contour = render(ouzd, fall)

export {
    umowSpring,
    chuwowSpring,
    iestSpring,
    umowSummer,
    chuwowSummer,
    iestSummer,
    umowFall,
    chuwowFall,
    iestFall,
    inaiSpring,
    djiyaiSpring,
    ouzdSpring,
    inaiSummer,
    djiyaiSummer,
    ouzdSummer,
    inaiFall,
    djiyaiFall,
    ouzdFall,
}
