// ExternalLinkModal
'use strict';
import React from 'react';
// import {
//     Button,
//     Modal,
//     ModalBody,
//     ModalContent,
//     ModalFooter,
//     ModalHeader
// } from '@nextui-org/react';

// import { useExternalLinkModal } from './use-external-link-modal';

const ExternalLinkModal: React.FC<ExternalLinkModal.Props> = (props) => {
    const {} = props;

    // const {
    //     href,
    //     handlePressCancelBtn,
    //     handlePressOKBtn,
    //     ...modal
    // } = useExternalLinkModal();
    
    // return (
    //     <Modal
    //     isOpen={ modal.isOpen }
    //     onOpenChange={ modal.onOpenChange }>
    //         <ModalContent>
    //             <ModalHeader>外部のURLを開きます</ModalHeader>

    //             <ModalBody>
    //                 <p>{ href || undefined }</p>
    //             </ModalBody>

    //             <ModalFooter className='flex gap-4 justify-end'>
    //                 <Button
    //                 variant="bordered"
    //                 onPress={ handlePressCancelBtn }>閉じる</Button>

    //                 <Button
    //                 color='primary'
    //                 variant='solid'
    //                 onPress={ handlePressOKBtn }>開く</Button>
    //             </ModalFooter>
    //         </ModalContent>
    //     </Modal>
    // );

    return <></>
};

namespace ExternalLinkModal {
    export type Props = {};
};

export {
    ExternalLinkModal
};
