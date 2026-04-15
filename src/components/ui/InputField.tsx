"use client";

import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  icon?: ReactNode;
};

type InputFieldProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    textarea?: false;
  };

type TextareaFieldProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    textarea: true;
  };

type Props = InputFieldProps | TextareaFieldProps;

export function InputField(props: Props) {
  const { label, icon, className = "" } = props;
  const commonClass =
    "w-full rounded-2xl border border-[#efd8cc] bg-white/70 pl-11 pr-4 text-sm text-[#2c1f17] placeholder:text-[#8c7668] outline-none transition focus:border-[#f78f69] focus:shadow-[0_0_0_4px_rgba(255,143,105,0.18)]";

  if ("textarea" in props && props.textarea) {
    const textareaProps: TextareaHTMLAttributes<HTMLTextAreaElement> = {
      name: props.name,
      value: props.value,
      onChange: props.onChange,
      placeholder: props.placeholder,
      required: props.required,
      disabled: props.disabled
    };
    return (
      <label className="block space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#715d52]">{label}</span>
        <div className="relative">
          {icon ? (
            <span className="pointer-events-none absolute left-4 top-4 text-[#b18773]">{icon}</span>
          ) : null}
          <textarea {...textareaProps} className={`${commonClass} min-h-28 py-3 ${className}`} />
        </div>
      </label>
    );
  }

  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    type: props.type,
    name: props.name,
    value: props.value,
    onChange: props.onChange,
    placeholder: props.placeholder,
    required: props.required,
    disabled: props.disabled
  };

  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#715d52]">{label}</span>
      <div className="relative">
        {icon ? <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#b18773]">{icon}</span> : null}
        <input {...inputProps} className={`${commonClass} h-12 ${className}`} />
      </div>
    </label>
  );
}
