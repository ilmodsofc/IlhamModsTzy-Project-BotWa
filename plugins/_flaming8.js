import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('_Proses..._')
   let res = `https://api.tiodevhost.my.id/api/photooxy/shadow-sky?text=${response[0]}`
  conn.sendFile(m.chat, res, 'carved.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['shadowsky'].map(v => v + ' <text>')
handler.tags = ['logo']
handler.command = /^(shadowsky)$/i

export default handler
