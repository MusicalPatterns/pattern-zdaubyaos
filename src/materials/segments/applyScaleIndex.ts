import { Index } from '@musical-patterns/utilities'
import { NoteSpec, PartSpec } from '../../../../../compile'

const applyScaleIndex: (partSpec: PartSpec, scaleIndex: Index) => PartSpec =
    (partSpec: PartSpec, scaleIndex: Index): PartSpec =>
        partSpec.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: { ...noteSpec.pitchSpec, scaleIndex },
        }))

export {
    applyScaleIndex,
}
