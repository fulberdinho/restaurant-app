import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export const LocalRestaurant = [
    {
        name: "Benihana",
        image_url: "https://static3.depositphotos.com/1003631/209/i/600/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg",
        categories:["cafe","Bar"],
        price:"$800",
        review:1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url: "https://dmrqkbkq8el9i.cloudfront.net/Pictures/480xany/5/5/2/184552_restaurantmealwine_958571.jpg",
        categories:["cafe","Bar"],
        price:"$800",
        review:124,
        rating: 3.9,
    },
    {
        name: "Local Food",
        image_url: "https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg",
        categories:["bar","fast food"],
        price:"$800",
        review:15,
        rating: 2.7,
    },
];


export default function RestaurantItem(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>

            {props.restaurantData.map((restaurant,index)=>(
                <View key={index} style={{
                    marginTop:10,
                    padding:15,
                    backgroundColor:'white'
                }}>
                    <RestaurantImage image={restaurant.image_url}/>
                    <RestaurantInfo 
                    name={restaurant.name}
                    rating={restaurant.rating}
                    review={restaurant.review}/>
                </View>                
            ))}

        </TouchableOpacity>
    )
}


const  RestaurantImage = (props)=> (
    <>
        <Image source={{
            uri: props.image
        }}
        style={{width:"100%", height:180}}/>
        <TouchableOpacity style={{position:'absolute',right:20}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'/>
        </TouchableOpacity>
    </>
);


const RestaurantInfo = (props) => (
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        }}
    >
        <View>
            <Text style={{fontSize:15, fontWeight:"bold"}}>{props.name}</Text>
            <Text style={{fontSize:13, color:'gray'}}>30-45 ' min</Text>
        </View>
        <View style={{backgroundColor:"#eee", height:30,width:30,alignItems:'center',borderRadius:15}}>
           <Text > {props.rating} </Text> 
        </View>
        
    </View>
);
