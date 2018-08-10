import {
    inaiiiVarietyContour,
    zdaubGlisVariantContour,
    zdaubyaosContoursByBarTargetBlockStyleThenRendering,
} from '../contours/zdaubyaosContours'
import makeNote from '../makeNote'
import { Contour, Notes } from '../types'
import { BarTarget, BlockStyle, Rendering } from '../zdaubyaosTypes'

type ByRendering = { [z in Rendering]: Notes }
type ByBlockStyle = { [y in BlockStyle]: ByRendering }
type ZdaubyaosNotes = { [x in BarTarget]: ByBlockStyle }

// @ts-ignore
const zdaubyaosNotesByBarTargetBlockStyleThenRendering: ZdaubyaosNotes = {}

Object.entries(zdaubyaosContoursByBarTargetBlockStyleThenRendering).forEach(
    // @ts-ignore
    ([barTarget, contoursByBlockStyle]: [BarTarget, ByBlockStyle]): void => {
        Object.entries(contoursByBlockStyle).forEach(
            // @ts-ignore
            ([blockStyle, contoursByRendering]: [BlockStyle, ByRendering]): void => {
                Object.entries(contoursByRendering).forEach(
                    // @ts-ignore
                    ([rendering, contour]: [Rendering, Contour]): void => {
                        const notes: Notes = contour.map(makeNote)

                        zdaubyaosNotesByBarTargetBlockStyleThenRendering[barTarget] =
                            zdaubyaosNotesByBarTargetBlockStyleThenRendering[barTarget] || {}
                        zdaubyaosNotesByBarTargetBlockStyleThenRendering[barTarget][blockStyle] =
                            zdaubyaosNotesByBarTargetBlockStyleThenRendering[barTarget][blockStyle] || {}
                        zdaubyaosNotesByBarTargetBlockStyleThenRendering[barTarget][blockStyle][rendering] = notes
                    })
            })
    })

type UsageCount = number

type UsageGrouping = {
    [x in BarTarget]: {[y in BlockStyle]?: UsageCountByRendering}
}

type UsageCountByRendering = {[z in Rendering]?: UsageCount}

export const zdaubyaosNoteUsagesByDurationBlocksThenRendering: UsageGrouping = {
    fifteen: {},
    twentyfour: {},
}

type GetZdaubyaosNotes = (
    blockStyle: BlockStyle,
    barTarget: BarTarget,
    rendering: Rendering,
) => Notes

const getZdaubyaosNotes: GetZdaubyaosNotes =
    (blockStyle: BlockStyle, barTarget: BarTarget, rendering: Rendering): Notes => {
        zdaubyaosNoteUsagesByDurationBlocksThenRendering[barTarget][blockStyle] =
            zdaubyaosNoteUsagesByDurationBlocksThenRendering[barTarget][blockStyle] || {}
        const byBlockStyle: UsageCountByRendering | undefined =
            zdaubyaosNoteUsagesByDurationBlocksThenRendering[barTarget][blockStyle]
        if (byBlockStyle !== undefined) {
            let byRendering: UsageCount | undefined = byBlockStyle[rendering]
            if (byRendering !== undefined) {
                byRendering += 1
                byBlockStyle[rendering] = byRendering
            } else {
                byBlockStyle[rendering] = 1
            }
        }

        return zdaubyaosNotesByBarTargetBlockStyleThenRendering[barTarget][blockStyle][rendering]
    }

const inaiiiVarietyNotes: Notes = inaiiiVarietyContour.map(makeNote)

const zdaubGlisVariantNotes: Notes = zdaubGlisVariantContour.map(makeNote)

export {
    getZdaubyaosNotes,
    zdaubyaosNotesByBarTargetBlockStyleThenRendering,
    inaiiiVarietyNotes,
    zdaubGlisVariantNotes,
}
