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

type UsageCount = number

type UsageGrouping = {
    [x in BarDuration]: {[y in ZdaubBlockStyle]?: UsageCountByRendering}
}

type UsageCountByRendering = {[z in ZdaubRendering]?: UsageCount}

export const zdaubNoteUsagesByDurationBlocksThenRendering: UsageGrouping = {
    fifteen: {},
    twentyfour: {},
}

type GetZdaubNotes = (blockStyle: ZdaubBlockStyle, barDuration: BarDuration, rendering: ZdaubRendering) => Notes

const getZdaubNotes: GetZdaubNotes =
    (blockStyle: ZdaubBlockStyle, barDuration: BarDuration, rendering: ZdaubRendering): Notes => {
        zdaubNoteUsagesByDurationBlocksThenRendering[barDuration][blockStyle] =
            zdaubNoteUsagesByDurationBlocksThenRendering[barDuration][blockStyle] || {}
        const byBlockStyle: UsageCountByRendering | undefined =
            zdaubNoteUsagesByDurationBlocksThenRendering[barDuration][blockStyle]
        if (byBlockStyle !== undefined) {
            let byRendering: UsageCount | undefined = byBlockStyle[rendering]
            if (byRendering !== undefined) {
                byRendering += 1
                byBlockStyle[rendering] = byRendering
            } else {
                byBlockStyle[rendering] = 1
            }
        }

        return zdaubNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle][rendering]
    }

export {
    getZdaubNotes,
    zdaubGlisVariantNotes,
}
