const bcrypt = require('bcrypt')

const hashPassword = (password) => {
  const hash = bcrypt.hashSync(password, 10)
  return hash
}

const comparePassword = (password, hashedPassword) => {
  const compare = bcrypt.compareSync(password, hashedPassword)
  return compare
}

module.exports = {
  hashPassword, comparePassword
}