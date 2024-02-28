import Card from "../components/card"
import React from "react"
export const ListHospitals = (list: any[]) => {
  return(
    <>
      {list.map((item)=>(
        <Card />
      ))}
    </>
  )
}