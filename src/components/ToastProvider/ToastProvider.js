import React from "react";
import useKeyDown from "../../hooks/";
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

  useKeyDown({ keyCode: "Escape", effect: () => setToasts([]) });

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
