import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";
import { useRef, useEffect, useState } from "react";
import { postFormData, postData } from "@/util/Crud";
import useLoginInfoStore from "@/stores/loginInfo";
import { useCookies } from "react-cookie";
function EditorBox({ setContent, content }) {
  const prevImagesRef = useRef([]);
  const [cookies] = useCookies();
  const editorRef = useRef();
  const toolbar = [
    ["heading", "bold", "italic", "strike"],
    ["hr", "quote", "ul", "ol"],
    ["code", "codeblock", "image"],
  ];
  const { grantType, accessToken } = useLoginInfoStore();
  const [editorHeight, setEditorHeight] = useState("500px");
  const onUploadImage = async (blob, callback) => {
    try {
      const url = await (
        await postFormData(
          `${import.meta.env.VITE_API_URL}/image/upload`,
          blob,
          {
            "Content-Type": "multipart/form-data",
            Authorization: `${cookies.grantType} ${cookies.accessToken}`,
          }
        )
      ).data;
      callback(url, "image");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1024) {
        setEditorHeight("300px");
      } else {
        setEditorHeight("500px");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      const instance = editorRef.current.getInstance();
      if (instance.getHTML() !== content) {
        instance.setHTML(content);
      }
    }
  }, [content]);

  useEffect(() => {
    const handleChange = () => {
      const editorInstance = editorRef.current.getInstance();
      const editorHtml = editorInstance.getHTML();
      setContent(editorHtml);
      const currentImages = Array.from(
        new DOMParser()
          .parseFromString(editorHtml, "text/html")
          .querySelectorAll("img")
      ).map((img) => img.src);

      const deletedImages = prevImagesRef.current.filter(
        (src) => !currentImages.includes(src)
      );
      if (deletedImages.length > 0) {
        deletedImages.forEach(async (src) => {
          try {
            await postData(
              `${import.meta.env.VITE_API_URL}/image/delete`,
              {
                imageUrl: src,
              },
              { Authorization: `${grantType} ${accessToken}` }
            );
          } catch (error) {
            console.log(error);
          }
        });
      }

      prevImagesRef.current = currentImages;
    };

    const editorInstance = editorRef.current.getInstance();
    editorInstance.on("change", handleChange);

    const initialHtml = editorInstance.getHTML();
    const initialImages = Array.from(
      new DOMParser()
        .parseFromString(initialHtml, "text/html")
        .querySelectorAll("img")
    ).map((img) => img.src);
    prevImagesRef.current = initialImages;

    return () => {
      editorInstance.off("change", handleChange);
    };
  }, [accessToken, grantType, setContent]);

  return (
    <div>
      <Editor
        initialValue={content}
        previewStyle="vertical"
        height={editorHeight}
        toolbarItems={toolbar}
        initialEditType="wysiwyg"
        hideModeSwitch
        useCommandShortcut={false}
        ref={editorRef}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        hooks={{
          addImageBlobHook: onUploadImage,
        }}
      />
    </div>
  );
}

export default EditorBox;
