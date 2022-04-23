
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
exports.run = async (client, message, args) => { 

  let prefix = ayarlar.prefix;
  const embed = new Discord.MessageEmbed()
  .setTitle("LetMoss Network Kurallar")
  .addField(`Kırıcı olma!`,`Bir kimseye onur, şeref ve saygınlığını rencide edebilecek nitelikte yakıştırmalarda bulunma.`)
  .addField(`Hoşgörülü Ol`,`Siyasi, dini görüşlere hakaret etme ve aşağılayıcı kelimeler sarf etme!`)
  .addField(`Rahatsızlık Verme`,`Sohbetin akışını sabote edecek şekilde davranışlardan kaçın (spam/flood)`)
  .addField(`Reklam Yapma`,`LethalCraft Minecraft sunucusu, LethalCraft Discord sunucusu dışındaki her türlü ip, davet linki paylaşımından kaçın.`)
  .addField(`Saygılı Ol`,`Sesli sohbet odalarında yüksek sesle konuşmak, rahatsızlık verecek davranışlarda bulunmak (Troll), küfür etmek, kavga etmek ceza sebebidir. Odalara durmadan girip çıkmak da dahil.`)
  .addField(`Destek değil, Dost iste `,`Sohbet odalarından oyun içi destek istememelisin. Destek almak için #📞・destek-odası ziyaret et.`)
  .addField(`Odaları Düzenli Kullan `,`Sohbet kanallarını amacı dışında kullanma, her odanın bir açılma amacı var!`)
  .addField(`Link Paylaşımı Yapma`,`Sohbet kanallarında Link paylaşmak yasak. Link paylaşımlarını çok sevmeyiz, o yüzden yapma.`)
  .addField(`Etiketlediğin Rollere Dikkat Et`,`Yetkilileri, Özel Misafirleri ve Youtuberları etiketleme. Kimse sağdan çıkan aralıksız bildirimleri sevmez.`)
  .addField(`Kaliteli Müzikleri Severiz`,`Müzik odalarımızda açacağın müziklerde seçici ol. Küfür ve Troll içermediğine dikkat et.`)
  .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL())

  .setThumbnail(client.user.avatarURL())
message.channel.send(embed)
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['social','']
  }
  exports.help = {
    name: 'kurallar'
  }