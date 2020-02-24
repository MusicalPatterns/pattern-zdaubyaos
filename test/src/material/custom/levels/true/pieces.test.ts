// tslint:disable no-duplicate-string

import { computeTotalPitchValueContourValue, PitchValue } from '@musical-patterns/material'
import { as, ContourPiece, dividesEvenly, entries } from '@musical-patterns/utilities'
import {
    AlmostTrueContourPieces,
    BarTarget,
    BlockStyle,
    getTrueContours,
    RenderingName,
    thunkAlmostTrueContourPieces,
    thunkTrueContourPieces,
    TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName,
    TrueContourPiecesByRenderingName,
} from '../../../../../../src/indexForTest'

describe('true contours', (): void => {
    let contourPiecesByBarTargetThenBlockStyleThenRendering: TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName

    beforeEach((): void => {
        contourPiecesByBarTargetThenBlockStyleThenRendering = thunkTrueContourPieces()
    })

    describe('zdaub contours', (): void => {
        describe('of value 15', (): void => {
            describe('glis renderings', (): void => {
                it('handles nodle', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.NODLE ][ RenderingName.GLIS ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 3, 3 ], [ 4, 4 ], [ 3, 3 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ],
                        ]))
                })

                it('handles limin', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.LIMIN ][ RenderingName.GLIS ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 3, 3 ], [ 4, 4 ], [ 3, 3 ], [ 2, 2 ], [ 3, 3 ],
                        ]))
                })

                it('handles scend', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.SCEND ][ RenderingName.GLIS ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 4, 4 ], [ 5, 5 ], [ 6, 6 ],
                            [ 7, 7 ], [ 8, 8 ],
                            [ 9, 9 ], [ 10, 10 ], [ 11, 11 ],
                            // Takes 2 bars
                        ]))
                })
            })

            describe('trem renderings', (): void => {
                it('handles nodle', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.NODLE ][ RenderingName.TREM ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 2, 1 ], [ 2, 1 ], [ 1, 1 ], [ 2, 1 ], [ 2, 1 ],
                        ]))
                })

                it('handles limin', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.LIMIN ][ RenderingName.TREM ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 2, 1 ], [ 2, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ],
                        ]))
                })

                it('handles scend', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.SCEND ][ RenderingName.TREM ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ],
                            [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ],
                            [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ],
                            [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ],
                        ]))
                })
            })

            describe('bony renderings', (): void => {
                it('handles nodle', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.NODLE ][ RenderingName.BONY ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 3, 1 ], [ 3, 2 ], [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 3, 2 ], [ 3, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ],
                        ]))
                })

                it('handles limin', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.LIMIN ][ RenderingName.BONY ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 3, 1 ], [ 3, 2 ], [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 3, 2 ], [ 3, 1 ], [ 2, 2 ], [ 3, 1 ], [ 3, 2 ],
                        ]))
                })

                it('handles scend', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.SCEND ][ RenderingName.BONY ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 5, 2 ], [ 5, 1 ], [ 5, 2 ], [ 6, 1 ], [ 6, 2 ], [ 6, 1 ], [ 6, 2 ],
                            [ 7, 1 ], [ 7, 2 ], [ 7, 1 ], [ 7, 2 ], [ 7, 1 ], [ 8, 2 ], [ 8, 1 ], [ 8, 2 ], [ 8, 1 ], [ 8, 2 ],
                            [ 9, 1 ], [ 9, 2 ], [ 9, 1 ], [ 9, 2 ], [ 9, 1 ], [ 9, 2 ], [ 10, 1 ], [ 10, 2 ], [ 10, 1 ], [ 10, 2 ],
                            [ 10, 1 ], [ 10, 2 ], [ 10, 1 ], [ 11, 2 ], [ 11, 1 ], [ 11, 2 ], [ 11, 1 ], [ 11, 2 ], [ 11, 1 ], [ 11, 2 ],
                        ]))
                })
            })
        })

        describe('of value 24', (): void => {
            describe('glis renderings', (): void => {
                it('handles nodle', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.NODLE ][ RenderingName.GLIS ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 1, 1 ], [ 3, 3 ], [ 5, 5 ], [ 7, 7 ], [ 5, 5 ], [ 3, 3 ],
                        ]))
                })

                it('handles limin', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.LIMIN ][ RenderingName.GLIS ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 9, 9 ], [ 7, 7 ], [ 5, 5 ], [ 3, 3 ],
                        ]))
                })

                it('handles scend', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.SCEND ][ RenderingName.GLIS ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 13, 13 ], [ 11, 11 ],
                            // Takes 2 bars
                        ]))
                })
            })

            describe('trem renderings', (): void => {
                it('handles nodle', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.NODLE ][ RenderingName.TREM ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 1, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ],
                        ]))
                })

                it('handles limin', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.LIMIN ][ RenderingName.TREM ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ],
                        ]))
                })

                it('handles scend', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.SCEND ][ RenderingName.TREM ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ],
                            // Takes 2 bars
                        ]))
                })
            })

            describe('bony renderings', (): void => {
                it('handles nodle', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.NODLE ][ RenderingName.BONY ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 1, 1 ], [ 3, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 7, 3 ], [ 7, 1 ], [ 7, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 3, 3 ],
                        ]))
                })

                it('handles limin', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.LIMIN ][ RenderingName.BONY ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 7, 3 ], [ 7, 1 ], [ 7, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 3, 3 ],
                        ]))
                })

                it('handles scend', (): void => {
                    expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.SCEND ][ RenderingName.BONY ])
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ 13, 1 ], [ 13, 3 ], [ 13, 1 ], [ 13, 3 ], [ 13, 1 ], [ 13, 3 ], [ 13, 1 ], [ 11, 3 ], [ 11, 1 ], [ 11, 3 ], [ 11, 1 ], [ 11, 3 ],
                        ]))
                })
            })
        })

        describe('other values', (): void => {
            it('handles glis variant', (): void => {
                const pieces: AlmostTrueContourPieces = thunkAlmostTrueContourPieces()

                expect(pieces.zdaubGlisVariant)
                    .toEqual(as.ContourPiece<PitchValue>([
                        [ 4, 4 ], [ 5, 5 ], [ 6, 6 ],
                        [ 7, 7 ], [ 8, 8 ],
                        [ 9, 9 ], [ 8, 8 ],
                        [ 6, 6 ], [ 4, 4 ], [ 2, 2 ], [ 4, 4 ], [ 6, 6 ],
                        [ 8, 8 ], [ 6, 6 ], [ 4, 4 ], [ 2, 2 ], [ 4, 4 ],
                        [ 6, 6 ], [ 4, 4 ], [ 2, 2 ], [ 4, 4 ], [ 6, 6 ],
                        [ 8, 8 ], [ 6, 6 ], [ 4, 4 ], [ 2, 2 ], [ 4, 4 ], [ 2, 2 ],
                    ]))
            })
        })
    })

    describe('yaos contours', (): void => {
        describe('of value 15', (): void => {
            it('is true that when rendered with certain renderings their values are multiples of 15', (): void => {
                entries(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ])
                    .forEach(
                        ([ blockStyle, contoursByRendering ]: [ BlockStyle, TrueContourPiecesByRenderingName ]): void => {
                            entries(contoursByRendering)
                                .forEach(([ renderingName, contours ]: [ RenderingName, ContourPiece<PitchValue> ]): void => {
                                    switch (renderingName) {
                                        case RenderingName.SPRING:
                                        case RenderingName.SUMMER:
                                        case RenderingName.FALL:
                                        case RenderingName.SUMMERY_SPRING:
                                        case RenderingName.SPRINGY_SUMMER:
                                            expect(dividesEvenly(computeTotalPitchValueContourValue(contours), 15))
                                                .toBeTruthy(`rendering ${blockStyle} as ${renderingName}`)
                                            break
                                        default:
                                    }
                                })
                        })
            })

            describe('spring renderings', (): void => {
                describe('umowchuowiest blocks', (): void => {
                    it('handles umow spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.UMOW ][ RenderingName.SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles chuwow spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.CHUWOW ][ RenderingName.SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                            ]))
                    })

                    it('handles iest spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.IEST ][ RenderingName.SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', (): void => {
                    it('handles inai spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.INAI ][ RenderingName.SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles djiyai spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.DJIYAI ][ RenderingName.SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ],
                            ]))
                    })

                    it('handles ouzd spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.OUZD ][ RenderingName.SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ],
                            ]))
                    })
                })
            })

            describe('summer renderings', (): void => {
                describe('umowchuowiest blocks', (): void => {
                    it('handles umow summer', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.UMOW ][ RenderingName.SUMMER ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles chuwow summer', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.CHUWOW ][ RenderingName.SUMMER ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ],
                            ]))
                    })

                    it('handles iest summer', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.IEST ][ RenderingName.SUMMER ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', (): void => {
                    it('handles inai summer', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.INAI ][ RenderingName.SUMMER ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles djiyai summer', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.DJIYAI ][ RenderingName.SUMMER ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ], [ 7, 1 ],
                            ]))
                    })

                    it('handles ouzd summer', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.OUZD ][ RenderingName.SUMMER ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ], [ 7, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ], [ 7, 1 ],
                            ]))
                    })
                })
            })

            describe('fall renderings', (): void => {
                describe('umowchuowiest blocks', (): void => {
                    it('handles umow fall', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.UMOW ][ RenderingName.FALL ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                            ]))
                    })

                    it('handles chuwow fall', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.CHUWOW ][ RenderingName.FALL ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 4, 4 ],
                            ]))
                    })

                    it('handles iest fall', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.IEST ][ RenderingName.FALL ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ 4, 4 ],
                                [ 1, 1 ], [ 4, 4 ],
                                [ 1, 1 ], [ 4, 4 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', (): void => {
                    it('handles inai fall', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.INAI ][ RenderingName.FALL ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 2, 2 ],
                            ]))
                    })

                    it('handles djiyai fall', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.DJIYAI ][ RenderingName.FALL ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 4, 4 ],
                                [ 1, 1 ], [ 6, 6 ],
                            ]))
                    })

                    it('handles ouzd fall', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.OUZD ][ RenderingName.FALL ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ 7, 7 ],
                                [ 1, 1 ], [ 6, 6 ],
                            ]))
                    })
                })
            })

            describe('summery spring renderings', (): void => {
                describe('umowchuwowiest blocks', (): void => {
                    it('handles umow summery spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.UMOW ][ RenderingName.SUMMERY_SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles chuwow summery spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.CHUWOW ][ RenderingName.SUMMERY_SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                            ]))
                    })

                    it('handles iest summery spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.IEST ][ RenderingName.SUMMERY_SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', (): void => {
                    it('handles inai summery spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.INAI ][ RenderingName.SUMMERY_SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles djiyai summery spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.DJIYAI ][ RenderingName.SUMMERY_SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 11, 1 ],
                            ]))
                    })

                    it('handles ouzd summery spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.OUZD ][ RenderingName.SUMMERY_SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 11, 1 ], [ 13, 1 ],
                                [ -1, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 11, 1 ],
                            ]))
                    })
                })
            })
        })

        describe('of value 24', (): void => {
            it('is true that when rendered with certain renderings their values are multiples of 24', (): void => {
                entries(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ])
                    .forEach(
                        ([ blockStyle, contoursByRendering ]: [ BlockStyle, TrueContourPiecesByRenderingName ]): void => {
                            entries(contoursByRendering)
                                .forEach(([ renderingName, contours ]: [ RenderingName, ContourPiece<PitchValue> ]): void => {
                                    switch (renderingName) {
                                        case RenderingName.GLIS:
                                        case RenderingName.TREM:
                                            expect(dividesEvenly(computeTotalPitchValueContourValue(contours), 24))
                                                .toBeTruthy(`rendering ${blockStyle} as ${renderingName}`)
                                            break
                                        case RenderingName.BONY:
                                            // tslint:disable-next-line no-nested-switch
                                            switch (blockStyle) {
                                                case BlockStyle.CHUWOW:
                                                case BlockStyle.DJIYAI:
                                                case BlockStyle.IEST:
                                                case BlockStyle.INAI:
                                                    break
                                                default:
                                                    expect(dividesEvenly(computeTotalPitchValueContourValue(contours), 24))
                                                        .toBeTruthy(`rendering ${blockStyle} as ${renderingName}`)
                                            }
                                            break
                                        default:
                                    }
                                })
                        })
            })

            describe('spring renderings', (): void => {
                describe('umowchuowiest blocks', (): void => {
                    it('handles umow spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.UMOW ][ RenderingName.SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            ]))
                    })

                    it('handles chuwow spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.CHUWOW ][ RenderingName.SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            ]))
                    })

                    it('handles iest spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.IEST ][ RenderingName.SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', (): void => {
                    it('handles inai spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ][ RenderingName.SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles djiyai spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.DJIYAI ][ RenderingName.SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ],
                            ]))
                    })

                    it('handles ouzd spring', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.OUZD ][ RenderingName.SPRING ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
                                [ -1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
                            ]))
                    })
                })
            })

            describe('summer renderings', (): void => {
                describe('umowchuowiest blocks', (): void => {
                    it('handles umow summer', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.UMOW ][ RenderingName.SUMMER ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                            ]))
                    })

                    it('handles chuwow summer', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.CHUWOW ][ RenderingName.SUMMER ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ],
                            ]))
                    })

                    it('handles iest summer', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.IEST ][ RenderingName.SUMMER ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', (): void => {
                    it('handles inai summer', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ][ RenderingName.SUMMER ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles djiyai summer', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.DJIYAI ][ RenderingName.SUMMER ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ], [ 7, 1 ],
                            ]))
                    })

                    it('handles ouzd summer', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.OUZD ][ RenderingName.SUMMER ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ], [ 7, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ], [ 7, 1 ], [ -1, 1 ],
                                [ 1, 1 ], [ -1, 1 ], [ 3, 1 ], [ -1, 1 ], [ 5, 1 ], [ -1, 1 ], [ 7, 1 ], [ -1, 1 ],
                            ]))
                    })
                })
            })

            describe('fall renderings', (): void => {
                describe('umowchuowiest blocks', (): void => {
                    it('handles umow fall', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.UMOW ][ RenderingName.FALL ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                            ]))
                    })

                    it('handles chuwow fall', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.CHUWOW ][ RenderingName.FALL ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 4, 4 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 4, 4 ],
                                [ 1, 1 ], [ 3, 3 ],
                            ]))
                    })

                    it('handles iest fall', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.IEST ][ RenderingName.FALL ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ 5, 5 ],
                                [ 1, 1 ], [ 5, 5 ],
                                [ 1, 1 ], [ 5, 5 ],
                                [ 1, 1 ], [ 5, 5 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', (): void => {
                    it('handles inai fall', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ][ RenderingName.FALL ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                            ]))
                    })

                    it('handles djiyai fall', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.DJIYAI ][ RenderingName.FALL ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 4, 4 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 6, 6 ],
                            ]))
                    })

                    it('handles ouzd fall', (): void => {
                        expect(contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.OUZD ][ RenderingName.FALL ])
                            .toEqual(as.ContourPiece<PitchValue>([
                                [ 1, 1 ], [ 7, 7 ],
                                [ 1, 1 ], [ 7, 7 ],
                                [ 1, 1 ], [ 7, 7 ],
                            ]))
                    })
                })
            })

            describe('other renderings', (): void => {
                it('handles inaiii variety', (): void => {
                    const pieces: AlmostTrueContourPieces = thunkAlmostTrueContourPieces()

                    expect(pieces.inaiiiVariety)
                        .toEqual(as.ContourPiece<PitchValue>([
                            [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                            [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                            [ -1, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ -1, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                        ]))
                })
            })
        })

        it('gets the right set of contours out of its stash', (): void => {
            expect(getTrueContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, RenderingName.SUMMER))
                .toEqual(
                    contourPiecesByBarTargetThenBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.DJIYAI ][ RenderingName.SUMMER ],
                )
        })
    })
})
