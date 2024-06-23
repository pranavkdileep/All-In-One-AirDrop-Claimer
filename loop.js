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
      "body": "{\"auth_token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTk1MTIwODAsInRnX2lkIjo1NzE3MDAyNzE2fQ.e1TuSbewX5OQ0SUj_Mv_2i-JxwE275K-qwSJ9jLalbg\"}",
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
      "body": "{\"auth_token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTk1MTIwODAsInRnX2lkIjo1NzE3MDAyNzE2fQ.e1TuSbewX5OQ0SUj_Mv_2i-JxwE275K-qwSJ9jLalbg\"}",
      "method": "POST",
      "mode": "cors",
      "credentials": "omit"
    });
    const data = await response.json();
    const farming = await farm.json();
    console.log(data);
  }

  async function start() {
    while (true) {
        dormint();
        await new Promise(r => setTimeout(r, 1000));
      }
    }

    start();