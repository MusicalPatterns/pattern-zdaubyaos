import { applyOffset, DictionaryOf, numbers, Offset, Scalar, to } from '../../../src'

// tslint:disable-next-line:no-any no-magic-numbers
const SUPER: Offset = 1 as any
// tslint:disable-next-line:no-any no-magic-numbers
const DUPER: Offset = 2 as any

const buildZdaubyaosScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const subparticularSeriesScalars: Scalar[] = numbers.map((n: number): Scalar =>
            to.Scalar(n / applyOffset(n, SUPER)))

        const dubparticularSeriesScalars: Scalar[] = numbers.map((n: number): Scalar =>
            to.Scalar(n / applyOffset(n, DUPER)))

        const superparticularSeriesScalars: Scalar[] = numbers.map((n: number): Scalar =>
            to.Scalar(applyOffset(n, SUPER) / (n)))

        const duperparticularSeriesScalars: Scalar[] = numbers.map((n: number): Scalar =>
            to.Scalar(applyOffset(n, DUPER) / (n)))

        return {
            dubparticularSeriesScalars,
            duperparticularSeriesScalars,
            subparticularSeriesScalars,
            superparticularSeriesScalars,
        }
    }

export {
    buildZdaubyaosScalars,
}
