/// <reference types="Cypress" />

import { SingUpElements } from '../common/singUp-elements';
const singUpElements = new SingUpElements

export class SingUpPage {

  escreverCampoNome() {
    cy.get(singUpElements.firstName()).type(Cypress.env("firstName"))
  }

  escreverCampSobreNome() {
    cy.get(singUpElements.lastName()).type(Cypress.env("lastName"))
  }

  escreverCampoEmail() {
    cy.get(singUpElements.email()).type(Cypress.env("email"))
  }

  selecionarPapel() {
    cy.get(singUpElements.role()).select('Professional Developer')
  }

  selecionarRegiao() {
    cy.get(singUpElements.region()).select('Brazil')
  }

  selecionarPrimeiraLinguagem() {
    cy.get(singUpElements.languagePrograming()).select('Java')
  }

  clicarBotaoCreate() {
    cy.solveGoogleReCAPTCHA();
    cy.get(singUpElements.buttonCreateAccount()).click()
  }

  textoVisivel() {
    cy.get(singUpElements.texth1()).should('be.visible');
  }

}