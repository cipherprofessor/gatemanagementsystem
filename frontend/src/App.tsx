import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../../frontend/src/components/Layout/Layout';
import GatepassForm from './components/Bolt/GatePass/GatepassForm';
import Dashboard from './pages/Dashboard/Dashboard';
import { SidebarDemo } from './components/Accenture/SlideComponent/SidebarDemo';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          // <Layout>
            <SidebarDemo />
          // </Layout>
        } />
        <Route path="/create-pass" element={
          <Layout>
            <GatepassForm />
          </Layout>
        } />
        <Route path="/visitors" element={
          <Layout>
            <div className="p-4">Visitors Page (Coming Soon)</div>
          </Layout>
        } />
        <Route path="/passes" element={
          <Layout>
            <div className="p-4">Passes Page (Coming Soon)</div>
          </Layout>
        } />
        <Route path="/settings" element={
          <Layout>
            <div className="p-4">Settings Page (Coming Soon)</div>
          </Layout>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}