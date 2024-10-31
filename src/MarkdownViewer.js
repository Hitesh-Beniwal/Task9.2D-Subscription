// src/components/MarkdownViewer.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import './markdown.css';

const MarkdownViewer = ({ content }) => {
    return (
        <div className="markdown-viewer">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default MarkdownViewer;
