// MaiLinkPresenter
'use client';
import React from 'react';
import { Link as NextUILink, LinkProps, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';

import { MaiUI } from '../../types/mai-ui';

import { MaiButton } from '../mai-button';

export const MaiLinkPresenter: React.FC<MaiLinkPresenterProps> = (props) => {
    const {
        isExternalLink,
        modal,
        ...linkProps
    } = props;

    return (
        <>
            <NextUILink
            { ...linkProps }
            />

            { isExternalLink && (<>
                <Modal isOpen={ modal?.isOpen } onOpenChange={ modal?.onOpenChange }>
                    <ModalContent>
                        <ModalHeader>外部のURLを開きます</ModalHeader>

                        <ModalBody>
                            <p>{ props.href }</p>
                        </ModalBody>

                        <ModalFooter>
                            <MaiButton variant='bordered' onPress={ modal?.onPressCloseBtn }>閉じる</MaiButton>

                            <MaiButton color='primary' onPress={ modal?.onPressOpenBtn }>開く</MaiButton>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>)}
        </>
    );
};

export type MaiLinkPresenterProps = LinkProps & {
    color?: MaiUI.LinkColor;
    isExternalLink?: boolean;
    modal?: ExternalLinkModalProps;
};

export type ExternalLinkModalProps = {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    onPressCloseBtn: () => void;
    onPressOpenBtn: () => void;
};
