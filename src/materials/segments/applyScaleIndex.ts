import { Index, NoteSpec, PartSpec } from '@musical-patterns/shared'

const applyScaleIndex: (partSpec: PartSpec, scaleIndex: Index) => PartSpec =
    (partSpec: PartSpec, scaleIndex: Index): PartSpec =>
        partSpec.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: { ...noteSpec.pitchSpec, scaleIndex },
        }))

export {
    applyScaleIndex,
}
