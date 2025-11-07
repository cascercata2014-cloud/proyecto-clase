import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return(
    
    <Tabs screenOptions={{
      headerTitleAlign:"center",
      headerTintColor:"#300",
      headerTitleStyle:{
        fontSize:30,
        fontFamily:"monospace",
        fontWeight:700
      },
      headerStyle:{
        backgroundColor:"#f47b7b"
      }
    }}>
<Tabs.Screen name="index" options={{headerTitle:"Presente"}} />
<Tabs.Screen name="futuro" options={{headerTitle:"Futuro",href:null}} />
    </Tabs>
  )
}
