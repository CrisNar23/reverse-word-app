const reverseString = (req, res) => {
  try {
    const { text } = req.query
    if (text !== '') {
      const newReverseString = text.toLowerCase().split('').reverse().join('')
      const noSpacesText = text.toLowerCase().replace(/\s/g, '')
      const noSpacesReverseText = newReverseString
        .toLowerCase()
        .replace(/\s/g, '')
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
