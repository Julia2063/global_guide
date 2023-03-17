import { useContext, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './components/Header';

import { HomePage } from './pages/HomePage';
import { ServisesPage } from './pages/ServisesPage';
import { ChatPage } from './pages/ChatPage';
import { AboutPage } from './pages/AboutPage';
import { NewsPage } from './pages/NewsPage';
import { Footer } from './components/Footer';
import { RegistrationPage } from './pages/RegistrationPage';
import { AccountPage } from './pages/AccountPage';
import { NewsItemPage } from './pages/NewsItemPage';
import { ServiseItemPage } from './pages/ServiseItemPage';
import { ExplanationsPage } from './pages/ExplanationsPage';
import { ExplanationsItemPage } from './pages/ExplanationsItemPage';
import ScrollToTop from './components/ScrollToTop';

import './style/App.scss';


export function App() {
  const [language, setLanguage] = useState('ukr');
  const [search, setSearch] = useState(null);

  return (
    <div className="App">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        setSearch={setSearch}
      />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"element={<HomePage />}
        />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="services" >
          <Route index element={(<ServisesPage />)} />
          <Route path=":slug" element={(<ServiseItemPage />)} />
        </Route>
        <Route path="chat" element={<ChatPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="news">
          <Route index element={(<NewsPage />)} />
          <Route path=":slug" element={(<NewsItemPage />)} />
        </Route>
        <Route path="explanations"  >
          <Route index element={(<ExplanationsPage />)}/>
          <Route path=":slug" element={(<ExplanationsItemPage />)}/>
        </Route>
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="account" element={<AccountPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

