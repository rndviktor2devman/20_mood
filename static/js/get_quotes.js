var quotes = document.getElementById('quotes_json');
  var quotes_parsed = JSON.parse(quotes.textContent);
  var index = Math.floor(Math.random() * quotes_parsed.length);

  phrase_element = document.getElementById('phrase');
  signature_element = document.getElementById('signature');

  phrase_element.innerHTML = quotes_parsed[index]['phrase'];
  if(quotes_parsed[index]['signature']) {
      signature_element.innerHTML = quotes_parsed[index]['signature']
  }
