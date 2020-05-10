import React from 'react';
import { useField } from 'formik';

interface TextInputProps {
  name: string;
  label: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

const TextInput = ({
  name,
  label,
  id,
  placeholder,
  required,
  type = 'text'
}: TextInputProps) => {
  const [field, meta] = useField(name);

  let wrapperClass = 'form-group';
  if (meta.touched && meta.error && meta.error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field input-group">
        <input
          name={name}
          id={id || name}
          type={type}
          className="form-control"
          placeholder={placeholder}
          {...field}
        />
        {required && (
          <div className="input-group-append">
            <span className="input-group-text">*</span>
          </div>
        )}
      </div>
      {meta.touched && meta.error && (
        <div className="alert alert-danger">{meta.error}</div>
      )}
    </div>
  );
};

export default TextInput;
