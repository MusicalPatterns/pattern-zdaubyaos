import { yaosFifteenContoursByBlocksThenRendering } from '../contours/yaosFifteenContours'
import { glisNoteType, tremNoteType } from '../noteTypes'
import { Contour, Notes, NoteType } from '../types'

const yaosFifteenNotesByBlocksThenRendering: { [index: string]: {[index: string]: Notes} } = {}

const noteTypeForRendering: {[index: string]: NoteType } = {
    fall: glisNoteType,
    spring: tremNoteType,
    springySummer: tremNoteType,
    summer: tremNoteType,
    summerySpring: tremNoteType,
}

// tslint:disable-next-line:max-line-length
Object.entries(yaosFifteenContoursByBlocksThenRendering).forEach(([blocksName, contoursByRendering]: [string, {[index: string]: Contour}]) => {
    Object.entries(contoursByRendering).forEach(([renderingName, contour]: [string, Contour]): void => {
        const notes: Notes = contour.map(noteTypeForRendering[renderingName])

        yaosFifteenNotesByBlocksThenRendering[blocksName] = yaosFifteenNotesByBlocksThenRendering[blocksName] || {}
        yaosFifteenNotesByBlocksThenRendering[blocksName][renderingName] = notes
    })
})

export {
    yaosFifteenNotesByBlocksThenRendering,
}
