import { useState, useEffect } from "react";

const useForm = (callback, validate, dispatch) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values, dispatch);
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, callback, values, dispatch]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const cleanValue = event => {
    return event.target.getAttribute("isint") === "true"
      ? parseInt(event.target.value)
      : event.target.value;
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: cleanValue(event)
    }));
  };

  const clearForm = () => {
    setValues({});
  };

  return {
    handleChange,
    handleSubmit,
    clearForm,
    values,
    isSubmitting,
    errors
  };
};

export default useForm;
