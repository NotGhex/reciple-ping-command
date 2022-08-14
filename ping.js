const reciple = require('reciple');

module.exports.Ping = class {
    constructor() {
        this.versions = '^5.0.0';
        this.commands = [];
    }

    onStart() {
        this.commands = [
            new reciple.MessageCommandBuilder()
                .setName('ping')
                .setDescription('Pong 🏓')
                .setExecute(command => command.message.reply('Pong 🏓')),
            new reciple.SlashCommandBuilder()
                .setName('ping')
                .setDescription('Pong 🏓')
                .setExecute(command => command.interaction.reply('Pong 🏓'))
        ];

        return true;
    }
}

module.exports.default = new module.exports.Ping();