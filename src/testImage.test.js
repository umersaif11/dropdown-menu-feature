import logo from './logo.png'; // Only works if fileTransformer is set up
import styles from './style.css'; // Only works if identity-obj-proxy is set up

test('Jest handles assets correctly', () => {
  // fileTransformer returns the filename, not the binary data
  expect(logo).toBe('logo.png'); 
  
  // identity-obj-proxy allows reading class names
  // (styles.container returns "container")
  expect(styles.container).toBe('container'); 
});