import { PitchDuration, Segment } from '@musical-patterns/pattern'
import { Block, ContourPiece, ContourWhole, KeyMap } from '@musical-patterns/utilities'

interface ThirtyfiveBlocks {
    yaosAccidentInspired: Block,
    yaosBass: Block,
    zdaub: Block,
    zdaubOnlyWiggle: Block,
}

type ThirtyfiveContourPieces = KeyMap<ThirtyfiveBlocks, ContourPiece<PitchDuration>>

interface ThirtyfiveContourWholes {
    thirtyfiveYaosAccidentInspired: ContourWhole<PitchDuration>,
    thirtyfiveYaosBass: ContourWhole<PitchDuration>,
    thirtyfiveZdaub: ContourWhole<PitchDuration>,
}

interface ThirtyfiveSegments {
    thirtyfiveSegment: Segment
}

export {
    ThirtyfiveBlocks,
    ThirtyfiveContourPieces,
    ThirtyfiveContourWholes,
    ThirtyfiveSegments,
}
