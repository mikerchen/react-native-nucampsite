import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, Card } from 'react-native';

// function RenderTeams({teams}) {

//     const renderTeamItem = ({item}) => {
//         return(
//             <View style={{margin: 10}}>
//                 <Text style={{fontSize: 14}}>{item.city}</Text>
//             </View>
//         )
//     };

//     return(
//         <Card title="Teams">
//             <FlatList
//                 data={teams}
//                 renderItem={renderTeamItem}
//                 keyExtractor={item => item.id.toString()}
//             />
//         </Card>
//     )
// }

class NBA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams:{}
        }
    }

    fetchTeams() {
          fetch("https://www.balldontlie.io/api/v1/teams")
            .then(response => response.json())
            .then(data => this.setState({teams: data.data}))
            .catch(error => console.log('error', error));
        
        // .then(data => console.log(data))
        
    }

    render() {
        this.fetchTeams()
        const hawks = this.state.teams

        return(
            <ScrollView>    
                {console.log(hawks)}
                {/* <RenderTeams teams={this.state.teams[0]} /> */}
            </ScrollView>
        )
    }

}

export default NBA