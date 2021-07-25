module.exports = {
	name: 'pause',
	description: 'Пріостановить текущую пѣсню!',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('Вы должны быть въ голосовомъ каналѣ, чтобы пріостановить музыку!');
		if (!serverQueue) return message.channel.send('There is no song that I could pause!');
		if (serverQueue.connection.dispatcher.paused) return message.channel.send('Пѣсня уже пріостановлена!');
		serverQueue.connection.dispatcher.pause();
	},
};
