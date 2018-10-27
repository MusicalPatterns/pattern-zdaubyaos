import { Rendering, RenderingFunction } from '../types'

type Renderings = { [x in Rendering]: RenderingFunction }

export {
    Renderings,
}
