import { useState } from 'react';
import HomeNavigationPanel from './HomeNavigationPanel';
import WorkspaceContent from './WorkspaceContent';
import SettingsContent from './SettingsContent';

interface SidesheetBaseProps {
  settingsMode: boolean;
  onSettingsModeChange: (mode: boolean) => void;
}

function SidesheetBase({ settingsMode, onSettingsModeChange }: SidesheetBaseProps) {
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState(0);
  const [activeSettingsTab, setActiveSettingsTab] = useState(0);

  return (
    <div id="sidesheet-base">
      <div className="mdo-card mdo-vertical">
        <div>
          {/* Workspace Section */}
          <div 
            data-tabset="app-sections" 
            data-tab="0" 
            className={`mdo-tab-content mdo-fill-height ${!settingsMode ? 'mdo-selected' : ''}`}
            style={{ display: !settingsMode ? 'block' : 'none' }}
          >
            <div className="mdo-card">
              <HomeNavigationPanel 
                activeTab={activeWorkspaceTab}
                onTabChange={setActiveWorkspaceTab}
                onSettingsTrigger={() => onSettingsModeChange(true)}
              />
              <WorkspaceContent activeTab={activeWorkspaceTab} />
            </div>
          </div>

          {/* Settings Section */}
          <div 
            data-tabset="app-sections" 
            data-tab="1" 
            className={`mdo-tab-content mdo-fill-height ${settingsMode ? 'mdo-selected' : ''}`}
            style={{ display: settingsMode ? 'block' : 'none' }}
          >
            <div className="mdo-card">
              <div id="home-navigation-panel-settings" className="mdo-atom mdo-navigation mdo-color-accent">
                <div id="home-navigation-panel-contents-settings" className="mdo-card mdo-vertical">
                  <div className="mdo-section mdo-padding-top-medium mdo-padding-left-medium mdo-padding-right-medium mdo-padding-bottom-small">
                    <div className="mdo-card">
                      <div className="mdo-atom mdo-allow-overflow">
                        <span 
                          className="mdo-button" 
                          onClick={() => onSettingsModeChange(false)}
                        >
                          <i className="fa-light fa-arrow-left"></i>
                        </span>
                      </div>
                      <div>
                        <span className="mdo-text mdo-font-x-large">Admin</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium mdo-padding-top-small" data-tabset="settings-sections">
                      {[
                        { icon: 'fa-users', label: 'Users' },
                        { icon: 'fa-key', label: 'Roles & Permissions' },
                        { icon: 'fa-id-card', label: 'Groups' },
                        { icon: 'fa-shield-check', label: 'Security' },
                        { icon: 'fa-database', label: 'Data sources' },
                        { icon: 'fa-plug', label: 'Integrations' },
                        { icon: 'fa-puzzle-piece', label: 'Extensions' },
                        { icon: 'fa-sliders', label: 'Advanced' }
                      ].map((item, index) => (
                        <div 
                          key={index}
                          className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeSettingsTab === index ? 'mdo-selected' : ''}`}
                          onClick={() => setActiveSettingsTab(index)}
                        >
                          <div className="mdo-atom mdo-width-20">
                            <span className="mdo-text mdo-text-center">
                              <i className={`fa-light ${item.icon}`}></i>
                            </span>
                          </div>
                          <div>
                            <div className="mdo-text">{item.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <SettingsContent activeTab={activeSettingsTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidesheetBase;
