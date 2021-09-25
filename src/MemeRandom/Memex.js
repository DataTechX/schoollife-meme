const axios = require('axios');
const userAgents = require('../../tools/user-agents.json');

async function Memex() {
    let tag = ["meme", "dankmemes", "thaimeme", "TopInternationalMemes", "Anarcho_Capitalism"]
    tag = tag[Math.floor(Math.random() * tag.length)]

    let json = await axios(`https://www.reddit.com/r/${tag}/random/.json`, {
        headers: {
            'User-Agent': userAgents[Math.floor(Math.random() * userAgents.length)]
        }
    });

    json = json.data;

    if (!json) throw new "ข้อผิดพลาด 01: ไม่สามารถเข้าถึงเนื่อหา json ของ api"
    json = json[0].data.children[0].data;

    let content = {
        embed: {
            color: "0x2F3136",
            image: { url: json.is_video ? "https://freepikpsd.com/wp-content/uploads/2019/10/no-image-png-5-Transparent-Images.png" : json.url},
            description: json.description,
            footer: {
                text: "มีมสุ่มจากทั่วโลกผ่านใน REDDIT.COM | Power By: LynnTeam",
                icon_url: "https://discord.com/assets/516bf0fae97628e22a3a3ec810a8c4ba.svg" 
            }
        }
    }


    return content;
}

module.exports = Memex;