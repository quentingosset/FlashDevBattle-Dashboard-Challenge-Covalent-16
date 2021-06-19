const fetch = require('node-fetch');

const APIKEY = 'ckey_4dab9858382a4ce49155d5bfbc2'
const chain_id = 250
const dexname = 'spiritswap'


async function getUniswapLikeData() {
  const url = new URL(`https://api.covalenthq.com/v1/${chain_id}/uniswaplikev2service/${dexname}/pools/?&key=${APIKEY}`)

  // Use Fetch API to get Covalent data
  const resp = await fetch(url)
  const data = await resp.json()
  console.log(data.data.items)
}

getUniswapLikeData()




