import React from 'react'
import { useState } from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
          - That look like this.


  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  ![Alt Text](data:image/png;base64,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)

  **This text is bold.**`);

  return (
    <div className="d-flex row justify-content-center text-center" style={{ backgroundColor: '#d9b18e' }}>

      <textarea className="" id="editor" style={{ width: '50vw', height: '10rem', backgroundColor: "#f6eee3", margin: '1rem'}} onChange={(event) => {
        setText(event.target.value)
        }}
        value={text}
        placeholder='
        ** Hello'
      ></textarea>

      <div className="" id="preview" style={{ width: '60vw', backgroundColor: '#f6eee3' }}
      dangerouslySetInnerHTML={{
        __html: marked(text),
      }}></div>

    </div>
  );
}

export default App;
