import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['94768738555', '𝗔𝗦𝗛𝗘𝗡 𝗕𝗥𝗢', true],
  ['94768738555']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['94768738555', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'DRLg5kY7' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '💝𝙌𝚄𝙴𝙴𝙽 𝘼𝙻𝙴𝚇𝙰' 
global.author = '@ashenbro134' 

//--info FG
global.botName = 'ALEXA'
global.fgig = 'https://www.instagram.com/' 
global.fgsc = 'https://github.com/ashenbro134/THE-ALEXA' 
global.fgyt = 'https://youtube.com/8f'
global.fgpyp = 'https://paypal.me/g98f'
global.fglog = 'https://telegra.ph/file/ce00d2f339aafbdeb3bae.jpg' 

//--- Grupos WA
global.fgcanal = 'https://whatsapp.com/channel/0029VaJzT95GufItCPxY9o3h'
global.bgp = 'https://chat.whatsapp.com/C4mcek6i7aE2P1iDcJpmoo'
global.bgp2 = 'https://chat.whatsapp.com/C4mcek6i7aE2P1iDcJpmoo'
global.bgp3 = 'https://chat.whatsapp.com/C4mcek6i7aE2P1iDcJpmoo' //--GP NSFW

global.wait = '⌛ _𝙒𝙖𝙞𝙩𝙞𝙣𝙜...._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
