// useExternalLink
'use client';

import { MouseEvent, useCallback, useMemo } from "react";
import { useDisclosure } from "@nextui-org/react";

import { isExternal } from "./is-external";
import type { MaiLinkPresenter } from "../../mai-link-presenter";
import { useNavigate } from "../../../../hooks";

export function useExternalLink (href?: string) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { navigate } = useNavigate();

    const isExternalLink = useMemo(() => isExternal(href), [ href, isExternal ]);

    const onClickLink = useCallback((ev: MouseEvent<HTMLAnchorElement>) => {
        ev.preventDefault();

        if (!isExternalLink) {
            navigate(href ?? '#');

            return;
        }

        onOpen();
    }, [ isExternal, navigate, onOpen ]);

    const onPressOpenBtn = useCallback(() => {
        if (typeof window === 'undefined') {
            return false;
        }
        
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

type ExternalLinkModalProps = MaiLinkPresenter.ExternalLinkModalProps;
