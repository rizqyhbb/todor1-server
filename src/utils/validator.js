const isEmpty = (str) => {
  if (str === "" || !str.replace(/\s/g, '').length)
    return true
}

module.exports = {
  isEmpty
}
