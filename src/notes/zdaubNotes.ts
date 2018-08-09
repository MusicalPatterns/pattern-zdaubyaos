import { NOTE_TYPES_BY_ZDAUB_RENDERINGS } from '../constants'
import { zdaubContoursByBarDurationBlockStyleThenRendering, zdaubGlisVariantContour } from '../contours/zdaubContours'
import { glisNoteType } from '../noteTypes'
import { Contour, ManualContour, Notes } from '../types'
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
                    ([rendering, contour]: [ZdaubRendering, Contour | ManualContour]): void => {
                        // TODO: realllly not sure why this doesn't work but the same line works in yaosNotes
                        // @ts-ignore
                        // tslint:disable-next-line:no-unsafe-any
                        const notes: Notes = contour.map(NOTE_TYPES_BY_ZDAUB_RENDERINGS[rendering])

                        zdaubNotesByBarDurationBlockStyleThenRendering[barDuration] =
                            zdaubNotesByBarDurationBlockStyleThenRendering[barDuration] || {}
                        zdaubNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle] =
                            zdaubNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle] || {}
                        zdaubNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle][rendering] = notes
                    })
            })
    })

const zdaubGlisVariantNotes: Notes = zdaubGlisVariantContour.map(glisNoteType)

export {
    zdaubNotesByBarDurationBlockStyleThenRendering,
    zdaubGlisVariantNotes,
}
