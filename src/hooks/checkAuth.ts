import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../components/AuthContext";
import { useMutation, useQuery } from "@tanstack/react-query";


export const useCheckAuth = (setHasUser: any, setIdUser: any) => {
    const navigation = useNavigation();
    const { setHasUser: setGlobalHasUser, setIdUser: setGlobalIdUser, hasUser,idUser} = useAuth();

    const {data,isSuccess, isLoading, isError } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const response = await axios.get('https://medimate-be.onrender.com/Auth/profile');
            return response.data
        },
        enabled:hasUser
    })
    useEffect(()=>{
        if (data) {
            console.log('check', data.id);
            setGlobalIdUser(data.id);
            setGlobalHasUser(true);
          } else {
            console.log('Không có user nào login');
            setGlobalHasUser(false);
          }
    
    },[data,isSuccess,isError])
    

    const logoutMutation = useMutation({mutationFn:() => axios.post(`https://medimate-be.onrender.com/Auth/logout`),
        onSuccess: () => {
            console.log("Đăng xuất thành công!");
            setGlobalHasUser(false);
            navigation.navigate('Trang chủ');
        },
        onError: () => {
            console.log("Đăng xuất thất bại!");
        }
    });

    const handleLogout = async () => {
        try {
            await logoutMutation.mutateAsync();
        } catch (error) {
            console.log('Đăng xuất thất bại');
        }
    };
    

    return {
        handleLogout
    }
}