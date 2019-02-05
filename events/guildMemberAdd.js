module.exports = member => {
	let guild = member.guild;
	member.guild.channels.get('542219313428299801').send(`Please welcome ** ${member.user.username} ** to the server!`);
};
