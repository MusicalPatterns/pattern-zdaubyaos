import { NoteSpec } from '@musical-patterns/compiler'
import { StandardContour } from '@musical-patterns/pattern'
import { ContourElement } from '@musical-patterns/utilities'

type BuildNoteSpec = (contourElement: ContourElement<StandardContour>) => NoteSpec

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

export {
    BuildNoteSpec,
    BarTarget,
    BlockStyle,
}
