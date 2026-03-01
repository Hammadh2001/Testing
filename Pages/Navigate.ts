import {Locator , Page, expect} from "@playwright/test";

export class Navigate {

    page:Page;
    DynamicTable:Locator;
    

    constructor(page: Page) {

        this.page=page;
        this.DynamicTable = page.getByText('Dynamic Table');
        
    }

    async TablePage(){
        await this.page.goto('https://qaplayground.dev/');
        await this.DynamicTable.click();
    }
}