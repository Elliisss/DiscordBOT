module.exports = {
	name: 'nowplaying',
	description: 'Получите пѣсню, которая играетъ.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Ничего не играетъ.');
		return message.channel.send(`Сейчас играетъ: ${serverQueue.songs[0].title}`);
	},
};