/* global Given, Then, When */

import { HomePage } from "../page/home-page";
import { SingUpPage } from "../page/singUp-page";
const homePage = new HomePage
const singUpPage = new SingUpPage

Given("usuário esteja na tela de cadastro", () => {
    homePage.acessarSite();
    homePage.clicarBotaoCookies();
    homePage.clicarBotaoSingUp();
});

When("informar todos os campos dados válidos", () => {
    singUpPage.escreverCampoNome();
    singUpPage.escreverCampSobreNome();
    singUpPage.escreverCampoEmail();
    singUpPage.selecionarPapel();
    singUpPage.selecionarRegiao();
    singUpPage.selecionarPrimeiraLinguagem();
});

And("clicar em {string}", () => {
    singUpPage.clicarBotaoCreate();
});

Then("devo visualizar uma menssagem em tela {string}", () => {
    singUpPage.textoVisivel(); 
});