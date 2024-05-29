import { TEInput } from "tw-elements-react";
import React from "react";

const SignInForm = () => {
  return (
    <div className='w-full'>

      <div className="flex-col p-5">
        <p className="text-center ">Welcome</p>
        <TEInput
          type="email"
          label="Username"
          size="lg"
          className="mb-6"
        ></TEInput>      

      {/* <!--Password input--> */}
      <TEInput
      type="password"
        label="Password"
        className="mb-6"
        size="lg"
      ></TEInput>

      </div>

      {/* <!-- Remember me checkbox --> */}
      <div className="mb-6 flex items-center justify-between">
        <div className="mb-0.5 block min-h-6 pl-6">
          <input
            className='check-box-here'
            type="checkbox"
            id="exampleCheck3"
            defaultChecked
          />
          <label
            className="inline-block ml-2 hover:cursor-pointer"
          >
            Remember me
          </label>
        </div>
      </div>
    </div>
  )
}

export default SignInForm