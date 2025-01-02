const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU246qSBT9lUm9yhm5Cpp0MqiIiBcU8NKT81BAAYVysapQsdP/PsHuTncmOWd6eKpUFWuv2mvt9QKKElNkowYMXkBF8AUy1C5ZUyEwAMM6jhEBHIggg2AA4AiNt0ta2fxcC1GQyTxfyBoplYBJF5EI0Z3OVpNxQk7yE3jlQFUHJxz+BrDnOyrdP89yT3aC/klV7s6Gzp17mdXFmArSceeb1yKpwm0L2CJCTHCRGFWKckTgyUaNAzH5Hv2RsVrlpjUxSO/43Iu2z86+l3kZXq+cPguNy3O9zQ+bpZGcrO/RvzN5Lg8NTChFYbyphHHhN7OJaE4862yF2VIdrVb9c5UV/Bt9ipMCRVaECoZZ8+2+7+z7WdylVHsWLnDfF2auuJtG5SwuxW2aWWXW9wJJpvTmH75HnO42kQ6bTRb1Zgt5V2z0yqI+jvxohcWykK57ublLvlcIi6/EHfLhleP/6bs+d28BmZFdR1yX3XmmouPC344d4zDaDvfmutOh9bATisxYfI++G4je0HGM02V6cK2Mt3h0NydidT1NL/h4ELRNt97zdbe6GZ/0IavJ71iaB++GDH9oTfnhPpsqxXyNn8k0tnud9d22JXzZdrvuPvAnQ188yHFBQn9plbWaKvvQ7mtTc16tGy23gquaKunt0O24yfrp8aIjaqwIDIRXDhCUYMoIZLgs2j1RFjkAo4uLQoLYo72gl3apHTv2KFGPrq/xsyvhiSJYVnhWpmh+thcivYoSlbvlE+BARcoQUYqiKaasJM0CUQoTRMHg758cKNCNvQnXlpMEDsSYUOYXdXUqYfSh6schDMOyLpjbFOGoXSACBvznNmIMFwlt+1gXkIQpvqBRChkFgxieKHrlQIQuOEQtHtDHPTjK1sF6IY4bz7vdF3N4TlrKaVm8XeGlqB/1guhHGMHoh4zk6Icm9KMfmqJocQ+FEoIC4AB+n5n2n19KmKwW0+u1hxUzJc3BXYTmZnXMq9VkUj5keOs9IigCA0ZqxIEAhse68sojKn6D6/fN9NzJpcTPPZoOrekquW+GoXIg8hfcN03B4OUzp0Zl1OLJU3U3dB0FcCB/WBC3LxcVWRV6stxXlP6gJ/1F/7y2jYRV9WeBGOBAAdvbwMEFK8s/bJy3td6FaFEixCA+0TbZ5tOraoWGYXmhSKhp6otEHyU6+BTuYwLeHNaNekdbtLtZWZZXwT4sjNl0UuNkaK6qxdXNi+1SukMtDYWHw/4NAgbgmMer8ditLhK8d/TDEtdGx5H0/kjSCXXY1Q2lc2rhtcoUVR5VdGeq+uQei2u8E8XuMWDjw5xXl77nenPSaPerYmgj/amt9magr8Wi5VnWKjU7brp4jYRNajaRFQVa+Wze93xud6xgd9T57bAiq0kNXRdPq/5V5ROnLOXe6RzEa7mwl8q1K+WGpmbjsYwT/W02H9lwes9k/Jial3e7xRg9Iu5diP8U7NP5/Cv3BeM9NH/hrmEsoWrE8EXu2fZi6ebj4WhzC8pS32Rnb2FUleBFmnix9ksIXl9/cqA6QRaXJG+TPA8g4MAJUqZ/Tq6Hc0QZzCswEFRJ0SSBV/ocyBu9qlwG2cfAA739LGMGXv8Bu1m+oQwIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Pintoo",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Pintoo",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

