import { useState } from 'react';

interface SystemNavigationProps {
  currentTab: number;
  onTabChange: (tab: number) => void;
  settingsMode: boolean;
  onSettingsModeChange: (mode: boolean) => void;
}

function SystemNavigation({ 
  settingsMode, 
  onSettingsModeChange 
}: SystemNavigationProps) {
  const [showNavigation, setShowNavigation] = useState(true);

  return (
    <div className="mdo-atom mdo-offcanvas-vertical" id="system-nav-v">
      <div className="mdo-card mdo-vertical">
        <div className="mdo-section mdo-padding-top-medium mdo-padding-bottom-large">
          <span className="mdo-text mdo-text-center">
            <span className="home-section-trigger" onClick={() => onSettingsModeChange(false)}>
              <img src="/assets/img/logo-compact.svg" width="24" alt="logo" />
            </span>
          </span>
        </div>
        
        <div className="mdo-section mdo-allow-overflow mdo-padding-top-large mdo-padding-bottom-large mdo-text-center">
          <span 
            className="mdo-button mdo-text-inverted" 
            id="home-navigation"
            onClick={() => setShowNavigation(!showNavigation)}
          >
            <i className="fa-light fa-bars"></i>
          </span>
        </div>
        
        <div className="mdo-section mdo-allow-overflow mdo-padding-top-large mdo-text-center">
          <span 
            id="tour_step_04" 
            className="mdo-button mdo-text-inverted" 
            data-dropdown="#global-add-menu-vertical"
          >
            <i className="fa-light fa-plus mdo-font-large"></i>
          </span>
        </div>
        
        <div>
          <ul className="mdo-tabs-alt7 mdo-hidden" data-tabset="app-sections">
            <li 
              id="workspace-section-reveal" 
              className={`mdo-tab ${!settingsMode ? 'mdo-selected' : ''}`}
              onClick={() => onSettingsModeChange(false)}
            >
              W
            </li>  
            <li 
              id="settings-section-reveal" 
              className={`mdo-tab ${settingsMode ? 'mdo-selected' : ''}`}
              onClick={() => onSettingsModeChange(true)}
            >
              S
            </li>
          </ul>
        </div>
        
        <div className="mdo-section mdo-text-center mdo-allow-overflow">
          <span 
            className="mdo-button mdo-signal mdo-signal-new" 
            data-sidesheet="#system-notification" 
            data-sidesheet-parent="#sidesheet-base"
          >
            <i className="fa-light fa-bell"></i>
          </span>
        </div>
        
        <div className="mdo-section mdo-text-center mdo-allow-overflow">
          <span 
            className="mdo-button mdo-signal-new" 
            data-sidesheet="#system-error" 
            data-sidesheet-parent="#sidesheet-base"
          >
            <i className="fa-light fa-triangle-exclamation"></i>
          </span>
        </div>
        
        <div className="mdo-section mdo-text-center mdo-allow-overflow">
          <span 
            className="mdo-button" 
            data-number="1" 
            data-sidesheet="#system-job" 
            data-sidesheet-parent="#sidesheet-base"
          >
            <i className="fa-light fa-box-archive"></i>
          </span>
        </div>
        
        <div className="mdo-section mdo-allow-overflow mdo-padding-top-large mdo-padding-bottom-medium mdo-relative">
          <span 
            className="mdo-avatar mdo-image-center" 
            data-dropdown="#dropdown-user-profile-vertical"
          >
            RW
          </span>
        </div>
      </div>
    </div>
  );
}

export default SystemNavigation;
