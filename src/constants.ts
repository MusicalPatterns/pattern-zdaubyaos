import { ByBlockStrategy, YaosBlockResolution, YaosBlockStrategy, YaosBlockStyle } from './zdaubyaosTypes'

const YAOS_BLOCK_STYLES_BY_STRATEGY_THEN_RESOLUTION: ByBlockStrategy = {
    [YaosBlockStrategy.INAIDJIYAIOUZD]: {
        [YaosBlockResolution.HIGHREG]: YaosBlockStyle.OUZD,
        [YaosBlockResolution.LOWREG]: YaosBlockStyle.INAI,
        [YaosBlockResolution.MIDIRREG]: YaosBlockStyle.DJIYAI,
    },
    [YaosBlockStrategy.UMOWCHUWOWIEST]: {
        [YaosBlockResolution.HIGHREG]: YaosBlockStyle.IEST,
        [YaosBlockResolution.LOWREG]: YaosBlockStyle.UMOW,
        [YaosBlockResolution.MIDIRREG]: YaosBlockStyle.CHUWOW,
    },
}

export {
    YAOS_BLOCK_STYLES_BY_STRATEGY_THEN_RESOLUTION,
}
