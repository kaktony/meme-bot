

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


tony.on("ready", () => {
  console.log(
    `Online In Servers : ${tony.guilds.size} | Users : ${tony.users.size}`
  );
  let statuses = [`PREFIX fhelp`,];
  setInterval(function () {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
   tony.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);

});





tony.on('message', (message) => {
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


tony.on('message', message => {
  if (message.content == prefix + 'link') {
    let embed = new Discord.MessageEmbed()
      .setColor(`#000000`)
      .setFooter("> TONY BOT")
      .setTitle(`INVITE KA `)
      .setURL(``)
    message.channel.send(embed)
  }
});



tony.on('message', message => {
  if (message.content == prefix + 'link') {
    let embed = new Discord.MessageEmbed()
      .setColor(`#000000`)
      .setFooter("♛ TONY BOT")
      .setTitle(`♛ دونیــــای کــــۆمـــیدیا`)
      .setURL(``)
    message.channel.send(embed)
  }
});










tony.on('message', msg => {
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









tony.on('message', message => {
  if (message.content.startsWith(prefix + "help")) {
    var embed = new Discord.MessageEmbed()
      .setTitle(`MEME BOT`)
      .setColor(`#000000`)
      .setImage("")
      .setThumbnail("")
      .setFooter(`》 TONY BOT`, ``)
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
tony.on("ready", () => {
  console.log(`funny bot ${client.guilds.size} servers `)
});


tony.on('message', async message => {


  if (message.content === q3) {
    message.react('🔊')
    message.reply(` `);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــە
**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt(' ', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q4) {
    message.react('🔊')
    message.reply(` `);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.rl(`جــۆيــن ڤـــۆيـــس بـــە**ice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }
  if (message.content === q5) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }
  if (message.content === q6) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt(' ', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }
  if (message.content === q7) {
    message.react('🔊')
    message.reply(``);

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt(' ', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q8) {
    message.react('🔊')
    message.reply(` `);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q9) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q10) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q11) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q12) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.replvoice ** (`جــۆيــن ڤـــۆيـــس بـــەvoice`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q13) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q14) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q15) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q16) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q17) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }
///lerawa dam nanawa
  if (message.content === q18) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q19) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q20) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q21) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q22) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q23) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q24) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }

  if (message.content === q25) {
    message.react('🔊')
    message.reply(``);
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.repl(`جــۆيــن ڤـــۆيـــس بـــەvoice**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', { audioonly: true });
        const dispatcher = connnection.play(stream);
      });
  }



  if (message.content === "fstop") {
    var servers = {};

    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

  }

  if (message.content === "server2quran") {
    message.channel.send(` meme bot
 | Thanks You
 `)
  }
})








tony.login("");
