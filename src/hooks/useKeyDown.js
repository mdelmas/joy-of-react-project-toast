import React from "react";

function useKeyDown({ keyCode, effect }) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === keyCode) {
        effect();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyCode, effect]);
}

export default useKeyDown;
