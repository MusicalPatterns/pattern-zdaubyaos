import { NOTE_TYPES_FOR_RENDERINGS } from '../constants'
import { inaiiiVariety, yaosContoursByBarDurationBlockStyleThenRendering } from '../contours/yaosContours'
import { manualNoteType } from '../noteTypes'
import { BarDuration, BlockStyle, Contour, Notes, Rendering } from '../types'

type ByRendering = { [z in Rendering]: Notes }
type ByBlockStyle = { [y in BlockStyle]: ByRendering }
type YaosNotes = { [x in BarDuration]: ByBlockStyle }

// @ts-ignore
const yaosNotesByBarDurationBlockStyleThenRendering: YaosNotes = {}

Object.entries(yaosContoursByBarDurationBlockStyleThenRendering).forEach(
    // @ts-ignore
    ([barDuration, contoursByBlockStyle]: [BarDuration, ByBlockStyle]): void => {
        Object.entries(contoursByBlockStyle).forEach(
            // @ts-ignore
            ([blockStyle, contoursByRendering]: [BlockStyle, ByRendering]): void => {
                Object.entries(contoursByRendering).forEach(
                    // @ts-ignore
                    ([rendering, contour]: [Rendering, Contour]): void => {
                        const notes: Notes = contour.map(NOTE_TYPES_FOR_RENDERINGS[rendering])

                        yaosNotesByBarDurationBlockStyleThenRendering[barDuration] =
                            yaosNotesByBarDurationBlockStyleThenRendering[barDuration] || {}
                        yaosNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle] =
                            yaosNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle] || {}
                        yaosNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle][rendering] = notes
                    })
            })
    })

const inaiiiVarietyNotes: Notes = inaiiiVariety.map(manualNoteType)

export {
    yaosNotesByBarDurationBlockStyleThenRendering,
    inaiiiVarietyNotes,
}
