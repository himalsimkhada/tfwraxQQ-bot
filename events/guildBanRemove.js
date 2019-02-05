module.exports = (guild, user) => {
  guild.channels.get('542219313428299801').send('**' + user.username + '** was just unbanned!');
};
