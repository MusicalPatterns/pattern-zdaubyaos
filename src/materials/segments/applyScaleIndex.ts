import { Index } from '@musical-patterns/utilities'
import { NoteSpec, PartSpec } from '../../../../../src'

const applyScaleIndex: (partSpec: PartSpec, scaleIndex: Index) => PartSpec =
    (partSpec: PartSpec, scaleIndex: Index): PartSpec =>
        partSpec.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: { ...noteSpec.pitchSpec, scaleIndex },
        }))

export {
    applyScaleIndex,
}
