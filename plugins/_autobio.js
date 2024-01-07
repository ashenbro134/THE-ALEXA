/*
let handler = m => m
handler.all = async function (m) {
	let setting = global.db.data.settings[this.user.jid]
	
let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
		let bio = `\n 💝𝙔𝙊𝙐𝙍 𝙐𝙎𝙀𝙍 𝘽𝙊𝙏 𝘼𝘾𝙏𝙄𝙑𝙀 𝙏𝙄𝙈𝙀 ${muptime}\n\n┃𝘉𝘠 ◤𝘈𝘓𝘌𝘟𝘌 𝘉𝘖𝘛◢ `
		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1

}
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' 𝘋𝘈𝘠𝘚💭 ️', h, ' 𝘏𝘖𝘜𝘙𝘚💭 ', m, ' 𝘔𝘐𝘕𝘐𝘛𝘏𝘌𝘚💭'].map(v => v.toString().padStart(2, 0)).join('')
}
*/
