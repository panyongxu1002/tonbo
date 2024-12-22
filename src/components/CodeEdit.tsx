"use client";
import React from "react";
import Editor, { loader } from '@monaco-editor/react';


loader.config({
  paths: {
    vs: '/vs',
  },
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
    <Editor
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
