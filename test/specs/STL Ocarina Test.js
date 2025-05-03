import {$,browser ,expect } from '@wdio/globals'
import STLOcarinaHomePage from '../pageobjects/STL Ocarina HomePage.js';




describe('STL Ocarina Website Test',() =>{

it('should navigate to the website',async () =>{
await browser.url('https://www.stlocarina.com/');



});
});