const {test , expect} = require("@playwright/test");
const { title } = require("node:process");

test("context browser",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
});    

test.only("single page browser",async({page})=>{

    const email = "hamdh@gmail.com";
   const productName = 'ZARA COAT 3';

   const products = page.locator(".card-body");

   await page.goto("https://rahulshettyacademy.com/client");

   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Helloworld1");
   await page.locator("[value='Login']").click();

   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
    
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 
   await page.locator("[routerlink*='cart']").click();
   await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('"+productName+"')").isVisible();  
    expect(bool).toBeTruthy();
    await page.locator("button[type=button]").last().click();


    await page.locator("(//select[@class='input ddl'])[1]").selectOption("05");
    await page.locator("(//select[@class='input ddl'])[2]").selectOption("04");

   await page.locator("input[placeholder='Select Country']").click();
   await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });
   await page.locator(".ta-results").waitFor();

   const dropdown=page.locator(".ta-results");
   const optionsCount=await dropdown.locator("button").count();
   for(let i=0;i<optionsCount;i++){
      const text=await dropdown.locator("button").nth(i).textContent();
      if(text===" India"){
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }  

   expect(await page.locator(".user__name [type='text']").first()).toHaveText(email);

   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);



   await page.pause();
 
});