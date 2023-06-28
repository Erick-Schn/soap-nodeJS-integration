# Integração SOAP em script node.js 

Abaixo estão algumas bibliotecas encontradas que permitem a integração de requisições SOAP em node.js.

O **`soap`** ([npmjs.soap](https://www.npmjs.com/package/soap)) é uma biblioteca popular para integração SOAP em Node.js e normalmente funciona bem. No entanto, pode haver casos em que ocorram incompatibilidades ou problemas com determinadas versões do Node.js ou dependências.

O **`strong-soap` (**[npmjs.strong-soap](https://www.npmjs.com/package/strong-soap)), por outro lado, é uma alternativa à biblioteca **`soap`** que também oferece funcionalidades de integração SOAP em Node.js. Ele foi projetado para ser uma implementação mais robusta e fornecer suporte a recursos avançados de SOAP.

Para instalar a biblioteca use o comando:

```jsx
npm install soap // Para soap
//ou
npm install strong-soap // Para strong-soap
```

Exemplo de implementação:

```jsx
const soap = require('strong-soap').soap; // Importa o módulo SOAP

const url = 'http://exemplo.com/service?wsdl'; // URL do WSDL do serviço SOAP
const args = {
  arg1: 'valor1',
  arg2: 'valor2'
}; // Argumentos para a chamada SOAP

soap.createClient(url, function (err, client) { // Cria um client SOAP, ele é usado para fazer chamadas a métodos SOAP
  if (err) {
    console.error(err);
    return;
  }

  // Chamada do método SOAP
  client.NomeDoMetodoSOAP(args, function (err, result) { // NomeDoMétodo é o nome do método SOAP específico que você deseja chamar
    if (err) {
      console.error(err);
      return;
    }

    // Processar o resultado da chamada SOAP
    console.log(result);
  });
});
```

Exemplo de implementação funcional:

```
var soap = require('strong-soap').soap;

var url = 'http://www.dneonline.com/calculator.asmx?wsdl';

var args = {
  intA: 10,
  intB: 5
};

soap.createClient(url, function(err, client) {
  if (err) {
    console.error(err);
    return;
  }

  client.Add(args, function(err, result) {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Resultado:', result.AddResult);
  });
});
```

Para executar o script JavaScript utilize os comandos abaixo:

`npm install strong-soap`

`node soap-test.js`
