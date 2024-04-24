import React, { useContext } from 'react';
import { Routes ,Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const isAuth = true;
    return (
        <Routes>      
            {isAuth && authRoutes.map(({ path, Component }) =>
                <Route  key={path} path={path} element={<Component />}  />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route exact  key={path} path={path} element={<Component />}  />
            )}
            <Route path="*"  element={<SHOP_ROUTE/>}/>
        </Routes>
    );
};

export default AppRouter;
