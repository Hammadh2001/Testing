import { test } from "../Fixtures/WebTableFixture";

test.describe('Dynamic Web Table', () => {

    test('Validate Avengers in the table', async ({dynamicWebTable,navigate}) => {
        await navigate.TablePage();
        await dynamicWebTable.AvengersValidation();
    })

    test('Validate SuperHero Mail', async ({dynamicWebTable,navigate}) => {
        await navigate.TablePage();
        await dynamicWebTable.SuperHeroMail();
    })


})

