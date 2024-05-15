// pages/htmlPage.js
import React from 'react';
import { readFileSync } from 'fs';

function HtmlPage() {
    // Read the HTML file synchronously
    const htmlContent = readFileSync('public/example.html', 'utf-8');

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
}

export default HtmlPage;
