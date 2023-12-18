import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

import { User } from "../theme/api/userAuth";

export const LoginUserContext = createContext(
  {} as {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    isSignedIn: boolean;
    setIsSignedIn: Dispatch<SetStateAction<boolean>>;
    currentUser: User | undefined;
    setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
  }
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  return (
    <LoginUserContext.Provider
      value={{
        loading,
        setLoading,
        isSignedIn,
        setIsSignedIn,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </LoginUserContext.Provider>
  );
};
