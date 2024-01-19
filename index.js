const { chromium, firefox, webkit } = require('playwright');
const { loginTwitter } = require('./login');

async function postToPlatform(browserType, platformUrl, content) {
    const browser = await browserType.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(platformUrl);
    let timer = 0;
console.log(await page.url());
if(await page.url()==='https://twitter.com/'){
    await loginTwitter(page);
}
    // console.log(await page
    // .locator('a').evaluateAll(els => els.map(el => +el.tagName.slice(1))))
    // const element = await page.$('input[type="text"][name="text"]');
    // const loginBtn = await page.$('a[href="/login"][role="link"]');



    // timer += Math.round(Math.random() * 10000);
    // setTimeout(() => {
    //     page.click('a[href="/login"][role="link"]');
    // }, timer);

    // timer += Math.round(Math.random() * 10000);
    // setTimeout(() => {
    //     page.type('input[type="text"][name="text"]', 'santosh.narawade1@gmail.com');
    // }, timer);

    // timer += Math.round(Math.random() * 10000);
    // setTimeout(async () => {
    //     page.click('div[role="button"][class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-ywje51 r-usiww2 r-13qz1uu r-2yi16 r-1qi8awa r-ymttw5 r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l"]');
    // }, timer);

    // timer += Math.round(Math.random() * 10000);
    // setTimeout(async () => {
    //     const element = await page.$('input[type="password"][name="password"]');
    //     if(element){
    //         page.type('input[type="password"][name="password"]', 'slaxZenith@123');
    //     }
    //     else{
    //         console.log('element not found');
    //         console.log('Entering Email again');
    //         page.type('input[type="text"][name="text"]', 'santosh.narawade1@gmail.com');
    //         const element = await page.$('div[role="button"][dir="ltr"][style="text-overflow: unset; color: rgb(255, 255, 255);"]');
    //         console.log('check button status', element);
    //         timer += Math.round(Math.random() * 10000);
    //         setTimeout(async () => {
    //             await page.click('div[role="button"][style="text-overflow: unset; color: rgb(255, 255, 255);"]');
    //         }, timer);
    //     }
    // }, timer);
  
}

function getBrowserForNiche(nicheId) {
    // Return the browser type based on nicheId
    // Example logic, adjust according to actual mapping
    switch (nicheId) {
        case 1: return chromium;
        case 2: return firefox;
        case 3: return webkit;
        // Add more cases as needed
    }
}

async function main() {
    const nicheId = 1; // Example nicheId
    const browserType = getBrowserForNiche(nicheId);
    await postToPlatform(browserType, 'https://twitter.com', 'Your post content');
}

main();
