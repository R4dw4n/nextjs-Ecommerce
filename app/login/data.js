const inputClassName = "bg-white hover:border-lightgray focus:border-lightgray h-10";
export const loginData = [
  {
    formItemProps: {
      name: "email",
      label: "Email Address",
      rules: [
        {required: true, message: "Please enter your email address"},
        {type: 'email', message: "Please enter a valid email"},
        {whitespace: true, message: "Email address can't be empty"},
      ]
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
      ]
    },
    input: {
      type: "password",
      className: inputClassName,
    },
  },
];

export const loginTail = [
  {
    linkUrl: "/register",
    linkText: "Create an account?"
  },
  {
    linkUrl: "/",
    linkText: "Forgot password?"
  }
];