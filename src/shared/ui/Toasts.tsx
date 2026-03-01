import { useEffect } from "react";

export type ToastType = "success" | "error" | "info";

type ToastProps = {
  message: string;
  type?: ToastType;
  onClose: () => void;
  duration?: number;
};

export function Toast({
  message,
  type = "success",
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    const id = setTimeout(onClose, duration);
    return () => clearTimeout(id);
  }, [duration, onClose]);

  return (
    <div className="toast toast-end toast-bottom z-50">
      <div
        className={`alert ${
          type === "success"
            ? "alert-success"
            : type === "error"
            ? "alert-error"
            : "alert-info"
        }`}
      >
        <span>{message}</span>
      </div>
    </div>
  );
}
