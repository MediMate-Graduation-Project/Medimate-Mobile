import React, { useEffect, useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { mainColor } from '../common/colors';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

interface Result {
    lat: number;
    lon: number;
    display_name: string;
    type: string;
}

export const Maps = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Result[]>([]);
    const [currentLocation, setCurrentLocation] = useState<Result[]>([]);
    const [LATITUDE, setLATITUDE] = useState(16.0544);
    const [LONGITUDE, setLONGITUDE] = useState(108.2022);
    const [isCurrentLocation, setIsCurrentLocation] = useState(false);
    const [dataLocation, setDataLocation] = useState();
    const [INITIAL_POSITION, setInitialPosition] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const navigation = useNavigation();
    const fetchCurrentLocation = async () => {
        try {

            const respon = await axios.get(`https://us1.locationiq.com/v1/reverse?key=pk.8d9318f063a56e90900ec9c914c24baf&lat=${LATITUDE}&lon=${LONGITUDE}&format=json&`)
            console.log('DATA', respon.data.display_name);
            const { lat, lon, display_name, type } = respon.data;
            setCurrentLocation([{ lat: parseFloat(lat), lon: parseFloat(lon), display_name, type }]);

            const addressParts = display_name.split(',');
            let customDisplayName = '';
            for (let i = 1; i < addressParts.length; i++) {
                customDisplayName += addressParts[i];
                if (i < addressParts.length - 1) {
                    customDisplayName += ',';
                }
            }
            setQuery(customDisplayName.trim());
        } catch (error) {

        }
    }
    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const currentLongitude =
                    JSON.stringify(position.coords.longitude);
                console.log('LONG', currentLongitude);
                setLONGITUDE(parseFloat(currentLongitude))
                const currentLatitude =
                    JSON.stringify(position.coords.latitude);
                console.log('La', currentLatitude);
                setLATITUDE(parseFloat(currentLatitude))
            }, (error) => Alert(error.message), {

        }
        )
        setIsCurrentLocation(true);
        setSearchResults([])
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);
    useEffect(() => {
        if (LATITUDE != 0 || LONGITUDE != 0) {
            fetchCurrentLocation();
            if (currentLocation && currentLocation.length > 0 && isCurrentLocation == true) {
                setInitialPosition({
                    ...INITIAL_POSITION,
                    latitude: currentLocation[0].lat,
                    longitude: currentLocation[0].lon
                });
            }

            console.log('c', currentLocation);

        }

    }, [currentLocation, LATITUDE])
    const handleSearchOnpress = async (query: any) => {
        try {
            const response = await axios.get(`https://us1.locationiq.com/v1/search?key=pk.8d9318f063a56e90900ec9c914c24baf&q=${query}&format=json`);
            const searchData = response.data
            const convertedSearchResults = searchData.map((result: Result) => ({
                ...result,
                lat: parseFloat(result.lat),
                lon: parseFloat(result.lon),
            }));
            setSearchResults(convertedSearchResults);
        } catch (error) {
            console.error("Error searching:", error);
        }
        setIsCurrentLocation(true)
        Keyboard.dismiss;
    };
    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://us1.locationiq.com/v1/search?key=pk.8d9318f063a56e90900ec9c914c24baf&q=${query}&format=json`);
            const searchData = response.data
            const convertedSearchResults = searchData.map((result: Result) => ({
                ...result,
                lat: parseFloat(result.lat),
                lon: parseFloat(result.lon),
            }));
            setSearchResults(convertedSearchResults);
        } catch (error) {
            console.error("Error searching:", error);
        }
        setIsCurrentLocation(true)
        Keyboard.dismiss;
    };
    useEffect(() => {
        if (searchResults && searchResults.length > 0) {
            setLATITUDE(searchResults[0].lat);
            setLONGITUDE(searchResults[0].lon);
            setInitialPosition({
                ...INITIAL_POSITION,
                latitude: searchResults[0].lat,
                longitude: searchResults[0].lon
            });
            console.log('r', searchResults);
        }
    }, [searchResults]);


    useEffect(() => {
        const handleGetQuery = async () => {
            try {
                const respon = await axios.get(`https://api.locationiq.com/v1/autocomplete?key=pk.8d9318f063a56e90900ec9c914c24baf&q=${query}`);
                setDataLocation(respon.data);
            } catch (error) {

            }
        }
        handleGetQuery();
        console.log('location', dataLocation);

    }, [query])
    console.log('query', query);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={styles.map}
                region={INITIAL_POSITION}
            >
                {currentLocation.map((location, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: location.lat,
                            longitude: location.lon,
                        }}
                        title={location.display_name}
                    />
                ))}
                {searchResults.map((location, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: location.lat,
                            longitude: location.lon,
                        }}
                        title={location.display_name}
                    />
                ))}
            </MapView>
            <View style={styles.searchBar}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Tìm kiếm vị trí của bạn</Text>
                <View style={styles.Containerinput}>
                    <View style={styles.input}>
                        <TextInput
                            placeholder='Nhập vị trí'
                            onChangeText={setQuery}
                            value={query}
                            editable
                            multiline
                            numberOfLines={3}
                            maxLength={400}
                        />

                    </View>
                    <TouchableOpacity onPress={handleSearch} style={styles.SearchIcon}>
                        <MaterialCommunityIcons color={mainColor} size={30} name='magnify'></MaterialCommunityIcons>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.LocationIcon} onPress={ getCurrentLocation}>
                        <MaterialCommunityIcons size={30} color={'red'} name='crosshairs-gps' />
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity style={styles.button} onPress={handleSearch}>
                    <Text style={styles.title}>Tìm kiếm</Text>
                </TouchableOpacity> */}
                {query != '' ?
                    <ScrollView style={styles.ScrollView}>
                        {dataLocation?.map((item: any) => (
                            <TouchableOpacity style={{ margin: 10 }} onPress={() => {
                                handleSearchOnpress(item.display_address)
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                                    <MaterialCommunityIcons name='map-marker' color={mainColor} size={20}></MaterialCommunityIcons>
                                    <Text>{item.display_name}</Text>
                                </View>

                                <View style={styles.line}></View>
                            </TouchableOpacity>

                        ))}
                    </ScrollView>
                    : null
                }
            </View>



            <TouchableOpacity style={styles.ContainerSelectButton} onPress={() => { navigation.navigate('hospitalList', { lat: LATITUDE, lon: LONGITUDE, nameAddress: query }) }}>
                <Text style={styles.titleBottomButton}>Chọn vị trí này</Text>
                <MaterialCommunityIcons size={50} name="map-marker-radius" color={'white'}></MaterialCommunityIcons>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    },
    Containerinput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5
    },
    input: {
        flex:7,
        borderWidth: 1,
        borderRadius: 15,
        height: '100%',
        borderColor: '#D9D9D9',
        flexDirection: 'row',
        alignItems: 'center'
    },
    SearchIcon:{
     flex:1
    },
    LocationIcon:{
     flex:1
    },
    searchBar: {
        position: 'absolute',
        width: '95%',
        padding: 8,
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey'
    },
    button: {
        backgroundColor: mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    title: {
        color: 'white',
        padding: 10,
        fontWeight: 'bold'
    },
    ContainerSelectButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: '#FB3D56',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,

    },
    titleBottomButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 15
    },
    ScrollView: {

        height: 100,

    },
    line: {
        backgroundColor: '#D9D9D9',
        height: 1,
        width: '100%'
    }
});

export default Maps;
