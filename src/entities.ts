import { Entities, Entity, TimeType } from '../../../src/compile/types'
import { SongSpec } from '../../../src/songs'
import { OscillatorName, VoiceType } from '../../../src/types'
import { buildZdaubyaosTracks } from './tracks'

const buildZdaubyaosEntities: (songSpec: SongSpec) => Entities =
    (songSpec: SongSpec): Entities => {
        const {
            zdaubyaosSubparticularOrDubparticularTrack,
            zdaubyaosHarmonicOrSubharmonicTrack,
            zdaubyaosSuperparticularOrDuperparticularTrack,
        } = buildZdaubyaosTracks(songSpec.songDurationScalar)

        const zdaubyaosSubparticularOrDubparticularSquareEntity: Entity = {
            noteSpecs: zdaubyaosSubparticularOrDubparticularTrack,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const zdaubyaosSuperparticularOrDuperparticularSawEntity: Entity = {
            noteSpecs: zdaubyaosSuperparticularOrDuperparticularTrack,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SAWTOOTH, voiceType: VoiceType.OSCILLATOR },
        }

        const zdaubyaosHarmonicOrSubharmonicSineEntity: Entity = {
            noteSpecs: zdaubyaosHarmonicOrSubharmonicTrack,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SINE, voiceType: VoiceType.OSCILLATOR },
        }

        return [
            zdaubyaosSuperparticularOrDuperparticularSawEntity,
            zdaubyaosHarmonicOrSubharmonicSineEntity,
            zdaubyaosSubparticularOrDubparticularSquareEntity,
        ]
    }

export {
    buildZdaubyaosEntities,
}
