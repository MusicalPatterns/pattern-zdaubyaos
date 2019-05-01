import { PitchValue, Rendering, Segment } from '@musical-patterns/material'
import { Block, ContourPiece, ContourWhole } from '@musical-patterns/utilities'
import { RenderingName } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'

type TrueContourPiecesByRenderingName = { [Index in RenderingName]: ContourPiece<PitchValue> }
type TrueContourPeicesByBlockStyleThenRenderingName = { [Index in BlockStyle]: TrueContourPiecesByRenderingName }
type TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName =
    { [Index in BarTarget]: TrueContourPeicesByBlockStyleThenRenderingName }

type GetTrueContourPieces = (
    blockStyle: BlockStyle,
    barTarget: BarTarget,
    renderingName: RenderingName,
) => ContourPiece<PitchValue>

type FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName,
    twentyfourRenderingName: RenderingName,
) => ContourWhole<PitchValue>

type TrueBlocksByBlockStyle = { [Index in BlockStyle]: Block }
type TrueBlocksByBarTargetThenBlockStyle = { [Index in BarTarget]: TrueBlocksByBlockStyle }

interface ComputeTrueContourPieceParameters {
    barTarget: BarTarget,
    block: Block,
    blockStyle: BlockStyle,
    rendering: Rendering<PitchValue>,
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
    yaosInaidjiyaiouzdSummerToSpring: ContourWhole<PitchValue>,
    yaosSpringySummerStraightIntoZdaubInaidjiyaiouzd: ContourWhole<PitchValue>,
    yaosUmowchuwowiestSpringToSummer: ContourWhole<PitchValue>,
    yaosUmowchuwowiestSummerToSpring: ContourWhole<PitchValue>,
    zdaubGlis: ContourWhole<PitchValue>,
    zdaubGlisVariant: ContourWhole<PitchValue>,
    zdaubTrem: ContourWhole<PitchValue>,
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
