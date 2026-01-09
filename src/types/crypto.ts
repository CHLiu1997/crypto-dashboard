export interface CoinPriceResponse {
    usd: number;
    usd_24h_vol: number;
    usd_24h_change: number;
    usd_market_cap: number;
};

export interface CoinData {
    id: string;
    symbol: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
    volume_24h: number;
    market_cap: number;
}