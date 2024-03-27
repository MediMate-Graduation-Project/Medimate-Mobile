import {useNavigation, CommonActions} from '@react-navigation/native';
import {useMutation,  useQueryClient} from '@tanstack/react-query';
import {queryKey} from '../constants';
import {logout} from '../api/auth';
import {Alert} from 'react-native';
const queryClient = useQueryClient();

export const useCheckAuth = () => {
  const navigation = useNavigation();
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const result = await logout();
      return result;
      
    },
    onSettled: async () => {
        return await queryClient.invalidateQueries({ queryKey: [queryKey.profile] })
      },
    onSuccess: async data => {
      console.log(33,data.data);
      queryClient.resetQueries();
      queryClient.invalidateQueries();
      Alert.alert('Đăng xuất thành công');
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Trang chủ'}],
        }),
      );
      navigation.navigate('Trang chủ');
      
    },
    onError: (error) => {
      console.log('Đăng xuất thất bại!', error.message);
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
    handleLogout,
  };
};
