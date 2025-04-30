const editor = CodeMirror(document.getElementById('editor-container'), {
    mode: 'javascript',
    theme: 'material',
    lineNumbers: true,
    indentUnit: 4,
    tabSize: 4,
    lineWrapping: true,
  });
  
/*
  const editor = CodeMirror(document.getElementById('editor-container'), {
    mode: 'python',  // Only Python language
    theme: 'material-darker',  // VS Code-like dark theme
    lineNumbers: true,
    indentUnit: 4,
    tabSize: 4,
    lineWrapping: true,
    matchBrackets: true,  // Highlights matching brackets
    autoCloseBrackets: true,  // Auto-closes brackets like VS Code
    foldGutter: true,  // Enables code folding
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
});
 CODE EDITOR ADVANCE  */

  document.getElementById('language').addEventListener('change', (event) => {
    const language = event.target.value;
    editor.setOption('mode', language.toLowerCase());
  }); 
  
  document.getElementById('debug-btn').addEventListener('click', async () => {
    const code = editor.getValue();
    const language = document.getElementById('language').value;
  
    const response = await fetch('http://localhost:8002/debug', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, language }),
    });
  
    const data = await response.json();
    document.getElementById('output').innerText = data.result;
  });


