import { NOTE_TYPES_FOR_RENDERINGS } from '../constants'
import { inaiiiVariety, yaosContoursByDurationBlocksThenRendering } from '../contours/yaosContours'
import { manualNoteType } from '../noteTypes'
import { Contour, Notes } from '../types'

const yaosNotesByDurationBlocksThenRendering: { [index: string]: { [index: string]: { [index: string]: Notes } } } = {
    fifteen: {},
    twentyfour: {},
}

Object.entries(yaosContoursByDurationBlocksThenRendering.fifteen).forEach(
    ([blocksName, contoursByRendering]: [string, { [index: string]: Contour }]) => {
        Object.entries(contoursByRendering).forEach(([renderingName, contour]: [string, Contour]): void => {
            const notes: Notes = contour.map(NOTE_TYPES_FOR_RENDERINGS[renderingName])

            yaosNotesByDurationBlocksThenRendering.fifteen[blocksName] =
                yaosNotesByDurationBlocksThenRendering.fifteen[blocksName] || {}
            yaosNotesByDurationBlocksThenRendering.fifteen[blocksName][renderingName] = notes
        })
    })

Object.entries(yaosContoursByDurationBlocksThenRendering.twentyfour).forEach(
    ([blocksName, contoursByRendering]: [string, { [index: string]: Contour }]) => {
        Object.entries(contoursByRendering).forEach(([renderingName, contour]: [string, Contour]): void => {
            const notes: Notes = contour.map(NOTE_TYPES_FOR_RENDERINGS[renderingName])

            yaosNotesByDurationBlocksThenRendering.twentyfour[blocksName] =
                yaosNotesByDurationBlocksThenRendering.twentyfour[blocksName] || {}
            yaosNotesByDurationBlocksThenRendering.twentyfour[blocksName][renderingName] = notes
        })
    })

const inaiiiVarietyNotes: Notes = inaiiiVariety.map(manualNoteType)

export {
    yaosNotesByDurationBlocksThenRendering,
    inaiiiVarietyNotes,
}
