import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string
}

export function Input({label, placeholder, ...props}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label ? <label htmlFor={props.id} className="font-semibold" >{label}</label> : null}
      <input 
        id={props.id}
        placeholder={placeholder}
        className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        {...props}
      />       
    </div>   
  )
} 