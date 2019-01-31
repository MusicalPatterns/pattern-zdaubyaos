// tslint:disable:no-duplicate-string

import { calculateTotalStandardContourDuration, Rendering } from '@musical-patterns/pattern'
import { ContourPiece, to } from '@musical-patterns/utilities'
import {
    BarTarget,
    BlockStyle,
    buildAlmostTrueContourPieces,
    buildTrueContourPieces,
    getTrueContours,
    RenderingName,
    TrueContourPieces,
} from '../../../../../src/indexForTest'

describe('true contours', () => {
    let contourPiecesByBarTargetBlockStyleThenRendering: TrueContourPieces

    beforeEach(() => {
        contourPiecesByBarTargetBlockStyleThenRendering = buildTrueContourPieces()
    })

    describe('zdaub contours', () => {
        describe('of duration 15', () => {
            describe('glis renderings', () => {
                it('handles nodle', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.NODLE ][ RenderingName.GLIS ])
                        .toEqual(to.ContourPiece([
                            [ 3, 3 ], [ 4, 4 ], [ 3, 3 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ],
                        ]))
                })

                it('handles limin', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.LIMIN ][ RenderingName.GLIS ])
                        .toEqual(to.ContourPiece([
                            [ 3, 3 ], [ 4, 4 ], [ 3, 3 ], [ 2, 2 ], [ 3, 3 ],
                        ]))
                })

                it('handles scend', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.SCEND ][ RenderingName.GLIS ])
                        .toEqual(to.ContourPiece([
                            [ 4, 4 ], [ 5, 5 ], [ 6, 6 ],
                            [ 7, 7 ], [ 8, 8 ],
                            [ 9, 9 ], [ 10, 10 ], [ 11, 11 ],
                            // Lasts 2 bars
                        ]))
                })
            })

            describe('trem renderings', () => {
                it('handles nodle', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.NODLE ][ RenderingName.TREM ])
                        .toEqual(to.ContourPiece([
                            [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 2, 1 ], [ 2, 1 ], [ 1, 1 ], [ 2, 1 ], [ 2, 1 ],
                        ]))
                })

                it('handles limin', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.LIMIN ][ RenderingName.TREM ])
                        .toEqual(to.ContourPiece([
                            [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 2, 1 ], [ 2, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ],
                        ]))
                })

                it('handles scend', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.SCEND ][ RenderingName.TREM ])
                        .toEqual(to.ContourPiece([
                            [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ], [ 6, 1 ],
                            [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ],
                            [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ],
                            [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 10, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ],
                        ]))
                })
            })

            describe('bony renderings', () => {
                it('handles nodle', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.NODLE ][ RenderingName.BONY ])
                        .toEqual(to.ContourPiece([
                            [ 3, 1 ], [ 3, 2 ], [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 3, 2 ], [ 3, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ],
                        ]))
                })

                it('handles limin', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.LIMIN ][ RenderingName.BONY ])
                        .toEqual(to.ContourPiece([
                            [ 3, 1 ], [ 3, 2 ], [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 3, 2 ], [ 3, 1 ], [ 2, 2 ], [ 3, 1 ], [ 3, 2 ],
                        ]))
                })

                it('handles scend', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.SCEND ][ RenderingName.BONY ])
                        .toEqual(to.ContourPiece([
                            [ 4, 1 ], [ 4, 2 ], [ 4, 1 ], [ 5, 2 ], [ 5, 1 ], [ 5, 2 ], [ 6, 1 ], [ 6, 2 ], [ 6, 1 ], [ 6, 2 ],
                            [ 7, 1 ], [ 7, 2 ], [ 7, 1 ], [ 7, 2 ], [ 7, 1 ], [ 8, 2 ], [ 8, 1 ], [ 8, 2 ], [ 8, 1 ], [ 8, 2 ],
                            [ 9, 1 ], [ 9, 2 ], [ 9, 1 ], [ 9, 2 ], [ 9, 1 ], [ 9, 2 ], [ 10, 1 ], [ 10, 2 ], [ 10, 1 ], [ 10, 2 ],
                            [ 10, 1 ], [ 10, 2 ], [ 10, 1 ], [ 11, 2 ], [ 11, 1 ], [ 11, 2 ], [ 11, 1 ], [ 11, 2 ], [ 11, 1 ], [ 11, 2 ],
                        ]))
                })
            })
        })

        describe('of duration 24', () => {
            describe('glis renderings', () => {
                it('handles nodle', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.NODLE ][ RenderingName.GLIS ])
                        .toEqual(to.ContourPiece([
                            [ 1, 1 ], [ 3, 3 ], [ 5, 5 ], [ 7, 7 ], [ 5, 5 ], [ 3, 3 ],
                        ]))
                })

                it('handles limin', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.LIMIN ][ RenderingName.GLIS ])
                        .toEqual(to.ContourPiece([
                            [ 9, 9 ], [ 7, 7 ], [ 5, 5 ], [ 3, 3 ],
                        ]))
                })

                it('handles scend', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.SCEND ][ RenderingName.GLIS ])
                        .toEqual(to.ContourPiece([
                            [ 13, 13 ], [ 11, 11 ],
                            // Lasts 2 bars
                        ]))
                })
            })

            describe('trem renderings', () => {
                it('handles nodle', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.NODLE ][ RenderingName.TREM ])
                        .toEqual(to.ContourPiece([
                            [ 1, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ],
                        ]))
                })

                it('handles limin', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.LIMIN ][ RenderingName.TREM ])
                        .toEqual(to.ContourPiece([
                            [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 9, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 5, 1 ], [ 3, 1 ], [ 3, 1 ], [ 3, 1 ],
                        ]))
                })

                it('handles scend', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.SCEND ][ RenderingName.TREM ])
                        .toEqual(to.ContourPiece([
                            [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 13, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ], [ 11, 1 ],
                            // Lasts 2 bars
                        ]))
                })
            })

            describe('bony renderings', () => {
                it('handles nodle', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.NODLE ][ RenderingName.BONY ])
                        .toEqual(to.ContourPiece([
                            [ 1, 1 ], [ 3, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 7, 3 ], [ 7, 1 ], [ 7, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 3, 3 ],
                        ]))
                })

                it('handles limin', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.LIMIN ][ RenderingName.BONY ])
                        .toEqual(to.ContourPiece([
                            [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 9, 3 ], [ 9, 1 ], [ 7, 3 ], [ 7, 1 ], [ 7, 3 ], [ 5, 1 ], [ 5, 3 ], [ 5, 1 ], [ 3, 3 ],
                        ]))
                })

                it('handles scend', () => {
                    expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.SCEND ][ RenderingName.BONY ])
                        .toEqual(to.ContourPiece([
                            [ 13, 1 ], [ 13, 3 ], [ 13, 1 ], [ 13, 3 ], [ 13, 1 ], [ 13, 3 ], [ 13, 1 ], [ 11, 3 ], [ 11, 1 ], [ 11, 3 ], [ 11, 1 ], [ 11, 3 ],
                        ]))
                })
            })
        })

        describe('other durations', () => {
            it('handles glis variant', () => {
                const { zdaubGlisVariantContourPiece } = buildAlmostTrueContourPieces()

                expect(zdaubGlisVariantContourPiece)
                    .toEqual(to.ContourPiece([
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

    describe('yaos contours', () => {
        describe('of duration 15', () => {
            it('is true that when rendered with certain renderings their durations are multiples of 15', () => {
                Object.entries(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ])
                    .forEach(
                        // @ts-ignore
                        ([ blockStyle, contoursByRendering ]: [ BlockStyle, { [x in Rendering]: ContourPiece<StandardContour> } ]): void => {
                            Object.entries(contoursByRendering)
                            // @ts-ignore
                                .forEach(([ renderingName, contours ]: [ RenderingName, ContourPiece<StandardContour> ]) => {
                                    switch (renderingName) {
                                        case RenderingName.SPRING:
                                        case RenderingName.SUMMER:
                                        case RenderingName.FALL:
                                        case RenderingName.SUMMERY_SPRING:
                                        case RenderingName.SPRINGY_SUMMER:
                                            expect(calculateTotalStandardContourDuration(contours) % 15)
                                                .toBe(0, `rendering ${blockStyle} as ${renderingName}`)
                                            break
                                        default:
                                    }
                                })
                        })
            })

            describe('spring renderings', () => {
                describe('umowchuowiest blocks', () => {
                    it('handles umow spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.UMOW ][ RenderingName.SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles chuwow spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.CHUWOW ][ RenderingName.SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                            ]))
                    })

                    it('handles iest spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.IEST ][ RenderingName.SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.INAI ][ RenderingName.SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles djiyai spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.DJIYAI ][ RenderingName.SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ],
                            ]))
                    })

                    it('handles ouzd spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.OUZD ][ RenderingName.SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ],
                            ]))
                    })
                })
            })

            describe('summer renderings', () => {
                describe('umowchuowiest blocks', () => {
                    it('handles umow summer', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.UMOW ][ RenderingName.SUMMER ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles chuwow summer', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.CHUWOW ][ RenderingName.SUMMER ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                            ]))
                    })

                    it('handles iest summer', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.IEST ][ RenderingName.SUMMER ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai summer', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.INAI ][ RenderingName.SUMMER ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles djiyai summer', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.DJIYAI ][ RenderingName.SUMMER ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ],
                            ]))
                    })

                    it('handles ouzd summer', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.OUZD ][ RenderingName.SUMMER ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ],
                            ]))
                    })
                })
            })

            describe('fall renderings', () => {
                describe('umowchuowiest blocks', () => {
                    it('handles umow fall', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.UMOW ][ RenderingName.FALL ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                            ]))
                    })

                    it('handles chuwow fall', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.CHUWOW ][ RenderingName.FALL ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 4, 4 ],
                            ]))
                    })

                    it('handles iest fall', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.IEST ][ RenderingName.FALL ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 4, 4 ],
                                [ 1, 1 ], [ 4, 4 ],
                                [ 1, 1 ], [ 4, 4 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai fall', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.INAI ][ RenderingName.FALL ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 2, 2 ],
                            ]))
                    })

                    it('handles djiyai fall', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.DJIYAI ][ RenderingName.FALL ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 4, 4 ],
                                [ 1, 1 ], [ 6, 6 ],
                            ]))
                    })

                    it('handles ouzd fall', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.OUZD ][ RenderingName.FALL ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 7, 7 ],
                                [ 1, 1 ], [ 6, 6 ],
                            ]))
                    })
                })
            })

            describe('summery spring renderings', () => {
                describe('umowchuwowiest blocks', () => {
                    it('handles umow summery spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.UMOW ][ RenderingName.SUMMERY_SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles chuwow summery spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.CHUWOW ][ RenderingName.SUMMERY_SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                            ]))
                    })

                    it('handles iest summery spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.IEST ][ RenderingName.SUMMERY_SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai summery spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.INAI ][ RenderingName.SUMMERY_SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles djiyai summery spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.DJIYAI ][ RenderingName.SUMMERY_SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 11, 1 ],
                            ]))
                    })

                    it('handles ouzd summery spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.FIFTEEN ][ BlockStyle.OUZD ][ RenderingName.SUMMERY_SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 11, 1 ], [ 13, 1 ],
                                [ 0, 1 ], [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 9, 1 ], [ 11, 1 ],
                            ]))
                    })
                })
            })
        })

        describe('of duration 24', () => {
            it('is true that when rendered with certain renderings their durations are multiples of 24', () => {
                Object.entries(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ])
                    .forEach(
                        // @ts-ignore
                        ([ blockStyle, contoursByRendering ]: [ BlockStyle, { [x in Rendering]: ContourPiece<StandardContour> } ]): void => {
                            Object.entries(contoursByRendering)
                            // @ts-ignore
                                .forEach(([ renderingName, contours ]: [ RenderingName, ContourPiece<StandardContour> ]): void => {
                                    switch (renderingName) {
                                        case RenderingName.GLIS:
                                        case RenderingName.TREM:
                                            expect(calculateTotalStandardContourDuration(contours) % 24)
                                                .toBe(0, `rendering ${blockStyle} as ${renderingName}`)
                                            break
                                        case RenderingName.BONY:
                                            // tslint:disable-next-line:no-nested-switch
                                            switch (blockStyle) {
                                                case BlockStyle.CHUWOW:
                                                case BlockStyle.DJIYAI:
                                                case BlockStyle.IEST:
                                                case BlockStyle.INAI:
                                                    break
                                                default:
                                                    expect(calculateTotalStandardContourDuration(contours) % 24)
                                                        .toBe(0, `rendering ${blockStyle} as ${renderingName}`)
                                            }
                                            break
                                        default:
                                    }
                                })
                        })
            })

            describe('spring renderings', () => {
                describe('umowchuowiest blocks', () => {
                    it('handles umow spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.UMOW ][ RenderingName.SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            ]))
                    })

                    it('handles chuwow spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.CHUWOW ][ RenderingName.SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ],
                            ]))
                    })

                    it('handles iest spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.IEST ][ RenderingName.SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ][ RenderingName.SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles djiyai spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.DJIYAI ][ RenderingName.SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ],
                            ]))
                    })

                    it('handles ouzd spring', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.OUZD ][ RenderingName.SPRING ])
                            .toEqual(to.ContourPiece([
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
                                [ 0, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 6, 1 ], [ 7, 1 ], [ 8, 1 ],
                            ]))
                    })
                })
            })

            describe('summer renderings', () => {
                describe('umowchuowiest blocks', () => {
                    it('handles umow summer', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.UMOW ][ RenderingName.SUMMER ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                            ]))
                    })

                    it('handles chuwow summer', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.CHUWOW ][ RenderingName.SUMMER ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ],
                            ]))
                    })

                    it('handles iest summer', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.IEST ][ RenderingName.SUMMER ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai summer', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ][ RenderingName.SUMMER ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            ]))
                    })

                    it('handles djiyai summer', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.DJIYAI ][ RenderingName.SUMMER ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ],
                            ]))
                    })

                    it('handles ouzd summer', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.OUZD ][ RenderingName.SUMMER ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ], [ 0, 1 ],
                                [ 1, 1 ], [ 0, 1 ], [ 3, 1 ], [ 0, 1 ], [ 5, 1 ], [ 0, 1 ], [ 7, 1 ], [ 0, 1 ],
                            ]))
                    })
                })
            })

            describe('fall renderings', () => {
                describe('umowchuowiest blocks', () => {
                    it('handles umow fall', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.UMOW ][ RenderingName.FALL ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 3, 3 ],
                            ]))
                    })

                    it('handles chuwow fall', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.CHUWOW ][ RenderingName.FALL ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 3, 3 ],
                                [ 1, 1 ], [ 4, 4 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 4, 4 ],
                                [ 1, 1 ], [ 3, 3 ],
                            ]))
                    })

                    it('handles iest fall', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.IEST ][ RenderingName.FALL ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 5, 5 ],
                                [ 1, 1 ], [ 5, 5 ],
                                [ 1, 1 ], [ 5, 5 ],
                                [ 1, 1 ], [ 5, 5 ],
                            ]))
                    })
                })

                describe('inaidjiyaiouzd blocks', () => {
                    it('handles inai fall', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ][ RenderingName.FALL ])
                            .toEqual(to.ContourPiece([
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

                    it('handles djiyai fall', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.DJIYAI ][ RenderingName.FALL ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 4, 4 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 2, 2 ],
                                [ 1, 1 ], [ 6, 6 ],
                            ]))
                    })

                    it('handles ouzd fall', () => {
                        expect(contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.OUZD ][ RenderingName.FALL ])
                            .toEqual(to.ContourPiece([
                                [ 1, 1 ], [ 7, 7 ],
                                [ 1, 1 ], [ 7, 7 ],
                                [ 1, 1 ], [ 7, 7 ],
                            ]))
                    })
                })
            })

            describe('other renderings', () => {
                it('handles inaiii variety', () => {
                    const { inaiiiVarietyContourPiece } = buildAlmostTrueContourPieces()

                    expect(inaiiiVarietyContourPiece)
                        .toEqual(to.ContourPiece([
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 0, 1 ], [ 2, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 0, 1 ], [ 3, 1 ],
                            [ 1, 1 ], [ 2, 2 ],
                            [ 1, 1 ], [ 2, 2 ],
                        ]))
                })
            })
        })

        it('gets the right set of contours out of its stash', () => {
            expect(getTrueContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, RenderingName.SUMMER))
                .toEqual(
                    contourPiecesByBarTargetBlockStyleThenRendering[ BarTarget.TWENTYFOUR ][ BlockStyle.DJIYAI ][ RenderingName.SUMMER ],
                )
        })
    })
})
