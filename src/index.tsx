import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n'
import './app/styles/index.scss'
import App from './app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const container = document?.getElementById('root')
const root = createRoot(container)

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)
