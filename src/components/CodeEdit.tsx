"use client";
import dynamic from 'next/dynamic';
import React from "react";

// 动态导入 Monaco Editor
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
});

interface MySQLEditorProps {
  value?: string;
  onChange?: (value: string | undefined) => void;
  height?: string;
  width?: string;
  disabled?: boolean;
}

const CodeEdit: React.FC<MySQLEditorProps> = ({
  value = "",
  onChange,
  height = "400px",
  width = "100%",
  disabled,
}) => {
  return (
    <MonacoEditor
      height={height}
      width={width}
      language="sql"
      theme="vs-dark"
      value={value}
      onChange={onChange}
      options={{
        automaticLayout: true,
        foldingStrategy: "indentation",
        readOnly: disabled,
        renderLineHighlight: "all",
        selectOnLineNumbers: true,
        contextmenu: true,
        fontSize: 14,
        scrollBeyondLastLine: false,
        overviewRulerBorder: false,
      }}
    />
  );
};

export default CodeEdit;
