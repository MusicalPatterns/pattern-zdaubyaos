import { YAOS_BLOCK_STYLES_BY_STRATEGY_THEN_RESOLUTION } from '../constants'
import { inaiiiVariety, yaosContoursByBarDurationBlockStyleThenRendering } from '../contours/yaosContours'
import makeNote from '../makeNote'
import { Contour, Notes } from '../types'
import { BarDuration, YaosBlockResolution, YaosBlockStrategy, YaosBlockStyle, YaosRendering } from '../zdaubyaosTypes'

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

const inaiiiVarietyNotes: Notes = inaiiiVariety.map(makeNote)

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
    blockResolution: YaosBlockResolution,
    blockStrategy: YaosBlockStrategy,
    barDuration: BarDuration,
    rendering: YaosRendering,
) => Notes

const getYaosNotes: GetYaosNotes =
    (
        blockResolution: YaosBlockResolution,
        blockStrategy: YaosBlockStrategy,
        barDuration: BarDuration,
        rendering: YaosRendering,
    ): Notes => {
        const blockStyle: YaosBlockStyle = YAOS_BLOCK_STYLES_BY_STRATEGY_THEN_RESOLUTION[blockStrategy][blockResolution]

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
