const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

const path = require('path')
const { ServiceBuilder } = require('selenium-webdriver/chrome')
const { Builder, By, Key, until } = require('selenium-webdriver');


const pathDriver = 'C:/Users/lucas/Documents/HiringCoders - Testes/tdd_bdd_jasmine_cucumber/driver/chromedriver.exe'
const serviceBuilder = new ServiceBuilder(pathDriver)

const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build()

Given('I\'m have {string} clientes in my database', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("inseri os dados na base")
});

When('I access the home webpage', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get('http://localhost:3000')
    //espera 1 segundo apos acessar o localhost
    await driver.sleep(1000)
});

Then('see the list of {string} itens', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    let qtd = await driver.findElements(By.css('tbody tr'))
    assert.equal(qtd.length, parseInt(string))
    await driver.quit()
});