import styled from "styled-components";
import md5 from "md5";

const ProfilePicture = styled.img`
  border-radius: 50px;
  width: 50px;
`;

const Avatar = () => {
  const avatarURL = `https://www.gravatar.com/avatar/${md5("guest")}`;

  return <ProfilePicture src={avatarURL} loading="lazy" alt="Avatar Pic" />;
};

export { Avatar };
