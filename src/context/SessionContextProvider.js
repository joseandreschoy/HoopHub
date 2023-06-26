import { SessionContext } from "./SessionContext";
import { useState } from "react";

function SessionContextProvider({ children }) {
  const [session, setSession] = useState(getStoredSession());

  function getStoredSession() {
    const session = localStorage.getItem("session");
    if (session) {
      return JSON.parse(session);
    }
    return null;
  }

  const setStoredSession = (session) => {
    localStorage.setItem("session", JSON.stringify(session));
    setSession(session);
  };

  return (
    <SessionContext.Provider value={[session, setStoredSession]}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContextProvider;
