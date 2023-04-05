import React, { useState } from 'react';
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
import { QuestionsItemPage } from './pages/QuestionsItemPage';

import './style/App.scss';

import questions from './api/questions.json';
import { CitizenshipPage } from './pages/СitizenshipPage';
import { CitizenshipItemPage } from './pages/CitizenshipItemPage';

export function App() {

  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"element={<HomePage />}
        />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="services" >
          <Route index element={(<ServisesPage />)} />
          <Route path="lehalizatsiia-v-ukraini-hromadianstvo" >
            <Route index  element={<CitizenshipPage />} />
            <Route path=":slug"  element={(<CitizenshipItemPage />)} />
          </Route>
          <Route path=":slug" element={(<ServiseItemPage />)} />

        </Route>
        <Route path="chat" element={<ChatPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="news">
          <Route index element={(<NewsPage />)} />
          <Route path=":slug" element={(<NewsItemPage />)} />
        </Route>
        <Route path="explanations">
          <Route index element={(<ExplanationsPage />)}/>
          <Route path=":slug" element={(<ExplanationsItemPage />)}/>
        </Route>
        <Route path="registration" element={<RegistrationPage />} />
       
        <Route path="account" element={<AccountPage />} />
        {questions.map(question => {
          return(
            <Route 
              path=":slug" 
              key={question.id} 
              element={(<QuestionsItemPage />)}
            />
          );
        })}
      </Routes>

      <Footer />
    </div>
  );
}

