import { backboneSegment } from './segments/backboneSegments'
import {
    breatherFallWhichIsGoodIntroForJigSegment,
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherSpringSegment,
    breatherSummerSegment,
    breatherVarietyQuiteTheReveilleSegment,
} from './segments/breatherSegments'
import { experimentWithIestttAndUmowwwSegment, thirtyfiveSegment } from './segments/otherSegments'
import { shiftySegment } from './segments/shiftySegments'
import {
    trueAllYaosSupposedToBeAllTheRenderingsAtOnceAlthoughMaybeTheIdeaIsActuallyNotToIncludeFallButToIncludeOneInaidjiyaiouzdBecauseWhateverItIsItsPrettyDenseAndAwesomeSegment,
    trueFallAllYaosAndBothBlockStrategiesBonyJigIntroAllTogetherAndHappyGoLuckyAndRhythmicallySpasticSegment,
    trueSpringAllYaosUmowchuwowiestSegment,
    trueSummerAllYaosInaidjiyaiouzdSegment,
    trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
} from './segments/trueYaosSegments'

import {
    trueAllZdaubTriumphantAndExperienceThePowerOfTheThreeScalesTogetherSegment,
    trueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
    trueSpringWithZdaubSegment,
    trueSummerWithZdaubAndTheZdaubSeparationVariantAndItGetsPleasantlyGnarlyHarmonicallySegment,
} from './segments/trueZdaubSegments'
import { Segment } from './types'

const segments: Segment[] = [
    // 0
    breatherSpringSegment,
    trueSpringAllYaosUmowchuwowiestSegment,
    trueSpringWithZdaubSegment, // i think i don't want the yaos stuff in the background to get quieter and louder in the same way that i like that it does when its soloing in the section just before this
    // 3
    breatherSummerSegment,
    trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
    trueSummerWithZdaubAndTheZdaubSeparationVariantAndItGetsPleasantlyGnarlyHarmonicallySegment,
    // 6
    breatherFallWhichIsGoodIntroForJigSegment,
    trueFallAllYaosAndBothBlockStrategiesBonyJigIntroAllTogetherAndHappyGoLuckyAndRhythmicallySpasticSegment,
    trueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment, // this sounds fscking great now, but it's sliiightly awkward going into the shifty segment ... too awkward for it to be a problem though?
    shiftySegment,
    // 10
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherVarietyQuiteTheReveilleSegment,
    trueAllYaosSupposedToBeAllTheRenderingsAtOnceAlthoughMaybeTheIdeaIsActuallyNotToIncludeFallButToIncludeOneInaidjiyaiouzdBecauseWhateverItIsItsPrettyDenseAndAwesomeSegment,
    trueAllZdaubTriumphantAndExperienceThePowerOfTheThreeScalesTogetherSegment,
    // 14
    thirtyfiveSegment,// i'm really not sure how we're ever supposed to transition into this thing, but as for transitioning out, i wonder if i shouldn't really just have this be the end of the song, like repeat a couple times and then have the high voice stop and then just fade out
]

const notsureyetSegments: Segment[] = [
    trueSummerAllYaosInaidjiyaiouzdSegment, // i'm concerned if i don't include this we're really missing out on the inaidjiyaiouzd material... besides in the fall rendering form which is not super clear
    // ok we definitely did get the 345354 and the 78 in "trueFallAllYaosAndBothBlockStrategiesBonyJigIntroAllTogetherAndHappyGoLuckyAndRhythmicallySpasticSegment"
    // i tried but this is still a whack transition
    backboneSegment,
    // this sounds really similiar to the previous segment but it's not good still
    experimentWithIestttAndUmowwwSegment,
    // this is not a good transition either
]

export default segments
