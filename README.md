# schoollife

### ⚠ NOTICE
continue with version v1.0.1

# SETUP
```js
const discord = require('discord.js')
const client = new discord.Client()
const random = require('schoollife-random-meme').MemeRandom

let prefix = "!";

client.on("ready", () => {
  console.log("Ready to go")
})

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "meme") {
        let data = await random.Meme()
        message.channel.send(data)
    }
})

client.login("TOKEN")
```

# DOCUMENTATION

Memex(): Provieds You the JSON embed with meme image and title.

```js
  let data = await random.Memex()
  message.channel.send(data)
```
