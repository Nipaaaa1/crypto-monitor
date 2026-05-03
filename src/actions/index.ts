import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import { COIN_ID } from '../features/crypto/constants';
import { COINGECKO_API_KEY } from 'astro:env/server';

export const server = {
  getCoinData: defineAction({
    input: z.object({
      vsCurrency: z.string(),
      days: z.string().optional().default('7'),
    }),
    handler: async (input) => {
      try {
        const statsRes = await fetch(`https://api.coingecko.com/api/v3/coins/${COIN_ID}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`, {
          headers: {
            "x-cg-demo-api-key": COINGECKO_API_KEY
          }
        });
        const statsData = await statsRes.json();

        const chartRes = await fetch(`https://api.coingecko.com/api/v3/coins/${COIN_ID}/market_chart?vs_currency=${input.vsCurrency}&days=${input.days}`, {
          headers: {
            "x-cg-demo-api-key": COINGECKO_API_KEY
          }
        });
        const chartData = await chartRes.json();

        return { statsData, chartData };
      } catch (error) {
        console.error('Error fetching data from CoinGecko:', error);
        throw new Error('Failed to fetch coin data');
      }
    },
  }),
};
