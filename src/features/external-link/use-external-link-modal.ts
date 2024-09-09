// useExternalLinkModal
'use client';
import { useCallback, useContext, useEffect } from "react";
import { useDisclosure } from "@nextui-org/react";

import { ExternalLinkContext, ExternalLinkOpenerContext } from "./external-link-context";

export function useExternalLinkModal () {
    const { isOpen, onClose, onOpen, onOpenChange: _onOpenChange } = useDisclosure();

    const href = useContext(ExternalLinkContext);
    const closeModal = useContext(ExternalLinkOpenerContext);

    const onOpenChange = useCallback((isOpen: boolean) => {
        if (!isOpen) {
            closeModal(null);
        }
    }, [ closeModal]);

    const handlePressOKBtn = useCallback(() => {
        const _href = href!;

        closeModal(null);

        window.open(_href);
    }, [ href, closeModal ]);

    const handlePressCancelBtn = useCallback(() => {
        closeModal(null);
    }, [ closeModal ]);

    useEffect(() => {
        if (href) {
            onOpen();
        }

        else if (!href) {
            onClose();
        }
    }, [ href, onClose ]);
    
    return {
        href,
        isOpen,
        onOpen,
        onOpenChange,
        handlePressCancelBtn,
        handlePressOKBtn
    };
};
