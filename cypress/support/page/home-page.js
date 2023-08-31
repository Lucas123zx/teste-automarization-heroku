/// <reference types="Cypress" />

import  { HomeElements }  from "../common/home-elements";
const homeElements = new HomeElements;

export class HomePage {

  acessarSite() {
    cy.visit('/')
  }
  
  clicarBotaoSingUp() {
    cy.get(homeElements.cadastrar()).click()
  }

  clicarBotaoCookies() {
    cy.get(homeElements.botaoAceitarCookies()).click()
  }
  
}