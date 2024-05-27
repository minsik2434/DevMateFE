import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import Prism from 'prismjs';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';
import { useRef, useEffect, useState } from 'react';
import apiFunction from '@/util/apiFunction';
function EditorBox({editorRef}) {

    const toolbar = [['heading', 'bold','italic','strike'],['hr','quote','ul','ol'],['code','codeblock','image']]

    const [editorHeight, setEditorHeight] = useState('500px')
    const onUploadImage = async (blob, callback) => {
      try{
        const url = await (await apiFunction.postFormData("http://localhost:8080/image/upload", blob)).data.data;
        callback(url,'image');
      }
      catch(error){
          console.log(error);
      }
    };

    useEffect(() => {
      const handleResize = () => {
        const windowWidth = window.innerWidth
        if (windowWidth <= 1024) {
          setEditorHeight('300px')
        } else {
          setEditorHeight('500px')
        }
      }
  
      window.addEventListener('resize', handleResize)
      handleResize()
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    return (
        <div>
            <Editor
                initialValue=' '
                previewStyle='vertical'
                height={editorHeight}
                toolbarItems={toolbar}
                initialEditType='wysiwyg'
                hideModeSwitch
                useCommandShortcut={false}
                ref={editorRef}
                plugins={[colorSyntax,[codeSyntaxHighlight, { highlighter: Prism }]]}
                hooks={{
                  addImageBlobHook: onUploadImage
                }}
            />
        </div>
    );
}

export default EditorBox;