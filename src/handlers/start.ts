import { Composer, Markup } from 'telegraf';

export const Start = Composer.command('start', async (ctx) => {
    let text =
        `Hi <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name} ${ctx.from.last_name}</a>\n` +
        `ʜᴏɪ, ɪ ᴄᴀɴ ᴘʟᴀʏ ꜱᴏɴɢꜱ ɪɴ ɢʀᴘ ᴠɪᴀ ꜱᴀᴀᴠɴ.\n` +
        `ꜰᴏʀ ᴍᴏʀᴇ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴀɴᴅ ᴀʙᴏᴜᴛ ᴄᴍᴅꜱ ᴛᴀᴘ ᴏɴ ʜᴇʟᴘ ɪᴄᴏɴ <a href="https://t.me/Zaid_Updates/18">𝐇𝐞𝐥𝐩</a>`
    await ctx.replyWithHTML(text, {
        ...Markup.inlineKeyboard([
            [Markup.button.url('ᴀᴅᴅ ᴍᴀɴᴀɢᴇᴍᴇɴᴛ ʙᴏᴛ', 'https://t.me/Zaid2_Robot')]
        ]),
        disable_web_page_preview: true
    })
})
