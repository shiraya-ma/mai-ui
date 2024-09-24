// useNavigate
'use client';
import { useContext } from "react";

import { NavigateContext } from "./context";

export function useNavigate () {
    const navigate = useContext(NavigateContext);

    return {
        navigate
    };
};
