import { NoteSpec } from '@musical-patterns/compiler'
import { ContourElement } from '@musical-patterns/utilities'

type BuildNoteSpec = (contourElement: ContourElement<ZdaubyaosContour>) => NoteSpec

enum BarTarget {
    FIFTEEN = 'FIFTEEN',
    TWENTYFOUR = 'TWENTYFOUR',
}

enum BlockStyle {
    OUZD = 'OUZD',
    INAI = 'INAI',
    DJIYAI = 'DJIYAI',
    IEST = 'IEST',
    UMOW = 'UMOW',
    CHUWOW = 'CHUWOW',
    NODLE = 'NODLE',
    LIMIN = 'LIMIN',
    SCEND = 'SCEND',
}

// tslint:disable-next-line:no-magic-numbers
type ZdaubyaosContour = 2

export {
    BuildNoteSpec,
    BarTarget,
    BlockStyle,
    ZdaubyaosContour,
}
