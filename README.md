
# MillionCrypto Mobile App

A cross-platform React Native application built with TypeScript that displays cryptocurrency data in USD. The app provides an infinite-scrolling list of coins, detailed views with historical charts, and customizable theme support for both iOS and Android.

## Features

- Infinite Scroll List using Coinlore API and React Query's useInfiniteQuery
- Search & Filter functionality
- Detail Screen with price, market cap, volume, supply, and 7-day historical chart
- Real-time Updates with auto-refetch every minute
- Error Handling & Retry UI
- Splash Screen on startup
- Theme toggle (light/dark)
- About section with app info
- Performance optimized with FlashList and caching
- Typed APIs and structured documentation
- Optional unit tests

## Architecture

- application/: business logic & providers
- infrastructure/: API clients & React Query hooks
- presentation/: UI components, navigation, screens, themes
- services → hooks → screens (OOP-inspired flow)

## Folder Structure
```bash
src/
├── application/
│   ├── lib/
│   └── providers/
├── infrastructure/
│   ├── config/
│   └── queries/
└── presentation/
    ├── assets/
    ├── components/
    ├── feature/
    ├── navigation/
    ├── screens/
    └── theme/
__tests__/
android/
ios/

```

## Installation
```bash
git clone https://github.com/yourusername/millioncrypto.git
cd millioncrypto
yarn install
cd ios && pod install && cd ..
yarn start --reset-cache
yarn ios  # or yarn android
```

## Scripts

- yarn ios
- yarn android
- yarn start
- yarn test
- yarn lint

## Testing

yarn test

## Best Practices

- TypeScript strict mode
- React Query caching & refetching
- FlashList for optimized lists
- Centralized theming
- Accessibility best practices

## Contributing

Fork → Feature Branch → Commit → Push → PR

## License

MIT License
