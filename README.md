# schoollife

### ⚠ NOTICE
เวอร์ชั่นนี้ถูกพัฒนาและอัพเดทด้วยการทดสอบอยู่ระหว่างการหามีม

# SETUP
```js
const discord = require('discord.js')
const client = new discord.Client()
const random = require('lynny-meme')

let prefix = "!";

client.on("ready", () => {
  console.log("Ready to go")
})

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "meme") {
        let data = await random.Memex()
        message.channel.send(data)
    }
})

client.login("TOKEN")
```

# DOCUMENTATION

Memex(): มอบ JSON ให้คุณฝังด้วยรูปภาพและชื่อมีม

```js
  let data = await random.Memex()
  message.channel.send(data)
```
