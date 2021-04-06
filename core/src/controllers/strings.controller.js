/**
 * Function to invert a string and verify if it´s palindrome
 * @param {object} req request info
 * @param {object} res response info
 */
const reverseString = (req, res) => {
  try {
    /**
     * @const {string}
     */
    const { text } = req.query
    if (text !== '') {
      /**
       * @const {string}
       */
      const newReverseString = text.toLowerCase().split('').reverse().join('')
      /**
       * @const {string}
       */
      const noSpacesText = text.toLowerCase().replace(/\s/g, '')
      /**
       * @const {string}
       */
      const noSpacesReverseText = newReverseString
        .toLowerCase()
        .replace(/\s/g, '')
      /**
       * @type {string}
       */
      let palindrome
      noSpacesText === noSpacesReverseText
        ? (palindrome = true)
        : (palindrome = false)
      res.status(200).json({ text, reverseText: newReverseString, palindrome })
    } else {
      res.status(400).json({ error: 'No text' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = reverseString
