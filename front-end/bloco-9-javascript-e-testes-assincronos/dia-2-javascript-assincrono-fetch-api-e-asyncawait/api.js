const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  try {
    const response = await fetch(url)
    const data = await response.json();
    console.log(data.data);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`)
  }
}

fetchCoins()