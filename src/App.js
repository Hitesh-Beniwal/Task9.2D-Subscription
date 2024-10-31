// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Authent } from './Authentication';
import Signup from './Signup';
import Login from './Login';
import Pricing from './Pricing';
import Payment from './Payment';
import PostEditor from './PostEditor';
import MarkdownViewer from './MarkdownViewer';
import Web from './Web';

function App() {
  return (
    <Authent>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/editor" element={<PostEditor />} />
        <Route path="/markdown" element={<MarkdownViewer content="# Sample Markdown Content" />} />
        {/* Add routes for new pages */}
        <Route path="/about" element={<div>About Page Content</div>} />
        <Route path="/contact" element={<div>Contact Page Content</div>} />
        <Route path="/query" element={<div>Query Page Content</div>} />
      </Routes>
    </Authent>
  );
}

export default App;
