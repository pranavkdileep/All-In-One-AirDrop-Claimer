const express = require('express');
const app = express();
const port = 3000;
const telegramBotToken = "6846260168:AAGuSGtoqRfuYhhtvZ11xoacx2nyKI2ixN0";
const telegramChatId = "1196575861";
async function sendTelegramMessage(message) {
  try {
      const response = await fetch("https://api.telegram.org/bot" + telegramBotToken + "/sendMessage", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              chat_id: telegramChatId,
              text: message
          })
      });

      const data = await response.json();
      messageId = data.result.message_id; 
      console.log(messageId); // Printing the response data

  } catch (error) {
      //console.error('Error sending telegram message:', error);
      //sendTelegramMessage('Error sending telegram message: ' + error);    
  }
}

const claim = async () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const response = await fetch("https://api.hamsterkombat.io/clicker/tap", {
        "headers": {
          "accept": "application/json",
          "accept-language": "en",
          "authorization": "Bearer 171800081371952lYshgESdIXktwJ22V81dWc6WcM8M7813xGK7OCBlnkqGNEQX60xWuFhVyXNtiy5717002716",
          "content-type": "application/json",
          "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Linux\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site"
        },
        "referrer": "https://hamsterkombat.io/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{"count":1500,"availableTaps":1000,"timestamp":${timestamp}}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });
    const data = await response.json();
    const data1 = data.clickerUser.balanceCoins;
    // tiestamp like 
    const timestamp1 = Date.now().toString();
    const response1 = await fetch("https://api.tapswap.ai/api/player/submit_taps", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjU3MTcwMDI3MTYsImlhdCI6MTcxODAwMjEwMCwiZXhwIjoxNzE4MDA1NzAwfQ.GejP4j6ygbucLTIMg0ipOh3XrYCCVTPIoQrnXkUO7lY",
        "cache-control": "no-cache",
        "content-id": "115664",
        "content-type": "application/json",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Not A;Brand\";v=\"99\", \"Chromium\";v=\"123\", \"Google Chrome\";v=\"123\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-app": "tapswap_server",
        "x-bot": "no",
        "x-cv": "622"
      },
      "referrer": "https://app.tapswap.club/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": `{"taps":1500,"time":1718002106452}`,
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });
    
    const data2 = await response1.json();
    const data3 = data2;
    console.log(timestamp1)
    console.log(data3);
    const final = "data3.player.full_name" + " " + data1;
    console.log(final);
  const response2 = await fetch("https://jjvnmoyncmcewnuykyid.supabase.co/rest/v1/rpc/save_coins", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en",
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqdm5tb3luY21jZXdudXlreWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3MDE5ODIsImV4cCI6MjAyNDI3Nzk4Mn0.oZh_ECA6fA2NlwoUamf1TqF45lrMC0uIdJXvVitDbZ8",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWxlZ3JhbUlkIjo1NzE3MDAyNzE2LCJpYXQiOjE3MTgwMTQ2NjR9.hBa8TQ4j7lkipMvm0Oq2S4_9dtyzp_Sff2Cf0MFmuNc",
    "cache-control": "no-cache",
    "content-profile": "public",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-client-info": "postgrest-js/1.9.2",
    "x-telegram-user-id": "5717002716"
  },
  "referrer": "https://dot.dapplab.xyz/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"coins\":20000}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
  const res3 = await fetch("https://hexacore-tg-api.onrender.com/api/daily-reward", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en",
    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NzE3MDAyNzE2LCJ1c2VybmFtZSI6ImRpbGVlcDI4NiIsInRpbWVzdGFtcCI6MTcxODA4NzU2Ni45MDk2Mzl9.y7cLitE_H6BVwKJAmp9tWw2GQij-yhDz7YHW8G8C3Lo",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://ago-wallet.hexacore.io/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"user_id\":5717002716}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
  const res4 = await fetch("https://hexacore-tg-api.onrender.com/api/mining-complete", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en",
    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NzE3MDAyNzE2LCJ1c2VybmFtZSI6ImRpbGVlcDI4NiIsInRpbWVzdGFtcCI6MTcxODA4NzU2Ni45MDk2Mzl9.y7cLitE_H6BVwKJAmp9tWw2GQij-yhDz7YHW8G8C3Lo",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://ago-wallet.hexacore.io/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"taps\":100}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
  
    sendTelegramMessage(final);
    return final
}
claim();

app.get('/', async (req, res) => {
    const balance = await claim();
    res.send(`Balance: ${balance}`);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
