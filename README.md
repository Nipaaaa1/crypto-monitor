# 🪙 Crypto Monitor

A modern, responsive cryptocurrency monitoring dashboard built with **Astro 6**, **Tailwind CSS 4**, and **Chart.js**. This application provides real-time market data and price analysis for popular cryptocurrencies.

## 🚀 Features

- **Multi-Currency Support**: View prices in **USD**, **IDR**, and **EUR**.
- **Supported Assets**: Track **Bitcoin (BTC)**, **Ethereum (ETH)**, **Solana (SOL)**, and **Dogecoin (DOGE)**.
- **Interactive Charts**: Visualize price trends over different timeframes (24h, 7d, 30d).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens using Tailwind CSS 4.
- **Server-Side Data Fetching**: Utilizes **Astro Actions** for secure and efficient API interactions.

## 🛠️ Tech Stack

- **Framework**: [Astro 6](https://astro.build/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (using the new Vite plugin)
- **Charting**: [Chart.js](https://www.chartjs.org/)
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon) (Lucide collection)
- **API**: [CoinGecko API](https://www.coingecko.com/en/api)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js**: v22.12.0 or higher
- **pnpm**: Recommended package manager
- **CoinGecko API Key**: A free demo API key

## ⚙️ Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd crypto-monitor
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your CoinGecko API key:
   ```env
   COINGECKO_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   pnpm dev
   ```
   The application will be available at `http://localhost:4321`.

## 📁 Project Structure

```text
src/
├── actions/             # Astro Actions for server-side API calls
├── assets/              # Global styles and static assets
├── features/            # Feature-based architecture
│   └── crypto/          # Crypto feature logic and components
│       ├── components/  # Feature-specific Astro components
│       ├── chart-service.ts # Chart.js initialization logic
│       ├── constants.ts     # Supported coins and currencies
│       └── utils.ts         # Formatting and helper functions
├── layouts/             # Shared page layouts
└── pages/               # Application routes
```

## 🧞 Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts local dev server at `localhost:4321` |
| `pnpm build` | Build your production site to `./dist/` |
| `pnpm preview` | Preview your build locally |
| `pnpm astro ...` | Run Astro CLI commands |

## 📄 License

This project is open-source and available under the MIT License.
