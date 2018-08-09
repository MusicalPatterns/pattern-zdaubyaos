import { inaiiiVarietyContour, yaosContoursByBarDurationBlockStyleThenRendering } from '../contours/yaosContours'
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
                        const notes: Notes = contour.map(makeNote)

                        yaosNotesByBarDurationBlockStyleThenRendering[barDuration] =
                            yaosNotesByBarDurationBlockStyleThenRendering[barDuration] || {}
                        yaosNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle] =
                            yaosNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle] || {}
                        yaosNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle][rendering] = notes
                    })
            })
    })

const inaiiiVarietyNotes: Notes = inaiiiVarietyContour.map(makeNote)

type UsageCount = number

type UsageGrouping = {
    [x in BarDuration]: {[y in YaosBlockStyle]?: UsageCountByRendering}
}

type UsageCountByRendering = {[z in YaosRendering]?: UsageCount}

export const yaosNoteUsagesByDurationBlocksThenRendering: UsageGrouping = {
    fifteen: {},
    twentyfour: {},
}

type GetYaosNotes = (
    blockStyle: YaosBlockStyle,
    barDuration: BarDuration,
    rendering: YaosRendering,
) => Notes

const getYaosNotes: GetYaosNotes =
    (
        blockStyle: YaosBlockStyle,
        barDuration: BarDuration,
        rendering: YaosRendering,
    ): Notes => {
        yaosNoteUsagesByDurationBlocksThenRendering[barDuration][blockStyle] =
            yaosNoteUsagesByDurationBlocksThenRendering[barDuration][blockStyle] || {}
        const byBlockStyle: UsageCountByRendering | undefined =
            yaosNoteUsagesByDurationBlocksThenRendering[barDuration][blockStyle]
        if (byBlockStyle !== undefined) {
            let byRendering: UsageCount | undefined = byBlockStyle[rendering]
            if (byRendering !== undefined) {
                byRendering += 1
                byBlockStyle[rendering] = byRendering
            } else {
                byBlockStyle[rendering] = 1
            }
        }

        return yaosNotesByBarDurationBlockStyleThenRendering[barDuration][blockStyle][rendering]
    }

export {
    getYaosNotes,
    inaiiiVarietyNotes,
    yaosNotesByBarDurationBlockStyleThenRendering,
}
