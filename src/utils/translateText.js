
export async function translateText(word, target) {
  const source = 'he'

  if (target === source) {
    return word
  }

  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=${source}|${target}`

  const response = await fetch(url)

  const data = await response.json()

  return data.responseData.translatedText
}
