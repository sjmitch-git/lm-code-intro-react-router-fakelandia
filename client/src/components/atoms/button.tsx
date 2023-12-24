import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const variants = {
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  primary: "bg-primary text-light",
  secondary: "bg-secondary",
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  disabled,
  variant = "primary",
  fullWidth = false,
}) => {
  let variantClasses = variants[variant];
  return (
    <button
      className={`btn ${variantClasses} ${fullWidth ? "" : "mx-auto"}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
