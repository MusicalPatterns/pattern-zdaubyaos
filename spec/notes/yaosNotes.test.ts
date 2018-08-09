import calculateDuration from '../../../../src/utilities/calculateDuration'
import * as from from '../../../../src/utilities/from'
import { yaosNotesByBarDurationBlockStyleThenRendering } from '../../src/notes/yaosNotes'
import { Notes } from '../../src/types'
import { BarDuration, YaosRendering } from '../../src/zdaubyaosTypes'

describe('yaos notes', () => {
    describe('of length 15', () => {
        it('is true that they all have length 15', () => {
            Object.values(yaosNotesByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN]).forEach(
                (notesByRendering: { [x in YaosRendering]: Notes }) => {
                    Object.values(notesByRendering).forEach((notes: Notes) => {
                        expect(from.Time(calculateDuration(notes))).toBe(15)
                    })
                })
        })
    })

    describe('of length 24', () => {
        it('is true that they all have length 24', () => {
            Object.values(yaosNotesByBarDurationBlockStyleThenRendering[BarDuration.TWENTYFOUR]).forEach(
                (notesByRendering: { [x in YaosRendering]: Notes }) => {
                    Object.values(notesByRendering).forEach((notes: Notes) => {
                        expect(from.Time(calculateDuration(notes))).toBe(24)
                    })
                })
        })
    })
})
