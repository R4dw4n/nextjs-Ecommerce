'use client'
import React from "react"
import Login from "../components/Login"
import { loginData, loginTail } from "./data"

const page = () => {
  return (
    <Login image="/assets/images/image-5.jpg"
      paddingY="94"
      title="Welcome!"
      text="Please login here"
      btnText="Login"
      data={loginData}
      tail={loginTail}
    />
  )
}

export default page