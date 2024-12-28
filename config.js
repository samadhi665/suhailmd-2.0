const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_21_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc5LFxuICAgICAgICA2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTksXG4gICAgICAgIDksXG4gICAgICAgIDUsXG4gICAgICAgIDM2LFxuICAgICAgICA4OCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDksXG4gICAgICAgIDYzLFxuICAgICAgICA2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDgyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDU2LFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcwLFxuICAgICAgICA3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE2LFxuICAgICAgICAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTit1VFFPdFNWODZkbEJ3aXRrQVVMVVJ1S0drNnUwTTI1Q203TVZEMnRHRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic3pTTWdycjBTaFdBdEpSdFhrSEtlZ1wiLFxuICBcInBob25lSWRcIjogXCIxNzRhNGRjNy01ZTM2LTQ4ZDMtYWY5Yi02MTJhZDA5OTJhYzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgMjQ5LFxuICAgICAgNzIsXG4gICAgICAxMzEsXG4gICAgICAyNTIsXG4gICAgICA2NixcbiAgICAgIDE5OSxcbiAgICAgIDI0LFxuICAgICAgOTgsXG4gICAgICAxNjYsXG4gICAgICAxNzAsXG4gICAgICAxNzcsXG4gICAgICAyMzMsXG4gICAgICA5MyxcbiAgICAgIDEyOCxcbiAgICAgIDEyNSxcbiAgICAgIDQxLFxuICAgICAgNzMsXG4gICAgICAyMzgsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICA5OSxcbiAgICAgIDEyMSxcbiAgICAgIDE2LFxuICAgICAgMTI5LFxuICAgICAgMjIsXG4gICAgICAyMDYsXG4gICAgICAxNjAsXG4gICAgICAyNDMsXG4gICAgICAxNTUsXG4gICAgICA5MixcbiAgICAgIDQ2LFxuICAgICAgNTMsXG4gICAgICAxMDQsXG4gICAgICAxOTQsXG4gICAgICAxODUsXG4gICAgICAxNTksXG4gICAgICAzMCxcbiAgICAgIDQ0LFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRIQTY5UFAzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyMjMwMjA3OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiPCBJICBMIE8gViBFICBZIE8gVT5+XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxufuOAizwgwqQgSyBpIE4gZyAgXl9eICDgtqDgt5Yg4Lan4LeSIOC2uuC3jyDCpCA+44CKflwiLFxuICAgIFwibGlkXCI6IFwiMTY0Mjk2MDA0NzU5NjM1OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkhNZzh3RkVLT0R3YnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLWHlNUjJROGRrZ1kyY1QxN2wrTHRhQWVnand2Wm5vSURPL1VqQWxSOFRnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkQ1aDhpV1pKTG9rWHRVN0MreVhLZEhuTDFSZ3Fpc1BIWEVTeW1IOFRGRURMSHFZdlY1c2dzcXE3alM0SnNTaDNlNllzQ2psMWdVbTZPSW0yWHVHSUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIksraElmSXBucm9Kenhsb1Z4NUxleFpDSXpJQ3RYdDlRUFd6WUs4Q3VQTVVxd1RzTHdyb0hCVWFRSm5XZkdpQm9HTi95L0FUTW5JVWhZNVMyTWczN0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzIyMzAyMDc5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTQxMDA4OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
