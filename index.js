import fetch from 'node-fetch'
import cheerio from 'cheerio'
import countries from 'i18n-iso-countries'
import jimp from 'jimp'
import { styles, rawToOfficialNames } from './utils.js'

;(async () => {
    for (const style of styles) {
        const url = `http://www.freeflagicons.com/buy/${style}/`
        const response = await fetch(url)
        const html = await response.text()
        const $ = cheerio.load(html)
        const images = $('.span-2.center img').toArray()
    
        for (const image of images) {
            const url = image.attribs.src.replace('64', '640')
            const rawName = image.attribs.alt.trim()
            const name = rawToOfficialNames[rawName] || rawName
            const code = countries.getAlpha2Code(name, 'en')

            if (code) {
                const image = await jimp.read(url)
                const filename = `./${style}/${code.toLocaleLowerCase()}.jpg`
                
                image.quality(60).write(filename)
                console.log(`collected ${name.toLocaleLowerCase()} ${style}`)
            }
        }
    }
})()