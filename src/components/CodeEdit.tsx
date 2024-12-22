"use client";

import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";

interface MySQLEditorProps {
  value?: string; // 初始值
  onChange?: (value: string) => void; // 内容变化的回调函数
  height?: string; // 编辑器高度
  width?: string; // 编辑器宽度
  disabled?: boolean; // 是否禁用
}

const CodeEdit: React.FC<MySQLEditorProps> = ({
  value = "",
  onChange,
  height = "400px",
  width = "100%",
  disabled,
}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const monacoInstanceRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null
  );

  useEffect(() => {
    if (editorRef.current) {
      // 创建 Monaco Editor 实例
      const editor = monaco.editor.create(editorRef.current, {
        value: value,
        language: "sql",
        theme: "vs-dark", // 可以改成其他主题，例如 "vs" 或 "hc-black"
        automaticLayout: true, // 自动布局
        foldingStrategy: "indentation", // 折叠方式  auto | indentation
        readOnly: disabled, // 只读
        renderLineHighlight: "all", // 行亮
        selectOnLineNumbers: true, // 显示行号
        contextmenu: true,
        fontSize: 14, // 字体大小
        scrollBeyondLastLine: false, // 取消代码后面一大段空白
        overviewRulerBorder: false, // 不要滚动条的边框
      });

      // 存储编辑器实例
      monacoInstanceRef.current = editor;

      // 添加内容变化监听
      const disposable = editor.onDidChangeModelContent(() => {
        const currentValue = editor.getValue();
        if (onChange) {
          onChange(currentValue);
        }
      });

      // 清理副作用
      return () => {
        disposable.dispose();
        editor.dispose();
      };
    }
  }, [value, onChange]);

  // 如果外部 value 发生变化，更新编辑器内容
  useEffect(() => {
    const editor = monacoInstanceRef.current;
    if (editor && value !== editor.getValue()) {
      editor.setValue(value || "");
    }
  }, [value]);

  return (
    <div
      ref={editorRef}
      style={{
        height: height,
        width: width,
      }}
    />
  );
};

export default CodeEdit;
