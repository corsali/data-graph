import React from "react";

export type VNButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const VNButton: React.FC<VNButtonProps> = ({ ...props }) => (
  <button
    className="bg-amber-500 transition-all duration-200 hover:bg-amber-400 rounded-lg drop-shadow-md hover:drop-shadow-lg px-3 py-2 m-3 active:bg-amber-600 active:shadow-inner active:drop-shadow-none"
    {...props}
  />
);
