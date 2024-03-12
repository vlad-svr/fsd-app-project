## Run the project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - run server + frontend project in dev mode
```

----

## Скрипты

- `npm run start` - Run frontend project using webpack dev server
- `npm run start:vite` - Run frontend project using vite
- `npm run start:dev` - Run frontend project using webpack dev server + backend
- `npm run start:dev:vite` - Run frontend project using vite + backend
- `npm run start:dev:server` - Run backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (without minification)
- `npm run lint:ts` - Check ts files by linter
- `npm run lint:ts:fix` - Fix ts files by linter
- `npm run lint:scss` - Check scss files by style linter
- `npm run lint:scss:fix` - Fix scss files by style linter
- `npm run test:unit` - Run unit tests using jest
- `npm run test:ui` - Run screenshot tests using loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests using CI
- `npm run test:ui:report` - Generate the whole report of the screenshot tests
- `npm run test:ui:json` - Generate json report of the screenshot tests
- `npm run test:ui:html` - Generate HTML report of the screenshot tests
- `npm run storybook` - Run Storybook
- `npm run storybook:build` - Build storybook built
- `npm run prepare` - Pre-commit hooks
- `npm run generate:slice` - Script for generation FSD slices

----

## Project architecture

Project has been created in accordance with the Feature sliced design methodology

Link to the documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Translations

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`
4) e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

----

## Linting

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin *eslint-plugin-ulbi-tv-plugin*,
который содержит 3 правила
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Run linters
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from '@/shared/constants/theme'

const meta = {
   title: 'Shared/Button',
   component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
   args: {
      children: 'Text'
   }
}

export const Pure: Story = {
   args: {
      children: 'Text',
      theme: ButtonTheme.PURE
   }
}
```


----

## Project configuration

Для разработки проект содержит 2 конфига:
1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline and pre commit hooks

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Working with data

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----


## Entities (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)


# Tech stack:
* [React](https://reactjs.org/docs/getting-started.html)
* [Typescript](https://www.typescriptlang.org/)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [Storybook](https://storybook.js.org/)
* [Jest](https://jestjs.io/)
* [Loki](https://github.com/oblador/loki)  -  Visual Regression Testing for Storybook
* [i18next](https://www.i18next.com/)
* [ESLint](https://eslint.org/)
* [Stylelint](https://stylelint.io/)

## Architecture
* [Feature-Sliced Design](https://feature-sliced.design/)

# Installation

###### Requirements

* **NodeJS** v18.17.1,
* **NPM** v8.6.0