interface HomeNavigationPanelProps {
  activeTab: number;
  onTabChange: (tab: number) => void;
  onSettingsTrigger: () => void;
}

function HomeNavigationPanel({ activeTab, onTabChange, onSettingsTrigger }: HomeNavigationPanelProps) {
  return (
    <div id="home-navigation-panel" className="mdo-atom mdo-navigation mdo-allow-overflow mdo-no-mobile mdo-color-accent">
      <div id="home-navigation-panel-contents" className="mdo-card mdo-vertical">
        <div className="mdo-section mdo-padding-top-medium mdo-padding-right-medium mdo-padding-bottom-small">
          <div className="mdo-card">
            <div className="mdo-allow-overflow mdo-padding-left-medium">
              <span className="mdo-text mdo-font-x-large">MDO</span>
            </div>
            <div className="mdo-atom mdo-allow-overflow">
              <span className="mdo-button" data-dropdown="#dropdown-home-add">
                <i className="fa-light fa-grid-round-2-plus"></i>
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium mdo-padding-top-small" data-tabset="global-inbox">
            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeTab === 0 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(0)}
            >
              <div className="mdo-atom mdo-width-20">
                <span className="mdo-text mdo-text-center">
                  <i className="fa-light fa-comment"></i>
                </span>
              </div>
              <div>
                <div className="mdo-text">Ask KAI</div>
              </div>
            </div>

            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium ${activeTab === 1 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(1)}
            >
              <div className="mdo-atom mdo-width-20">
                <span className="mdo-text mdo-text-center">
                  <i className="fa-light fa-inbox"></i>
                </span>
              </div>
              <div>
                <div className="mdo-text">Tasks</div>
              </div>
              <div className="mdo-atom">
                <span className="mdo-button mdo-text-info">
                  <i className="fa-solid fa-circle mdo-font-xxx-small mdo-font-adjust"></i>
                </span>
              </div>
            </div>		

            <div 
              className="mdo-card mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium mdo-hover-parent"
              onClick={onSettingsTrigger}
            >
              <div className="mdo-atom mdo-width-20">
                <span className="mdo-text mdo-text-center">
                  <i className="fa-light fa-gear"></i>
                </span>
              </div>
              <div>
                <div className="mdo-text settings-section-trigger">Admin</div>
              </div>
              <div className="mdo-atom mdo-padding-left-small">
                <span className="mdo-text">
                  <i className="fa-light fa-arrow-right-long mdo-hover-only"></i>
                </span>
              </div>
            </div> 

            <div className="mdo-card mdo-contained mdo-clickable mdo-padding-right-medium">
              <div>
                <div className="mdo-text mdo-workspace-group mdo-flat">
                  <i className="fa-light fa-angle-down mdo-margin-right-small"></i>
                  Datasets
                </div>
              </div>
            </div>

            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeTab === 4 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(4)}
            >
              <div className="mdo-atom mdo-width-20">
                <span className="mdo-text mdo-text-center">
                  <i className="fa-light fa-table"></i>
                </span>
              </div>
              <div>
                <div className="mdo-text">Material master</div>
              </div>
            </div> 

            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeTab === 5 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(5)}
            >
              <div className="mdo-atom mdo-width-20">
                <span className="mdo-text mdo-text-center">
                  <i className="fa-light fa-bars-staggered"></i>
                </span>
              </div>
              <div>
                <div className="mdo-text">All datasets</div>
              </div>
            </div> 

            <div className="mdo-card mdo-contained mdo-clickable mdo-padding-right-medium">
              <div>
                <div className="mdo-text mdo-workspace-group mdo-flat">
                  <i className="fa-light fa-angle-down mdo-margin-right-small"></i>
                  DIW
                </div>
              </div>
            </div>

            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeTab === 7 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(7)}
            >
              <div className="mdo-atom mdo-width-20">
                <div className="mdo-padding-top-small mdo-text-center">
                  <i className="fa-light fa-hexagon-check mdo-font-adjust-alt3"></i>
                </div>
              </div>
              <div className="mdo-text mdo-double-line">
                Duplicate check<br />
                <span className="mdo-font-x-small mdo-text-secondary mdo-secondary-line">Material master</span>
              </div>
            </div> 

            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeTab === 8 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(8)}
            >
              <div className="mdo-atom mdo-width-20">
                <div className="mdo-padding-top-small mdo-text-center">
                  <i className="fa-light fa-hexagon-check mdo-font-adjust-alt3"></i>
                </div>
              </div>
              <div className="mdo-text mdo-double-line">
                Classification check<br />
                <span className="mdo-font-x-small mdo-text-secondary mdo-secondary-line">Material master</span>
              </div>
            </div> 

            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeTab === 9 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(9)}
            >
              <div className="mdo-atom mdo-width-20">
                <div className="mdo-padding-top-small mdo-text-center">
                  <i className="fa-light fa-hexagon-check mdo-font-adjust-alt3"></i>
                </div>
              </div>
              <div className="mdo-text mdo-double-line">
                Survivorship check<br />
                <span className="mdo-font-x-small mdo-text-secondary mdo-secondary-line">Material master</span>
              </div>
            </div> 

            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeTab === 10 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(10)}
            >
              <div className="mdo-atom mdo-width-20">
                <span className="mdo-text mdo-text-center">
                  <i className="fa-light fa-bars-staggered"></i>
                </span>
              </div>
              <div>
                <div className="mdo-text">All schemas</div>
              </div>
            </div> 

            <div className="mdo-card mdo-contained mdo-clickable mdo-padding-right-medium">
              <div>
                <div className="mdo-text mdo-workspace-group mdo-flat">
                  <i className="fa-light fa-angle-down mdo-margin-right-small"></i>
                  Pages
                </div>
              </div>
            </div>

            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeTab === 12 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(12)}
            >
              <div className="mdo-atom mdo-width-20">
                <span className="mdo-text mdo-text-center">
                  <i className="fa-light fa-window-maximize"></i>
                </span>
              </div>
              <div>
                <div className="mdo-text">Data summary report</div>
              </div>
            </div>

            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeTab === 13 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(13)}
            >
              <div className="mdo-atom mdo-width-20">
                <span className="mdo-text mdo-text-center">
                  <i className="fa-light fa-window-maximize"></i>
                </span>
              </div>
              <div>
                <div className="mdo-text">Products</div>
              </div>
            </div>

            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeTab === 14 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(14)}
            >
              <div className="mdo-atom mdo-width-20">
                <span className="mdo-text mdo-text-center">
                  <i className="fa-light fa-window-maximize"></i>
                </span>
              </div>
              <div>
                <div className="mdo-text">Assets</div>
              </div>
            </div>

            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeTab === 15 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(15)}
            >
              <div className="mdo-atom mdo-width-20">
                <span className="mdo-text mdo-text-center">
                  <i className="fa-light fa-window-maximize"></i>
                </span>
              </div>
              <div>
                <div className="mdo-text">Spares</div>
              </div>
            </div>

            <div 
              className={`mdo-card mdo-tab mdo-tab-nav mdo-hover mdo-contained mdo-clickable mdo-padding-left-medium mdo-padding-right-medium ${activeTab === 16 ? 'mdo-selected' : ''}`}
              onClick={() => onTabChange(16)}
            >
              <div className="mdo-atom mdo-width-20">
                <span className="mdo-text mdo-text-center">
                  <i className="fa-light fa-bars-staggered"></i>
                </span>
              </div>
              <div>
                <div className="mdo-text">All pages</div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNavigationPanel;
