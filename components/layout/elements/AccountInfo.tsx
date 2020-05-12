import styled from "styled-components";
import { Avatar } from "components/layout/elements/avatar";
import { useState, useContext } from "react";
import { Props } from "styles/Themes";
import { LoginModal } from "components/layout/elements/LoginModal";
import userContext from "lib/context/userContext";

const AccountWrapper = styled.div`
  font-family: var(--font-monospace);
  font-size: 2rem;
  color: var(--background-white);
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  padding-bottom: 10px;
  grid-gap: 10px;
`;

const ProfileImage = styled.div`
  width: 100%;
`;
const ProfileInfo = styled.div`
  display: grid;
`;

const ProfileName = styled.span`
  font-size: 2.75rem;
`;

const ProfileRole = styled.span`
  font-size: 1.5rem;
  background: var(--main-color-transparent);
  text-transform: uppercase;
`;

const ProfileLinks = styled.ul`
  margin: 0;
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  font-family: var(--font-monospace);
  font-size: 2.5rem;
  list-style-type: none;
  line-height: 2em;

  :after {
    content: "\\A";
    position: absolute;
    width: 100%;
    height: 100%;
    left: -100%;
    z-index: -1;
    background: var(--main-color);
    opacity: 0;
    transition: all 0.25s;
  }
  :hover:after {
    opacity: 0.3;
    left: 0%;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    font-size: 2rem;
    line-height: 2.5em;
  }
`;

const AccountInfo = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const user = useContext(userContext);

  return (
    <AccountWrapper>
      <LoginModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <ProfileContainer>
        <ProfileImage>
          <Avatar />
          {console.log(user)}
        </ProfileImage>
        <ProfileInfo>
          <ProfileName>Guest</ProfileName>
          <ProfileRole>Guest user</ProfileRole>
        </ProfileInfo>
      </ProfileContainer>
      <ProfileLinks>
        <ListItem onClick={() => setModalOpen(true)}>Sign In</ListItem>
      </ProfileLinks>
    </AccountWrapper>
  );
};

export { AccountInfo };
