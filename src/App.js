import React, {useState} from 'react';
import './App.css';
import { marked } from 'marked';

function App(){
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  function handleChange(e){
    setMarkdown(e.target.value);
  }

  return(
    <div className='App'>
      <textarea id='editor' value={markdown} onChange={handleChange}></textarea>
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>

    </div>
  );
}
 
const defaultMarkdown = `
# Başlık 1

## Başlık 2

[Bir link](https://www.example.com)

\`Kod örneği\`

\`\`\`
Kod bloğu
\`\`\`

- Liste öğesi
- Bir başka liste öğesi

> Alıntı

![Bir resim](https://image.pngaaa.com/875/2507875-small.png)

**Kalın metin**
`;





export default App;
