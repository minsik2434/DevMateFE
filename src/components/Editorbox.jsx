import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import Prism from 'prismjs';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';

function EditorBox() {

    const toolbar = [['heading', 'bold','italic','strike'],['hr','quote','ul','ol'],['code','codeblock']]

    return (
        <Editor
            initialValue=' '
            previewStyle='vertical'
            height='500px'
            toolbarItems={toolbar}
            initialEditType='wysiwyg'
            hideModeSwitch
            useCommandShortcut={true}
            style={{ borderRadius: '20px'}}
            plugins={[colorSyntax,[codeSyntaxHighlight, { highlighter: Prism }]]}
            />
    );
}

export default EditorBox;