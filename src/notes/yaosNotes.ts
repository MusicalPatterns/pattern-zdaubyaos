import { inaiiiVariety, yaosContoursByBarDurationBlockStyleThenRendering } from '../contours/yaosContours'
import makeNote from '../makeNote'
import { Contour, Notes } from '../types'
import { BarDuration, YaosBlockStyle, YaosRendering } from '../zdaubyaosTypes'

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
                        // tslint:disable-next-line:no-unsafe-any
                        const notes: Notes = contour.map(makeNote)

                        yaosNotesByBarDurationBlockStyleThenRendering[barDuration] =
                            yaosNotesByBarDurationBlockStyleThenRendering[barDuration] || {}
                        yaosNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle] =
                            yaosNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle] || {}
                        yaosNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle][rendering] = notes
                    })
            })
    })

const inaiiiVarietyNotes: Notes = inaiiiVariety.map(makeNote)

export {
    yaosNotesByBarDurationBlockStyleThenRendering,
    inaiiiVarietyNotes,
}
