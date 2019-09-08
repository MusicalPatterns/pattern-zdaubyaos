import { PitchValue, Segment } from '@musical-patterns/material'
import { Block, ContourPiece, ContourWhole } from '@musical-patterns/utilities'

interface OtherBlocks {
    backboneFifteen: Block,
    backboneTwentyfour: Block,
    secretLongChord: Block,
    shifty: Block,
    shiftyFifteen: Block,
    shiftyTwentyfour: Block,
    shiftyTwentyfourVariant: Block,
}

interface OtherContourPieces {
    backboneFifteen: ContourPiece<PitchValue>,
    backboneTwentyfour: ContourPiece<PitchValue>,
    secretLongChord: ContourPiece<PitchValue>,
    shifty: ContourPiece<PitchValue>,
    shiftyFifteen: ContourPiece<PitchValue>,
    shiftyTwentyfour: ContourPiece<PitchValue>,
    shiftyTwentyfourVariant: ContourPiece<PitchValue>,
}

interface OtherSegments {
    secretLongChord: Segment,
    shifty: Segment,
    totallyOutThereIntro: Segment,
}

interface OtherContourWholes {
    secretLongChord: ContourWhole<PitchValue>,
    shiftyA: ContourWhole<PitchValue>,
    shiftyB: ContourWhole<PitchValue>,
    totallyOutThereIntro: ContourWhole<PitchValue>,
}

export {
    OtherBlocks,
    OtherContourPieces,
    OtherSegments,
    OtherContourWholes,
}
