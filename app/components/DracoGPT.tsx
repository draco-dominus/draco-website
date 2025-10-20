/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";

export default function DracoGPT() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "14px 16px",
          borderRadius: "50%",
          border: "none",
          background: "#000",
          color: "#fff",
          fontSize: "20px",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          zIndex: 100,
        }}
      >
        🧠
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            height: "400px",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 99,
          }}
        >
          <div
            style={{
              background: "#000",
              color: "white",
              padding: "10px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>DracoGPT</span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ✖
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: "10px",
              fontSize: "14px",
              color: "#333",
              overflowY: "auto",
            }}
          >
            <p>Welcome to DracoGPT! How can I assist you today?</p>
          </div>

          <div style={{ borderTop: "1px solid #eee", padding: "10px" }}>
            <input
              type="text"
              placeholder="Type a message..."
              style={{
                width: "100%",
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "8px",
                fontSize: "14px",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}