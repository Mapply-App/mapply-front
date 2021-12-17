import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './messagerie/MessagesStyle';

const Messages = [
  {
    id: '1',
    userName: 'Thomas Bergotte',
    userImg: require('./messagerie/assets/users/user-3.jpg'),
    messageTime: '2 heures',
    messageText:
      'Salut mon bg!',
  },
  {
    id: '2',
    userName: 'Thomas Bergotte',
    userImg: require('./messagerie/assets/users/user-1.jpg'),
    messageTime: '2 heures',
    messageText:
      'Salut mon bg!',
  },
  {
    id: '3',
    userName: 'Thomas Bergotte',
    userImg: require('./messagerie/assets/users/user-4.jpg'),
    messageTime: '2 heures',
    messageText:
      'Salut mon bg!',
  },
  {
    id: '4',
    userName: 'Thomas Bergotte',
    userImg: require('./messagerie/assets/users/user-6.jpg'),
    messageTime: '2 heures',
    messageText:
      'Salut mon bg!',
  },
  {
    id: '5',
    userName: 'Thomas Bergotte',
    userImg: require('./messagerie/assets/users/user-7.jpg'),
    messageTime: '2 heures',
    messageText:
      'Salut mon bg!',
  },
];

const Messagerie = ({navigation}) => {
    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default Messagerie;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});