"use client"

import Editor from "@monaco-editor/react";
import { useRef } from "react";


interface CodeEditorProps {
  defaultLanguage?: string;
  defaultValue?: string;
  theme?: "vs-dark" | "light";
  onChange?: (value: string | undefined) => void;
}

export const CodeEditor = ({
  defaultLanguage = "javascript",
  defaultValue = "// Your code here",
  theme = "vs-dark",
  onChange,
}: CodeEditorProps) => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-700">
      <Editor
        height="100%"
        defaultLanguage={defaultLanguage}
        defaultValue={defaultValue}
        theme={theme}
        onMount={handleEditorDidMount}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
}; 