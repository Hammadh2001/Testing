import {test as base} from "@playwright/test";
import { DynamicWebTable } from "../Pages/DynamicWebTable";
import { Navigate } from "../Pages/Navigate";

export const test = base.extend<{dynamicWebTable : DynamicWebTable ,navigate : Navigate}> ({

    navigate: async ({page}, use) => {
         const navig = new Navigate(page);
         await use(navig); 
    },

    dynamicWebTable : async ({page}, use) => {

        const table =new DynamicWebTable(page);
        await use(table);

    }

})