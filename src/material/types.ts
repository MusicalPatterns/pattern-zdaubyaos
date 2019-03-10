import { Note } from '@musical-patterns/compiler'

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

interface ZdaubyaosNotes {
    harmSubharm: Note[],
    subDub: Note[],
    superDuper: Note[],
}

export {
    BarTarget,
    BlockStyle,
    ZdaubyaosNotes,
}
