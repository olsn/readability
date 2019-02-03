const ts = require('./main')
const fs = require('fs')
const text = fs.readFileSync('sample_text.txt', 'utf8')
console.log('Text: ')
console.log(text)

function test () {
  console.log('charCount: \n', ts.charCount(text))
  console.log('letterCount: \n', ts.letterCount(text))
  console.log('removePunctuation: \n', ts.removePunctuation(text))
  console.log('lexiconCount: \n', ts.lexiconCount(text))
  // syllableCounter is different so result is different
  // I prefer the result of JS library
  console.log('syllableCount: \n', ts.syllableCount(text))
  console.log('sentenceCount: \n', ts.sentenceCount(text))
  console.log('averageSentenceLength: \n', ts.averageSentenceLength(text))
  console.log('averageSyllablePerWord: \n', ts.averageSyllablePerWord(text))
  console.log('averageCharacterPerWord: \n', ts.averageCharacterPerWord(text))
  console.log('averageLetterPerWord: \n', ts.averageLetterPerWord(text))
  console.log('averageSentencePerWord: \n', ts.averageSentencePerWord(text))
  console.log('fleschReadingEase: \n', ts.fleschReadingEase(text))
  console.log('fleschKincaidGrade: \n', ts.fleschKincaidGrade(text))
  console.log('polySyllableCount: \n', ts.polySyllableCount(text))
  console.log('smogIndex: \n', ts.smogIndex(text))
  console.log('colemanLiauIndex: \n', ts.colemanLiauIndex(text))
  console.log('automatedReadabilityIndex: \n', ts.automatedReadabilityIndex(text))
  console.log('textStandard: \n', ts.textStandard(text))
}

test()