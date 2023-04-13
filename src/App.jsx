import React from "react";
import './App.css';
import { marked } from 'marked';
import hljs from 'highlight.js';

export default function App() {
    return (
        <Previewer />
    );
}

class Previewer extends React.Component {
    constructor(props) {
        super(props);
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function(code, lang) {
              const language = 'javascript';
              return hljs.highlight(code, { language }).value;
            },
            langPrefix: 'hljs language-',
            pedantic: false,
            gfm: true,
            breaks: true
          });
        this.state = {
            textContent: 
            `# Welcome to my React Markdown Previewer!
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
You can write what you want and the markdown renders it, this project was made in react, I hope it can inspire you
        
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![Ysacc Logo](https://cdn-icons-png.flaticon.com/256/7268/7268262.png)`
        }
    }
    updatePreview = (event) => {
        this.setState({
            textContent: event.target.value
        });
    }
    maximizeEditor = () => {
        const previewWindow = document.getElementById('preview-window');
        const editorWindow = document.getElementById('editor-window');
        const maximizeIcon = document.getElementById('editor-max');
        const minimizeIcon = document.getElementById('editor-min');
        previewWindow.style.display='none';
        editorWindow.style.height = '90vh';
        maximizeIcon.style.display = 'none';
        minimizeIcon.style.display = 'block';
    }
    minimizeEditor = () => {
        const previewWindow = document.getElementById('preview-window');
        const editorWindow = document.getElementById('editor-window');
        const maximizeIcon = document.getElementById('editor-max');
        const minimizeIcon = document.getElementById('editor-min');
        previewWindow.style.display='block';
        editorWindow.style.height = '230px';
        maximizeIcon.style.display = 'block';
        minimizeIcon.style.display = 'none';
    }
    maximizePreview = () => {
        const editorWindow = document.getElementById('editor-window');
        const maximizeIcon = document.getElementById('preview-max');
        const minimizeIcon = document.getElementById('preview-min');
        editorWindow.style.display = 'none';
        maximizeIcon.style.display = 'none';
        minimizeIcon.style.display = 'block';
    }
    minimizePreview = () => {
        const editorWindow = document.getElementById('editor-window');
        const maximizeIcon = document.getElementById('preview-max');
        const minimizeIcon = document.getElementById('preview-min');
        editorWindow.style.display = 'block';
        maximizeIcon.style.display = 'block';
        minimizeIcon.style.display = 'none';
    }
    render() {
        const markup = marked.parse(this.state.textContent, { gfm: true, breaks: true})
        const defaultMarkdown = { __html: markup };
        return (
            <div id="wrapper">
                <div className="window" id="editor-window">
                <div className="title-bar">
                    <div className="title-bar-text">Editor</div>
                    <div className="title-bar-controls">
                        <i id="editor-max" onClick={this.maximizeEditor} className="fa-sharp fa-solid fa-minimize"></i>
                        <i id="editor-min" onClick={this.minimizeEditor} className="fa-sharp fa-solid fa-maximize"></i>
                    </div>
                </div>
                    <textarea 
                        name="editor" 
                        id="editor"
                        onChange={this.updatePreview}
                        value={this.state.textContent}>
                    </textarea>
                </div>
                <div className="window"  id="preview-window">
                    <div className="title-bar">
                        <div className="title-bar-text">Previewer</div>
                        <div className="title-bar-controls">
                        <i id="preview-max" onClick={this.maximizePreview} className="fa-sharp fa-solid fa-minimize"></i>
                        <i id="preview-min" onClick={this.minimizePreview} className="fa-sharp fa-solid fa-maximize"></i>
                        </div>
                    </div>
                    <div id="preview" dangerouslySetInnerHTML={defaultMarkdown} />
                </div>
                <div>by <a target="_blank" href="https://github.com/ysacc">Ysacc</a></div>
            </div>
        );
    }
}
