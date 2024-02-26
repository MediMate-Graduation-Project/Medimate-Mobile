import Card from "../components/card"

export const ListHospitals = ({list}) => {
  return(
    <>
      {list.map((item)=>(
        <Card />
      ))}
    </>
  )
}