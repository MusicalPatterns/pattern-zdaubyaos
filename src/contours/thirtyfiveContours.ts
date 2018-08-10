import {
    thirtyfiveYaosAccidentInspiredBlocks,
    thirtyfiveYaosBassBlocks,
    thirtyfiveZdaubBlocks,
    thirtyfiveZdaubOnlyWiggleBlocks,
} from '../blocks/thirtyfiveBlocks'
import renderings from '../renderings/renderings'
import { Contour, Rendering, RenderingFunction } from '../types'

const glis: RenderingFunction = renderings[Rendering.GLIS]

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
