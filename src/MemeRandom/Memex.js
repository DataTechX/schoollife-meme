const axios = require('axios');
const userAgents = require('../../tools/user-agents.json');

async function Memex() {
    let tag = ["Meme", "dankMeme"]
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
            color: "0xff1a8c",
            image: { url: json.is_video ? "https://freepikpsd.com/wp-content/uploads/2019/10/no-image-png-5-Transparent-Images.png" : json.url},
            title: json.title
        }
    }


    return content;
}

module.exports = Memex;