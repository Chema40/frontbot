import { useState, useEffect, useRef, useCallback } from "react";
import Core from "@landbot/core";
import type { Message } from "@landbot/core/dist/src/types";

interface ChatMessage {
  key: string;
  text?: string;
  author: "bot" | "user";
  timestamp: number;
  type: string;
}

export const EventsPage = () => {
  const [messages, setMessages] = useState<Record<string, ChatMessage>>({});
  const [input, setInput] = useState("");
  const [config, setConfig] = useState(null);
  const core = useRef<Core | null>(null);

  useEffect(() => {
    fetch("https://chats.landbot.io/u/H-441480-B0Q96FP58V53BJ2J/index.json")
      .then((res) => res.json())
      .then(setConfig);
  }, []);

  useEffect(() => {
    if (config) {
      core.current = new Core(config);
      core.current.pipelines.$readableSequence.subscribe((data: Message) => {
        setMessages(
          (messages) =>
          ({
            ...messages,
            [data.key]: parseMessage(data),
          } as Record<string, ChatMessage>)
        );
      });

      core.current.init().then((data) => {
        setMessages(parseMessages(data.messages));
      });
    }
  }, [config]);

  useEffect(() => {
    const container = document.getElementById("landbot-messages-container");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);


  const submit = useCallback(() => {
    if (input !== "" && core.current) {
      core.current.sendMessage({ message: input });
      setInput("");
    }
  }, [input]);

  return (
    <div className="landbot-chat">
      <div
        className="landbot-messages-container"
        id="landbot-messages-container"
      >
        <header className="chat-header">
          <h1>Events chatbot</h1>
        </header>
        {Object.values(messages)
          .filter(messagesFilter)
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((message) => (
            <div
              key={message.key}
              className={`flex py-2 items-end ${message.author === "bot" ? "justify-start" : "justify-end"
                }`}
            >
              {message.author === "bot" && (
                <div className="mr-2">
                  <div className="h-10 w-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-calendar-days" />
                  </div>
                </div>
              )}
              <div
                className={`rounded-lg px-4 py-1  max-w-xs ${message.author === "bot"
                  ? "bg-indigo-600 text-white"
                  : "bg-green-600 text-white"
                  }`}
              >
                <p className="text-base leading-none relative top-[7px]">{message.text}</p>
              </div>
              {message.author !== "bot" && (
                <div className="ml-2">
                  <div className="h-10 w-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-face-smile-wink" />
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="landbot-input bg-white rounded-xl">
        <input
          className="flex-grow border-none rounded-md outline-none text-gray-700 placeholder-gray-400 h-10 pl-2"
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submit();
            }
          }}
          placeholder="Type here..."
          type="text"
          value={input}
        />
        <button
          className="ml-2 bg-indigo-600 text-white rounded-md px-4 h-10 flex items-center justify-center hover:bg-indigo-700 transition disabled:opacity-50"
          disabled={input === ""}
          onClick={submit}
          type="button"
        >
          <span className="mr-2">Send</span>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

function parseMessage(data: Message): ChatMessage {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? "bot" : "user",
    timestamp: data.timestamp,
    type: data.type,
  };
}

function parseMessages(
  messages: Record<string, Message>
): Record<string, ChatMessage> {
  return Object.values(messages).reduce((obj, next) => {
    obj[next.key] = parseMessage(next);
    return obj;
  }, {} as Record<string, ChatMessage>);
}

function messagesFilter(data: ChatMessage) {
  return ["text", "dialog"].includes(data.type);
}

function scrollBottom(container: HTMLElement | null) {
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }
}