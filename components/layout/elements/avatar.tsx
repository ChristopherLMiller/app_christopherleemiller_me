import styled from 'styled-components';
import { getUserEmail } from '../../../utils/functions/Auth';

const ProfilePicture = styled.img`
  border-radius: 50px;
  width: 50px;
`

const Avatar = () => {
  const avatarURL = `https://unavatar.now.sh/${getUserEmail()}`;

  return (
    <ProfilePicture src={avatarURL} />
  )
}

export { Avatar }