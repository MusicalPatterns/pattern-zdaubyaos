[![Build Status](https://travis-ci.com/MusicalPatterns/pattern-zdaubyaos.svg?branch=master)](https://travis-ci.com/MusicalPatterns/pattern-zdaubyaos)

# Zdaubyaos

fun with the superparticular series & variants, plus stepwise motion within recurring bounds

## styles

**zdaub**: melodic; inherited from stepwise

**yaos**: rhythmic; inherited from oumaotcou'ao'iest

Each of these styles has its own Blocks and Renderings which create Contours mostly of length either 15 or 24. 

## compositional levels

**Block**: just sets of numbers, a very abstract form of the pattern

**Rendering**: converts Block to ContourPiece

**ContourPiece**: what you get after you map a Rendering onto a Block; each ContourElement represents a pitch (index) plus a duration;
    ContourPiece is the smallest compositional object of the pattern, too small to write the pattern in directly
    
**ContourWhole**: a concatenation of several ContourPiece together; a large enough compositional object to write the pattern in directly;
    a ContourWhole is still intended to be compiled to something for just one Entity to play
    
**Segment**: take a set of ContourWhole, and each ContourWhole has all of its ContourElements mapped to a Note, 
    and each ContourWhole's Note total the same duration, so they can be played simultaneously by different Entities, but still sequenced together with other Segments
    
**Note**: what you get when you hydrate a ContourElement w/ NoteStyle information, readying it to be compiled to be played

## development notes

`zdaubyaos` is currently the only pattern which imports another pattern. I believe this should become a common good practice, but for now, you're my guinea pig.

It imports `xenharmonic-series` for the scales it uses.

I've noticed this can cause hiccups when refactoring across Musical Patterns and all patterns need to be updated.
If you have a script iterating over all the pattern repos, it may fail on `zdaubyaos` because it won't be able to compile without the latest format of code from `xenharmonic series` 
(and because the latter immediately precedes the former alphabetically, often the code it has just shipped is not yet available).
