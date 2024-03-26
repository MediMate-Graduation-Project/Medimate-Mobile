import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create(
    {
      container:{
        backgroundColor:'white'
      },
      searchBar: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#30A2FF',
        margin: 20,
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 10,
      },
      Input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      },
      Flatlist:{
        marginBottom:100,
      }
    }
  )

export const stylesHeaderFlatlist = StyleSheet.create(
    {
      container: {
        flex: 1
      },
  
  
      containerService: {
        flexDirection: 'row',
        marginBottom: 20
      },
      containeritemService1: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
      },
      containeritemService2: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
      },
      title: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 15
      },
      nameService: {
        color: 'black'
      }
    }
  )

export const stylesRenderHospital= StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ECF0F1',
        padding: 20,
        margin: 20,
        borderRadius:20
    },
    containerInfor: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    name: {
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'black'
    },
    address: {
        color: 'black',
        fontWeight: 'normal'
    },
    containeritemInfor: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    star: {
        flexDirection: 'row'
    },
    itemInfor: {
        marginLeft: 5,
        width:150,
        marginRight:10
    }
})