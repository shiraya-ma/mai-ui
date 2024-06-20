// useExternalLink
'use client';

import { MouseEvent, MouseEventHandler, useCallback, useMemo } from "react";
import { isExternal } from "./is-external";
import { useDisclosure } from "@nextui-org/react";
import { ExternalLinkModalProps } from "../../mai-link-presenter";

export function useExternalLink (href?: string, onClick?: MouseEventHandler<HTMLAnchorElement>) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const isExternalLink = useMemo(() => isExternal(href), [ href, isExternal ]);

    const onClickLink = useCallback((ev: MouseEvent<HTMLAnchorElement>) => {
        if (!isExternal) {
            if (onClick) {
                onClick(ev);
            }
            
            return;
        }

        ev.preventDefault();

        onOpen();
    }, [ isExternal, onOpen ]);

    const onPressOpenBtn = useCallback(() => {
        onClose();

        window.open(href);
    }, [ href, onClose ]);

    const onPressCloseBtn = useCallback(() => onClose(), [ onClose ]);

    const modal: ExternalLinkModalProps = {
        isOpen,
        onOpenChange,
        onPressCloseBtn,
        onPressOpenBtn
    };

    return {
        isExternalLink,
        modal,
        onClickLink
    };
};
