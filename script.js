function convertCurrency() {
    // Obtenha os valores do input e das seleções
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
  
    // Verifique se o valor inserido é um número
    if (isNaN(amount)) {
      alert('Por favor, insira um valor válido.');
      return;
    }
  
    // Aqui você pode adicionar lógica para obter as taxas de câmbio em tempo real de uma API
    // Neste exemplo, usaremos taxas fixas para simplificar
    var exchangeRates = {
      'USD': 1.0,
      'EUR': 0.85,
      'BRL': 5.5, // Exemplo de taxa fixa para o Real (BRL)
      // Adicione mais taxas conforme necessário
    };
  
    // Calcule o resultado da conversão
    var result = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);
  
    // Exiba o resultado
    document.getElementById('result').innerHTML = amount + ' ' + fromCurrency + ' = ' + result.toFixed(2) + ' ' + toCurrency;
  }