import { PitchValue, Segment } from '@musical-patterns/material'
import { Block, ContourPiece, ContourWhole, KeyMap } from '@musical-patterns/utilities'

interface ThirtyfiveBlocks {
    yaosAccidentInspired: Block,
    yaosBass: Block,
    zdaub: Block,
    zdaubOnlyWiggle: Block,
}

type ThirtyfiveContourPieces = KeyMap<ThirtyfiveBlocks, ContourPiece<PitchValue>>

interface ThirtyfiveContourWholes {
    thirtyfiveYaosAccidentInspired: ContourWhole<PitchValue>,
    thirtyfiveYaosBass: ContourWhole<PitchValue>,
    thirtyfiveZdaub: ContourWhole<PitchValue>,
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
