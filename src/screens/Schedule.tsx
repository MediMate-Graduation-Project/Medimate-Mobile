import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import moment, {now} from 'moment';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const id = 1;
LocaleConfig.locales['tr'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  dayNames: [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy',
  ],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  // dayColor: '#30A2FF'
  today: 'Hôm nay',
};
LocaleConfig.defaultLocale = 'tr';
export const Schedule = id => {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <Calendar
        theme={{
          textSectionTitleColor: '#30A2FF',
          textDayHeaderFontWeight: '700',
        }}
        firstDay={1}
        enableSwipeMonths
        dayComponent={({date, state}) => {
          let dayColor = state === 'disabled' ? '#cccccc' : '#000000';
          if (state == 'today') {
            dayColor = '#30A2FF';
          }
          return (
            <TouchableOpacity
              onPress={e => console.log('date', date?.dateString)}
              style={styles.DayContainer}>
              <Text style={{color: dayColor, fontSize: 15}}>{date?.day}</Text>
              <Text style={styles.orderNumber}>50</Text>
            </TouchableOpacity>
          );
        }}
      />
      <View>
        <View style={styles.annotateContainer}>
          <View style={styles.annotate1} />
          <Text style={styles.text}>Có thể đặt lịch khám</Text>
        </View>
        <View style={styles.annotateContainer}>
          <View style={styles.annotate2} />
          <Text style={styles.text}>Không thể đặt lịch khám</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    gap: 20,
  },
  annotateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  annotate1: {
    width: 30,
    height: 25,
    backgroundColor: '#30A2FF',
    borderRadius: 5,
  },
  annotate2: {
    width: 30,
    height: 25,
    backgroundColor: '#ff0000',
    borderRadius: 5,
  },
  DayContainer: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    marginBottom: 25,

  },
  orderNumber: {
    color: '#fff',
    backgroundColor: '#ff0000',
    fontSize: 15,
    paddingHorizontal: 6,
    paddingVertical:3,
    borderRadius:5
  },
  text: {
    color: '#000000'
  }
});
