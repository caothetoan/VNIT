import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class HomeContainer extends Component {
   constructor() {
      super()
   }
   render() {
      return (
          
                <Header>
                    <Left />
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingHorizontal: 10}}>
                <Card>
                        <CardItem>
                            <Text>
                                Welcome to VNIT.TOP ;)
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Press Button to fetch News
                            </Text>
                        </CardItem>
                    </Card>
                <Button dark block onPress= {() =>{ Actions.NewsContainer();}} style= {{marginTop: 40}}>
                      <Text> Fetch  </Text>
                    </Button>
                </Content>
            </Container>
      )
   }
  
} 
