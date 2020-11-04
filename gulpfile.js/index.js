const { series } = require('gulp')

const lession_1 = require('./lession_1')
const lession_2 = require('./lession_2')
const { build, seriesTask } = lession_2

exports.lession_1  = lession_1
exports.build = build
exports.default = seriesTask
