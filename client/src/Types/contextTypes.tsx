import { ReactNode } from "react"

export type LinkContextProviderProps = {
    children: ReactNode
}

export type loginUserProps = {
    email: string
    password: string
}

export type registerUserProps = {
    name: string
    email: string
    password: string
}

export type LinkContextType = {
    loginUser: ({email, password}: loginUserProps) => Promise<object>;
    registerUser: ({name, email, password}: registerUserProps) => Promise<object>;
    // URls
    addUrl: (fullUrl: string) => Promise<object>;
    deleteurl: (id: string) => Promise<object>;
    getAllUrls: () => Promise<urlTypes[]>;
    getShortUrl: (id: string) => Promise<object>;
}

export type tokenTypes = {
    id: string;
    token: string
}

export type urlTypes = {
    _id: string;
    fullUrl: string;
    clicks: number;
    owner: string;
    shortUrl: string;
    createdAt: string;
    __v: number
}

export type urlPropsType = {
    _id: string;
    fullUrl: string;
    clicks: number;
    shortUrl: string;
    createdAt: string;
}