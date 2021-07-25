const fs = require('fs')

module.exports = {
	name: 'music_help',
	description: 'Списокъ всѣхъ доступныхъ командъ.',
	execute(message) {
		let str = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str += `Название: ${command.name}, Описание: ${command.description} \n`;
		}

		message.channel.send(str);
	},
};
