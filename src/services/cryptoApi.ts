import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3'

export const cryptoApi = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

export const getCoinPrice = async (coinIds: string | string[]) => {
    // 如果傳進來是字串 → 包成陣列
    // 如果傳進來已是陣列 → 保持不變
    const ids = Array.isArray(coinIds) ? coinIds : [coinIds];

    const { data } = await cryptoApi.get('/simple/price', {
        params: {
            ids: ids.join(','),
            vs_currencies: 'usd',
            include_24hr_vol: true,
            include_24hr_change: true,
            include_market_cap: true,
        }
    })

    return data
};