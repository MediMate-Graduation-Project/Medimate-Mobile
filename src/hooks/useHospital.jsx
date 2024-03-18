import { useMutation, useQuery } from '@tanstack/react-query';
import hospital, { getAllHospital } from '../api/Hospital';
import { queryKey } from '../constants';

const getHospitalDetail = hospital.getHospitalDetail;

export const useGetAllHospital = (lat,long) =>{
  return useQuery({
    queryKey:[queryKey.hospital],
    queryFn: async () =>{
      try {
        const {data} = await getAllHospital(lat,long);
        return data;
      } catch (error) {
        console.log("Error fetching list hospital:", error);
        throw error;
      }
    }
  })
}
export const useGetHospitalDetail = (id) => {
  return useQuery({
      queryKey: [queryKey.hospital, id],
      queryFn: async () => {
          try {
              const { data } = await getHospitalDetail(id);
              return data;
          } catch (error) {
               console.log("Error fetching hospital details:", error);
              throw error;
          }
      }
  });
};