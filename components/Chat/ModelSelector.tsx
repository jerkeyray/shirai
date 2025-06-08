"use client";

import { useState } from "react";
import { ChatModel } from "./ChatInterface";

interface ModelSelectorProps {
  models: ChatModel[];
  selectedModel: ChatModel;
  onModelChange: (model: ChatModel) => void;
}

export function ModelSelector({
  models,
  selectedModel,
  onModelChange,
}: ModelSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-800/80 border border-gray-600 text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="font-medium">{selectedModel.name}</span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-80 bg-gray-800/95 border border-gray-600 rounded-xl shadow-xl z-20 backdrop-blur-sm">
            <div className="p-2">
              <div className="text-xs text-gray-400 px-3 py-2 font-medium uppercase tracking-wide">
                Select Model
              </div>
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => {
                    onModelChange(model);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedModel.id === model.id
                      ? "bg-gray-600 text-gray-100"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          selectedModel.id === model.id
                            ? "bg-white"
                            : "bg-green-500"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{model.name}</div>
                      <div
                        className={`text-sm mt-1 ${
                          selectedModel.id === model.id
                            ? "text-gray-300"
                            : "text-gray-400"
                        }`}
                      >
                        {model.description}
                      </div>
                    </div>
                    {selectedModel.id === model.id && (
                      <svg
                        className="w-5 h-5 text-gray-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
