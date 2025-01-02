const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU2ZKiSBT9lYl81eoCREAjKmIUEXBBEXGb6IeUTCRlSZYExQr/vYOyKqoepntq3jJyOffkOefeV5BQUuAprkH/FaQ5qSDDzZLVKQZ9MCx9H+egDRBkEPQBXurC9chLG7sq2KjgKT6OqGy6O1IX21DwSdoVVmFPH473L+DeBml5jIj3B8AsdWezbIngaLeeDSE+ZBfBHFe2xF+3I+5qpUlXEyxEjMh9AfcGEZKcJCctDXCMcxhNcb2EJP8e/XqA+VUllXM4PE9OtgsVRzcUbspDqIgLYT0K4m40MMZOPP8e/UtocMUycc/I5FrbCpb5SXFd10qv9FC1NHmZG6anKpfySh/0C3JKMDIRThhh9bd1P1lWdDBmsLtrmcI+2ciJvOtMyCxWk2gYbN2ETOECLdhsQ79HfDgMNa1l+uvZiCzX8bMtWwXpIcu2UIioT9Zcr9AXwko0Ll+JL/OPrIT/R/dwuQoSVGheOKjtRWsSlZ0NGy8mQ2OMlPWgdV1uI3hlg1Zofo/+M96o+3CKElXb27nrlHko6Jcs1ivD8o2xuJx0A0cRx7Jrf9KHrMz/xHLdOuk9V9n30oTk+ZLbbuj2ptDKmNgrWBvw7IzDbMTtQtzhsz2LBDL3W7Y1gZm9w4uW6I9XZIfrm92VFH3kprXub4f2y9uPQlybCPT5exvk+EQKlkNGaNLsCUIbQFQ52Msxe1MXeJGpCiWhunuOnOehfEhcvaovB6+4OttTMFJWZw+V/CZG5gtogzSnHi4KjAxSMJrXc1wU8IQL0P/nZxsk+MoevjXVOkIb+CQvmJuUaUQh+jD14xB6Hi0T5tSJpzYLnIM+97mNGSPJqWhkLBOYewGpsBpAVoC+D6MC39sA4Yp4uMEDM9lXzECZ2RMnRhEVFgW3Z4OGckCTxxXIyX5HFrkn7yjBJxHJ+AkiDz3xXVFUsCJIEpJAG5D3lmne/NZBs7Uyk+xoCueDkYcVEYPnqrO+SJr/aIuH9DjHCPRZXuI2OEIvLNM1DXHyB9wdnqmb/cU6ur1DiFqKKmS0fiaVNhS/4D4sBf3XzzGlUtTgqZbV69mzEWiD+C2BpPm50BVlXhLFXrfb60v838WPSyMkTNMfCWagDRLY3AZLkjBK/5qSuKn1bkSDgjCDJCqaAjPjIpueps19UTgWuj7QTgP11Cj9YdxHAzwS9oykcCpMn8+U0gs/3c+1iTEuyWmoL9L5xYmTjdW5QSXwePryLyCgD5SzKU+zbDPO3B0t0sOBQxyznBaU05nLm+iyQvNSk3ujqO51uXpX1dQ4lYd9sc70m3k87CMpmFZGa3XLZtP9pOwux2R4eWmqPQL0tRhbCBtxosOdsTZHlnd0pIThsbKoR2nOReXt5FXIzrQgUOf6bbWKbj6ElThR+aRyjmN71c1CMTareUsZ7LxSxKbj0uHg0ZpvoyF6H8nkrWte3+PmE/w24d6N+E/DPpPP3dtfMN5n5u9msd/BqcpIJUrT6dxy4tFQXV2PlA5W52w919KUXyNFqMydBcH9/rMN0ggyn+Yx6IMiPkLQBhEs2OCzc9ckxgWDcQr6vNzpKrzSEcT7L4xNpV7uBwAA',
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

