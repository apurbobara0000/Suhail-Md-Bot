const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918372076607";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "A",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "oyekenichi",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "oyekenichi",
  ownername:process.env.OWNER_NAME|| "TP'oyekenichi",

  sessionName:process.env.SESSION_ID || "SUHAIL_13_00_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICAzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIxLFxuICAgICAgICA0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICA4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICA3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgODEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MixcbiAgICAgICAgOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzOCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICA3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgNixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFRNUxkQmE1ZjcwWUZFdkh3NEN6S214ZEFoQ0dlRzRLM24xVER1TjNGYlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkstVzFCUGhWUXNxRWdTblI5Y0JTU0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzdjMzcxZjktMGJmYi00MDJiLThhOTMtNDJiZDg5M2EwMTBlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDE5NSxcbiAgICAgIDIzOCxcbiAgICAgIDE1OSxcbiAgICAgIDE3NCxcbiAgICAgIDIwNixcbiAgICAgIDEyMCxcbiAgICAgIDIwLFxuICAgICAgODEsXG4gICAgICAxODgsXG4gICAgICAxODEsXG4gICAgICAxMjgsXG4gICAgICAxNzIsXG4gICAgICAxMzksXG4gICAgICAyMjQsXG4gICAgICAxNTEsXG4gICAgICAyLFxuICAgICAgMzcsXG4gICAgICAxODEsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICAyMjcsXG4gICAgICAxNDcsXG4gICAgICAyOCxcbiAgICAgIDE3MyxcbiAgICAgIDc0LFxuICAgICAgNTUsXG4gICAgICA4NCxcbiAgICAgIDI0MCxcbiAgICAgIDEzMixcbiAgICAgIDI0MCxcbiAgICAgIDI1NSxcbiAgICAgIDIsXG4gICAgICAxMjIsXG4gICAgICAyMjQsXG4gICAgICAyNTMsXG4gICAgICAxNyxcbiAgICAgIDYyLFxuICAgICAgMjA5LFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFBWU0xSjVSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgzNzIwNzY2MDc6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCO8J2QmPCdkIQg8J2QivCdkITwnZCN8J2QiPCdkILwnZCH8J2QiFwiLFxuICAgIFwibGlkXCI6IFwiMjYzMzAzNDkwMjM2NTcyOjc4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09pcHEwOFF3YUdUdVFZWUZ5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVHY5L0g4MDBBNTJveG96Vy82N3FOZHFSYngvRXhITnczRnFneUN0ckloOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4K3ZrczV6U1BYcVB3MmJLaWd3dVNBYkVLenNZQkN6ZUE1ck5kWDcyZ0kxMHEzd1lXcjFxVmQrOEc5RjhLc1c5clVPQTlnYVg3VFNtRFFqNktWYW1DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpUHVBWjNJaHQ3QkR6TDdoYmFNdStPeEJXRndsaHFYN3g4Z1dBWVVYNUhoQ01xS2FndElEREtKdTU2S3oxNWlNdHRxRlltS0RkdmZKdFd6dkx0b1Jndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTgzNzIwNzY2MDc6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNDY1OTk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzRHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNEcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMZHZQNWpJWm04M3Y2TXFvdVVKT0NXQ3Q1d2N0cGtKV0hRSGtDUzhIZnBNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NjM4NDg3MixcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw5XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAyMTY0NTM3ODRcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "APURBO",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
