const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  try {
    const response = await fetch(url)
    const data = await response.json();
    const coinsList = document.getElementById('coins-list');
    data.data.filter((cryptocoin) => {
      if (cryptocoin.rank <= 10) {
        const eachCoin = document.createElement('li');
        eachCoin.innerHTML = `${cryptocoin.name} (${cryptocoin.symbol}): ${cryptocoin.priceUsd}`;
        coinsList.appendChild(eachCoin);
      }
    })
    
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`)
  }
}

window.onload = () => {
  fetchCoins();
}