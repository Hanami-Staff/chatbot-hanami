import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const BotContext = createContext();

export const BotProvider = ({ children }) => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [reader, setReader] = useState(null);
  const [isNew, setIsNew] = useState(true);

  const startQuestion = () => {
    setIsNew(false);
  };

  useEffect(() => {
    if (question === "") return;

    fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3",
        prompt: question,
        stream: true,
      }),
    })
      .then((response) => {
        if (!response.body) {
          throw new Error("ReadableStream not supported in this browser.");
        }
        const reader = response.body.getReader();
        setReader(reader);
        const decoder = new TextDecoder();

        const read = () => {
          reader
            .read()
            .then(({ done, value }) => {
              if (done) {
                console.log("Stream ended.");
                setIsStreaming(false);
                setQuestion(""); // Reset the question for the next round
                setReader(null);
                return;
              }

              const chunk = decoder.decode(value, { stream: true });
              const data = JSON.parse(chunk);
              if (data.response) {
                if (!isStreaming) setIsStreaming(true);
                setAnswer((prev) => prev + data.response); // update answer to keep contextdata up to date
              }

              read(); // call read again while stream isn't done
            })
            .catch((error) => {
              console.error("Error reading stream:", error);
            });
        };

        read();
      })
      .catch((error) => {
        console.error("Error generating response:", error);
      });
  }, [question]);

  const cancelStream = () => {
    // cancel stream and clean the reader state
    if (reader) {
      reader
        .cancel()
        .then(() => {
          console.log("Stream cancelled.");
          setReader(null);
        })
        .catch((error) => {
          console.error("Error cancelling stream:", error);
        });
    }
  };

  return (
    <BotContext.Provider
      value={{
        isStreaming,
        cancelStream,
        setQuestion,
        answer,
        startQuestion,
        isNew,
      }}
    >
      {children}
    </BotContext.Provider>
  );
};

BotProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
