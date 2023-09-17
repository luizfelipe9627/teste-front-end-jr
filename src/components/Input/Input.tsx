interface InputProps {
  type?: string;
  placeholder: string;
  id?: string;
  name?: string;
  label?: string;
  required?: boolean;
}

export default function Input({
  type,
  placeholder,
  id,
  name,
  label,
  ...props
}: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        {...props}
      />
    </div>
  );
}
