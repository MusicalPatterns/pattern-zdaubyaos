const fs = require('fs')
require('../../../test/support/mockDom')

const snapshot = require('../src/materials/entities.ts').buildZdaubyaosEntities()
const snapshotFile = './test/support/zdaubyaosEntitiesSnapshot.json'

fs.existsSync(snapshotFile) && fs.unlinkSync(snapshotFile)
fs.appendFileSync(snapshotFile, JSON.stringify(snapshot, null, 2))

process.exit()
