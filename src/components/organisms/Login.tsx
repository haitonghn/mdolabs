import { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleContinue = () => {
    // Simple password check - in real app this would be more secure
    if (password === 'mdo' || password.length > 0) {
      onLogin();
    } else {
      setShowError(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleContinue();
    }
  };

  return (
    <div id="login-box" className="mdo-login">
      <div className="mdo-card">
        <div>
          <div className="mdo-card mdo-vertical">
            <div className="mdo-section mdo-padding-left-large mdo-padding-top-large mdo-padding-right-large">
              <div className="mdo-card">
                <div className="mdo-text-center">
                  <img src="/assets/img/logo-compact.svg" width="64" alt="logo" />
                </div>
              </div>
            </div>
            
            <div className="mdo-section mdo-padding-left-large mdo-padding-top-large mdo-padding-right-large">
              <div className="mdo-card">
                <div>
                  <div className="mdo-text mdo-font-x-large mdo-text-center">
                    Sign in to MDO
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mdo-padding-left-large mdo-padding-top-medium mdo-padding-right-large">
              {showError && (
                <p id="invalid-password" className="mdo-notice mdo-notice-error">
                  <i className="fa-light fa-circle-exclamation mdo-margin-right-small"></i>
                  Invalid password
                </p>
              )}
            
              <div className="mdo-field">
                <span className="mdo-field-label mdo-required">Password</span>
                <div className="mdo-field-input">
                  <input
                    id="mdo-labs-password"
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
              </div>

              <a
                id="mdo-labs-continue"
                className="mdo-button mdo-fill-width mdo-major mdo-margin-bottom-medium"
                onClick={handleContinue}
              >
                Continue
              </a>

              <h1 className="mdo-block-section">Or</h1>

              <a href="#" className="mdo-button mdo-fill-width mdo-outline mdo-margin-top-medium">
                <i className="fa-brands fa-google mdo-margin-right-small"></i>
                Continue with Google
              </a>

              <a href="#" className="mdo-button mdo-fill-width mdo-outline mdo-margin-top-medium mdo-margin-bottom-medium">
                <i className="fa-brands fa-facebook mdo-margin-right-small"></i>
                Continue with Facebook
              </a>
            </div>
            
            <div className="mdo-section mdo-padding-left-large mdo-padding-right-large">
              <div className="mdo-card mdo-contained mdo-padding-top-small mdo-padding-bottom-small">
                <div>
                  <div className="mdo-text mdo-text-center">
                    <a href="#" className="mdo-text-secondary">Terms</a>
                    {' · '}
                    <a href="#" className="mdo-text-secondary">Privacy</a>
                    {' · '}
                    <a href="#" className="mdo-text-secondary">Contact us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mdo-card mdo-contained mdo-legal mdo-padding-top-small">
        <div>
          <div className="mdo-text mdo-text-center mdo-font-small">
            <img src="/assets/img/company-logo.svg" width="64" alt="proto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
