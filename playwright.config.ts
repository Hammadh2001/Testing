import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  
  reporter: 'html',
 
  use: {
    headless: false,
    trace: 'on-first-retry',
    screenshot:'on',
  },


});
