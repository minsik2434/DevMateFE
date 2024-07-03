import React from 'react'
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import Prism from 'prismjs';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';
import { useRef } from 'react';
import { useEffect } from 'react';


function Viewerbox({initString}) {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.getInstance().setMarkdown(initString);
    }
  }, [initString]);
  return (
    <div>
        <Viewer 
          ref={viewerRef}
          initialValue={initString}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
    </div>
  )
}

export default Viewerbox