# schoollife

### ⚠ NOTICE
 เวอร์ชั่นนี้ถูกพัฒนาและอัพเดทด้วยการทดสอบอยู่ระหว่างการหามีม
 
 หากเกิดข้อผิดพลาดติดต่อทางเราทันที
 
 ในการตอบกลับบ้างครั้งรูปภาพหรือไฟล์อาจจะขาดหายหรือไม่มาเนื่องจากอ่านรูปไม่ได้

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

**สามารถใช้งานได้ตามด้านบน
ยังไม่มีอะไรเพิ่มเติม**

[Supporter](https://discord.gg/HhYDzjjpK6)