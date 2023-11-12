import './App.css';
import React from 'react'
import { useState } from 'react';
import { marked } from 'marked';

function App() {

  const [text, setText] = useState(`
  # Heading (H1 Size) 
  ## Subheading (H2 Size) 
  [Visit OpenAI](https://www.openai.com/) 
  Use backticks to highlight \`inline code\`.
  - This is a list item
  > This is a blockquote.
  ![Alt Text](https://example.com/image.jpg)
  **This text is bold.**`)

  return (
    <div className="App">
      <textarea id="editor" onChange={(event) => {
        setText(event.target.value)
        }}
        value={text}
        placeholder='
        ** Hello'
      ></textarea>
      <div id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(text),
      }}></div>
    </div>
  );
}

export default App;
