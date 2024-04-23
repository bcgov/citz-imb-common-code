import { Heading, Icon, Stack } from 'src/components';
import { useDynamicStyles } from 'src/hooks';
import { memo } from 'react';
import { styleMapper, styleMapperOverlay } from './styleMapper';
import { ModalProps } from './types';

const ModalComponent = (props: ModalProps) => {
  const { title, isOpen, onClose, divider } = props;
  const styles = useDynamicStyles(props, styleMapper);
  const overlayStyles = useDynamicStyles(props, styleMapperOverlay);

  if (!isOpen) return null;

  return (
    <div style={overlayStyles}>
      <div id={props.id} className={props.className} aria-label={props.ariaLabel} style={styles}>
        <Stack alignItems="center" spaceBetween>
          <Heading size="x-small" margin="0" bold>
            {title}
          </Heading>
          <button onClick={onClose}>
            <Icon icon="Exit" size="small" additionalStyles={{ cursor: 'pointer' }} />
          </button>
        </Stack>
        {divider ? <hr /> : <br />}
        {props.children}
      </div>
    </div>
  );
};

/**
 * Modal component.
 * @param {ModalProps} props - Properties are shown below.
 * @property {ReactNode} children - The content within the modal component.
 * @property {string} title - The title of the modal component.
 * @property {boolean} isOpen - If the modal is open.
 * @property {() => void} onClose - Function to call on modal close.
 * @property {string} [id] - An optional identifier for the modal component.
 * @property {string} [className] - Additional CSS class names to apply to the component.
 * @property {string} [ariaLabel] - Label for component that can be beneficial for users of screen readers or other assistive technologies.
 * @property {string | number} [padding='20px'] - Internal spacing within the modal component.
 * @property {string | number} [margin='0'] - External spacing around the modal component.
 * @property {string | number} [borderRadius='8px'] - Corner roundness of the modal.
 * @property {boolean} [divider=false] - Adds a divider under the modal header.
 * @property {string} [backgroundColor] - Background color of the modal.
 * @property {string} [overlayBackgroundColor] - Background color of the modal overlay.
 * @property {string | number} [width='50%'] - Width of the modal.
 * @property {string | number} [height='fit-content'] - Height of the modal.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the modal component.
 *
 * @example
 * const [isModalOpen, setIsModalOpen] = useState(false);
 * const openModal = () => setIsModalOpen(true);
 * const closeModal = () => setIsModalOpen(false);
 *
 * <button onClick={openModal}>Open Modal</button>
 * <Modal title="Example" isOpen={isModalOpen} onClose={closeModal}>
 *   ...
 * </Modal>
 */
export const Modal = memo(ModalComponent);
