
import Header from './components/Header/index';
import { Routes, Route } from 'react-router-dom';
import Principal from './components/Principal/index';
import DetailSong from './components/DetailSong/index';

import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './theme/GlobalStyles';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Header />

                <Routes>
                    <Route path="/" element={<Principal />} />
                    <Route path="/song/:id" element={<DetailSong />} />
                </Routes>
            </>
        </ThemeProvider>
    );
}

export default App;
