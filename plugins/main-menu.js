//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'main': '𝘽𝙊𝙏 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐',
  'bebot': 'SUB 𝘽𝙊𝙏 𝙈𝙀𝙉𝙐',
  'game': '𝙂𝘼𝙈𝙀𝙎 𝙈𝙀𝙉𝙐',
  'econ': '𝙀𝘾𝙊𝙉𝙊𝙈𝙔 𝙈𝙀𝙉𝙐',
  'rg': '𝙍𝙀𝙂/𝙈𝙍𝙀𝙉𝙐',
  'sticker': '𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐',
  'img': '𝙄𝙈𝙂 𝙈𝙀𝙈𝙐',
  'maker': '𝙈𝘼𝙆𝙀𝙍 𝙈𝙀𝙉𝙐',
  'prem': '𝘿𝙄𝘼𝙈𝙊𝙉𝘿 𝙈𝙀𝙉𝙐',
  'group': '𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐',
  'nable': 'EN/DISABLE 𝙊𝙋𝙏𝙄𝙊𝙉𝙎', 
  'nime': '𝘼𝙉𝙄𝙈𝙀',
  'rnime': '𝘼𝙉𝙄𝙈𝙀 𝙍𝙀𝘼𝘾𝙏𝙄𝙊𝙉',
  'dl': '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐',
  'tools': '𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐',
  'fun': '𝙁𝙐𝙉 𝙈𝙀𝙉𝙐',
  'cmd': '𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀 𝙈𝙀𝙉𝙐',
  'nsfw': '𝘼𝘿𝙇𝙐𝙏𝙎 𝙈𝙀𝙉𝙐,
  'ansfw': '𝙉𝙎𝙁𝙒 𝘼𝙉𝙄𝙈𝙀', 
  'owner': '𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐', 
  'advanced': '𝘼𝘿𝙑𝘼𝙉𝘾𝙀𝘿 𝙈𝙀𝙉𝙐',
}
const defaultMenu = {
  before: `
⊶————————————————————————⊶  
   💝𝗤𝗨𝗘𝗘𝗡 𝗔𝗟𝗘𝗫𝗔 𝗕𝗢𝗧💝
⊶————————————————————————⊶
◤𝙃𝙄 %name ◢
◤𝙐𝙎𝙀𝙍𝙎 : %totalreg◢
◤ 𝘼𝘾𝙏𝙄𝙑𝙀 𝙏𝙄𝙈𝙀 : %muptime ◢
────────────➤
𝘛𝘏𝘈𝘕𝘒 𝘠𝘖𝘜 𝘜𝘚𝘐𝘕𝘎 𝘔𝘠 𝘉𝘖𝘛 
────────────➤
%readmore
  ➤➤➤➤➤➤➤➤➤➤➤➤
  💭𝘼𝙇𝙀𝙓𝘼 𝘽𝙊𝙏 𝘼𝙇𝙇 𝙈𝙀𝙉𝙐
  ➤➤➤➤➤➤➤➤➤➤➤➤

💙 = Primium
💜 = Diamantes
`.trimStart(),
  header: '╭⚋⚋⚋⚋❲ *%category* ❳⚋⚋⚋⚋⚋⦁⦁',
  body: '❲⦁❳➤💝 *%cmd* %isPremium',
  footer: '┗⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⦁⦁\n',
  after: `
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `💝 𝘗𝘖𝘞𝘙𝘌𝘋 𝘉𝘠 𝘈𝘓𝘌𝘟𝘈 https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      sbot: (conn.user.jid == global.conn.user.jid ? '' : `\n➤ ✨ *Sub-Bot de:*\nwa.me/${global.conn.user.jid.split`@`[0]}`), 
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    let pp = './src/alexa_logo.jpg'

    /*conn.sendButton(m.chat, text.trim(), `▢ DyLux  ┃ ᴮᴼᵀ\n${mssg.ig}`, pp, [
      ['ꨄ︎ Apoyar', `${_p}donate`],
      ['⏍ Info', `${_p}botinfo`],
      ['⌬ Grupos', `${_p}gpdylux`]
    ], m, rpl)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m, null, rcanal)
  
    m.react('📚') 
    
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
//handler.help = ['help']
//handler.tags = ['main']
handler.command = ['menu', 'help', 'menú'] 
handler.register = false

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}
