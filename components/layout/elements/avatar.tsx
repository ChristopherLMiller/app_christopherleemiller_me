import styled from "styled-components";

const ProfilePicture = styled.img`
  border-radius: 50px;
  width: 50px;
`;

const Avatar = () => {
  const avatarURL = `https://unavatar.now.sh/guest`;

  return <ProfilePicture src={avatarURL} loading="lazy" alt="Avatar Pic" />;
};

export { Avatar };
