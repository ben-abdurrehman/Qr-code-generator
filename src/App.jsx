import React, { useState, useRef, useEffect } from "react";
import { Input } from "@headlessui/react";
import validator from "validator";
import { toast, ToastContainer } from "react-toastify";
import QRCode from "react-qr-code";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [url, setUrl] = useState("");
  // const [check, setCheck] = useState(false)

  const handleSubmit = () => {
    if (validator.isURL(url)) {
      toast.success("Valid URL! Your QR-Code will generate shortly", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    } else {
      toast.error(
        "Invalid URL! Please enter a correct one to generate its QR-Code",
        {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        }
      );
    }
  };
  return (
    <div
      style={{
        width: "90vw",
        height: "90vh",
        paddingBlock: "30px",
        paddingInline: "50px",
        backgroundColor: "#3b3b3b",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "white", fontSize: "4rem", fontWeight: "800", textAlign: "center" }}>
          Please enter the URL below!
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Input
            style={{
              width: "45%",
              borderRadius: "10px",
              paddingBlock: "20px",
              paddingInline: "20px",
              backgroundColor: "#1c1c1c",
              border: "none",
              fontSize: "1.5rem",
            }}
            type="text"
            onChange={(e) => setUrl(e.target.value)}
          ></Input>
          <button style={{ padding: "20px" }} onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <ToastContainer />
      </div>
      <div>{validator.isURL(url) && <QRCode value={url} size={256} />}</div>
    </div>
  );
};

export default App;
