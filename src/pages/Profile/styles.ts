import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.ScrollView.attrs({
  justifyContent: 'center',
})`
  flex: 1;
  padding: 0 30px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0 24px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  margin-top: 32px;
  position: absolute;
  left: 8px;
  top: 100px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 100px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 96px;
  margin-top: 32px;
  align-self: center;
`;
