import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    background-attachment: fixed;
    color: ${({ theme }) => theme.text};
    display: flex;
    font-family: Montserrat, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    min-height: 100vh;
  }
  
  /* Add subtle animated gradient overlay for depth */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.05) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
    animation: gradientShift 15s ease infinite;
  }
  
  @keyframes gradientShift {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }
  
  /* Ensure content is above the gradient */
  #root {
    position: relative;
    z-index: 1;
    width: 100%;
  }
  
  /* Enhanced button styles */
  button {
    font-family: Montserrat, sans-serif;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  button:hover {
    transform: translateY(-2px);
  }
  
  /* Card styles */
  .card {
    background: ${({ theme }) => theme.cardBg};
    border: 1px solid ${({ theme }) => theme.cardBorder};
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15);
  }
`;
