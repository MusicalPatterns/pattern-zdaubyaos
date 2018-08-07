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
    trueAllYaosAllRhythmsAtOnceSegment,
    trueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
    trueSpringAllYaosUmowchuwowiestSegment,
    trueSummerAllYaosInaidjiyaiouzdSegment,
    trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
} from './segments/trueYaosSegments'

import {
    trueAllZdaubTriumphantAndExperienceThePowerOfTheThreeScalesTogetherSegment,
    trueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
    trueSpringWithZdaubSegment,
    trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
} from './segments/trueZdaubSegments'
import { Segment } from './types'

const segments: Segment[] = [
    // 0
    breatherSpringSegment,
    trueSpringAllYaosUmowchuwowiestSegment,
    trueSpringWithZdaubSegment,

    // 3
    breatherSummerSegment,
    trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
    // This transition feels a little harmonically odd, though i can't figure why, since they match really well...
    trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,

    // 6
    breatherFallWhichIsGoodIntroForJigSegment,
    // Maybe this bony jig intro goes on a little too long ?
    trueFallAllYaosAndBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeelingSegment,
    trueBonyJigAndNowItGetsKindaHighAndMagicSparklySegment,
    // Awkward transition
    shiftySegment,

    // 10
    breatherSpringAltNiceAsABreatherToABreatherSegment,
    breatherVarietyQuiteTheReveilleSegment,
    trueAllYaosAllRhythmsAtOnceSegment,
    trueAllZdaubTriumphantAndExperienceThePowerOfTheThreeScalesTogetherSegment,

    // 14
    // I'm really not sure how we're ever supposed to transition into this thing,
    // But as for transitioning out, i wonder if i shouldn't really just have this be the end of the song,
    // Like repeat a couple times and then have the high voice stop and then just fade out
    thirtyfiveSegment,
]

// tslint:disable-next-line:no-unused-variable
const notsureyetSegments: Segment[] = [
    trueSummerAllYaosInaidjiyaiouzdSegment,
    // I'm concerned if i don't include this we're really missing out on the inaidjiyaiouzd material...
    // Besides in the fall rendering form which is not super clear
    // Ok we definitely did get the 345354 and the 78 in
    // "TrueFallAllYaosAndBothBlockStrategiesBonyJigIntroAllTogetherAndHappyGoLuckyAndRhythmicallySpasticSegment"

    // These two sound really similar to each other and aren't good
    backboneSegment,
    experimentWithIestttAndUmowwwSegment,
]

export default segments
