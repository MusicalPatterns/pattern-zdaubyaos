import { zdaubContoursByBarDurationBlockStyleThenRendering } from '../../src/contours/zdaubContours'
import { BarDuration, ZdaubBlockStyle, ZdaubRendering } from '../../src/types'
import * as to from '../../src/utilities/to'

describe('zdaub contours', () => {
    describe('of duration 15', () => {
        describe('glis renderings', () => {
            it('handles nodle', () => {
                expect(zdaubContoursByBarDurationBlockStyleThenRendering[BarDuration.FIFTEEN][ZdaubBlockStyle.NODLE][ZdaubRendering.GLIS]).toEqual(to.Contour([
                    3, 4, 3, 2, 1, 2,
                ]))
            })

            it('handles limin', () => {

            })

            it('handles scend', () => {

            })
        })

        describe('trem renderings', () => {
            it('handles nodle', () => {

            })

            it('handles limin', () => {

            })

            it('handles scend', () => {

            })
        })

        describe('bony renderings', () => {
            it('handles nodle', () => {

            })

            it('handles limin', () => {

            })

            it('handles scend', () => {

            })
        })
    })
    describe('of duration 24', () => {
        describe('glis renderings', () => {
            it('handles nodle', () => {

            })

            it('handles limin', () => {

            })

            it('handles scend', () => {

            })
        })

        describe('trem renderings', () => {
            it('handles nodle', () => {

            })

            it('handles limin', () => {

            })

            it('handles scend', () => {

            })
        })

        describe('bony renderings', () => {
            it('handles nodle', () => {

            })

            it('handles limin', () => {

            })

            it('handles scend', () => {

            })
        })
    })
})