import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
/*imper*/
<View >
<Text>RESTARAUNT <Text/>
</View>
export default class App extends Component { 
  render(){
    return(
      <View>
      

        <View 
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <Button 
            title="Saravana Bhavan"  
            color = "red"
            onPress={() => Alert('Thanks for choosing Saravana Bhavan')} />
        </View>
        
        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Hot Chips"  
            color = "blue"
            onPress={() => Alert('Thanks for choosing  Hot Chips.')} />
        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Anjappar"
            color = "purple"
            onPress={() => Alert('Thanks for choosing  Anjappar ')} />
        </View>
       
      </View>
    )
  }
}