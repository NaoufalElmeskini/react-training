import {createContext, useMemo, useState} from 'react';

export const RoleContext = createContext({
    role: 'user',
    setRole: () => {},
});

export const RoleProvider = ({ children }) => {
    const [role, setRole] = useState('user');
    const shared = useMemo(() => ({
        role,
        setRole,
    }), [role, setRole]);

    return (
        <RoleContext.Provider value={shared}>
            {children}
        </RoleContext.Provider>
    );
};