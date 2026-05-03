import { atom, computed } from 'nanostores';
import { actions } from 'astro:actions';
import { currencies, SUPPORTED_COINS } from './constants';

export const $coinId = atom('bitcoin');
export const $currencyCode = atom('USD');
export const $timeframe = atom('7');

export const $currentCurrency = computed([$currencyCode], (code) => {
    return currencies.find(c => c.code === code) || currencies[0];
});

export const $currentCoin = computed([$coinId], (id) => {
    return SUPPORTED_COINS.find(c => c.id === id) || SUPPORTED_COINS[0];
});

export const $cryptoData = atom<{ statsData: any, chartData: any } | null>(null);
export const $isLoading = atom(false);
export const $error = atom<string | null>(null);

async function fetchData() {
    const coinId = $coinId.get();
    const currency = $currentCurrency.get();
    const timeframe = $timeframe.get();

    $isLoading.set(true);
    $error.set(null);

    try {
        const { data, error } = await actions.getCoinData({
            coinId,
            vsCurrency: currency.cgId,
            days: timeframe
        });

        if (error) {
            $error.set(error.message || 'Failed to fetch data');
            return;
        }

        $cryptoData.set(data);
    } catch (err) {
        $error.set('An unexpected error occurred');
        console.error(err);
    } finally {
        $isLoading.set(false);
    }
}

// Watch for changes and fetch data
$coinId.listen(fetchData);
$currencyCode.listen(fetchData);
$timeframe.listen(fetchData);

// Initial fetch
if (typeof window !== 'undefined') {
    fetchData();
}
