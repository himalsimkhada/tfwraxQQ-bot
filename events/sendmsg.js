module.exports = client => {
channel.get('542059616360595456').send('My Message')
 .then(message => console.log(`Sent message: ${message.content}`))
 .catch(console.error);
}
