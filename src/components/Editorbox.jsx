import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import Prism from 'prismjs';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';
import { useRef } from 'react';
function EditorBox() {

    const editorRef = useRef();
    const getEditorValue = () => {
      const markdownValue = editorRef.current.getInstance().getHTML();
      console.log(markdownValue);
    }


    const toolbar = [['heading', 'bold','italic','strike'],['hr','quote','ul','ol'],['code','codeblock']]

    return (
        <div>
            <Editor
                initialValue=' '
                previewStyle='vertical'
                height='500px'
                toolbarItems={toolbar}
                initialEditType='wysiwyg'
                hideModeSwitch
                useCommandShortcut={true}
                plugins={[colorSyntax,[codeSyntaxHighlight, { highlighter: Prism }]]}
                ref={editorRef}
            />
            <button onClick={getEditorValue}>입력된 값 보기</button>
        </div>
    );
}

export default EditorBox;