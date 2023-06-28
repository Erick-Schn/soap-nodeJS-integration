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