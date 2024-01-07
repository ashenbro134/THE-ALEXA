
let handler = m => m
handler.all = async function (m) {
	let setting = global.db.data.settings[this.user.jid]
	
  let bot = global.db.data.settings[this.user.jid] || {};
  if (bot.autoBio) {
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
		let bio = `\n ◤💭𝘽𝙀 𝙃𝙊𝙉𝙀𝙎𝙏 𝙒𝙄𝙏𝙃 𝙊𝙏𝙃𝙀𝙍𝙎 𝙉𝙊 𝙈𝘼𝙏𝙏𝙀𝙍 𝙃𝙊𝙒 𝙏𝙃𝙀𝙔 𝙏𝙍𝙀𝘼𝙏 𝙔𝙊𝙐. 𝙊𝙉𝙀 𝘿𝘼𝙔 𝙔𝙊𝙐 𝙒𝙄𝙇𝙇  𝘾𝙇𝘼𝙈 𝘿𝙊𝙒𝙉 𝙏𝙃𝙀𝙔 𝘾𝘼𝙍𝙄𝙀𝘿◢➤𝙰𝚄𝚃𝙾 𝙱𝙸𝙾 𝙱𝚈 𝙰𝙻𝙴𝚇𝙰 𝙱𝙾𝚃💙`
		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1
  }
}
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Day(s) ️', h, ' Hour(s) ', m, ' Minute(s)'].map(v => v.toString().padStart(2, 0)).join('')
}
