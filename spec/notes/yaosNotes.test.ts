import { BarTarget, BlockStyle, Rendering } from '../../src/zdaubyaosTypes'
import { getZdaubyaosNotes, zdaubyaosNotesByBarTargetBlockStyleThenRendering } from '../../src/notes/zdaubyaosNotes'
import { Notes } from '../../src/types'
import calculateDuration from '../../../../src/utilities/calculateDuration'
import * as from from '../../../../src/utilities/from'

describe('yaos notes', () => {
    describe('of bar target 15', () => {
        it('is true that when rendered with certain renderings their durations are multiples of 15', () => {
            Object.entries(zdaubyaosNotesByBarTargetBlockStyleThenRendering[BarTarget.FIFTEEN]).forEach(
                // @ts-ignore
                ([blockStyle, notesByRendering]: [BlockStyle, { [x in Rendering]: Notes }]): void => {
                    // @ts-ignore
                    Object.entries(notesByRendering).forEach(([rendering, notes]: [Rendering, Notes]) => {
                        switch (rendering) {
                            case Rendering.SPRING:
                            case Rendering.SUMMER:
                            case Rendering.FALL:
                            case Rendering.SUMMERY_SPRING:
                            case Rendering.SPRINGY_SUMMER:
                                expect(from.Time(calculateDuration(notes)) % 15).toBe(0, `rendering ${blockStyle} as ${rendering}`)
                        }
                    })
                })
        })
    })

    describe('of bar target 24', () => {
        it('is true that when rendered with certain renderings their durations are multiples of 24', () => {
            Object.entries(zdaubyaosNotesByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR]).forEach(
                // @ts-ignore
                ([blockStyle, notesByRendering]: [BlockStyle, { [x in Rendering]: Notes }]): void => {
                    // @ts-ignore
                    Object.entries(notesByRendering).forEach(([rendering, notes]: [Rendering, Notes]): void => {
                        switch (rendering) {
                            case Rendering.GLIS:
                            case Rendering.TREM:
                                expect(from.Time(calculateDuration(notes)) % 24).toBe(0, `rendering ${blockStyle} as ${rendering}`)
                            case Rendering.BONY:
                                switch (blockStyle) {
                                    case BlockStyle.CHUWOW:
                                    case BlockStyle.DJIYAI:
                                    case BlockStyle.IEST:
                                    case BlockStyle.INAI:
                                        break
                                    default:
                                        expect(from.Time(calculateDuration(notes)) % 24).toBe(0, `rendering ${blockStyle} as ${rendering}`)
                                }
                        }
                    })
                })
        })
    })

    it('gets the right set of notes out of its stash', () => {
        expect(getZdaubyaosNotes(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, Rendering.SUMMER)).toEqual(
            zdaubyaosNotesByBarTargetBlockStyleThenRendering[BarTarget.TWENTYFOUR][BlockStyle.DJIYAI][Rendering.SUMMER],
        )
    })
})
