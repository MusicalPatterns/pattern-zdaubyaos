import {
    thirtyfiveYaosAccidentInspiredBlocks,
    thirtyfiveYaosBassBlocks,
    thirtyfiveZdaubBlocks,
    thirtyfiveZdaubOnlyWiggleBlocks,
} from '../blocks/thirtyfiveBlocks'
import zdaubRenderings from '../renderings/zdaubRenderings'
import { Contour, RenderingFunction } from '../types'
import { ZdaubRendering } from '../zdaubyaosTypes'

const glis: RenderingFunction = zdaubRenderings[ZdaubRendering.GLIS]

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
