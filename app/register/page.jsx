'use client'
import React from "react"
import Login from "../components/Login"
import { registerData, registerTail } from "./data"

const page = () => {
  return (
    <Login image="/assets/images/image-2.svg"
      paddingY="20"
      title="Ceate an account!"
      text="Please enter details"
      btnText="Sign Up"
      data={registerData}
      tail={registerTail}
    />
  )
}

export default page