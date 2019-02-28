import { PitchDuration, Rendering, Segment } from '@musical-patterns/pattern'
import { Block, ContourPiece, ContourWhole } from '@musical-patterns/utilities'
import { RenderingName } from '../../renderings'
import { BarTarget, BlockStyle } from '../../types'

type TrueContourPiecesByRenderingName = { [z in RenderingName]: ContourPiece<PitchDuration> }
type TrueContourPeicesByBlockStyleThenRenderingName = { [y in BlockStyle]: TrueContourPiecesByRenderingName }
type TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName =
    { [x in BarTarget]: TrueContourPeicesByBlockStyleThenRenderingName }

type GetTrueContourPieces = (
    blockStyle: BlockStyle,
    barTarget: BarTarget,
    renderingName: RenderingName,
) => ContourPiece<PitchDuration>

type FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName,
    twentyfourRenderingName: RenderingName,
) => ContourWhole<PitchDuration>

type TrueBlocksByBlockStyle = { [y in BlockStyle]: Block }
type TrueBlocksByBarTargetThenBlockStyle = { [x in BarTarget]: TrueBlocksByBlockStyle }

interface BuildTrueContourPieceParameters {
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
    summerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonically: Segment,
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
    BuildTrueContourPieceParameters,
    TrueSegments,
    TrueContourWholes,
}
