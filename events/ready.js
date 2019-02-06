const chalk = require('chalk');
module.exports = client => {
	client.user.setUsername('Family')
	client.user.setAvatar('https://banner2.kisspng.com/20180425/zye/kisspng-computer-icons-avatar-user-login-5ae149b20c8348.1680096815247139060513.jpg')
	client.user.setPresence({ game: { name: 'with my d1ck' }, status: 'online' })
	.then(console.log).catch(console.error);
	console.log(chalk.bgGreen.black('Discord bot is now online.'));
}
