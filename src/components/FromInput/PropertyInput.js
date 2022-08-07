import React from "react";
import { useForm } from "react-hook-form";
import "./propertyInput.css";





export default function PropertyInput({ label, placeholder, required, type, register, validation, name, error, errorMessage }) {
  return (
    
      <div className={`${error ? "isError" : ""} inputProperty`}>
          <label className="labelTextProperty">{label}{required && (<sup>*</sup>)}</label>
          <input className="inputFieldProperty" type={type} {...register(name, validation)} placeholder={placeholder} />
          {error && <p className="errorMessage">{errorMessage}</p>}
      </div>
     
  )
}
