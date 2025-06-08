"use client";

import { useState, KeyboardEvent } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Input Container */}
          <div className="flex items-end gap-3 bg-gray-800/80 border border-gray-600 rounded-xl p-3 focus-within:border-gray-500 transition-colors shadow-sm">
            {/* Attach Button */}
            <button
              className="p-2 text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
              disabled={isLoading}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </button>

            {/* Text Input */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Message ChatGPT"
              className="flex-1 bg-transparent text-gray-100 placeholder-gray-400 resize-none focus:outline-none min-h-[24px] max-h-32 py-1"
              rows={1}
              disabled={isLoading}
              style={{
                height: "auto",
                minHeight: "24px",
                maxHeight: "128px",
                overflowY: message.split("\n").length > 3 ? "auto" : "hidden",
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = Math.min(target.scrollHeight, 128) + "px";
              }}
            />

            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={!message.trim() || isLoading}
              className={`p-2 rounded-lg transition-all flex-shrink-0 ${
                message.trim() && !isLoading
                  ? "bg-gray-600 text-gray-100 hover:bg-gray-500 shadow-sm"
                  : "bg-gray-700 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isLoading ? (
                <svg
                  className="w-5 h-5 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Character Counter */}
          <div className="flex justify-between items-center mt-2 px-1">
            <div className="text-xs text-gray-500">
              {message.length > 0 && (
                <span className={message.length > 4000 ? "text-red-400" : ""}>
                  {message.length}/4000
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500">
              <kbd className="px-1.5 py-0.5 text-xs bg-gray-700 border border-gray-600 rounded">
                Enter
              </kbd>{" "}
              to send •{" "}
              <kbd className="px-1.5 py-0.5 text-xs bg-gray-700 border border-gray-600 rounded">
                Shift+Enter
              </kbd>{" "}
              for new line
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        {message.length === 0 && (
          <div className="flex gap-2 mt-3 flex-wrap justify-center">
            <button
              onClick={() =>
                setMessage("Explain this concept in simple terms: ")
              }
              className="text-xs bg-gray-800 text-gray-300 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-gray-600"
            >
              📚 Explain
            </button>
            <button
              onClick={() => setMessage("Help me write a ")}
              className="text-xs bg-gray-800 text-gray-300 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-gray-600"
            >
              ✍️ Write
            </button>
            <button
              onClick={() => setMessage("Analyze this: ")}
              className="text-xs bg-gray-800 text-gray-300 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-gray-600"
            >
              🔍 Analyze
            </button>
            <button
              onClick={() => setMessage("Generate ideas for ")}
              className="text-xs bg-gray-800 text-gray-300 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-gray-600"
            >
              💡 Ideas
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
