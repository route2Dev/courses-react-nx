import React from 'react';
import { useField } from 'formik';

export interface Option {
  value: any;
  text: string;
}

interface SelectInputProps {
  name: string;
  label: string;
  defaultOption?: string;
  value?: string | number;
  required?: boolean;
  options: Option[];
}

const SelectInput = ({
  name,
  label,
  defaultOption,
  required,
  options
}: SelectInputProps) => {
  const [field, meta] = useField(name);

  let wrapperClass = 'form-group';
  if (meta.touched && meta.error && meta.error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field input-group">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <select name={name} className="form-control" {...field}>
          <option value="">{defaultOption}</option>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
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

export default SelectInput;
