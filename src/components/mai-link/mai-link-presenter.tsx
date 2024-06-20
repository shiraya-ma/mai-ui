// MaiLinkPresenter
'use client';
import React, { MouseEventHandler } from 'react';
import { Link as NextUILink, LinkProps, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';
import { MaiButton } from '../mai-button';

// import {} from './style';
// import * as S from './style';

export const MaiLinkPresenter: React.FC<MaiLinkPresenterProps> = (props) => {
    const {
        isExternalLink,
        modal,
        NextLink,
        ...linkProps
    } = props;

    return (
        <>
            <NextUILink
            { ...linkProps }
            as={ NextLink }
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
    isExternalLink?: boolean;
    modal?: ExternalLinkModalProps;
    NextLink?: any;
};

export type ExternalLinkModalProps = {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    onPressCloseBtn: () => void;
    onPressOpenBtn: () => void;
};
