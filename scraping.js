const puppetter=require('puppeteer');
const sql=require('mssql/msnodesqlv8');
const { Time } = require('mssql/msnodesqlv8');
//const { Float } = require('mssql/msnodesqlv8');


let lastValueEndofTheDay = 0.0
let value = 0.0
// let AksaFloatValue=0.0
//database info start
var config={
    user:'@USER',
    password:'@Password',
    database:'@Database Name',
    server: '@',
    driver:'msnodesqlv8',
    options:{
        trustedConnection:true
    }
};
//database info finish



//ScrapeWebSite Methot Start
async function scrapeWebSite(){
    
    const xPath='';    
        url= ''
        try {
            const browser=await puppetter.launch();
            const page=await browser.newPage();
            await page.goto(url);
            const[Element]=await page.$x(xPath);
            const ElementValue=await Element.getProperty('textContent'); //innerText
            const ElementInfo=await ElementValue.jsonValue();        
            let ElementValueTxt=ElementInfo.toString();
            browser.close();
        } catch (error) {
            console.log('Warring')
            value = lastValueEndofTheDay
        }
        
        
        
        sql.connect(config,function(err){
            try {
                var request = new sql.Request();
            } catch (error) {
                console.log(error)
            }
        }
            
        )
    
    
    
}
    
scrapeWebSite();
