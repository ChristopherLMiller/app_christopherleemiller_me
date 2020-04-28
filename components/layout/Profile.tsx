import styled from "styled-components";
import { useState, Fragment } from "react";
import posed from "react-pose";
import { Props } from "../../styles/Themes";
import { useProvideAuth } from "../../lib/hook/useAuth";
import { useRouter } from "next/router";
import { LoginModal } from "./elements/LoginModal";

const ProfileContainer = styled.div`
  display: none;
  position: fixed;
  top: 110px;
  right: 20px;
  z-index: 10;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    display: flex;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50px;
  width: 50px;
`;

const ProfileInfoPose = posed.div({
  open: {
    opacity: 1,
    height: "auto",
    beforeChildren: true,
    staggerChildren: 100,
    delayChildren: 500,
  },
  closed: {
    opacity: 0,
    height: 0,
  },
});

const ProfileInfo = styled(ProfileInfoPose)`
  min-width: 200px;
  margin-top: 10px;
  position: relative;
  background: var(--background-light);
  box-shadow: var(--box-shadow);

  &:after {
    content: "\\A";
    width: 30px;
    height: 30px;
    position: absolute;
    top: -5px;
    right: 10px;
    background: var(--background-light);
    transform: rotateZ(45deg);
    z-index: -1;
  }
`;

const ProfileName = styled.div`
  background: var(--main-color);
  padding: 10px;
`;

const ProfileRole = styled.div`
  background: var(--main-color);
  padding: 10px;
  padding-top: 0;
  text-transform: uppercase;
`;

const ProfileInfoList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  font-size: 2rem;
`;

const ProfileInfoListItem = styled.li`
  border-bottom: 1px solid var(--background-dark);
  color: var(--text-color);
  text-transform: uppercase;
  text-align: center;
  line-height: 4rem;

  a {
    color: var(--text-color);
    cursor: pointer;
  }
`;

const Profile = () => {
  // state
  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const auth = useProvideAuth();

  const avatarURL = `https://unavatar.now.sh/${auth.getUserName()}`;

  const router = useRouter();

  return (
    <Fragment>
      <LoginModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <ProfileContainer>
        <ProfilePicture
          alt="User Avatar"
          src={avatarURL}
          loading="lazy"
          onClick={() => setOpen(!isOpen)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setTimeout(() => setOpen(false), 5 * 1000)}
        />
        <ProfileInfo pose={isOpen ? `open` : `closed`} initialPose="closed">
          <ProfileName>Hi, {auth.getUserName() || "Guest"}</ProfileName>
          {auth.isAuthenticated && (
            <ProfileRole>{auth.getUserRoleByName()}</ProfileRole>
          )}
          <ProfileInfoList>
            {auth.isAuthenticated && (
              <ProfileInfoListItem>My Account</ProfileInfoListItem>
            )}
            {auth.isAuthenticated && (
              <ProfileInfoListItem>
                <a
                  onClick={() => {
                    auth.signout();
                    router.push("/");
                  }}
                >
                  Logout
                </a>
              </ProfileInfoListItem>
            )}
            {!auth.isAuthenticated && (
              <ProfileInfoListItem>
                <a onClick={() => setModalOpen(true)}>Sign In</a>
              </ProfileInfoListItem>
            )}
          </ProfileInfoList>
        </ProfileInfo>
      </ProfileContainer>
    </Fragment>
  );
};

export { Profile };
