import { NOTE_TYPES_FOR_RENDERINGS } from '../constants'
import { yaosFifteenContoursByBlocksThenRendering } from '../contours/yaosFifteenContours'
import { Contour, Notes } from '../types'

const yaosFifteenNotesByBlocksThenRendering: { [index: string]: {[index: string]: Notes} } = {}

// tslint:disable-next-line:max-line-length
Object.entries(yaosFifteenContoursByBlocksThenRendering).forEach(([blocksName, contoursByRendering]: [string, {[index: string]: Contour}]) => {
    Object.entries(contoursByRendering).forEach(([renderingName, contour]: [string, Contour]): void => {
        const notes: Notes = contour.map(NOTE_TYPES_FOR_RENDERINGS[renderingName])

        yaosFifteenNotesByBlocksThenRendering[blocksName] = yaosFifteenNotesByBlocksThenRendering[blocksName] || {}
        yaosFifteenNotesByBlocksThenRendering[blocksName][renderingName] = notes
    })
})

export {
    yaosFifteenNotesByBlocksThenRendering,
}
