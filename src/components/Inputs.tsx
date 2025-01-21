"use client";

import React, { useRef, useState } from "react";

import { IconName } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";

interface CustomInputProps {
  value: string;
  setValue: (_value: string) => void;
  placeholder?: string;
  className?: string;
  showClearButton?: boolean;
  type?: string;
  icon?: IconName;
  maxLength?: number;
  label?: string;
  disabled?: boolean;
}

export default function TextInput({
  value,
  setValue,
  placeholder,
  className,
  icon,
  maxLength,
  label,
  type = "text",
  showClearButton = false,
  disabled = false,
}: CustomInputProps) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<null | HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          htmlFor={label}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}

      <div
        onClick={() => ref.current?.focus()}
        className={cn(
          "relative w-full h-12 rounded-2xl pl-1 pr-3 py-3 bg-card flex items-center border ring-primary shadow-sm",
          "hover:bg-muted transition-colors",
          focused
            ? "ring-inset border-primary outline-none ring-1"
            : "border-border",
          disabled && "cursor-not-allowed hover:bg-inherit",
          className
        )}
      >
        {icon && (
          <div className="absolute top-1/2 -translate-y-1/2 left-4 flex">
            <Icon name={icon} className="text-muted-foreground w-5" />
          </div>
        )}

        <input
          type={type}
          ref={ref}
          disabled={disabled}
          id={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none",
            className,
            icon && "pl-11",
            showClearButton && "pr-9"
          )}
        />

        {value && showClearButton && (
          <>
            <div className="absolute top-1/2 -translate-y-1/2 right-3.5 flex items-center">
              <div className="h-10 w-2 bg-gradient-to-r from-transparent to-inherit z-10" />

              <button
                type="button"
                onClick={() => setValue("")}
                className={cn(
                  "flex items-center justify-center h-4 w-4 rounded-sm bg-transparent hover:bg-transparent",
                  className
                )}
              >
                <Icon
                  name="cancel"
                  className="text-muted-foreground hover:text-foreground"
                />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
