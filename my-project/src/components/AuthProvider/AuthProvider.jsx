import { info } from 'autoprefixer';
import React, { createContext } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const authContext=createContext(null)

const AuthProvider = ({children}) => {

    const name= 'utsob';

    const info={
        name
    }

    return (
        <div>
            <authContext.Provider value={info}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;