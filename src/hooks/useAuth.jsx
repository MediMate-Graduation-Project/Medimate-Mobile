import loginAPI from '../api/auth.js'
import { useNavigation } from "@react-navigation/native";
import { useQueryClient, useMutation } from '@tanstack/react-query';
import SweetAlert2 from "react-sweetalert2";

export const useLogin = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigation()
    const login = async (params) => await loginAPI(params)
    return useMutation(login, {
        onSuccess: async (data) => {
            const check = data.status === 200
            if(check){
                await Swal.fire({
                    title: 'Success',
                    text: data.data.message,
                    icon: 'success',
                    timer: 1000,
                    showConfirmButton: false
                });
                navigate('/Trang chủ')
            }
            else{
                Swal.fire({
                    title: 'Error',
                    text: 'Số điện thoại hoặc mật khẩu không đúng',
                    icon: 'error',
                    timer: 2000,
                    showConfirmButton: false
                }) 
            }
        },
    });
};