export default function validate(values) {
  let errors = {};

  if (!values.first_name) {
    errors.first_name = "First name is required";
  }

  if (!values.street_address) {
    errors.street_address = "Street address is required";
  }

  if (!values.last_name) {
    errors.last_name = "Last name is required";
  }

  if (!values.city) {
    errors.city = "City is required";
  }

  const emailRexex =
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!values.email.match(emailRexex)) {
    errors.email = "Email address is invalid";
  }

  if (!values.state_id) {
    errors.state_id = "State is required";
  }

  const phoneRegex = "^[0-9]{3}-[0-9]{3}-[0-9]{4}$";
  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (!values.phone.match(phoneRegex)) {
    errors.phone = "Phone format must be 123-456-7891";
  }

  if (!values.zip_code) {
    errors.zip_code = "Zip is required";
  }

  return errors;
}
