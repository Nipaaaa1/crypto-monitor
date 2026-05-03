export function formatCurrency(value: number, code: string) {
    return new Intl.NumberFormat(code === 'IDR' ? 'id-ID' : 'en-US', {
        style: 'currency',
        currency: code,
        notation: value > 1000000 ? 'compact' : 'standard',
        maximumFractionDigits: 2
    }).format(value);
}
