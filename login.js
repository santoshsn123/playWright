async function loginTwitter(page){
    // timer += Math.round(Math.random() * 10000);
   
    await redirecToLogin(page);

    await enterEmail(page,'santosh.narawade1@gmail.com');
    await clickNextButton(page);

    await enterUserNameAgain(page,'santoshnarwade1');
    
    // setTimeout(async()=>{
    //     const needToAddUserName = await page.$('input[type="text"][name="text"]');
    //     console.log('check if we need to add Username :- ',needToAddUserName);
    //     if(needToAddUserName){
    //         console.log('adding username in field');
    //        await enterUserNameAgain(page,'santoshnarwade1');
    //     }
    // },5000)
   
    await clickNextButtonOnUsernameAgain(page);

    await enterPassword(page,'mb');

    //   setTimeout(async () => {
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

function redirecToLogin(page){
    return new Promise((resolve,reject)=>{
        setTimeout(async() => {
          const redirected = await page.click('a[href="/login"][role="link"]');
          resolve(redirected);
        }, Math.round(Math.random() * 10000));
    })
}


function enterEmail(page,email){
    return new Promise((resolve,reject)=>{
        setTimeout(async() => {
            const emailEntered = await page.type('input[type="text"][name="text"]', email);
            resolve(emailEntered);
        }, Math.round(Math.random() * 10000));
    })
}

function clickNextButton(page){
    return new Promise((resolve,reject)=>{
        setTimeout(async () => {
            const nextBtn = 'div[role="button"][class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-ywje51 r-usiww2 r-13qz1uu r-2yi16 r-1qi8awa r-ymttw5 r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l"]';
            const nexBTNneedtoclick = await page.$(nextBtn);
            if(nexBTNneedtoclick){
            const nextClicked = await page.click(nextBtn);
            resolve(nextClicked);
            }
            else{
                console.log('Next button not visible');
                reject('Next button not visible');
            }
        }, Math.round(Math.random() * 10000));
    })
}


function clickNextButtonOnUsernameAgain(page){
    return new Promise((resolve,reject)=>{
        setTimeout(async () => {
            const nextBtn = 'div[role="button"][class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-19yznuf r-64el8z r-1dye5f7 r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l"]';
            const nexBTNneedtoclick = await page.$(nextBtn);
            if(nexBTNneedtoclick){
            const nextClicked = await page.click(nextBtn);
            resolve(nextClicked);
            }
            else{
                console.log('Next button not visible');
                reject('Next button not visible');
            }
        }, Math.round(Math.random() * 10000));
    })
}


function enterUserNameAgain(page,userName){
    return new Promise((resolve,reject)=>{
        setTimeout(async () => {
            const inputField = 'input[type="text"][name="text"][autocapitalize="none"]';
            const needToAddUserName = await page.$(inputField);
            if(needToAddUserName){
                const emailEntered = await page.type(inputField, userName);
            resolve(emailEntered);
            }
            else{
                reject('UserName not needed to be entered again');
            }
            
        }, Math.round(Math.random() * 10000));
    })
}


function enterPassword(page,password){
    return new Promise((resolve,reject)=>{
        setTimeout(async () => {
            const inputField = 'input[type="password"][name="password"]';
            const needToAddUserName = await page.$(inputField);
            if(needToAddUserName){
                const emailEntered = await page.type(inputField, password);
            resolve(emailEntered);
            }
            else{
                reject('Password not needed to be entered');
            }
            
        }, Math.round(Math.random() * 10000));
    })
}

 
module.exports = {loginTwitter};