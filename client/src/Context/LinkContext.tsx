import { createContext, useContext } from "react";
import {
  LinkContextProviderProps,
  LinkContextType,
  loginUserProps,
  registerUserProps,
} from "../Types/contextTypes";

const LinkContext = createContext({} as LinkContextType);

export const useLinkContext = () => {
  return useContext(LinkContext);
};

export const LinkContextProvider = ({ children }: LinkContextProviderProps) => {
  const host = "http://localhost:3000/api/v1";

  const loginUser = async ({ email, password }: loginUserProps) => {
    const response = await fetch(`${host}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        })
        const data = await response.json()
        return data
  };
  const registerUser = async ({ name, email, password }: registerUserProps) => {
    const response = await fetch(`${host}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await response.json()
      return data
  };

  const getAllUrls = async() => {
    let authToken 
    const token = localStorage.getItem('userData')
    if(token) {
      authToken = JSON.parse(token).token
    }
    const response = await fetch(`${host}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", 'authorization': authToken }
    })
    const data = await response.json()
    return data
  }

  const addUrl = async(fullUrl: string) => {
    let authToken 
    const token = localStorage.getItem('userData')
    if(token) {
      authToken = JSON.parse(token).token
    }
    const response = await fetch(`${host}/createurl`, {
      method: "POST",
      headers: { "Content-Type": "application/json", 'authorization': authToken },
      body: JSON.stringify({ fullUrl }),
    })
    const data = await response.json()
    return data
  }

  const deleteurl = async(id: string) => {
    let authToken 
    const token = localStorage.getItem('userData')
    if(token) {
      authToken = JSON.parse(token).token
    }
    const response = await fetch(`${host}/deleteurl`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", 'authorization': authToken },
      body: JSON.stringify({ id }),
    })
    const data = await response.json()
    return data
  }

  const getShortUrl = async(id: string) => {
    let authToken 
    const token = localStorage.getItem('userData')
    if(token) {
      authToken = JSON.parse(token).token
    }
    const response = await fetch(`${host}/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", 'authorization': authToken },
    })
    const data = await response.json()
    return data
  }
  return (
    <LinkContext.Provider value={{ loginUser, registerUser, addUrl, getAllUrls, deleteurl, getShortUrl }}>
      {children}
    </LinkContext.Provider>
  );
};
