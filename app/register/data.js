const inputClassName = "bg-white hover:border-lightgray focus:border-lightgray h-10";

export const registerData = [
  {
    formItemProps: {
      name: "name",
      label: "Full Name",
      rules: [
        {required: true, message: "Please enter your full name"},
        {whitespace: true, message: "Full name can't be empty"},
      ],
    },
    input: {
      type: "text",
      className: inputClassName,
    }
  },
  {
    formItemProps: {
      name: "email",
      label: "Email Address",
      rules: [
        {required: true, message: "Please enter your email address"},
        {type: 'email', message: "Please enter a valid email"},
        {whitespace: true, message: "Email address can't be empty"},
      ],
    },
    input: {
      type: "text",
      className: inputClassName,
    },
  },
  {
    formItemProps: {
      name: "password",
      label: "Password",
      rules: [
        {required: true, message: "Please enter your Password"},
        {whitespace: true, message: "Password can't be empty"},
      ],
    },
    input: {
      type: "password",
      className: inputClassName,
    },
  },
  {
    formItemProps: {
      name: "confirmPassword",
      label: "Confirm Password",
      dependencies: ['password'],
      rules: [
        {required: true, message: "Please confirm your Password"},
          ({ getFieldValue }) => ({
            validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('The new passwords that you entered do not match!'));
          },
        }),
      ],
    },
    input: {
      type: "password",
      className: inputClassName,
    },
  },
];

export const registerTail = [
  {
    linkUrl: "/login",
    linkText: "Already have an account? Login"
  },
];