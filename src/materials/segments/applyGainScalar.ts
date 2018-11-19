import { apply, Scalar } from '@musical-patterns/utilities'
import { NoteSpec, PartSpec } from '../../../../../src'

const applyGainScalar: (partSpec: PartSpec, gainScalar: Scalar) => PartSpec =
    (partSpec: PartSpec, gainScalar: Scalar): PartSpec =>
        partSpec.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            gainSpec: noteSpec.gainSpec && {
                ...noteSpec.gainSpec,
                scalar: apply.Scalar(noteSpec.gainSpec.scalar, gainScalar),
            },
        }))

export {
    applyGainScalar,
}
