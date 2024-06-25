const express = require('express');
const { json } = require('express/lib/response');
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
      } catch (error) {
  }
}
const seedapi = async () => {
  const date = Math.floor(new Date().getTime() / 1000);
  const news = await fetch("https://elb.seeddao.org/api/v1/latest-message", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "telegram-data": `query_id=AAF1TFJHAAAAAHVMUkcx1Fxn&user=%7B%22id%22%3A1196575861%2C%22first_name%22%3A%22PKD%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22pranavkdileep%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=${date}&hash=16485d540d5deb1de0a361404fad2b11f928f057b893d49dd169ed43317ffaf3`
    },
    "referrer": "https://cf.seeddao.org/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
  });
  const response = await fetch("https://elb.seeddao.org/api/v1/seed/claim", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "telegram-data": `"query_id=AAF1TFJHAAAAAHVMUkcx1Fxn&user=%7B%22id%22%3A1196575861%2C%22first_name%22%3A%22PKD%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22pranavkdileep%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=${date}&hash=16485d540d5deb1de0a361404fad2b11f928f057b893d49dd169ed43317ffaf3"`
    },
    "referrer": "https://cf.seeddao.org/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  });
  const data = await response.json();
  return JSON.stringify(data);
}
const tapswap = async () => {
  const response = await fetch("https://api.tapswap.ai/api/account/login", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      "cache-id": "gkwG5oWR",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Not A;Brand\";v=\"99\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "x-app": "tapswap_server",
      "x-cv": "631",
      "x-touch": "0"
    },
    "referrer": "https://app.tapswap.club/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"init_data\":\"query_id=AAF1TFJHAAAAAHVMUkeBh_h6&user=%7B%22id%22%3A1196575861%2C%22first_name%22%3A%22PKD%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22pranavkdileep%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1719044621&hash=05ee93f5d097c96d77851603d5c231c56946080f8ca4bd8ec9370fe11f7e89ee\",\"referrer\":\"\",\"bot_key\":\"app_bot_0\",\"chr\":160058}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  });
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
  const restore2 = await fetch("https://jjvnmoyncmcewnuykyid.supabase.co/rest/v1/rpc/restore_attempt", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en",
      "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqdm5tb3luY21jZXdudXlreWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3MDE5ODIsImV4cCI6MjAyNDI3Nzk4Mn0.oZh_ECA6fA2NlwoUamf1TqF45lrMC0uIdJXvVitDbZ8",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWxlZ3JhbUlkIjo1NzE3MDAyNzE2LCJpYXQiOjE3MTgwODkyMTh9.89a9OA8pDVTOrBraNrapnMqjeQY3C8hPtTw9hnIA2S0",
      "cache-control": "no-cache",
      "content-profile": "public",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Not A;Brand\";v=\"99\", \"Chromium\";v=\"123\", \"Google Chrome\";v=\"123\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "x-client-info": "postgrest-js/1.9.2",
      "x-telegram-user-id": "5717002716"
    },
    "referrer": "https://dot.dapplab.xyz/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{}",
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
    "body": "{\"taps\":40}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  const data = await response.json();
  return JSON.stringify(data.access_token);
}
const dormint = async () => {
  const response = await fetch("https://api.dormint.io/tg/farming/claimed", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Not A;Brand\";v=\"99\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": "https://web.dormint.io/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"auth_token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTk0MDU2NzUsInRnX2lkIjoxMTk2NTc1ODYxfQ.BmUSRJTLq4ZSleJmkgo3BW7SBa-Yh53KQQxELxHvknc\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  });
  const farm = await fetch("https://api.dormint.io/tg/farming/start", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Not A;Brand\";v=\"99\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": "https://web.dormint.io/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"auth_token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTk0MDU2NzUsInRnX2lkIjoxMTk2NTc1ODYxfQ.BmUSRJTLq4ZSleJmkgo3BW7SBa-Yh53KQQxELxHvknc\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  });
  const data = await response.json();
  const farming = await farm.json();
  return JSON.stringify(data, farming);
}
const hamster = async () => {
  const response = await fetch("https://api.hamsterkombat.io/clicker/sync", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "authorization": "Bearer 1719046188090f8a3ykE8x2RX6VcQEXD7S8yIHJ6P6zdBJbhvrpvJrQGulFnXnsSfKreI5HjnTgGh1196575861",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Not A;Brand\";v=\"99\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": "https://hamsterkombat.io/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  const data = await response.json();
  return JSON.stringify(data.clickerUser.balanceCoins);
}
const pixelverse = async () => {
  const response = await fetch("https://api-clicker.pixelverse.xyz/api/mining/claim", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      "initdata": "query_id=AAF1TFJHAAAAAHVMUkdcALy_&user=%7B%22id%22%3A1196575861%2C%22first_name%22%3A%22PKD%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22pranavkdileep%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1719046774&hash=ceeb9c275ea7ea173a441c6039e8352dfcb9964dc41d0e23dd6e474d787d25e9",
      "pragma": "no-cache",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "secret": "40eaabfaef2b3d6187452521fa73de042b0df5aa3993076ad0d530ff58de6d42",
      "tg-id": "1196575861",
      "username": "pranavkdileep"
    },
    "referrer": "https://sexyzbot.pxlvrs.io/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  });
  const data = await response.json();
  return JSON.stringify(data.claimedAmount);
}
const capybra = async () => {
  const randomint = Math.floor(Math.random() * 1000);
  const response = await fetch("https://clicker.prod-api.tgquest.com/clicker", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "authorization": "dXNlcj0lN0IlMjJpZCUyMiUzQTExOTY1NzU4NjElMkMlMjJmaXJzdF9uYW1lJTIyJTNBJTIyUEtEJTIyJTJDJTIybGFzdF9uYW1lJTIyJTNBJTIyJTIyJTJDJTIydXNlcm5hbWUlMjIlM0ElMjJwcmFuYXZrZGlsZWVwJTIyJTJDJTIybGFuZ3VhZ2VfY29kZSUyMiUzQSUyMmVuJTIyJTJDJTIyYWxsb3dzX3dyaXRlX3RvX3BtJTIyJTNBdHJ1ZSU3RCZjaGF0X2luc3RhbmNlPTgyMzkwNDkxNzI3OTMzMjcxNDMmY2hhdF90eXBlPXNlbmRlciZhdXRoX2RhdGU9MTcxOTA0NzY4MSZoYXNoPWMxZWE4MTY1NTMzZmFmZTQ4ZmU0MjIyNDBjNGViZGNhY2FiYTc1YTg5MDRlNzc0MDBiODBlZWU3MDA1ZGFjODA=",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not A;Brand\";v=\"99\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": "https://app.tgquest.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `{"count":${randomint}}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  const data = await response.json();
  return JSON.stringify(data.data.points);
}
const wavewallet = async () => {
  const response = await fetch("https://api-walletapp.waveonsui.com/api/claim/info", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQxMzQwOTQsInJpZCI6Ijc4YzM3YTI1LTU0MTItNDY5OS04ZWJmLTk5MDEyNzkwYTIxYSIsIndpZCI6NDQ0NDkxNCwiYWRkcmVzcyI6IjB4Nzk3NmY3NGE5YTNlMTg5OTAwZTRmNzI1OGMwMDhkZmY2NjAzMjZkM2EwOTcxNDYxZWVmZTI1OWVhNTIwZmVhMiIsImRldmljZUlkIjoiYzQ3ZjhjMjEtZDM5Yi00MDQ3LTk0ODgtMzE2MmMxZmUyNDhmIiwiaWF0IjoxNzE4MDE1OTEyLCJqdGkiOiI5NTJmMGQ2MC0yNzE1LTExZWYtYWQzNS02ZDIyYTdlNGNmM2MifQ.vtYGNNjDYsShPAvLhptCe8Gd9gyr34rebvn2kKE0cwQ",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not A;Brand\";v=\"99\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": "https://walletapp.waveonsui.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  });
  const data = await response.json();
  return JSON.stringify(data);
}



  const claim = async () => {
  const seed = 'await seedapi();'
  const tap = 'await tapswap();'
  const dorm = await dormint();
  const ham = await hamster();
  const pixel = await pixelverse();
  const capy = 'await capybra();'
  const wave = await wavewallet();
  const final = 
`Seed Response: ${seed}
--------------------------------
################################

TapSwap Response: ${tap}

################################
--------------------------------

Dormint Response: ${dorm}

################################
--------------------------------

Hamster Response: ${ham}

################################
--------------------------------

Pixelverse Response: ${pixel}

################################
--------------------------------

Capybra Response: ${capy}

################################
--------------------------------

WaveWallet Response: ${wave}

################################
--------------------------------
`
  sendTelegramMessage(final);
  return final
}




app.get('/', async (req, res) => {
    const balance = await claim();
    res.send(`Balance: ${balance}`);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
