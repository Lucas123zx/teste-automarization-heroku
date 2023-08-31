
  Feature: Sing Up
  Como usuário quero realizar um cadastro no site 

    Scenario: realizar cadastro com sucesso
      Given usuário esteja na tela de cadastro
      When informar todos os campos dados válidos
      And clicar em "CREATE AN ACCOUNT"
      Then devo visualizar uma menssagem em tela "There's a problem"
      