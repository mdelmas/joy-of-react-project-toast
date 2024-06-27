import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (message, variant) => {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        message: message,
        variant: variant,
      },
    ]);
  };

  const deleteToast = (id) =>
    setToasts(toasts.filter((toast) => toast.id !== id));

  console.log(toasts);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toasts: toasts,
        createToast: createToast,
        deleteToast: deleteToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default React.memo(ToastProvider);
