import {
    thirtyfiveYaosAccidentInspiredBlocks,
    thirtyfiveYaosBassBlocks,
    thirtyfiveZdaubBlocks,
    thirtyfiveZdaubOnlyWiggleBlocks,
} from '../blocks/thirtyfiveBlocks'
import zdaubyaosRenderings from '../renderings/zdaubyaosRenderings'
import { Contour, RenderingFunction } from '../types'
import { Rendering } from '../zdaubyaosTypes'

const glis: RenderingFunction = zdaubyaosRenderings[Rendering.GLIS]

const thirtyfiveYaosBassContour: Contour = glis(thirtyfiveYaosBassBlocks)
const thirtyfiveYaosAccidentInspiredContour: Contour = glis(thirtyfiveYaosAccidentInspiredBlocks)
const thirtyfiveZdaubContour: Contour = glis(thirtyfiveZdaubBlocks)
const thirtyfiveZdaubOnlyWiggleContour: Contour = glis(thirtyfiveZdaubOnlyWiggleBlocks)

export {
    thirtyfiveYaosBassContour,
    thirtyfiveYaosAccidentInspiredContour,
    thirtyfiveZdaubContour,
    thirtyfiveZdaubOnlyWiggleContour,
}
