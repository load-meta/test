const Config = require("../config");
const fs = require("fs");
const {
  Insta,
  pinterest,
  adultvid,
  hentai,
  tlang,
  botpic,
  language,
  getString,
  wikimedia,
  toAudio,
  toPTT,
  toVideo,
  sync,
  syncgit,
  ffmpeg,
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  fancy,
  randomfancy,
  ringtone,
  styletext,
  isAdmin,
  isBotAdmin,
  createUrl,
  mediafireDl,
  mediafire,
  dare,
  truth,
  random_question,
  amount_of_questions
} = require("./scraper");
const acrcloud = require(__dirname + "/class/init");
const {
  unixTimestampSecond,
  generateMessageTag,
  processTime,
  getBuffer,
  smdBuffer,
  fetchJson,
  smdJson,
  runtime,
  clockString,
  sleep,
  isUrl,
  getTime,
  formatDate,
  formatp,
  jsonformat,
  logic,
  generateProfilePicture,
  bytesToSize,
  getSizeMedia,
  parseMention,
  GIFBufferToVideoBuffer,
  smsg,
  callsg
} = require("./serialized");
const {
  listall,
  strikeThrough,
  wingdings,
  vaporwave,
  typewriter,
  analucia,
  tildeStrikeThrough,
  underline,
  doubleUnderline,
  slashThrough,
  sparrow,
  heartsBetween,
  arrowBelow,
  crossAboveBelow,
  creepify,
  bubbles,
  mirror,
  squares,
  roundsquares,
  flip,
  tiny,
  createMap,
  serif_I,
  manga,
  ladybug,
  runes,
  serif_B,
  serif_BI,
  fancy1,
  fancy2,
  fancy3,
  fancy4,
  fancy5,
  fancy6,
  fancy7,
  fancy8,
  fancy9,
  fancy10,
  fancy11,
  fancy12,
  fancy13,
  fancy14,
  fancy15,
  fancy16,
  fancy17,
  fancy18,
  fancy19,
  fancy20,
  fancy21,
  fancy22,
  fancy23,
  fancy24,
  fancy25,
  fancy26,
  fancy27,
  fancy28,
  fancy29,
  fancy30,
  fancy31,
  fancy32,
  fancy33,
  randomStyle
} = require("./stylish-font");
const {
  sck1
} = require(__dirname + "/database/user");
const {
  sck
} = require(__dirname + "/database/group");
const {
  alive
} = require(__dirname + "/database/alive");
const {
  pg,
  dbs,
  groupdb,
  userdb,
  alivedb,
  bot_
} = require(__dirname + "/schemes");
const {
  cmd,
  smd,
  commands
} = require(__dirname + "/plugins");
const {
  sendAnimeReaction,
  yt,
  sendGImages,
  AudioToBlackVideo,
  textToLogoGenerator,
  photoEditor,
  updateProfilePicture,
  randomeFunfacts,
  getRandom,
  generateSticker,
  forwardMessage,
  plugins,
  audioEditor,
  send,
  react,
  note,
  sendWelcome,
  aitts
} = require("./Asta.js");

module.exports = {
  // Imported from Asta.js
  yt,
  plugins,
  forwardMessage,
  updateProfilePicture,
  sendAnimeReaction,
  sendGImages,
  textToLogoGenerator,
  photoEditor,
  randomeFunfacts,
  AudioToBlackVideo,
  getRandom,
  generateSticker,
  audioEditor,
  send,
  react,
  note,
  sendWelcome,
  aitts,
  
  // Database and schemes
  pg,
  dbs,
  bot_,
  alive,
  sck,
  smd,
  commands,
  sck1,
  
  // Scraper functions
  Insta,
  pinterest,
  adultvid,
  hentai,
  tlang,
  botpic,
  language,
  getString,
  wikimedia,
  toAudio,
  toPTT,
  toVideo,
  sync,
  syncgit,
  ffmpeg,
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  fancy,
  randomfancy,
  ringtone,
  styletext,
  isAdmin,
  isBotAdmin,
  createUrl,
  mediafireDl,
  mediafire,
  dare,
  truth,
  random_question,
  amount_of_questions,
  
  // Serialized functions
  unixTimestampSecond,
  generateMessageTag,
  processTime,
  getBuffer,
  smdBuffer,
  fetchJson,
  smdJson,
  runtime,
  clockString,
  sleep,
  isUrl,
  getTime,
  formatDate,
  formatp,
  jsonformat,
  logic,
  generateProfilePicture,
  bytesToSize,
  getSizeMedia,
  parseMention,
  GIFBufferToVideoBuffer,
  smsg,
  callsg,
  
  // Font styling functions
  listall,
  strikeThrough,
  wingdings,
  vaporwave,
  typewriter,
  analucia,
  tildeStrikeThrough,
  underline,
  doubleUnderline,
  slashThrough,
  sparrow,
  heartsBetween,
  arrowBelow,
  crossAboveBelow,
  creepify,
  bubbles,
  mirror,
  squares,
  roundsquares,
  flip,
  tiny,
  createMap,
  serif_I,
  manga,
  ladybug,
  runes,
  serif_B,
  serif_BI,
  fancy1,
  fancy2,
  fancy3,
  fancy4,
  fancy5,
  fancy6,
  fancy7,
  fancy8,
  fancy9,
  fancy10,
  fancy11,
  fancy12,
  fancy13,
  fancy14,
  fancy15,
  fancy16,
  fancy17,
  fancy18,
  fancy19,
  fancy20,
  fancy21,
  fancy22,
  fancy23,
  fancy24,
  fancy25,
  fancy26,
  fancy27,
  fancy28,
  fancy29,
  fancy30,
  fancy31,
  fancy32,
  fancy33,
  randomStyle,
  
  // Command and database utilities
  addCommand: cmd,
  groupdb,
  userdb,
  alivedb,
  
  // Configuration
  prefix: Config.HANDLERS.includes("null") ? "" : Config.HANDLERS[0],
  Config,
  setting: Config,
  
  // Utility functions
  stor: async () => {
    return await JSON.parse(fs.readFileSync(__dirname + "/store.json", "utf8"));
  },
  
  fancytext: (text, styleIndex) => {
    styleIndex = styleIndex - 1;
    return listall(text)[styleIndex];
  },
  
  parsedJid: (text = "") => {
    return text.match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g) || [];
  },
  
  getAdmin: async (client, message) => {
    const groupMetadata = await client.groupMetadata(message.chat);
    const adminList = [];
    
    for (let participant of groupMetadata.participants) {
      if (participant.admin == null) {
        continue;
      }
      adminList.push(participant.id);
    }
    
    return adminList;
  },
  
  isGroup: (jid) => {
    return jid.endsWith("@g.us");
  },
  
  parseurl: (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, "gi"));
  },
  
  isInstaUrl: (url) => {
    return /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/gim.test(url);
  },
  
  isNumber: function() {
    const parsedNumber = parseInt(this);
    return typeof parsedNumber === "number" && !isNaN(parsedNumber);
  },
  
  shazam: async function(audioBuffer) {
    const acrClient = new acrcloud({
      host: "identify-eu-west-1.acrcloud.com",
      endpoint: "/v1/identify",
      signature_version: "1",
      data_type: "audio",
      secure: true,
      access_key: "c816ad50a2bd6282e07b90447d93c38c",
      access_secret: "ZpYSwmCFpRovcSQBCFCe1KArX7xt8DTkYx2XKiIP"
    });
    
    const identifyResult = await acrClient.identify(audioBuffer);
    const { code: statusCode, msg: statusMessage } = identifyResult.status;
    
    if (statusCode !== 0) {
      return statusMessage;
    }
    
    const {
      title,
      artists,
      album,
      genres,
      release_date,
      external_metadata
    } = identifyResult.metadata.music[0];
    
    const { youtube, spotify } = external_metadata;
    
    return {
      status: 200,
      title,
      artists: artists !== undefined ? artists.map(artist => artist.name).join(", ") : "",
      genres: genres !== undefined ? genres.map(genre => genre.name).join(", ") : "",
      release_date,
      album: album.name || "",
      data: identifyResult
    };
  }
};