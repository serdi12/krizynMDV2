let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : 𝚒𝚢𝚊𝚗
║│➸ ```UMUR``` : 20thn
║│➸ ```ASAL``` : Jawa barat 
║│➸ ```OFFICIAL GRUP``` :
https://saweria.co/IyanMd
║│➸ ```ISTAGRAM``` : https://saweria.co/IyanMd
║│➸ ```WHATSAPP``` : http://wa.me/6289516947204
╰────────❉
`.trim(), m)
}

handler.help = ['infoarull']
handler.tags = ['main', 'utama']
handler.command = /^(infoarull|inforozi)$/i

handler.exp = 150

module.exports = handler
