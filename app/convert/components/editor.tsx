"use client";
import Monaco from "@monaco-editor/react";
import React, { useState } from "react";
import CodeBlock from "./code-block";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Sidebar from "./sidebar";

interface IEditorPaddingOptions {
  bottom?: number;
  top?: number;
}

const options = {
  padding: {
    bottom: 10,
    top: 10,
  },
  minimap: {
    enabled: false,
  },
};

const Editor = () => {
  const [response, setResponse] = useState("");
  // we only strip first if any backicks
  const [isCharging, setIsCharging] = useState(false);
  const [value, setValue] = useState("");
  // const { messages } = useChat();
  const params = useSearchParams();
  const to = params.get("to");
  const [isResponseCopied, setIsResponseCopied] = useState(false);
  const [isInputCopied, setIsInputCopied] = useState(false);
  const router = useRouter();

  const submit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const payload = {
      to,
      prompt: value,
    };

    if (value.length < 1) {
      setResponse("Please enter the code");
      return;
    }

    setIsCharging(true);
    setResponse("Generating your response...");

    const call = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(payload),
    });

    const res = await call.json();

    // const args = JSON.parse(res.args) as { code: string; lang: string };

    // if (Boolean(args)) {
    //   console.log(args);

    //   // setResponse(args.code);
    //   setIsCharging(false);
    // }

    setIsCharging(false);
    setResponse(res);
  };

  const copyResponseToClipboard = () => {
    navigator.clipboard
      .writeText(response)
      .then(() => {
        setIsResponseCopied(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const copyInputToClipboard = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setIsInputCopied(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <main className="lg:h-[100dvh] h-full bg-neutral-900 flex flex-col gap-5  w-full">
      <section className="w-full flex lg:flex-row flex-col">
        <Sidebar />
        <article className="w-full flex flex-col gap-5 overflow-x-hidden p-5">
          <div className="flex lg:flex-row flex-col gap-5 w-full">
            <section className="lg:w-[50%] w-full lg:h-[80dvh] h-[60dvh]  flex flex-col overflow-hidden  rounded-xl">
              <div className="lg:h-[8%] h-[10%] px-3 bg-neutral-800 w-full flex items-center justify-between">
                <h2 className="text-yellow-400 text-sm">Input</h2>
                <div className="flex items-center">
                  <Clipboard
                    onClick={() => copyInputToClipboard()}
                    strokeWidth={2}
                    className={`${
                      isInputCopied ? "hidden" : "flex"
                    } lg:w-4 lg:h-4 w-5 h-5 text-neutral-400 cursor-pointer`}
                  />

                  <ClipboardCheck
                    onClick={() => copyInputToClipboard()}
                    strokeWidth={2}
                    className={`${
                      isInputCopied ? "flex" : "hidden"
                    } lg:w-4 lg:h-4 w-5 h-5 text-yellow-500 cursor-pointer`}
                  />
                </div>
              </div>
              <Monaco
                height="92%"
                theme="vs-dark"
                language="javascript"
                options={options}
                onChange={(value) => {
                  if (value) {
                    setValue(value);
                  }
                }}
              />
            </section>
            <section className="lg:w-[50%] w-full lg:h-[80dvh] h-[60dvh] overflow-hidden flex flex-col  rounded-xl">
              <div className="lg:h-[8%] h-[13%] bg-neutral-800 w-full flex items-center px-3 justify-between">
                <h2 className="text-yellow-400 text-sm">Output</h2>
                <div className="flex items-center">
                  <Clipboard
                    onClick={() => copyResponseToClipboard()}
                    strokeWidth={2}
                    className={`${
                      isResponseCopied ? "hidden" : "flex"
                    } w-5 h-5 lg:h-4 lg:w-4 text-neutral-400 cursor-pointer`}
                  />

                  <ClipboardCheck
                    onClick={() => copyResponseToClipboard()}
                    strokeWidth={2}
                    className={`${
                      isResponseCopied ? "flex" : "hidden"
                    }  lg:w-4 lg:h-4 w-5 h-5 text-yellow-500 cursor-pointer`}
                  />
                </div>
              </div>

              <CodeBlock language="jsx" codeString={response} />
            </section>
          </div>

          <div className="flex items-center justify-between gap-5">
            <button
              onClick={() => router.back()}
              className="rounded-md w-[50%] text-sm bg-[#252525] p-2 font-semibold text-neutral-300"
            >
              Change language
            </button>
            <button
              disabled={isCharging}
              className="disabled:bg-yellow-700 w-[50%] disabled:cursor-not-allowed duration-300 transition-all text-neutral-800 font-semibold bg-yellow-500 text-sm   p-2 rounded-md"
              onClick={(e) => {
                submit(e);
              }}
            >
              Convert
            </button>
          </div>
        </article>
      </section>

      {/* {messages.map((message) => {
        return (
          <div key={message.id}>
            <p>{message.content}</p>
          </div>
        );
      })} */}
    </main>
  );
};

export default Editor;
