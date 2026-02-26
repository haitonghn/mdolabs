import { useState } from 'react';
import SystemNavigation from '../organisms/SystemNavigation';
import SidesheetBase from '../organisms/SidesheetBase';

function MainApp() {
  const [currentTab, setCurrentTab] = useState(0);
  const [settingsMode, setSettingsMode] = useState(false);

  return (
    <div className="mdo-card">
      <SystemNavigation 
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        settingsMode={settingsMode}
        onSettingsModeChange={setSettingsMode}
      />
      <SidesheetBase 
        settingsMode={settingsMode}
        onSettingsModeChange={setSettingsMode}
      />
    </div>
  );
}

export default MainApp;
