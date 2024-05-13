import React from 'react'
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import Prism from 'prismjs';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';

function Viewerbox() {
  return (
    <div className=''>
        <Viewer 
          initialValue='<p>큰일났습니다 도와주세요</p><div data-language="java" class="toastui-editor-ww-code-block-highlighting"><pre class="language-java"><code data-language="java" class="language-java"><span class="token keyword">int</span> <span class="token keyword">public</span> <span class="token keyword">void</span> main <span class="token class-name">String</span> <span class="token keyword">void</span> main <span class="token keyword">final</span> optional<span class="token generics punctuation">&lt;</span><span class="token generics class-name">Main</span><span class="token generics punctuation">&gt;</span></code></pre></div>'
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
    </div>
  )
}

export default Viewerbox