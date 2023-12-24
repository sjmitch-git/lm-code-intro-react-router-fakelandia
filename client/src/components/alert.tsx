import React from "react";

interface AlertProps {
  message?: string;
  status?: "info" | "success" | "warning" | "error";
  title?: string;
}

const statuses = {
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
};

const Alert: React.FC<AlertProps> = ({ message, status = "info", title }) => {
  let statusClasses = `${statuses[status]} text-light`;
  return (
    <blockquote
      className={`alert group relative px-4 py-2 rounded-md mb-8 ${statusClasses}`}
      data-testid="alert"
      role="alert"
    >
      {title && <h4 className="mt-2 mb-0 uppercase font-bold opacity-85">{title}</h4>}
      <div className="mb-4 mt-4">{message}</div>
    </blockquote>
  );
};

export default Alert;
