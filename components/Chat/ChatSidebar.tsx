"use client";

import { useState } from "react";

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewChat: () => void;
}

export function ChatSidebar({ isOpen, onClose, onNewChat }: ChatSidebarProps) {
  const [chatHistory] = useState([
    {
      id: "1",
      title: "Getting started with AI",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      preview: "How does artificial intelligence work?",
    },
    {
      id: "2",
      title: "JavaScript Best Practices",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      preview: "What are some modern JavaScript best practices?",
    },
    {
      id: "3",
      title: "React Components",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      preview: "Help me understand React functional components",
    },
    {
      id: "4",
      title: "Database Design",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      preview: "What are the principles of good database design?",
    },
  ]);

  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60),
    );

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;

    return date.toLocaleDateString();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:relative inset-y-0 left-0 z-50 w-80 bg-gray-900 border-r border-gray-800 transform transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100">
              Chat History
            </h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* New Chat Button */}
          <div className="p-4">
            <button
              onClick={() => {
                onNewChat();
                onClose();
              }}
              className="w-full flex items-center gap-3 bg-gray-700 hover:bg-gray-600 text-gray-100 px-4 py-3 rounded-lg transition-colors border border-gray-600"
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              New Chat
            </button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 pb-4">
              <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
                Recent Chats
              </h3>
              <div className="space-y-2">
                {chatHistory.map((chat) => (
                  <div key={chat.id} className="relative group">
                    <button
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors border border-transparent hover:border-gray-600 pr-10"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-gray-200 font-medium truncate">
                            {chat.title}
                          </h4>
                          <p className="text-sm text-gray-400 truncate mt-1">
                            {chat.preview}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            {formatRelativeTime(chat.timestamp)}
                          </p>
                        </div>
                      </div>
                    </button>
                    <span
                      role="button"
                      tabIndex={0}
                      aria-label="Delete chat"
                      className="absolute top-1/2 right-3 -translate-y-1/2 opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-300 transition-all rounded cursor-pointer bg-transparent"
                      onClick={() => {/* handle delete here */}}
                      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') {/* handle delete here */} }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium truncate">User Account</p>
                <p className="text-xs truncate">Manage settings</p>
              </div>
              <button className="p-1 hover:bg-gray-800 rounded transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
