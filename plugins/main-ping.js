import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {
  let thumbnail = 'https://www.guruapi.tech/K.jpg'
  let fgg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `𝗔𝗟𝗘𝗫𝗔-𝗕𝗢𝗧`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'𝗔𝗟𝗘𝗫𝗔-𝗕𝗢𝗧'\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let pingMsg = await conn.sendMessage(m.chat, {text: '𝙋𝙞𝙣𝙜𝙞𝙣𝙜
  ...'}, {quoted: fgg})

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {

    let latency = (speed() - timestamp).toFixed(4)

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `𝙋𝙊𝙉𝙂! 𝙇𝙖𝙩𝙚𝙣𝙘𝙮: ${latency} 𝙢𝙨` 
        }
      }
    }, {})

  })

}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed'] 

export default handler
