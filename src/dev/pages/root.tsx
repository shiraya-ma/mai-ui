// Root
'use strict';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../components';

const Root: React.FC<{}> = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/components')
    });

    return (
        <Page
        title='Mai UI'>
            <p>
                <a href='/temp'>to temp page.</a>
            </p>
        </Page>
    );
};

export {
    Root
};
