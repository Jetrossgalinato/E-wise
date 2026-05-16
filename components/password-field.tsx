"use client";

//webhooks
import { useState } from "react";

//utils
import { Eye, EyeOff } from "lucide-react";

//components
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type PasswordFieldProps = {
  id: string;
  label: string;
};

export function PasswordField({ id, label }: PasswordFieldProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <div className="relative">
        <Input
          id={id}
          type={isVisible ? "text" : "password"}
          required
          className="pr-10"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          className="absolute right-1 top-1/2 -translate-y-1/2"
          onClick={() => setIsVisible((current) => !current)}
          aria-label={
            isVisible
              ? `Hide ${label.toLowerCase()}`
              : `Show ${label.toLowerCase()}`
          }
          aria-pressed={isVisible}
        >
          {isVisible ? (
            <EyeOff className="size-4" />
          ) : (
            <Eye className="size-4" />
          )}
        </Button>
      </div>
    </Field>
  );
}
