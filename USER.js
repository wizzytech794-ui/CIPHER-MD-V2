const pairNumber = "0742522862";

const accNumber = "0557488116"

const name = ""

const bankName = "MTN MOMO"

const any = ""

const emoji = '🗿'

module.exports = { pairNumber, accNumber, bankName, name, any, emoji };

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
