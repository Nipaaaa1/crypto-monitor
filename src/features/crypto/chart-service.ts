import { Chart } from 'chart.js/auto';
import { COIN_ID } from './constants';

let chartInstance: Chart | null = null;

export function updateChart(ctx: CanvasRenderingContext2D, prices: [number, number][], currencyCode: string) {
    const isDayView = prices.length > 0 && (prices[prices.length - 1][0] - prices[0][0]) < 25 * 60 * 60 * 1000;
    
    const labels = prices.map(p => {
        const date = new Date(p[0]);
        return isDayView 
            ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : date.toLocaleDateString();
    });
    const data = prices.map(p => p[1]);

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `Harga ${COIN_ID.toUpperCase()} (${currencyCode})`,
                data: data,
                borderColor: '#f97316',
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index',
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1c1917',
                    titleColor: '#f97316',
                    bodyColor: '#fafaf9',
                    borderColor: '#292524',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: (context) => {
                            let label = context.dataset.label || '';
                            if (label) {
                                label = '';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: currencyCode,
                                }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#78716c', maxTicksLimit: 7 }
                },
                y: {
                    grid: { color: '#292524' },
                    ticks: { 
                        color: '#78716c',
                        callback: (value) => {
                            const val = Number(value);
                            if (val >= 1e12) return (val / 1e12).toFixed(1) + 'T';
                            if (val >= 1e9) return (val / 1e9).toFixed(1) + 'B';
                            if (val >= 1e6) return (val / 1e6).toFixed(1) + 'M';
                            return val;
                        }
                    }
                }
            }
        }
    });
}
