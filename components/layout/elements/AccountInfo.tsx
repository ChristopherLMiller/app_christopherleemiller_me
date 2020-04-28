import styled from "styled-components";
import { Avatar } from "./avatar";
import { useProvideAuth } from "../../../lib/hook/useAuth";
import posed from "react-pose";
import { useState } from "react";
import { Props } from "../../../styles/Themes";
import { LoginModal } from "./LoginModal";

const AccountWrapper = styled.div`
  font-family: var(--font-monospace);
  font-size: 2rem;
  color: var(--background-white);
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  padding-bottom: 10px;
`;

const ProfileImage = styled.div``;
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

const PosedListItem = posed.li({
  open: {
    opacity: 1,
    x: `0%`,
  },
  closed: {
    opacity: 0,
    x: `-100%`,
  },
});

const ListItem = styled(PosedListItem)`
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
  const auth = useProvideAuth();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <AccountWrapper>
      <LoginModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <ProfileContainer>
        <ProfileImage>
          <Avatar />
        </ProfileImage>
        <ProfileInfo>
          <ProfileName>{auth.getUserName() || "Guest"}</ProfileName>
          <ProfileRole>{auth.getUserRoleByName() || "Guest user"}</ProfileRole>
        </ProfileInfo>
      </ProfileContainer>
      <ProfileLinks>
        {auth.isAuthenticated && <ListItem>My Account</ListItem>}
        {auth.isAuthenticated && (
          <ListItem onClick={() => auth.signout()}>Logout</ListItem>
        )}
        {!auth.isAuthenticated && (
          <ListItem onClick={() => setModalOpen(true)}>Sign In</ListItem>
        )}
      </ProfileLinks>
    </AccountWrapper>
  );
};

export { AccountInfo };
