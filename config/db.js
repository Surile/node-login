const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const config = {
  prot: process.env.PORT || 3000,
  session: {
    key: 'dimension',
    maxAge: 86400000
  },
  mongodb: 'mongodb://localhost:27017/dimension'
}
mongoose.connect(config.mongodb, { useNewUrlParser: true })

mongoose.connection.on('error', function (error) {
  console.log('数据库连接失败：' + error)
})

mongoose.connection.on('open', function () {
  console.log('数据库连接成功')
})

module.exports = mongoose
