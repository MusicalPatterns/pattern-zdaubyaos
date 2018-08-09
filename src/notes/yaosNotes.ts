import { NOTE_TYPES_BY_YAOS_RENDERINGS } from '../constants'
import { inaiiiVariety, yaosContoursByBarDurationBlockStyleThenRendering } from '../contours/yaosContours'
import { manualNoteType } from '../noteTypes'
import { BarDuration, YaosBlockStyle, Contour, Notes, YaosRendering } from '../types'

type ByRendering = { [z in YaosRendering]: Notes }
type ByBlockStyle = { [y in YaosBlockStyle]: ByRendering }
type YaosNotes = { [x in BarDuration]: ByBlockStyle }

// @ts-ignore
const yaosNotesByBarDurationBlockStyleThenRendering: YaosNotes = {}

Object.entries(yaosContoursByBarDurationBlockStyleThenRendering).forEach(
    // @ts-ignore
    ([barDuration, contoursByBlockStyle]: [BarDuration, ByBlockStyle]): void => {
        Object.entries(contoursByBlockStyle).forEach(
            // @ts-ignore
            ([blockStyle, contoursByRendering]: [YaosBlockStyle, ByRendering]): void => {
                Object.entries(contoursByRendering).forEach(
                    // @ts-ignore
                    ([rendering, contour]: [YaosRendering, Contour]): void => {
                        const notes: Notes = contour.map(NOTE_TYPES_BY_YAOS_RENDERINGS[rendering])

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
