import * as Dialog from '@radix-ui/react-dialog';
import "./styles.scss";
import { MouseEventHandler } from 'react';

interface IProps {
    isOpen: boolean;
    onToggle: MouseEventHandler;
};

export default function MapLocationSelectorModal({ isOpen, onToggle }: IProps) {
    return (
        <Dialog.Root defaultOpen={false} open={isOpen} modal={true}>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" onClick={onToggle} />
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
                    <Dialog.Description className="DialogDescription">
                        Make changes to your profile here. Click save when you're done.
                    </Dialog.Description>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="name">
                            Name
                        </label>
                        <input className="Input" id="name" defaultValue="Pedro Duarte" />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="username">
                            Username
                        </label>
                        <input className="Input" id="username" defaultValue="@peduarte" />
                    </fieldset>
                    <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                        <Dialog.Close asChild>
                            <button className="Button green">Save changes</button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close" onClick={onToggle}>
                            Close
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};