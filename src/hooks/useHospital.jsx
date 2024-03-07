import { useMutation, useQuery } from '@tanstack/react-query';
import hospital from '../api/Hospital';

const getDetailHospital = hospital.getDetailHospital;


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