exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = client.channels.find(channel => channel.name === 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (!user) return message.reply('You must provide a User Resolvable, such as a user name.').catch(console.error);
  if (reason.length < 1) return message.reply('You must provide a reason for the unban.');
  message.guild.unban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'Unbans the user.',
  usage: 'unban [mention] [reason]'
};