import { zdaubContoursByBarDurationBlockStyleThenRendering, zdaubGlisVariantContour } from '../contours/zdaubContours'
import makeNote from '../makeNote'
import { Contour, Notes } from '../types'
import { BarDuration, ZdaubBlockStyle, ZdaubRendering } from '../zdaubyaosTypes'

type ByRendering = { [z in ZdaubRendering]: Notes }
type ByBlockStyle = { [y in ZdaubBlockStyle]: ByRendering }
type ZdaubNotes = { [x in BarDuration]: ByBlockStyle }

// @ts-ignore
const zdaubNotesByBarDurationBlockStyleThenRendering: ZdaubNotes = {}

Object.entries(zdaubContoursByBarDurationBlockStyleThenRendering).forEach(
    // @ts-ignore
    ([barDuration, contoursByBlockStyle]: [BarDuration, ByBlockStyle]): void => {
        Object.entries(contoursByBlockStyle).forEach(
            // @ts-ignore
            ([blockStyle, contoursByRendering]: [ZdaubBlockStyle, ByRendering]): void => {
                Object.entries(contoursByRendering).forEach(
                    // @ts-ignore
                    ([rendering, contour]: [ZdaubRendering, Contour]): void => {
                        // tslint:disable-next-line:no-unsafe-any
                        const notes: Notes = contour.map(makeNote)

                        zdaubNotesByBarDurationBlockStyleThenRendering[barDuration] =
                            zdaubNotesByBarDurationBlockStyleThenRendering[barDuration] || {}
                        zdaubNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle] =
                            zdaubNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle] || {}
                        zdaubNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle][rendering] = notes
                    })
            })
    })

const zdaubGlisVariantNotes: Notes = zdaubGlisVariantContour.map(makeNote)

export {
    zdaubNotesByBarDurationBlockStyleThenRendering,
    zdaubGlisVariantNotes,
}
