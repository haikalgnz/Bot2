let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [089603042257]
╰────

╭─「 Donasi • Non Pulsa 」
│ ° Dana [089603042257]
│ • https://saweria.co/haikalofc
| °Gopay [085363810820] 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
