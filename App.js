import { View, Text, Image } from "react-native"

export default function App() {
  return (
    <View style={{backgroundColor:"red", width:"100%", height:"100%"}}>
      
     <Text style={{color:"white", marginTop:"50%"}}>  Appa </Text>
     <Image
      source={{ uri: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=740' }}
       style={{ width: 300, height: 300 , marginLeft:"auto", marginRight:"auto"}}
        />
      
      </View>
  )
}
