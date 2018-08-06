import { NOTE_TYPES_FOR_RENDERINGS } from '../constants'
import { inaiiiVariety, yaosTwentyfourContoursByBlocksThenRendering } from '../contours/yaosTwentyfourContours'
import { manualNoteType } from '../noteTypes'
import { Contour, Notes } from '../types'

const inaiiiVarietyNotes: Notes = inaiiiVariety.map(manualNoteType)

const yaosTwentyfourNotesByBlocksThenRendering: { [index: string]: { [index: string]: Notes } } = {}

// tslint:disable-next-line:max-line-length
Object.entries(yaosTwentyfourContoursByBlocksThenRendering).forEach(([blocksName, contoursByRendering]: [string, { [index: string]: Contour }]) => {
    Object.entries(contoursByRendering).forEach(([renderingName, contour]: [string, Contour]): void => {
        const notes: Notes = contour.map(NOTE_TYPES_FOR_RENDERINGS[renderingName])

        yaosTwentyfourNotesByBlocksThenRendering[blocksName] =
            yaosTwentyfourNotesByBlocksThenRendering[blocksName] || {}
        yaosTwentyfourNotesByBlocksThenRendering[blocksName][renderingName] = notes
    })
})

export {
    yaosTwentyfourNotesByBlocksThenRendering,
    inaiiiVarietyNotes,
}
