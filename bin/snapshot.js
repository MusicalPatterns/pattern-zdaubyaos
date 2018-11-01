const fs = require('fs')
require('../../../test/support/mockDom')

const makeKey = key => key
    .replace(/build/g, '')
    .replace(/Function/g, '')
    .toLowerCase()

const updateSnapshot = async () => {
    const {zdaubyaosPattern, zdaubyaosPatternSpec} = require('../src/patterns.ts')
    const snapshot = Object.entries(zdaubyaosPattern.material).reduce(
        (accumulator, [material, buildMaterialFunction]) => ({
            ...accumulator,
            [makeKey(material)]: buildMaterialFunction(zdaubyaosPatternSpec),
        }),
        {}
    )
    const snapshotFile = './test/support/zdaubyaosSnapshot.json'

    fs.existsSync(snapshotFile) && fs.unlinkSync(snapshotFile)
    fs.appendFileSync(snapshotFile, JSON.stringify(snapshot, null, 2))

    process.exit()
}

updateSnapshot()
