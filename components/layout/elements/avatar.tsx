import styled from 'styled-components';
import md5 from 'md5';
import { getUserEmail } from '../../../utils/functions/Auth';

const ProfilePicture = styled.img`
  border-radius: 50px;
  width: 50px;
`

const Avatar = () => {
  // setup the avatar hash
  const emailHash = md5(getUserEmail() || 'default');
  const avatarURL = `https://secure.gravatar.com/avatar/${emailHash}?d=wavatar`;

  return (
    <ProfilePicture src={avatarURL} />
  )
}

export { Avatar }