const { Telegraf } = require('telegraf');
const bot = new Telegraf('7277101188:AAHki3jY1q6oXIMaIekdtUvOTOcgpP20RH0');

bot.start((ctx) => {
    ctx.reply('Welcome to Mini App Store! Click the button below to view apps.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'View Apps', web_app: { url: 'https://kg07nurislamdldev.github.io/Telegram_Mini_Apps' } }]
            ]
        }
    });
});

bot.launch();
