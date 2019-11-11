import styled from 'styled-components';
import md5 from 'md5';
import { useAuth } from '../../../lib/hook/useAuth';

const ProfilePicture = styled.img`
  border-radius: 50px;
  width: 50px;
`

const Avatar = () => {
  const auth = useAuth();

  // setup the avatar hash
  const emailHash = auth.isAuthenticated ? md5(auth.user.email) : 'default';
  const avatarURL = `https://secure.gravatar.com/avatar/${emailHash}?d=wavatar`;

  return (
    <ProfilePicture src={avatarURL} />
  )
}

export { Avatar }