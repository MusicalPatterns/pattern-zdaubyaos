import { BuildScalesFunction, buildStandardScales, Scalar, Scale } from '../../../src'
import { SongSpec } from '../../types'
import { buildZdaubyaosScalars } from './scalars'

const applySongPitchScalar: (scalars: Scalar[], songPitchScalar: Scalar) => Scale =
    (scalars: Scalar[], songPitchScalar: Scalar): Scale => ({
        scalar: songPitchScalar,
        scalars,
    })

const buildZdaubyaosScales: BuildScalesFunction = (songSpec: SongSpec): Scale[] => {
    const songPitchScalar: Scalar = songSpec.songPitchScalar

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
        applySongPitchScalar(subparticularSeriesScalars, songPitchScalar),
        applySongPitchScalar(dubparticularSeriesScalars, songPitchScalar),
        applySongPitchScalar(harmonicSeriesScale.scalars, songPitchScalar),
        applySongPitchScalar(superparticularSeriesScalars, songPitchScalar),
        applySongPitchScalar(duperparticularSeriesScalars, songPitchScalar),
        applySongPitchScalar(subharmonicSeriesScale.scalars, songPitchScalar),
        flatDurationsScale,
    ]
}

export {
    buildZdaubyaosScales,
}
