const { default: makeWASocket, DisconnectReason, useSingleFileAuthState} = require('@adiwajshing/baileys')
const { state, saveState } = useSingleFileAuthState('./deni.json')
const fs = require('fs')
const pino = require('pino')
const connectKeWA = () => {
const deni = makeWASocket({logger:pino({level:'silent'}),printQRInTerminal: true,auth: state,browser: ["DeniBotz", "PC", "3.0"]})

require('./deni.js')
nocache('./deni.js', module => console.log(`"${module}" Updated!`))

deni.ev.on('messages.upsert', async denz => {
if (!denz.messages) return
msg = denz.messages[0]
nomorOwner = ['6287776539842']
nomorDeveloper = ['6287776539842']
deni.sendPresenceUpdate('unavailable')
require("./deni")(deni, denz, msg)})

deni.ev.on('connection.update', (update) => {
const {connection,lastDisconnect} = update
if (connection === 'close') {lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? connectKeWA() : ''}
else if(connection === 'open') 
{
    // console.log(update)
}

deni.ev.on('creds.update', saveState)
// console.log(update)
})}	









function nocache(module, cb = () => { }) {console.log(`Module ${module} detected!`) 
fs.watchFile(require.resolve(module), async () => {await uncache(require.resolve(module))
cb(module)})}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()} catch (e) {reject(e)}})}

connectKeWA()