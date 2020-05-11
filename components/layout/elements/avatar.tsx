import styled from "styled-components";
import { useProvideAuth } from "lib/hook/useAuth";

const ProfilePicture = styled.img`
  border-radius: 50px;
  width: 50px;
`;

const Avatar = () => {
  const auth = useProvideAuth();
  const avatarURL = `https://unavatar.now.sh/${auth.getUserEmail()}`;

  return <ProfilePicture src={avatarURL} loading="lazy" alt="Avatar Pic" />;
};

export { Avatar };
