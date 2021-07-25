const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "addmoney",
        aliases: ["am"],
        category: "economy",
        description: "Добавляетъ деньги пользователю",
        usage: "[ mention | ID]",
        accessableby: "Administrator, Owner"
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("❌ У васъ нѣтъ разрѣшенія на добавленіе денегъ!");
        if (!args[0]) return message.channel.send("**Пожалуйста, введите пользователя!**")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Введите дѣйствительнаго пользователя!**")
        if (!args[1]) return message.channel.send("**Пожалуйста, введите сумму!**")
        if (isNaN(args[1])) return message.channel.send(`**❌ Ваша сумма - не число!**`);
        if (args[0] > 10000) return message.channel.send("**Невозможно добавить такую ​​сумму!**")
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`✅ Добавлено ${args[1]} денег\n\nНовый баланс: ${bal}`);
        message.channel.send(moneyEmbed)

    }
}