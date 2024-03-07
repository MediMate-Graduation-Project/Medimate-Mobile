import { useMutation, useQuery } from '@tanstack/react-query';
import hospital, { getAllHospital } from '../api/Hospital';

const getDetailHospital = hospital.getDetailHospital;

export const useGetAllHospital = () =>{
  return useQuery({
    queryKey:['HOSPITAL'],
    queryFn: async () =>{
      try {
        const {data} = await getAllHospital();
        return data;
      } catch (error) {
        console.log("Error fetching list hospital:", error);
        throw error;
      }
    }
  })
}
export const useGetDetailHospital = (id) => {
  return useQuery({
      queryKey: ["HOSPITAL", id],
      queryFn: async () => {
          try {
              const { data } = await getDetailHospital(id);
              return data;
          } catch (error) {
               console.log("Error fetching hospital details:", error);
              throw error;
          }
      }
  });
};