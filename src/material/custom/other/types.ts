import { PitchDuration, Segment } from '@musical-patterns/pattern'
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
    backboneFifteen: ContourPiece<PitchDuration>,
    backboneTwentyfour: ContourPiece<PitchDuration>,
    secretLongChord: ContourPiece<PitchDuration>,
    shifty: ContourPiece<PitchDuration>,
    shiftyFifteen: ContourPiece<PitchDuration>,
    shiftyTwentyfour: ContourPiece<PitchDuration>,
    shiftyTwentyfourVariant: ContourPiece<PitchDuration>,
}

interface OtherSegments {
    secretLongChord: Segment,
    shifty: Segment,
    totallyOutThereIntro: Segment,
}

interface OtherContourWholes {
    secretLongChord: ContourWhole<PitchDuration>,
    shiftyA: ContourWhole<PitchDuration>,
    shiftyB: ContourWhole<PitchDuration>,
    totallyOutThere: ContourWhole<PitchDuration>,
}

export {
    OtherBlocks,
    OtherContourPieces,
    OtherSegments,
    OtherContourWholes,
}
