const { Telegraf } = require('telegraf');
const bot = new Telegraf('YOUR_BOT_API_TOKEN');

bot.start((ctx) => {
    ctx.reply('Welcome to Mini App Store! Click the button below to view apps.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'View Apps', web_app: { url: 'https://your-web-app-url.com' } }]
            ]
        }
    });
});

bot.launch();
