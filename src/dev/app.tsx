// App
'use strict';
import React from 'react';
import 'tailwindcss/tailwind.css';

import './global.scss';

const App: React.FC<App.Props> = (props) => {
    const {} = props;
    
    return (
        <div className="text-mint-300">hello world</div>
    );
};

namespace App {
    export type Props = {};
};

export {
    App
};
