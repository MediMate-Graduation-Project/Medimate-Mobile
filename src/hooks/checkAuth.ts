import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation,CommonActions } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../components/AuthContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKey } from "../constants";
import SessionStorage from "react-native-session-storage";
import { Alert } from "react-native";

export const useCheckAuth = () => {
    const navigation = useNavigation();
    const logoutMutation = useMutation({
        mutationFn: async () => {
            const res = axios.post(`https://medimate-be.onrender.com/Auth/logout`);
            return res;
        },
        onSuccess: async data => {

            if (data.status == 200) {

                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Trang chủ' }]
                    })
                );
                SessionStorage.setItem('UserData', null)
                setTimeout(() => {
                    Alert.alert('Đăng xuất thành công')
                    navigation.navigate('Trang chủ');
                }, 100);
            }
            
        },
        onError: () => {
            console.log("Đăng xuất thất bại!");
        },

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