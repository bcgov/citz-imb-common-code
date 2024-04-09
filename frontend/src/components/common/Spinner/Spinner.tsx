import './styles.css';
import { SpinnerProps } from './types';

// Loading spinner.
export const Spinner = (props: SpinnerProps) => {
  const { height } = props;

  const styles = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 2s linear infinite',
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: height ?? '100vh',
      }}
    >
      <div style={styles}></div>
    </div>
  );
};
