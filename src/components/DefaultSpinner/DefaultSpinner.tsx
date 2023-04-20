import './DefaultSpinner.css'
import React from "react";
import { Spinner } from "@chakra-ui/react";

export function DefaultSpinner() {
  return (
    <div className="default-spinner">
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </div>
  )
}