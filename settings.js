// S C R I P T  O R I  B Y  KIZH MD 🔭
// Credits, jangan dihapus atau diubah!

// - - THANKS TO ALL

//[!] Jangan Lupa Ganti Ownernya

const fs = require("fs")
const chalk = require("chalk")

// GLOBAL OWNER //

global.owner = ['6281400346604'] //GANTI JADI NO MU
global.namaowner = "Fadlan" // GANTI JADI NAMA MU
global.namebot = "IZUMI MD" // GANT JADI NAMA BOT MU
global.sessionName = 'sessions' // JANGAN DI UBAH
global.prefa = ['','!','.',',','🐤','🗿'] // JANGAN DI UBAH KALAU GAK MAU EROR

// WATERMARK //

global.v = 'IZUMI MD' // GANTI AJA
global.wm = '© YT | YASSxOFC' // GANTI AJA
global.packname = ""
global.author = "IZUMI BOT" // GANTI AJA
global.author2 = "IZUMI" // GANTI SAJA
global.footer = 'IZUMI MD' // GANTI AJA

// FOTO MENU //

global.thumbailUrl = "https://telegra.ph/file/d98b4738e971c3c88d062.jpg" // GANTI AJA KALAU MAU GANTI LOGO MENU NYA
global.url = "https://chat.whatsapp.com/G1JH8Q2AjdVFaptNYBHo9i" // GANTI SAJA

// PAYMENT //
global.Qris = '-' //GANTI JADI QRIS MU
global.dana = '081387796894' // GANTI NO LU AJA
global.gopay = '_'  // GANTI NO LU AJA
global.scan = 'SCAN QRIS ALL PAY DI ATAS'

// APIKEY

global.skizoapi = 'KiiCode'
global.lol = 'GataDios'

// GLOBAL MESS //

global.mess = {
    success: 'done boskuu',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Jadikan admin terlebih dahulu kak',
    owner: 'Hanya Owner kak',
    group: 'harus di dalam grub kak',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus bot',
    wait: 'sabar',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'khusus premium" mau prem? chat owner',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
//BATAS
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})