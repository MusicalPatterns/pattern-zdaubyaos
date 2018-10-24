import { BuildScalesFunction } from '../../../src/compile/types'
import { flatDurationsScale, harmonicSeriesScale, subharmonicSeriesScale } from '../../../src/scales'
import { SongSpec } from '../../../src/songs'
import { Scalars, Scale, Scales } from '../../../src/types'
import applyOffset from '../../../src/utilities/applyOffset'
import { Offset, Scalar } from '../../../src/utilities/nominalTypes'
import numbers from '../../../src/utilities/numbers'
import * as to from '../../../src/utilities/to'

// tslint:disable-next-line:no-any no-magic-numbers
const SUPER: Offset = 1 as any
// tslint:disable-next-line:no-any no-magic-numbers
const DUPER: Offset = 2 as any

const subparticularSeriesScalars: Scalars = numbers.map((n: number): Scalar =>
    to.Scalar(n / applyOffset(n, SUPER)))

const dubparticularSeriesScalars: Scalars = numbers.map((n: number): Scalar =>
    to.Scalar(n / applyOffset(n, DUPER)))

const superparticularSeriesScalars: Scalars = numbers.map((n: number): Scalar =>
    to.Scalar(applyOffset(n, SUPER) / (n)))

const duperparticularSeriesScalars: Scalars = numbers.map((n: number): Scalar =>
    to.Scalar(applyOffset(n, DUPER) / (n)))

const applySongPitchScalar: (scalars: Scalars, songPitchScalar: Scalar) => Scale =
    (scalars: Scalars, songPitchScalar: Scalar): Scale => ({
        scalar: songPitchScalar,
        scalars,
    })

const buildZdaubyaosScales: BuildScalesFunction = (songSpec: SongSpec): Scales => {
    const songPitchScalar: Scalar = songSpec.songPitchScalar

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
    subparticularSeriesScalars,
    superparticularSeriesScalars,
    dubparticularSeriesScalars,
    duperparticularSeriesScalars,
    buildZdaubyaosScales,
}
