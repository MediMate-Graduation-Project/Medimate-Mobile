import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { mainColor } from '../common/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ItemNotifi } from '../components/ItemNotifi';
export const NotificationPage = () => {


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Thông báo</Text>
        <View style={{
          alignItems: 'center', justifyContent: 'center', width: 70,
          borderRadius: 50, backgroundColor: '#FB3D56',
        }}>
          <Text style={styles.button}>4</Text>
        </View>

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
        <Text style={{ color: 'black', }}>Hôm nay</Text>
        <TouchableOpacity>
          <Text style={{ color: mainColor, fontWeight: 'bold' }}>Đánh dấu tất cả đã đọc</Text>
        </TouchableOpacity>
      </View>
      <ItemNotifi
        nameIcon='calendar-month'
        colorIcon='green'
        status='Đặt lịch thành công'
        message='Lịch của bạn đã được xác nhận.Chúng tôi rất mong chờ gặp bạn sớm'
        time='1h'
      ></ItemNotifi>
      <ItemNotifi
        nameIcon='calendar-check'
        colorIcon={mainColor}
        status='Lịch của bạn đã thay đổi'
        message='Lịch của bạn đã được thay đổi. Vui lòng kiểm tra '
        time='2h'
      ></ItemNotifi>
      <ItemNotifi
        nameIcon='calendar-month'
        colorIcon='red'
        status='Lịch khám của bạn đã bị hủy'
        message='Lịch của bạn đã được hủy thành công'
        time='5h'
      ></ItemNotifi>
      <ItemNotifi
        nameIcon='newspaper-variant'
        colorIcon='purple'
        status='Tin tức mới nhất hôm nay'
        message='Đà Nẵng: Nhiều trường hợp đa chấn thương do...'
        time='10h'
      ></ItemNotifi>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  button: {

    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  },

})