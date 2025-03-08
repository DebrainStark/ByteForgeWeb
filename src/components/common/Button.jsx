
// Button.jsx
function Button({ children, variant = "primary", size = "", className = "", ...props }) {
    const buttonClass = `btn btn-${variant} ${size ? `btn-${size}` : ''} ${className}`;
    
    return (
      <button className={buttonClass} {...props}>
        {children}
      </button>
    );
  }
  
  export default Button;