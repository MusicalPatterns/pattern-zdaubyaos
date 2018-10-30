import { BuildScalesFunction, buildStandardScales, Scalar, Scale, scaleFromScalarsAndScalar } from '../../../../src'
import { SongSpec } from '../../../types'
import { buildZdaubyaosScalars } from './scalars'

const buildZdaubyaosScales: BuildScalesFunction = (songSpec: SongSpec): Scale[] => {
    const songPitchScalar: Scalar = songSpec.songPitchScalar
    const songDurationScalar: Scalar = songSpec.songDurationScalar

    const {
        subparticularSeriesScalars,
        dubparticularSeriesScalars,
        superparticularSeriesScalars,
        duperparticularSeriesScalars,
    } = buildZdaubyaosScalars()

    const {
        flatDurationsScale,
        harmonicSeriesScale,
        subharmonicSeriesScale,
    } = buildStandardScales()

    return [
        flatDurationsScale,
        scaleFromScalarsAndScalar(flatDurationsScale.scalars, songDurationScalar),
        scaleFromScalarsAndScalar(subparticularSeriesScalars, songPitchScalar),
        scaleFromScalarsAndScalar(dubparticularSeriesScalars, songPitchScalar),
        scaleFromScalarsAndScalar(harmonicSeriesScale.scalars, songPitchScalar),
        scaleFromScalarsAndScalar(superparticularSeriesScalars, songPitchScalar),
        scaleFromScalarsAndScalar(duperparticularSeriesScalars, songPitchScalar),
        scaleFromScalarsAndScalar(subharmonicSeriesScale.scalars, songPitchScalar),
    ]
}

export {
    buildZdaubyaosScales,
}
