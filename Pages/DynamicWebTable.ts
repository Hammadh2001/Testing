import {Locator , Page, expect} from "@playwright/test";

export class DynamicWebTable {

    page:Page;
 
    superHeroName:Locator;
    heroOGName:Locator;
    mailPath:Locator;

    constructor(page: Page) {

        this.page=page;
       
        this.superHeroName = page.locator('.ml-4 .font-medium');
        this.heroOGName = page.locator('span.text-sm');
        this.mailPath = page.locator('.ml-4 .text-gray-500');

    }

   

    async AvengersValidation(){

        await this.page.waitForLoadState('load');
        const herosList : String[] = ["Iron Man", "Thor", "Hulk", "Ant-Man", "Wasp", "Captain America",
            "Black Widow", "Hawkeye", "Scarlet Witch", "Vision", "Black Panther", "Doctor Strange",
            "Spider-Man", "Falcon", "War Machine", "Captain Marvel", "Winter Soldier"
        ];

        await expect(this.superHeroName.first()).toBeVisible();
        const heroName = await this.superHeroName.all();
        const og = await this.heroOGName.all();
        
        for (let i = 0; i<heroName.length; i++){
                const Hname = await heroName[i].textContent();
                const OGName = await og[i].textContent();
            if (Hname && herosList.includes(Hname) ){
                console.log(`${Hname} is an Avenger. His OG name is ${OGName}`);
            }else{
                console.log(`${Hname} is not an Avenger.`)
            }
            }
           
        }
    

    async SuperHeroMail() {

        const mail = await this.mailPath.allTextContents();
        for (const m of mail){
            if(m.endsWith('@avengers.com')){
                continue
            }else{
                console.log(`${m} is an external mail `);
            }
        }

    }

}   