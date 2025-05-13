MillionCrypto Mobile App

A cross-platform React Native application built with TypeScript that displays cryptocurrency data in USD. The app provides an infinite-scrolling list of coins, detailed views with historical charts, and customizable theme support for both iOS and Android.

Features

Infinite Scroll List: Fetches pages of cryptocurrencies from Coinlore API using React Query's useInfiniteQuery.

Search & Filter: Filter list by price range and sort parameters.

Detail Screen: Shows current price, 1h/24h/7d changes, market cap, volumes, supply, and a 7-day historical chart.

Real-time Updates: Detail data refetches automatically every minute via refetchInterval.

Error Handling: Dedicated error screen with retry.

Splash Screen: Intro loading screen while initializing.

Settings: Theme toggle (light/dark), manual data refresh, app version info.

About: Application metadata and credits.

Theming: Centralized color and metrics tokens.

Performance: Optimized lists with FlashList, cached API calls, and memoized components.

Documentation: JSDoc comments, typed APIs, and clear folder structure.

Testing (optional): Unit tests for services and components.

Architecture

The codebase follows a layered, OOP-inspired structure:

/src/infrastructure: API client (axiosClient), services (CryptoService, HistoricalService), and React Query hooks.

/src/presentation: UI layer with screens, navigation, components, and theme.

navigation/: React Navigation setup (Stack, Tabs, Drawer).

screens/: All screens (Splash, CryptoList, CryptoDetail, Error, Settings, About).

components/: Reusable components like CryptoCard, CryptoHistoryChart, FloatingSidebar.

theme/: Color palette (Colors), metrics tokens (Metrics).

/src/application: Business logic, view models, and shared utilities.

Data flows from services to hooks to screens, with components purely responsible for rendering.

Folder Structure

src/
├── application/
│   ├── lib/            # Business logic, use cases, providers
│   └── providers/      # Dependency injection providers
├── infrastructure/
│   ├── config/         # axiosClient, environment configs
│   └── queries/        # React Query hooks (useFetchTickers, useFetchTickerDetail, useMarketChart)
└── presentation/
    ├── assets/         # Images, icons, fonts
    ├── components/     # Reusable UI components (CryptoCard, CryptoHistoryChart, etc.)
    ├── feature/        # Feature-specific modules and contexts
    ├── navigation/     # React Navigation setup (Stack, Tab, Drawer)
    ├── screens/        # Screen components (Splash, List, Detail, etc.)
    └── theme/          # Colors, metrics, typography tokens

__tests__/
├── components/        # Unit and snapshot tests for components

android/
ios/
node_modules/

Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/millioncrypto.git
cd millioncrypto

Install dependencies:

yarn install
# or
npm install

iOS setup (macOS only):

cd ios && pod install && cd ..

Run Metro bundler with alias reset:

yarn start --reset-cache

Launch on simulator/device:

iOS: yarn ios (requires Xcode)

Android: yarn android (requires Android SDK)

Scripts

yarn ios – Run on iOS simulator

yarn android – Run on Android emulator

yarn start – Metro bundler

yarn test – Run unit tests (if configured)

yarn lint – ESLint code analysis

Testing

(Optional)

Unit tests for services (fetchTickers, fetchTickerDetail, fetchMarketChart).

Component snapshots for CryptoCard and screens.

Run:

yarn test

Best Practices

TypeScript Strict: Ensure no any types leak.

React Query: Cache and background refetch for real-time data.

Performance: Use FlashList, memoization, and virtualization.

Theming: Centralize colors and metrics for consistency.

Accessibility: Proper accessibilityLabel, focus management on Pressable.

Contributing

Fork the repo

Create a feature branch (git checkout -b feature/xyz)

Commit your changes (git commit -m "feat: add xyz")

Push (git push origin feature/xyz)

Open a Pull Request

Please follow the code style and include tests for new functionality.

License

This project is licensed under the MIT License. Please see the LICENSE file for details.

