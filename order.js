const readlineSync = require('readline-sync');
const puppeteer = require('puppeteer');
var random_name = require('node-random-name');
const fs = require('fs');
const delay = require('delay');
var Fakerator = require("fakerator");
const randomstring = require("randomstring");
var random = require('random-name')
var randomize = require('randomatic');
const S = require('string');
const {
    error,
    Console,
    info
} = require('console');
const {
    type
} = require('os');
var no = 1;
var urus = ["0", "1", "2", "3"];
var urutan = ["2", "3", "4", "5"];
var moment = require("moment");
var figlet = require('figlet');
var chalk = require('chalk');
var fetch = require('node-fetch');
var request = require('request');
const {
    start
} = require('repl');
const randomUseragent = require('random-useragent');

const optionlink = {
    waitUntil : 'networkidle2',
    setTimeout : 900000,
};
const optionbtn = {
    visible:true,
    timeout:60000
};

(async () => {
console.log(chalk.green('[!]'), 'Aliexpress Order Auto Proxy\n\n')
while(true) {
var tokenAccount = readlineSync.question('[!] Url Token     : ')
const $options = {
                waitUntil: 'load'
            };

            var browser = await puppeteer.launch({
                headless: false,
                defaultViewport: null

            });

            const page = await browser.newPage();

            await page.goto(''+tokenAccount+'',$options);
            await page.goto('https://id.aliexpress.com/account/index.html?spm=a2g0o.home.1000001.27.20756bcdPy399a',$options)
            
            try {
                await page.waitForSelector('div.account-info-name')
                const name = await page.evaluate(() => {
                    return document.querySelector('div.account-info-name').innerText;
                })
                console.log(chalk.green('[!]'), ' Successfully Login '+name+'\n')
            } catch(err) {
                console.log(chalk.red('[!]'), ' Failure Login')
                break;
            }


            //SET ADDRESS
    await page.goto('https://ilogisticsaddress.aliexpress.com/addressList.htm?spm=a2g0o.new_account_index',optionlink)

    try{
        await page.click("#address-main > div > div > div:nth-child(2) > div > div:nth-child(5) > button:nth-child(2)")
        await delay(1000)
        await page.click("body > div.next-overlay-wrapper.opened > div.next-dialog.next-closeable.next-overlay-inner > div.next-dialog-footer.next-align-right > button.next-btn.next-medium.next-btn-primary.next-dialog-btn")
        console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Delete old address`))
        console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Set New Address`))
    }catch(err){
        console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Set New Address`))
    }

        var fakerator = Fakerator("en-CA");
        var address = fakerator.address.street()
        var address2 = fakerator.address.street()    
        const randomcity1 = randomstring.generate({length: 1,charset: '31542'}); 
        const fileranprov = fs.readFileSync(`./listprovinsi.txt`, 'utf-8');
        const splitFileranprov = fileranprov.split('\r\n');
        var ranprovinsi = splitFileranprov[Math.floor(Math.random()*splitFileranprov.length)];

    await page.waitForSelector("#address-main > div > div > div > div > div.group-content.addressInfo > div.input-default.country > div > div.list_country > span > span > span > span.next-input-control > span > i",optionbtn)
    await page.tap("#address-main > div > div > div > div > div.group-content.addressInfo > div.input-default.country > div > div.list_country > span > span > span > span.next-input-control > span > i")
    await page.waitForSelector("#address-main > div > div > div > div > div.group-content.addressInfo > div.input-default.country > div > div.list_country > span > div > div > div > span > span > span",optionbtn)
    await page.type("#address-main > div > div > div > div > div.group-content.addressInfo > div.input-default.country > div > div.list_country > span > div > div > div > span > span > span", "indonesia")
    await delay(800)
    await page.waitForSelector("#address-main > div > div > div > div > div.group-content.addressInfo > div.input-default.country > div > div.list_country > span > div > div > div > ul > li > div",optionbtn)
    await page.click("#address-main > div > div > div > div > div.group-content.addressInfo > div.input-default.country > div > div.list_country > span > div > div > div > ul > li > div")
    await delay(500)
        await page.waitForSelector("#contactPerson",optionbtn)
        await page.type("#contactPerson",`${random.first()} ${random.last()}`)
        await delay(500)
        await page.click("#phoneCountry",{clickCount:3})
        await page.type("#phoneCountry","+62")
        await delay(500)
        await page.type("#mobileNo",`8${randomize('0', 10)}`)
        await delay(500)
        await page.type("#address",`${address} ${randomize('a', 5)} ${address2}`)
        await delay(500)
        await page.type("#zip",`${randomize('0', 5)}`)
        await delay(500)
    await page.click("div.selector-item:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > em:nth-child(1)")
    await delay(800)
    await page.waitForSelector("#address-main > div > div > div > div > div.group-content.addressInfo > div.input-default.country > div > div:nth-child(2) > span > div > div > div > span > span > span > span")
    await page.click("#address-main > div > div > div > div > div.group-content.addressInfo > div.input-default.country > div > div:nth-child(2) > span > div > div > div > span > span > span > span")
    await delay(800)
    await page.waitForSelector("#address-main > div > div > div > div > div.group-content.addressInfo > div.input-default.country > div > div:nth-child(2) > span > div > div > div > span > span > span > span")
    await page.type("#address-main > div > div > div > div > div.group-content.addressInfo > div.input-default.country > div > div:nth-child(2) > span > div > div > div > span > span > span > span",ranprovinsi)
    await delay(800)
    await page.waitForSelector("#address-main > div > div > div > div > div.group-content.addressInfo > div.input-default.country > div > div:nth-child(2) > span > div > div > div > ul > li",optionbtn)
    await page.click("#address-main > div > div > div > div > div.group-content.addressInfo > div.input-default.country > div > div:nth-child(2) > span > div > div > div > ul > li")
    await delay(500)
    await page.click("div.selector-item:nth-child(3) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > em:nth-child(1)")
    await delay(1000)
    await page.waitForSelector(`.opened > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(${randomcity1})`,optionbtn)
    await page.click(`.opened > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(${randomcity1})`)
    await delay(500)
    await page.waitForSelector("#address-main > div > div > div > div > div.address-save > button",optionbtn)
    await page.click("#address-main > div > div > div > div > div.address-save > button")
    await page.waitForSelector('#address-main > div > div > div.address-list-wrap > div > div.address-detail.big-detail > div')
    const pcitys = await page.$eval('#address-main > div > div > div.address-list-wrap > div > div.address-detail.big-detail > div',(el) => el.innerText);
    console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success set address to : ${pcitys}`))


    //DELETE CART
    await page.goto('https://m.id.aliexpress.com/shopcart/list.html#/',optionlink);
    if (await page.$('#shopcart-app > div > div > div:nth-child(2) > div > div > span > div > div:nth-child(3) > div'))
    {
        await page.click("#shopcart-app > div > div > div:nth-child(2) > div > div > span > div > div:nth-child(3) > div")
        await delay(600)
        await page.waitForSelector("#shopcart-app > div > div > div > header > div > div > div > svg > use",optionbtn)
        await page.click("#shopcart-app > div > div > div > header > div > div > div > svg > use")
        await delay(600)
        await page.waitForSelector("#shopcart-app > div > div > div > header > div > div:nth-child(2) > svg > use",optionbtn)
        await page.click("#shopcart-app > div > div > div > header > div > div:nth-child(2) > svg > use")
        await delay(1000)
        await page.click("body > div.flex.justify-center.align-center._3zxBO > div > span > div > div:nth-child(3) > div:nth-child(2)")
        console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success delete all item in cart `))
        await delay(600)
    } 

    //ADD CART1
    await page.goto("https://m.id.aliexpress.com/item/1005003230523068.html",optionlink)

    try{
        await delay(800)
        await page.click("#smartbanner-main > div.smartbanner-ui__dialog > div > div > img")
    }catch(err){}
    
    const product1= randomstring.generate({length: 1,charset: '132'}); 
    const productname1 = await page.$eval('#root > div:nth-child(4) > div:nth-child(2) > span',(el) => el.innerText);

    await delay(800)
    await page.waitForSelector("#action-bar > div > a",optionbtn)
    await page.click("#action-bar > div > a")
    await delay(1200)
    await page.waitForSelector(`body > div.modal-container.modal-drawer.sku--modal--DAuuPBD > div.drawer-container.drawer-bottom.bottom-drawer-container.sku--drawer--3wJ0Mw5 > div.scroll-panel-content.bottom-drawer-content > div > div.sku-panel--property--3YeEpFD > div.sku-panel--skus--3PMc-6q > div:nth-child(${product1}) > img`,optionbtn)
    await page.click(`body > div.modal-container.modal-drawer.sku--modal--DAuuPBD > div.drawer-container.drawer-bottom.bottom-drawer-container.sku--drawer--3wJ0Mw5 > div.scroll-panel-content.bottom-drawer-content > div > div.sku-panel--property--3YeEpFD > div.sku-panel--skus--3PMc-6q > div:nth-child(${product1}) > img`)
    await delay(1200)
    await page.waitForSelector("#action-bar > div > a",optionbtn)
    await page.click("#action-bar > div > a")
    console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add product to cart : ${productname1}`))
    await delay(800)


    //ADD CART2
    await page.goto("https://m.id.aliexpress.com/item/1005003408351680.html",optionlink)
    await delay(1000)

    const product2= randomstring.generate({length: 1,charset: '8'}); 
    try{
        var productname2 = await page.$eval('#root > div:nth-child(4) > div:nth-child(2) > span',(el) => el.innerText);
    }catch(e){
        var productname2 = await page.$eval('#root > div:nth-child(5) > div:nth-child(2) > span',(el) => el.innerText);
    }
    await page.waitForSelector("#action-bar > div > a",optionbtn)
    await page.click("#action-bar > div > a")
    await delay(1200)
    await page.waitForSelector(`body > div.modal-container.modal-drawer.sku--modal--DAuuPBD > div.drawer-container.drawer-bottom.bottom-drawer-container.sku--drawer--3wJ0Mw5 > div.scroll-panel-content.bottom-drawer-content > div > div.sku-panel--property--3YeEpFD > div.sku-panel--skus--3PMc-6q > div:nth-child(${product2}) > img`,optionbtn)
    await page.click(`body > div.modal-container.modal-drawer.sku--modal--DAuuPBD > div.drawer-container.drawer-bottom.bottom-drawer-container.sku--drawer--3wJ0Mw5 > div.scroll-panel-content.bottom-drawer-content > div > div.sku-panel--property--3YeEpFD > div.sku-panel--skus--3PMc-6q > div:nth-child(${product2}) > img`)
    //await delay(800)
    //await page.waitForSelector(`body > div.modal-container.modal-drawer.sku--modal--DAuuPBD > div.drawer-container.drawer-bottom.bottom-drawer-container.sku--drawer--3wJ0Mw5 > div.scroll-panel-content.bottom-drawer-content > div > div:nth-child(5) > div.sku-panel--skus--3PMc-6q > span`,optionbtn)
    //await page.click(`body > div.modal-container.modal-drawer.sku--modal--DAuuPBD > div.drawer-container.drawer-bottom.bottom-drawer-container.sku--drawer--3wJ0Mw5 > div.scroll-panel-content.bottom-drawer-content > div > div:nth-child(5) > div.sku-panel--skus--3PMc-6q > span`)
    //await delay(800)
    //await page.waitForSelector("body > div.modal-container.modal-drawer.sku--modal--DAuuPBD > div.drawer-container.drawer-bottom.bottom-drawer-container.sku--drawer--3wJ0Mw5 > div.scroll-panel-content.bottom-drawer-content > div > div.quantity--container--3D-6hmh > div.number-picker--container--8edZVq_ > svg:nth-child(3) > use",optionbtn)
    //await page.click("body > div.modal-container.modal-drawer.sku--modal--DAuuPBD > div.drawer-container.drawer-bottom.bottom-drawer-container.sku--drawer--3wJ0Mw5 > div.scroll-panel-content.bottom-drawer-content > div > div.quantity--container--3D-6hmh > div > svg:nth-child(3) > use")
    await delay(800)
    await page.waitForSelector("#action-bar > div > a",optionbtn)
    await page.click("#action-bar > div > a")
    console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success add product to cart : ${productname2}`))
    await delay(1000)

            
            await page.goto("https://shoppingcart.aliexpress.com/shopcart/shopcartDetail.htm",$options)

            try {
                await page.waitForSelector('div.product-title');
                const information = await page.evaluate(() => {
                    return document.querySelector('div.product-title').innerText;
                })

                await page.waitForSelector('span.main-cost-price');
                const price = await page.evaluate(() => {
                    return document.querySelector('span.main-cost-price').innerText;
                })
                console.log(chalk.green('[!]'), ' Menemukan Salah Satu Item')
                console.log(chalk.green('[!]'), ' Name         : '+information+'')
                console.log(chalk.green('[!]'), ' Price        : '+price+'')
            }  catch(err) {
                console.log(chalk.red('[!]'), ' Tidak Menemukan Salah Satu Item');
                console.log(chalk.red('[!]'), ' Silakan Tambahkan Keranjang');
                break;
            }

            await page.waitForSelector('span.next-checkbox-inner')
            const clickBox = await page.$('span.next-checkbox-inner')
            await clickBox.click()

            await delay(3000)
            await page.waitForSelector('span.click-mask')
            const buyItem = await page.$('span.click-mask')
            await buyItem.click()

            console.log(chalk.green('[!]'), ' Proses Semua Item')

            try {
                await page.waitForSelector('span._3UZDE', {visible:true, timeout:5000})
                const clickPayment = await page.$('span._3UZDE')
                await clickPayment.click()
    
                await page.waitForSelector('body > div.next-overlay-wrapper.opened > div.next-overlay-inner.next-dialog-container > div > div.next-dialog-body > div > div > div > div > div > div > div > div.payment-group-list > div:nth-child(2)', {visible:true, timeout:5000})
                const dokuPayment = await page.$('body > div.next-overlay-wrapper.opened > div.next-overlay-inner.next-dialog-container > div > div.next-dialog-body > div > div > div > div > div > div > div > div.payment-group-list > div:nth-child(2)')
                await dokuPayment.click()
    
                await delay(3000)
                await page.waitForSelector('body > div.next-overlay-wrapper.opened > div.next-overlay-inner.next-dialog-container > div > div.next-dialog-body > div > div > div > div > div > div > div > div.payment-detail > div > div > div > button', {visible:true, timeout:5000})
                const submitPayment = await page.$('body > div.next-overlay-wrapper.opened > div.next-overlay-inner.next-dialog-container > div > div.next-dialog-body > div > div > div > div > div > div > div > div.payment-detail > div > div > div > button')
                await submitPayment.click()

                console.log(chalk.green('[!]'), ' Sedang Memilih Doku Payment')
            } catch (err) {
                console.log(chalk.green('[!]'), ' Sudah Memiliki Doku Payment')
            }

            //SET FREE SHIPING

            await delay(850)
            await page.waitForSelector("#main > div.card-container.orders-list > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(4)",optionbtn)
            await page.click("#main > div.card-container.orders-list > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(4)")
            await delay(500)
            await page.waitForSelector("body > div.next-overlay-wrapper.opened > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(2) > div > label > span > input",optionbtn)
            await page.click("body > div.next-overlay-wrapper.opened > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(2) > div > label > span > input")
            await delay(500)
            await page.waitForSelector("body > div.next-overlay-wrapper.opened > div:nth-child(2) > div > div:nth-child(2) > button",optionbtn)
            await page.click("body > div.next-overlay-wrapper.opened > div:nth-child(2) > div > div:nth-child(2) > button")
            console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Success set to free shipping`))

            await delay(3000)

            await page.waitForSelector('#checkout-button')
            const placeHolder = await page.$('#checkout-button')
            await placeHolder.click()

            console.log(chalk.green('[!]'), ' Sedang Proses Pembayaran')
            await delay(3000)
            try {
            await page.waitForSelector('#dw_user', {visible:true, timeout:5000})
            const email = await page.$('#dw_user')
            await email.type('endsrynt@gmail.com')

            await page.waitForSelector('#dw_pass', {visible:true, timeout:5000})
            const password = await page.$('#dw_pass')
            await password.type('polos123321A')

            await page.waitForSelector('#DOKU-SUBMIT-LANG', {visible:true, timeout:5000})
            const submit = await page.$('#DOKU-SUBMIT-LANG')
            await submit.click()
            } catch(err){
                console.log(chalk.red('[!]'), ' Silakan Ganti IP Mu')
            }

            try {
                await page.waitForSelector('#pin', {visible:true, timeout:3000})
                console.log(chalk.green('[!]'), ' Successfully Login Doku')
            } catch(err) {
                console.log(chalk.red('[!]'), ' Failure Login Doku')
                await delay(1000000)
            }

            const inputPin = await page.$('#pin')
            await inputPin.type("4215")

            const submit = await page.$('#form-payment-w > div.default-btn.bg-paybtn.radius.btnsignin-dw > input')
            await submit.click()

            try {
            await page.waitForSelector('#section-content > div > div.top-trans-result.sucresult.failresult > h1', {visible:true, timeout:5000})
            const info = await page.evaluate(() => {
                return document.querySelector('#section-content > div > div.top-trans-result.sucresult.failresult > h1').innerText
            })

            console.log(chalk.green('[!]'), ' '+info+'')
            } catch (err) {
            await page.waitForSelector('body > section > div.head.padd-default > div.right-head.fright.success.result-text')
            const info = await page.evaluate(() => {
                return document.querySelector('body > section > div.head.padd-default > div.right-head.fright.success.result-text').innerText
            })

            console.log(chalk.green('[!]'), ' '+info+'')
            }
            console.log('\n\n')
}
})();
