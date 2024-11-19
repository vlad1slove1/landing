import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const MainContainer: React.FC<Props> = ({ children }) => <main>{children}</main>;

export default MainContainer;
