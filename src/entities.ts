import { Entity, OscillatorName, SongSpec, TimeType, VoiceType } from '../../../src'
import { buildZdaubyaosTracks } from './tracks'

const buildZdaubyaosEntities: (songSpec: SongSpec) => Entity[] =
    (songSpec: SongSpec): Entity[] => {
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
