import userContext from "lib/context/userContext";
import { useContext } from "react";

//@ts-ignore
const signIn = ({ identifier, password }) => {
  const user = useContext(userContext);

  if (user) {
    return;
  }
};

export default signIn;
