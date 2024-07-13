import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useChat } from "ai/react";

interface CodeBlockProps {
  language: string;
  codeString: string;
}

const customStyle = {
  // scrollbarWidth: "thin",
  lineHeight: "1.5",
  fontSize: "0.7rem",
  backgroundColor: "#1E1E1E",
  height: "92%",
  scrollbarColor: "#404040 #1E1E1E",
  scrollBehavior: "smooth",
  marginTop: 0,
};

const CodeBlock = ({ language, codeString }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      //@ts-ignore
      customStyle={customStyle}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
