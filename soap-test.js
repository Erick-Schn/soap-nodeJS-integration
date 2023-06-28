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