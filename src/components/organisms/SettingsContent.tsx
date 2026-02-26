interface SettingsContentProps {
  activeTab: number;
}

function SettingsContent({ activeTab }: SettingsContentProps) {
  return (
    <div className="mdo-allow-overflow">
      {/* Tab 0: Users */}
      {activeTab === 0 && (
        <div data-tabset="settings-sections" data-tab="0" className="mdo-tab-content mdo-fill-height mdo-selected">
          <div className="mdo-card mdo-vertical mdo-header">
            <div className="mdo-section">
              <div className="mdo-card mdo-padding-all-medium">	
                <div>
                  <div className="mdo-text mdo-font-x-large">Users</div>
                </div>
                <div className="mdo-atom">
                  <span className="mdo-button mdo-minor">Add user</span>
                </div>
              </div>
            </div>
            <div> 
              <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                <table className="mdo-table mdo-module mdo-hover mdo-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>john.doe@example.com</td>
                      <td>Admin</td>
                      <td>Active</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 1: Roles & Permissions */}
      {activeTab === 1 && (
        <div data-tabset="settings-sections" data-tab="1" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div>
              <div className="mdo-card">
                <div className="mdo-section mdo-padding-all-medium">
                  <div className="mdo-card">
                    <div>
                      <div className="mdo-text mdo-font-x-large">Roles & Permissions</div>
                    </div>
                    <div className="mdo-atom">
                      <span className="mdo-button mdo-minor">Add role</span>
                    </div>
                  </div>
                </div>
                <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                  <table className="mdo-table mdo-module mdo-hover mdo-striped">
                    <thead>
                      <tr>
                        <th><span className="mdo-text">Role Name</span></th>
                        <th><span className="mdo-text">Description</span></th>
                        <th><span className="mdo-text">Users</span></th>
                        <th><span className="mdo-text">Actions</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Administrator</strong></td>
                        <td>Full system access</td>
                        <td>3</td>
                        <td><span className="mdo-button mdo-minor">Edit</span></td>
                      </tr>
                      <tr>
                        <td><strong>Data Steward</strong></td>
                        <td>Manage master data</td>
                        <td>12</td>
                        <td><span className="mdo-button mdo-minor">Edit</span></td>
                      </tr>
                      <tr>
                        <td><strong>Viewer</strong></td>
                        <td>Read-only access</td>
                        <td>45</td>
                        <td><span className="mdo-button mdo-minor">Edit</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Groups */}
      {activeTab === 2 && (
        <div data-tabset="settings-sections" data-tab="2" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div>
              <div className="mdo-card">
                <div className="mdo-section mdo-padding-all-medium">
                  <div className="mdo-card">
                    <div>
                      <div className="mdo-text mdo-font-x-large">Groups</div>
                    </div>
                    <div className="mdo-atom">
                      <span className="mdo-button mdo-minor">Add group</span>
                    </div>
                  </div>
                </div>
                <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                  <p>Groups management would go here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Security */}
      {activeTab === 3 && (
        <div data-tabset="settings-sections" data-tab="3" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div>
              <div className="mdo-card">
                <div className="mdo-section mdo-padding-all-medium">
                  <div className="mdo-card">
                    <div>
                      <div className="mdo-text mdo-font-x-large">Security</div>
                    </div>
                  </div>
                </div>
                <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                  <p>Security settings would go here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Data sources */}
      {activeTab === 4 && (
        <div data-tabset="settings-sections" data-tab="4" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-grid mdo-fill-height mdo-padding-left-medium mdo-padding-right-medium mdo-header">
            <div className="mdo-col-1 mdo-fill-height mdo-padding-right-medium">
              <div className="mdo-card mdo-vertical">
                <div className="mdo-section mdo-padding-all-medium">
                  <div className="mdo-card">
                    <div>
                      <div className="mdo-text mdo-font-x-large">Data sources</div>
                    </div>
                    <div className="mdo-atom">
                      <span className="mdo-button mdo-minor">Add source</span>
                    </div>
                  </div>
                </div>
                <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                  <div className="mdo-card mdo-padding-all-small mdo-margin-bottom-small mdo-contained mdo-clickable">
                    <div className="mdo-text"><strong>SAP ERP</strong></div>
                    <div className="mdo-text mdo-text-secondary mdo-font-small">Connected</div>
                  </div>
                  <div className="mdo-card mdo-padding-all-small mdo-margin-bottom-small mdo-contained mdo-clickable">
                    <div className="mdo-text"><strong>Oracle DB</strong></div>
                    <div className="mdo-text mdo-text-secondary mdo-font-small">Connected</div>
                  </div>
                  <div className="mdo-card mdo-padding-all-small mdo-margin-bottom-small mdo-contained mdo-clickable">
                    <div className="mdo-text"><strong>Azure SQL</strong></div>
                    <div className="mdo-text mdo-text-secondary mdo-font-small">Disconnected</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mdo-col-3 mdo-fill-height mdo-border-left mdo-padding-left-medium">
              <div className="mdo-card mdo-vertical">
                <div className="mdo-section mdo-padding-all-medium">
                  <div className="mdo-text mdo-font-large mdo-margin-bottom-medium"><strong>SAP ERP</strong></div>
                  <div className="mdo-field">
                    <span className="mdo-field-label">Connection String</span>
                    <div className="mdo-field-input">
                      <input type="text" value="Server=sap.company.com;Database=PROD" readOnly />
                    </div>
                  </div>
                  <div className="mdo-field">
                    <span className="mdo-field-label">Status</span>
                    <div className="mdo-field-input">
                      <span className="mdo-badge mdo-badge-success">Connected</span>
                    </div>
                  </div>
                  <div className="mdo-margin-top-medium">
                    <span className="mdo-button mdo-minor mdo-margin-right-small">Test Connection</span>
                    <span className="mdo-button mdo-outline">Edit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Integrations */}
      {activeTab === 5 && (
        <div data-tabset="settings-sections" data-tab="5" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div>
              <div className="mdo-card">
                <div className="mdo-section mdo-padding-all-medium">
                  <div className="mdo-card">
                    <div>
                      <div className="mdo-text mdo-font-x-large">Integrations</div>
                    </div>
                  </div>
                </div>
                <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                  <p>Integrations management would go here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Extensions */}
      {activeTab === 6 && (
        <div data-tabset="settings-sections" data-tab="6" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div>
              <div className="mdo-card">
                <div className="mdo-section mdo-padding-all-medium">
                  <div className="mdo-card">
                    <div>
                      <div className="mdo-text mdo-font-x-large">Extensions</div>
                    </div>
                  </div>
                </div>
                <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                  <p>Extensions management would go here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 7: Advanced */}
      {activeTab === 7 && (
        <div data-tabset="settings-sections" data-tab="7" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div>
              <div className="mdo-card">
                <div className="mdo-section mdo-padding-all-medium">
                  <div className="mdo-card">
                    <div>
                      <div className="mdo-text mdo-font-x-large">Advanced</div>
                    </div>
                  </div>
                </div>
                <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                  <p>Advanced settings would go here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SettingsContent;
