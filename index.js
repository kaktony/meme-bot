

const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});



const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require('ytdl-core');
const prefix = "f";


client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [`PREFIX fhelp`,];
  setInterval(function () {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);

});





client.on('message', (message) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
  if (!message.guild || !message.member || message.author.bot)
    return;
  if (message.content.toLowerCase().startsWith(`${prefix}botinvite`)) {
    const args = message.content.split(' ');
    if (!args[1])
      return message.channel.send('You need to send the id/tag/username/nickname/mention the bot!');
    args.shift();
    const searchContent = args.join(' ');
    const member = ((_c = (_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.members) === null || _b === void 0 ? void 0 : _b.cache) === null || _c === void 0 ? void 0 : _c.find((mem) => (mem === null || mem === void 0 ? void 0 : mem.id) === searchContent)) ||
      ((_f = (_e = (_d = message.guild) === null || _d === void 0 ? void 0 : _d.members) === null || _e === void 0 ? void 0 : _e.cache) === null || _f === void 0 ? void 0 : _f.find((mem) => {
        var _a, _b;
        return ((_b = (_a = mem === null || mem === void 0 ? void 0 : mem.user) === null || _a === void 0 ? void 0 : _a.username) === null || _b === void 0 ? void 0 : _b.toLowerCase()) ===
          searchContent.toLowerCase();
      })) ||
      ((_j = (_h = (_g = message.guild) === null || _g === void 0 ? void 0 : _g.members) === null || _h === void 0 ? void 0 : _h.cache) === null || _j === void 0 ? void 0 : _j.find((mem) => {
        var _a, _b;
        return ((_b = (_a = mem === null || mem === void 0 ? void 0 : mem.user) === null || _a === void 0 ? void 0 : _a.tag) === null || _b === void 0 ? void 0 : _b.toLowerCase()) ===
          searchContent.toLowerCase();
      })) ||
      ((_m = (_l = (_k = message.guild) === null || _k === void 0 ? void 0 : _k.members) === null || _l === void 0 ? void 0 : _l.cache) === null || _m === void 0 ? void 0 : _m.find((mem) => {
        var _a;
        return ((_a = mem === null || mem === void 0 ? void 0 : mem.nickname) === null || _a === void 0 ? void 0 : _a.toLowerCase()) ===
          searchContent.toLowerCase();
      })) ||
      ((_o = message.mentions.members) === null || _o === void 0 ? void 0 : _o.first());
    if (!member)
      return message.channel.send("Couldn't find that bot!");
    if (!((_p = member.user) === null || _p === void 0 ? void 0 : _p.bot))
      return message.channel.send("That's not a bot!");
    message.channel
      .send(`Here's the bot link!\nLink: https://discord.com/oauth2/authorize?client_id=${member.id}&scope=bot&permissions=8
`);
  }
});


client.on('message', message => {
  if (message.content == prefix + 'link') {
    let embed = new Discord.MessageEmbed()
      .setColor(`#000000`)
      .setFooter("> TONY BOT")
      .setTitle(`INVITE KA `)
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
    message.channel.send(embed)
  }
});



client.on('message', message => {
  if (message.content == prefix + 'link') {
    let embed = new Discord.MessageEmbed()
      .setColor(`#000000`)
      .setFooter("♛ TONY BOT")
      .setTitle(`♛ دونیــــای کــــۆمـــیدیا`)
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
    message.channel.send(embed)
  }
});










client.on('message', msg => {
  if (msg.content === prefix + "bot") {
    const embed = new Discord.MessageEmbed()
      .setColor("#000000")
      .setTitle(` ${client.user.username} `)
      .addField('``SERVERS``', ` ${client.guilds.cache.size} `, true)
      .addField('``CHANNELS``', ` ${client.channels.cache.size} `, true)
      .addField('``USERS``', ` ${client.users.cache.size} `, true)
      .addField('`` BY TONY ``', `<@669072128922091541>`, true)
    msg.channel.send(embed);
  }
});









client.on('message', message => {
  if (message.content.startsWith(prefix + "help")) {
    var embed = new Discord.MessageEmbed()
      .setTitle(`MEME BOT`)
      .setColor(`#000000`)
      .setImage("https://cdn.discordapp.com/avatars/770568385128824832/be24227fe56c88485416ee459fc2c32c.png?size=4096")
      .setThumbnail("https://cdn.discordapp.com/avatars/770568385128824832/be24227fe56c88485416ee459fc2c32c.png?size=4096")
      .setFooter(`》EDIT TONY BOT`, `https://cdn.discordapp.com/avatars/770568385128824832/be24227fe56c88485416ee459fc2c32c.png?size=4096`)
      .setDescription(`
      **Help Comand** 
\`f3\`, \`f4\`, \`f5\`,
\`f6\`, \`f7\`

\`f8\`, \`f9\`, \`f10\`,
\`f11\`, \`f12\`, \`f13\`


\`f14\`, \`f15\`, \`f16\`,
\`f17\`, \`f18\`


\`f19\`, \`f20\`, \`f21\`,
\`f22\`, \`f23\`, \`f24\`,
\`f25\`

**INVITE**
\`flink\`, \`fbot\`,

**زانیاری لەسەر بۆتەکە**

f3   NEXT   f25

★✯★✯★✯★✯★✯★✯
flink 👉  بــۆ ئينــڤايت کردنی بــۆتــە کــە

★✯★✯★✯★✯★✯★✯

لە ئێستادا 25 ساوندمان تێکەڵ بەیەک کردووە چاوەڕێی شتی زیاتر بن


سەروو 18 ساڵ تکایە 🔞




     


    `)
    return message.channel.send(embed);
  }
});











function commandIs(str, msg) {
  return msg.content.toLowerCase().startsWith('*' + str);
}

function pluck(array) {
  return array.map(function (item) { return item['name']; });
}

function hasRole(mem, role) {
  if (pluck(mem.roles).includes(role)) {
    return true;
  } else {
    return false;
  }

}


var servers = {};

var q3 = "f3"

var q4 = "f4"

var q5 = "f5"

var q6 = "f6"

var q7 = "f7"

var q8 = "f8"

var q9 = "f9"

var q10 = "f10"

var q11 = "f11"

var q12 = "f12"

var q13 = "f13"

var q14 = "f14"

var q15 = "f15"

var q16 = "f16"

var q17 = "f17"

var q18 = "f18"

var q19 = "f19"

var q20 = "f20"

var q21 = "f21"

var q22 = "f22"

var q23 = "f23"

var q24 = "f24"

var q25 = "f25"


function play(connection, message) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.play(yt(server.queue[0], { fliter: "audionly" }));

  server.queue.shift();

  server.dispatcher.on("end", function () {
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();
  });

}
client.on("ready", () => {
  console.log(`funny bot ${client.guilds.size} servers `)
});


client.on('message', async message => {


  if (message.content === q3) {
    message.react('🔊')
    message.reply(`يه كه م جار ئاو خرى ئه كه ى `);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــە
**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtube.com/shorts/fj87iF7N7Y4?feature=share ', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q4) {
    message.react('🔊')
    message.reply(`دە يان کوژن دە يان گيڕن `);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.rl(`جــۆيــن ڤـــۆيـــس بـــە**ice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtube.com/shorts/l252kmMfkF4?feature=share', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }
  if (message.content === q5) {
    message.react('🔊')
    message.reply(`دە ست کردە وە بـە لورە لور`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtube.com/shorts/bCRjRue84Zk?feature=share', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }
  if (message.content === q6) {
    message.react('🔊')
    message.reply(`هــە ستـە دە ی`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtube.com/shorts/rLKT2H0jOdY?feature=share ', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }
  if (message.content === q7) {
    message.react('🔊')
    message.reply(`کويرايت دايە`);

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtube.com/shorts/0CgLsf26JGg?feature=share ', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q8) {
    message.react('🔊')
    message.reply(`ئـە مە f2 ئە سڵيە `);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtube.com/shorts/n-47_T5ll10?feature=share', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q9) {
    message.react('🔊')
    message.reply(`وەی لەو قنانە`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/o3hZMSfQY1s', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q10) {
    message.react('🔊')
    message.reply(`ئـە و بـە م ڕۆژيک`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/CZX-fuPAaBY', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q11) {
    message.react('🔊')
    message.reply(`کيمان لە گە ڵە`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/oknoR8Pud3w', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q12) {
    message.react('🔊')
    message.reply(`خۆشترين مۆسيقا`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.replvoice ** (`جــۆيــن ڤـــۆيـــس بـــەvoice`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/jmkVXm-KdH8', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q13) {
    message.react('🔊')
    message.reply(`قسەی تازەی خدر بێگلاسی مەجنەعین `);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/ehiD91o8DRI', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q14) {
    message.react('🔊')
    message.reply(`گوڵە تخوا بنوسە دەرد`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/t8Xz01o67kg', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q15) {
    message.react('🔊')
    message.reply(`پێکەنی قۆر دەکات`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/RWgCVg0XarI', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q16) {
    message.react('🔊')
    message.reply(`شـپرزە`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/OJIvpfmcrSc', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q17) {
    message.react('🔊')
    message.reply(`بــاشم سوپــاس تۆ چۆنی`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtube.com/shorts/bwaO6J4CTwQ?feature=share', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }
///lerawa dam nanawa
  if (message.content === q18) {
    message.react('🔊')
    message.reply(`ده لايك كه ن شير كه ن بــگـاتە هــە موو دنيـا`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtube.com/shorts/Ns0S-8fj4Gk?feature=share', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q19) {
    message.react('🔊')
    message.reply(`وتم با وتى نا وتم با وتى نا`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtube.com/shorts/HOVH_2LGfkw?feature=share', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q20) {
    message.react('🔊')
    message.reply(`هه سته حيز`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtube.com/shorts/uxFUS1f_ypg?feature=share', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q21) {
    message.react('🔊')
    message.reply(`ئــە گـە ر داوات  ليبکە م`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtube.com/shorts/GSFpPsyJaCk?feature=share', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q22) {
    message.react('🔊')
    message.reply(`مناڵی ئيسـە بـۆ بامێ ناخوا`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtube.com/shorts/dUrqgJ6z6BY?feature=share', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q23) {
    message.react('🔊')
    message.reply(`بـە ڕوە ڵا حە ز ناکە م ڕوو بدا`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=czXuMjLnbg8', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q24) {
    message.react('🔊')
    message.reply(`ئــە م خويڕيە بـە دزيــە وە ئــە م کارە ی کردوە`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=zkJzrvXSV-8', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q25) {
    message.react('🔊')
    message.reply(`بــە خوا ســاقــتی کوڕم`);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=zrOZTTvi_Xw', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }



  if (message.content === "-stop") {
    var servers = {};

    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

  }

  if (message.content === "server2quran") {
    message.channel.send(` QuranBot
شكرا لإستعمال البوت | Thanks You
 `)
  }
})








client.login("");
