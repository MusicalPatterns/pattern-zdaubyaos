import { PitchDuration, Rendering, Segment } from '@musical-patterns/material'
import { Block, ContourPiece, ContourWhole } from '@musical-patterns/utilities'
import { RenderingName } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'

type TrueContourPiecesByRenderingName = { [Index in RenderingName]: ContourPiece<PitchDuration> }
type TrueContourPeicesByBlockStyleThenRenderingName = { [Index in BlockStyle]: TrueContourPiecesByRenderingName }
type TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName =
    { [Index in BarTarget]: TrueContourPeicesByBlockStyleThenRenderingName }

type GetTrueContourPieces = (
    blockStyle: BlockStyle,
    barTarget: BarTarget,
    renderingName: RenderingName,
) => ContourPiece<PitchDuration>

type FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName,
    twentyfourRenderingName: RenderingName,
) => ContourWhole<PitchDuration>

type TrueBlocksByBlockStyle = { [Index in BlockStyle]: Block }
type TrueBlocksByBarTargetThenBlockStyle = { [Index in BarTarget]: TrueBlocksByBlockStyle }

interface ComputeTrueContourPieceParameters {
    barTarget: BarTarget,
    block: Block,
    blockStyle: BlockStyle,
    rendering: Rendering<PitchDuration>,
    renderingName: RenderingName,
}

interface TrueSegments {
    allYaosAllRhythmsAtOnce: Segment,
    springAllYaosUmowchuwowiest: Segment,
    springWithZdaub: Segment,
    springySummerTotallyOutThere: Segment,
    summerAllYaosUmowchuwowiestWithSomeHarmonicallyFlipped: Segment,
    summerWithZdaubAndSeparationVariantBecomesPleasantlyGnarlyHarmonically: Segment,
}

interface TrueContourWholes {
    yaosInaidjiyaiouzdSummerToSpring: ContourWhole<PitchDuration>,
    yaosSpringySummerStraightIntoZdaubInaidjiyaiouzd: ContourWhole<PitchDuration>,
    yaosUmowchuwowiestSpringToSummer: ContourWhole<PitchDuration>,
    yaosUmowchuwowiestSummerToSpring: ContourWhole<PitchDuration>,
    zdaubGlis: ContourWhole<PitchDuration>,
    zdaubGlisVariant: ContourWhole<PitchDuration>,
    zdaubTrem: ContourWhole<PitchDuration>,
}

export {
    TrueContourPeicesByBlockStyleThenRenderingName,
    TrueContourPiecesByRenderingName,
    TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName,
    GetTrueContourPieces,
    FormulaicTrueYaosContourWhole,
    TrueBlocksByBlockStyle,
    TrueBlocksByBarTargetThenBlockStyle,
    ComputeTrueContourPieceParameters,
    TrueSegments,
    TrueContourWholes,
}
