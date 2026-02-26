import { useState } from 'react';
import ReactECharts from 'echarts-for-react';

interface WorkspaceContentProps {
  activeTab: number;
}

function WorkspaceContent({ activeTab }: WorkspaceContentProps) {
  const [materialMasterView, setMaterialMasterView] = useState(0);
  const [chartViewDQScoreTab, setChartViewDQScoreTab] = useState(0);

  return (
    <div className="mdo-allow-overflow">
      {/* Tab 0: Ask KAI */}
      {activeTab === 0 && (
        <div data-tabset="global-inbox" data-tab="0" className="mdo-tab-content mdo-fill-height mdo-selected">
          <div className="mdo-card mdo-vertical mdo-header">
            <div className="mdo-section mdo-padding-all-medium">
              <div className="mdo-card">
                <div>
                  <div className="mdo-text mdo-font-x-large">Ask KAI</div>
                </div>
                <div className="mdo-atom">
                  <span className="mdo-button">
                    <i className="fa-light fa-arrow-up-right-from-square mdo-margin-right-small"></i>
                    View form
                  </span>
                </div>
                <div className="mdo-atom">
                  <span className="mdo-button">
                    <i className="fa-light fa-message-exclamation mdo-margin-right-small"></i>
                    Raise an exception
                  </span>
                </div>
                <div className="mdo-atom">
                  <span className="mdo-button">
                    <i className="fa-light fa-bookmark mdo-margin-right-small"></i>
                    See sample prompts
                  </span>
                </div>
                <div className="mdo-atom">
                  <span className="mdo-button">
                    <i className="fa-light fa-clock-rotate-left mdo-margin-right-small"></i>
                    Chat history
                  </span>
                </div>
                <div className="mdo-atom">
                  <span className="mdo-button">
                    <i className="fa-light fa-circle-question"></i>
                  </span>
                </div>
                <div className="mdo-atom mdo-padding-left-large">
                  <span className="mdo-button mdo-minor mdo-fixed-button">New chat</span>
                </div>
              </div>
            </div>
            <div>
              <div className="mdo-card mdo-vertical mdo-width-700 mdo-justified">
                <div>
                  <div className="mdo-content mdo-padding-top-large mdo-padding-left-medium mdo-padding-right-medium mdo-padding-bottom-medium">
                    <p className="mdo-text-center mdo-padding-bottom-large">
                      <img src="/assets/img/chatbot.svg" width="72" alt="chatbot" />
                    </p>
                    <p className="mdo-text-center mdo-padding-bottom-large">
                      Hi, I'm KAI, your personal MDO assistant.<br />
                      Please select one of the options below to begin.
                    </p>
                    <p className="mdo-text-center">
                      <span className="mdo-button mdo-outline mdo-margin-right-small">
                        <i className="fa-light fa-file mdo-margin-right-small"></i>
                        Raise a request
                      </span>
                      <span className="mdo-button mdo-outline mdo-margin-right-small">
                        <i className="fa-light fa-question mdo-margin-right-small"></i>
                        Ask a question
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 1: Tasks */}
      {activeTab === 1 && (
        <div data-tabset="global-inbox" data-tab="1" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header"> 
            <div className="mdo-section mdo-padding-top-medium mdo-padding-bottom-small mdo-padding-left-medium mdo-padding-right-medium">
              <div className="mdo-card">
                <div>
                  <div className="mdo-text mdo-font-x-large">Tasks</div>
                </div>
              </div>
            </div>

            <div className="mdo-section mdo-padding-bottom-medium mdo-padding-left-medium mdo-padding-right-medium">
              <ul className="mdo-tabs">	
                <li className="mdo-tab mdo-selected">
                  <span className="mdo-text-line">
                    <i className="fa-light fa-inbox mdo-margin-right-small"></i>
                    Inbox
                    <span className="mdo-text-secondary mdo-padding-left-small">21</span>
                  </span>
                </li>
                <li className="mdo-tab">
                  <span className="mdo-text-line">
                    <i className="fa-light fa-user-check mdo-margin-right-small"></i>
                    My tasks
                    <span className="mdo-text-secondary mdo-padding-left-small">5</span>
                  </span>
                </li>
                <li className="mdo-tab">
                  <span className="mdo-text-line">
                    <i className="fa-light fa-clock mdo-margin-right-small"></i>
                    In progress
                  </span>
                </li>
                <li className="mdo-tab">
                  <span className="mdo-text-line">
                    <i className="fa-light fa-square-check mdo-margin-right-small"></i>
                    Completed
                  </span>
                </li>
                <li className="mdo-tab">
                  <span className="mdo-text-line">
                    <i className="fa-light fa-bars-staggered mdo-margin-right-small"></i>
                    All tasks
                  </span>
                </li>
              </ul>
            </div>

            <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
              <div className="mdo-card mdo-vertical">
                <div className="mdo-section mdo-padding-top-small">
                  <div className="mdo-card">
                    <div className="mdo-allow-overflow">
                      <div className="mdo-filter-pill mdo-filter-group-by">
                        <i className="fa-light fa-clone mdo-margin-right-small"></i>
                        Group by
                        <i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i>
                      </div>
                      <div className="mdo-filter-pill mdo-filter-pill-binary">Claimed</div>
                      <div className="mdo-filter-pill mdo-filter-pill-binary">Due</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mdo-content">
                    <table className="mdo-table mdo-module mdo-hover mdo-striped">
                      <thead>
                        <tr>
                          <th className="mdo-fixed">
                            <span className="mdo-button mdo-float-left">
                              <i className="fa-light fa-columns-3"></i>
                            </span>
                          </th>
                          <th className="mdo-fixed"></th>
                          <th><span className="mdo-text">Description</span></th>
                          <th><span className="mdo-text">Requested by</span></th>
                          <th><span className="mdo-text mdo-text-right">Sent on</span></th>
                          <th><span className="mdo-text mdo-text-right">Due by</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="mdo-button mdo-float-left">
                              <i className="mdo-icon-more"></i>
                            </span>
                          </td>
                          <td><a href="#">10000346</a></td>
                          <td>Approval for new material</td>
                          <td>John Smith</td>
                          <td className="mdo-text-right">2026-02-20</td>
                          <td className="mdo-text-right">2026-02-28</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="mdo-button mdo-float-left">
                              <i className="mdo-icon-more"></i>
                            </span>
                          </td>
                          <td><a href="#">10000347</a></td>
                          <td>Material master data update</td>
                          <td>Jane Doe</td>
                          <td className="mdo-text-right">2026-02-21</td>
                          <td className="mdo-text-right">2026-03-01</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="mdo-button mdo-float-left">
                              <i className="mdo-icon-more"></i>
                            </span>
                          </td>
                          <td><a href="#">10000348</a></td>
                          <td>Equipment classification review</td>
                          <td>Mike Johnson</td>
                          <td className="mdo-text-right">2026-02-22</td>
                          <td className="mdo-text-right">2026-03-02</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Material master */}
      {activeTab === 4 && (
        <div data-tabset="global-inbox" data-tab="4" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-header">
            <div>
              <div className="mdo-card mdo-vertical">
                <div className="mdo-section">
                  <div className="mdo-card mdo-padding-left-medium mdo-padding-right-medium mdo-padding-top-medium mdo-padding-bottom-small">
                    <div className="mdo-atom mdo-no-desktop">
                      <span className="mdo-button"><i className="mdo-icon-menu"></i></span>
                    </div>
                    <div className="mdo-atom">
                      <div className="mdo-text mdo-font-x-large">Material master</div>
                    </div>
                    <div>
                      <div id="dataset-home-tab-list-toolbar">
                        <div className="mdo-card mdo-fill-width">
                          <div className="mdo-padding-left-large">
                            <div className="mdo-filter-pill mdo-filter-pill-search mdo-fill-width mdo-header-search">
                              <input type="text" placeholder="Search" />
                            </div>
                          </div>
                          <div className="mdo-atom mdo-padding-left-medium">
                            <span className="mdo-button mdo-round-button mdo-new"><i className="fa-light fa-filter"></i></span>
                          </div>
                          <div className="mdo-atom mdo-padding-left-medium">
                            <span className="mdo-button mdo-round-button"><i className="mdo-icon-more"></i></span>
                          </div>
                          <div className="mdo-atom mdo-padding-left-medium">
                            <span className="mdo-button"><i className="fa-light fa-folder-blank mdo-margin-right-small"></i>Default view<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mdo-atom mdo-allow-overflow mdo-padding-left-large">
                      <ul className="mdo-tabs-alt6 mdo-compact" data-tabset="dataset-home">
                        <li 
                          id="dataset-home-tab-list" 
                          className={`mdo-tab ${materialMasterView === 0 ? 'mdo-selected' : ''}`}
                          onClick={() => setMaterialMasterView(0)}
                        >
                          <i className="fa-light fa-line-columns"></i>
                        </li>
                        <li 
                          id="dataset-home-tab-tree" 
                          className={`mdo-tab ${materialMasterView === 1 ? 'mdo-selected' : ''}`}
                          onClick={() => setMaterialMasterView(1)}
                        >
                          <i className="fa-light fa-folder-tree"></i>
                        </li>
                        <li 
                          id="dataset-home-tab-oneview" 
                          className={`mdo-tab ${materialMasterView === 2 ? 'mdo-selected' : ''}`}
                          onClick={() => setMaterialMasterView(2)}
                        >
                          <i className="fa-light fa-360-degrees"></i>
                        </li>
                        <li 
                          id="dataset-home-tab-diw" 
                          className={`mdo-tab ${materialMasterView === 3 ? 'mdo-selected' : ''}`}
                          onClick={() => setMaterialMasterView(3)}
                        >
                          <i className="fa-light fa-chart-column"></i>
                        </li>
                        <li 
                          id="dataset-home-tab-profile" 
                          className={`mdo-tab ${materialMasterView === 4 ? 'mdo-selected' : ''}`}
                          onClick={() => setMaterialMasterView(4)}
                        >
                          <i className="fa-light fa-wave-pulse"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="mdo-atom mdo-allow-overflow mdo-padding-left-large">
                      <span className="mdo-button mdo-minor">New request<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></span>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Material Master View 0: List View */}
                  {materialMasterView === 0 && (
                    <div data-tabset="dataset-home" data-tab="0" className="mdo-tab-content mdo-fill-height mdo-selected">
                      <div className="mdo-card">
                      <div className="mdo-atom mdo-width-300 mdo-border-right mdo-padding-left-medium mdo-allow-overflow">
                        <div className="mdo-card mdo-vertical">
                          <div className="mdo-section mdo-padding-bottom-small mdo-padding-top-small mdo-padding-right-medium">
                            <div className="mdo-card">
                              <div className="mdo-allow-overflow mdo-padding-right-small">
                                <div className="mdo-text mdo-font-large">Filter</div>
                              </div>
                              <div className="mdo-atom mdo-allow-overflow">
                                <span className="mdo-button"><i className="fa-light fa-rotate-left"></i></span>
                              </div>
                              <div className="mdo-atom mdo-allow-overflow">
                                <span className="mdo-button"><i className="fa-light fa-plus"></i></span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="mdo-content mdo-padding-right-medium">
                              <div className="mdo-widget mdo-compact-alt mdo-active mdo-inverted mdo-margin-bottom-medium">
                                <div className="mdo-widget-inner">
                                  <div className="mdo-widget-title">
                                    <span>Record number</span>
                                    <div className="mdo-widget-toolbar">
                                      <i className="fa-light fa-rotate-left mdo-margin-left-medium mdo-float-left"></i>
                                      <i className="fa-light fa-xmark mdo-margin-left-large mdo-float-left"></i>
                                    </div>
                                  </div>
                                  <div className="mdo-widget-content mdo-padding-left-small mdo-padding-right-small mdo-padding-bottom-small">
                                    <div className="mdo-card mdo-vertical mdo-color-accent mdo-accent-alt mdo-padding-left-small mdo-padding-right-small">
                                      <div>
                                        <ul className="mdo-chip-list">
                                          <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0001</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                          <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0002</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                          <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0003</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                          <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0004</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                          <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0005</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                          <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0006</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                          <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0007</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                        </ul>
                                      </div>
                                      <div className="mdo-section">
                                        <div className="mdo-text mdo-text-secondary mdo-no-padding-top">Type to add...</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mdo-widget mdo-compact-alt mdo-active mdo-inverted mdo-margin-bottom-medium">
                                <div className="mdo-widget-inner">
                                  <div className="mdo-widget-title">
                                    <span>Material desc</span>
                                    <div className="mdo-widget-toolbar">
                                      <i className="fa-light fa-rotate-left mdo-margin-left-medium mdo-float-left"></i>
                                      <i className="fa-light fa-xmark mdo-margin-left-large mdo-float-left"></i>
                                    </div>
                                  </div>
                                  <div className="mdo-widget-content mdo-padding-left-small mdo-padding-right-small mdo-padding-bottom-small">
                                    <div className="mdo-card mdo-vertical mdo-color-accent mdo-accent-alt mdo-padding-left-small mdo-padding-right-small">
                                      <div>
                                        <div className="mdo-text">BALL</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mdo-widget mdo-compact-alt mdo-active mdo-inverted mdo-margin-bottom-medium">
                                <div className="mdo-widget-inner">
                                  <div className="mdo-widget-title">
                                    <span>Class</span>
                                    <div className="mdo-widget-toolbar">
                                      <i className="fa-light fa-grid-2-plus mdo-float-left"></i>
                                      <i className="fa-light fa-rotate-left mdo-margin-left-large mdo-float-left"></i>
                                      <i className="fa-light fa-xmark mdo-margin-left-large mdo-float-left"></i>
                                    </div>
                                  </div>
                                  <div className="mdo-widget-content mdo-padding-left-small mdo-padding-right-small mdo-padding-bottom-small">
                                    <div className="mdo-card mdo-vertical mdo-color-accent mdo-accent-alt mdo-padding-left-small mdo-padding-right-small">
                                      <div>
                                        <ul className="mdo-chip-list">
                                          <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>Bearing ball</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                        </ul>
                                      </div>
                                      <div className="mdo-section">
                                        <div className="mdo-text mdo-text-secondary mdo-no-padding-top">Type to add...</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mdo-widget mdo-compact-alt mdo-active mdo-inverted mdo-margin-bottom-medium">
                                <div className="mdo-widget-inner">
                                  <div className="mdo-widget-title">
                                    <span>Bearing ball.Diameter</span>
                                    <div className="mdo-widget-toolbar">
                                      <i className="fa-light fa-rotate-left mdo-margin-left-medium mdo-float-left"></i>
                                      <i className="fa-light fa-xmark mdo-margin-left-large mdo-float-left"></i>
                                    </div>
                                  </div>
                                  <div className="mdo-widget-content mdo-padding-left-small mdo-padding-right-small mdo-padding-bottom-small">
                                    <div className="mdo-card mdo-vertical mdo-color-accent mdo-accent-alt mdo-padding-left-small mdo-padding-right-small">
                                      <div>
                                        <ul className="mdo-chip-list">
                                          <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>20mm</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                          <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>22mm</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                        </ul>
                                      </div>
                                      <div className="mdo-section">
                                        <div className="mdo-text mdo-text-secondary mdo-no-padding-top">Type to add...</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mdo-widget mdo-compact-alt mdo-inverted mdo-margin-bottom-medium">
                                <div className="mdo-widget-inner">
                                  <div className="mdo-widget-title">
                                    <span>Plant</span>
                                    <div className="mdo-widget-toolbar">
                                      <i className="fa-light fa-rotate-left mdo-margin-left-medium mdo-float-left"></i>
                                      <i className="fa-light fa-xmark mdo-margin-left-large mdo-float-left"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mdo-allow-overflow">
                        <div className="mdo-card mdo-vertical mdo-padding-left-medium mdo-padding-right-medium">
                          <div>
                            <div className="mdo-content">
                              <table className="mdo-table mdo-module mdo-hover mdo-condensed mdo-excel mdo-striped">
                                <thead>
                                  <tr>
                                    <th>
                                      <div className="mdo-text">
                                        <div className="mdo-option mdo-option-square mdo-float-left">
                                          <input type="checkbox" name="home-class" id="home-class-rec00" />
                                          <label htmlFor="home-class-rec00"></label>
                                        </div>
                                      </div>
                                    </th>
                                    <th className="mdo-fixed mdo-no-padding-left mdo-relative mdo-cell-fixed">
                                      <span className="mdo-button mdo-float-left"><i className="fa-light fa-gear"></i></span>
                                      <div className="mdo-table-multi-select">
                                        <ul className="mdo-button-group mdo-float-left">
                                          <li><span className="mdo-button mdo-selection"><i className="fa-light fa-layer-group"></i><i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></span></li>
                                          <li><span className="mdo-button mdo-selection"><i className="fa-light fa-xmark"></i></span></li>
                                        </ul>
                                      </div>
                                    </th>
                                    <th className="mdo-fixed mdo-cell-fixed"><span className="mdo-text">Record number</span></th>
                                    <th><span className="mdo-text">Material desc<i className="mdo-icon-outgoing mdo-margin-left-small"></i></span></th>
                                    <th><span className="mdo-text">Material type</span></th>
                                    <th><span className="mdo-text">Base UoM</span></th>
                                    <th><span className="mdo-text">Created</span></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="mdo-cell-fixed mdo-no-padding-left"></td>
                                    <td className="mdo-cell-fixed mdo-no-padding-left"></td>
                                    <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-secondary">Filter</span></td>
                                    <td><span className="mdo-text mdo-text-secondary">Filter</span></td>
                                    <td><span className="mdo-text mdo-text-secondary">Filter</span></td>
                                    <td><span className="mdo-text mdo-text-secondary">Filter</span></td>
                                    <td><span className="mdo-text mdo-text-secondary">Filter</span></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="mdo-text">
                                        <div className="mdo-option mdo-option-square mdo-float-left multi-select-trigger">
                                          <input type="checkbox" name="home-class" id="home-class-rec01" />
                                          <label htmlFor="home-class-rec01"></label>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="mdo-cell-fixed mdo-no-padding-left"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                                    <td className="mdo-cell-fixed"><span className="mdo-text"><a href="#" className="mdo-text-underline-link">REC00001</a></span></td>
                                    <td><span className="mdo-text">BRG BALL,ANNU</span></td>
                                    <td><span className="mdo-text">ERSA-Spare Parts</span></td>
                                    <td><span className="mdo-text">EA-each</span></td>
                                    <td><span className="mdo-text">20 May 2023 12:45PM</span></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="mdo-text">
                                        <div className="mdo-option mdo-option-square mdo-float-left">
                                          <input type="checkbox" name="home-class" id="home-class-rec02" />
                                          <label htmlFor="home-class-rec02"></label>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="mdo-cell-fixed mdo-no-padding-left"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                                    <td className="mdo-cell-fixed"><span className="mdo-text"><a href="#" className="mdo-text-underline-link">REC00002</a></span></td>
                                    <td><span className="mdo-text">BRG BALL,ANNU,6300,10MM</span></td>
                                    <td><span className="mdo-text">ERSA-Spare Parts</span></td>
                                    <td><span className="mdo-text">EA-each</span></td>
                                    <td><span className="mdo-text">20 May 2023 12:45PM</span></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="mdo-text">
                                        <div className="mdo-option mdo-option-square mdo-float-left">
                                          <input type="checkbox" name="home-class" id="home-class-rec03" />
                                          <label htmlFor="home-class-rec03"></label>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="mdo-cell-fixed mdo-no-padding-left"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                                    <td className="mdo-cell-fixed"><span className="mdo-text"><a href="#" className="mdo-text-underline-link">REC00003</a></span></td>
                                    <td><span className="mdo-text">BRG BALL,ANNU</span></td>
                                    <td><span className="mdo-text">ERSA-Spare Parts</span></td>
                                    <td><span className="mdo-text">EA-each</span></td>
                                    <td><span className="mdo-text">20 May 2023 12:45PM</span></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="mdo-text">
                                        <div className="mdo-option mdo-option-square mdo-float-left">
                                          <input type="checkbox" name="home-class" id="home-class-rec04" />
                                          <label htmlFor="home-class-rec04"></label>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="mdo-cell-fixed mdo-no-padding-left"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                                    <td className="mdo-cell-fixed"><span className="mdo-text"><a href="#" className="mdo-text-underline-link">REC00004</a></span></td>
                                    <td><span className="mdo-text">BRG BALL,ANNU,6319,DBL</span></td>
                                    <td><span className="mdo-text">ERSA-Spare Parts</span></td>
                                    <td><span className="mdo-text">EA-each</span></td>
                                    <td><span className="mdo-text">20 May 2023 12:45PM</span></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="mdo-text">
                                        <div className="mdo-option mdo-option-square mdo-float-left">
                                          <input type="checkbox" name="home-class" id="home-class-rec05" />
                                          <label htmlFor="home-class-rec05"></label>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="mdo-cell-fixed mdo-no-padding-left"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                                    <td className="mdo-cell-fixed"><span className="mdo-text"><a href="#" className="mdo-text-underline-link">REC00005</a></span></td>
                                    <td><span className="mdo-text">BEARING BALL,100MM</span></td>
                                    <td><span className="mdo-text">ERSA-Spare Parts</span></td>
                                    <td><span className="mdo-text">EA-each</span></td>
                                    <td><span className="mdo-text">20 May 2023 12:45PM</span></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                  {/* Material Master View 1: Tree View */}
                  {materialMasterView === 1 && (
                    <div data-tabset="dataset-home" data-tab="1" className="mdo-tab-content mdo-fill-height mdo-selected">
                      <div className="mdo-card">
                        {/* Left Filter Panel - Same as List View */}
                        <div className="mdo-atom mdo-width-300 mdo-border-right mdo-padding-left-medium mdo-allow-overflow">
                          <div className="mdo-card mdo-vertical">
                            <div className="mdo-section mdo-padding-bottom-small mdo-padding-top-small mdo-padding-right-medium">
                              <div className="mdo-card">
                                <div className="mdo-allow-overflow mdo-padding-right-small">
                                  <div className="mdo-text mdo-font-large">Filter</div>
                                </div>
                                <div className="mdo-atom mdo-allow-overflow">
                                  <span className="mdo-button"><i className="mdo-icon-more"></i></span>
                                </div>
                                <div className="mdo-atom mdo-allow-overflow">
                                  <span className="mdo-button"><i className="fa-light fa-rotate-left"></i></span>
                                </div>
                                <div className="mdo-atom mdo-allow-overflow">
                                  <span className="mdo-button"><i className="fa-light fa-plus"></i></span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="mdo-content mdo-padding-right-medium">
                                <div className="mdo-widget mdo-compact-alt mdo-active mdo-inverted mdo-margin-bottom-medium">
                                  <div className="mdo-widget-inner">
                                    <div className="mdo-widget-title">
                                      <span>Record number</span>
                                      <div className="mdo-widget-toolbar">
                                        <i className="fa-light fa-rotate-left mdo-margin-left-medium mdo-float-left"></i>
                                        <i className="fa-light fa-xmark mdo-margin-left-large mdo-float-left"></i>
                                      </div>
                                    </div>
                                    <div className="mdo-widget-content mdo-padding-left-small mdo-padding-right-small mdo-padding-bottom-small">
                                      <div className="mdo-card mdo-vertical mdo-color-accent mdo-accent-alt mdo-padding-left-small mdo-padding-right-small">
                                        <div>
                                          <ul className="mdo-chip-list">
                                            <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0001</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                            <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0002</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                            <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0003</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                            <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0004</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                            <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0005</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                            <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0006</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                            <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>REC0007</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                          </ul>
                                        </div>
                                        <div className="mdo-section">
                                          <div className="mdo-text mdo-text-secondary mdo-no-padding-top">Type to add...</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mdo-widget mdo-compact-alt mdo-active mdo-inverted mdo-margin-bottom-medium">
                                  <div className="mdo-widget-inner">
                                    <div className="mdo-widget-title">
                                      <span>Material desc</span>
                                      <div className="mdo-widget-toolbar">
                                        <i className="fa-light fa-rotate-left mdo-margin-left-medium mdo-float-left"></i>
                                        <i className="fa-light fa-xmark mdo-margin-left-large mdo-float-left"></i>
                                      </div>
                                    </div>
                                    <div className="mdo-widget-content mdo-padding-left-small mdo-padding-right-small mdo-padding-bottom-small">
                                      <div className="mdo-card mdo-vertical mdo-color-accent mdo-accent-alt mdo-padding-left-small mdo-padding-right-small">
                                        <div>
                                          <div className="mdo-text">BALL</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mdo-widget mdo-compact-alt mdo-active mdo-inverted mdo-margin-bottom-medium">
                                  <div className="mdo-widget-inner">
                                    <div className="mdo-widget-title">
                                      <span>Class</span>
                                      <div className="mdo-widget-toolbar">
                                        <i className="fa-light fa-grid-2-plus mdo-float-left"></i>
                                        <i className="fa-light fa-rotate-left mdo-margin-left-large mdo-float-left"></i>
                                        <i className="fa-light fa-xmark mdo-margin-left-large mdo-float-left"></i>
                                      </div>
                                    </div>
                                    <div className="mdo-widget-content mdo-padding-left-small mdo-padding-right-small mdo-padding-bottom-small">
                                      <div className="mdo-card mdo-vertical mdo-color-accent mdo-accent-alt mdo-padding-left-small mdo-padding-right-small">
                                        <div>
                                          <ul className="mdo-chip-list">
                                            <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>Bearing ball</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                          </ul>
                                        </div>
                                        <div className="mdo-section">
                                          <div className="mdo-text mdo-text-secondary mdo-no-padding-top">Type to add...</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mdo-widget mdo-compact-alt mdo-active mdo-inverted mdo-margin-bottom-medium">
                                  <div className="mdo-widget-inner">
                                    <div className="mdo-widget-title">
                                      <span>Bearing ball.Diameter</span>
                                      <div className="mdo-widget-toolbar">
                                        <i className="fa-light fa-rotate-left mdo-margin-left-medium mdo-float-left"></i>
                                        <i className="fa-light fa-xmark mdo-margin-left-large mdo-float-left"></i>
                                      </div>
                                    </div>
                                    <div className="mdo-widget-content mdo-padding-left-small mdo-padding-right-small mdo-padding-bottom-small">
                                      <div className="mdo-card mdo-vertical mdo-color-accent mdo-accent-alt mdo-padding-left-small mdo-padding-right-small">
                                        <div>
                                          <ul className="mdo-chip-list">
                                            <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>20mm</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                            <li><div className="mdo-chip mdo-clickable mdo-no-select"><span>22mm</span><i className="mdo-icon-close mdo-margin-left-small"></i></div></li>
                                          </ul>
                                        </div>
                                        <div className="mdo-section">
                                          <div className="mdo-text mdo-text-secondary mdo-no-padding-top">Type to add...</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mdo-widget mdo-compact-alt mdo-inverted mdo-margin-bottom-medium">
                                  <div className="mdo-widget-inner">
                                    <div className="mdo-widget-title">
                                      <span>Plant</span>
                                      <div className="mdo-widget-toolbar">
                                        <i className="fa-light fa-rotate-left mdo-margin-left-medium mdo-float-left"></i>
                                        <i className="fa-light fa-xmark mdo-margin-left-large mdo-float-left"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="mdo-allow-overflow">
                          <div className="mdo-card mdo-vertical mdo-padding-left-medium mdo-padding-right-medium">
                            <div className="mdo-section mdo-padding-top-small mdo-padding-bottom-small mdo-padding-right-medium">
                              <div className="mdo-card mdo-padding-left-large">
                                <div className="mdo-allow-overflow"></div>
                                <div className="mdo-atom">
                                  <ul className="mdo-button-group">
                                    <li><span className="mdo-text mdo-padding-left-medium mdo-padding-right-small">1-100 / 1000</span></li>
                                    <li><span className="mdo-button"><i className="mdo-icon-chevron-left mdo-disabled"></i></span></li>
                                    <li><span className="mdo-button"><i className="mdo-icon-chevron-right"></i></span></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="mdo-content mdo-color-accent mdo-padding-top-small">
                                
                                {/* Functional Location Widget */}
                                <div className="mdo-widget mdo-compact mdo-active" style={{marginLeft: '6px'}}>
                                  <div className="mdo-widget-inner">
                                    <div className="mdo-widget-title"><span>Functional location (3)</span></div>
                                  </div>
                                </div>
                                
                                <table className="mdo-table mdo-module mdo-condensed mdo-excel" style={{marginLeft: '42px'}}>
                                  <thead>
                                    <tr className="table-subheader">
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                      <th>Functional location</th>
                                      <th>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="mdo-fixed"><i className="mdo-icon-chevron-down"></i></td>
                                      <td className="mdo-fixed">
                                        <div className="mdo-option mdo-option-square mdo-float-left">
                                          <input type="checkbox" name="home-tree" id="home-tree-rec01" />
                                          <label htmlFor="home-tree-rec01"></label>
                                        </div>
                                      </td>
                                      <td className="mdo-cell-fixed mdo-no-padding-left"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                                      <td className="mdo-clickable mdo-fixed"><span className="mdo-text"><a href="#" className="mdo-text-underline-link">PP-01-PRC-BOP-TBN-01</a></span></td>
                                      <td><span className="mdo-text">Steam Turbine #1</span></td>
                                    </tr>
                                  </tbody>
                                </table>

                                {/* Equipment Widget */}
                                <div className="mdo-widget mdo-compact mdo-active" style={{marginLeft: '6px'}}>
                                  <div className="mdo-widget-inner">
                                    <div className="mdo-widget-title"><span>Equipment (3)</span></div>
                                  </div>
                                </div>
                                
                                <table className="mdo-table mdo-module mdo-condensed mdo-excel" style={{marginLeft: '86px'}}>
                                  <thead>
                                    <tr className="table-subheader">
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                      <th>Equipment No</th>
                                      <th>Equipment Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="mdo-fixed"><i className="mdo-icon-chevron-down"></i></td>
                                      <td className="mdo-fixed">
                                        <div className="mdo-option mdo-option-square mdo-float-left multi-select-trigger">
                                          <input type="checkbox" name="home-tree" id="home-tree-rec04" />
                                          <label htmlFor="home-tree-rec04"></label>
                                        </div>
                                      </td>
                                      <td className="mdo-cell-fixed mdo-no-padding-left"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                                      <td className="mdo-clickable mdo-fixed"><span className="mdo-text"><a href="#" className="mdo-text-underline-link">EQ-500000</a></span></td>
                                      <td><span className="mdo-text">Steam Turbine Package</span></td>
                                    </tr>
                                  </tbody>
                                </table>

                                {/* Material BOM Widget */}
                                <div className="mdo-widget mdo-compact mdo-active" style={{marginLeft: '6px'}}>
                                  <div className="mdo-widget-inner">
                                    <div className="mdo-widget-title"><span>Material BOM (3)</span></div>
                                  </div>
                                </div>
                                
                                <table className="mdo-table mdo-module mdo-condensed mdo-excel" style={{marginLeft: '130px'}}>
                                  <thead>
                                    <tr className="table-subheader">
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                      <th>Material number</th>
                                      <th>Material description</th>
                                      <th>Quantity</th>
                                      <th>UoM</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="mdo-fixed"><i className="mdo-icon-chevron-right"></i></td>
                                      <td className="mdo-fixed">
                                        <div className="mdo-option mdo-option-square mdo-float-left">
                                          <input type="checkbox" name="home-tree" id="home-tree-rec05" />
                                          <label htmlFor="home-tree-rec05"></label>
                                        </div>
                                      </td>
                                      <td className="mdo-cell-fixed mdo-no-padding-left"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                                      <td className="mdo-clickable mdo-fixed"><span className="mdo-text"><a href="#" className="mdo-text-underline-link">MAT-700001</a></span></td>
                                      <td><span className="mdo-text">Turbine Blade - Stage 1</span></td>
                                      <td><span className="mdo-text">48</span></td>
                                      <td><span className="mdo-text">EA</span></td>
                                    </tr>
                                    <tr>
                                      <td className="mdo-fixed"><i className="mdo-icon-chevron-right"></i></td>
                                      <td className="mdo-fixed">
                                        <div className="mdo-option mdo-option-square mdo-float-left">
                                          <input type="checkbox" name="home-tree" id="home-tree-rec06" />
                                          <label htmlFor="home-tree-rec06"></label>
                                        </div>
                                      </td>
                                      <td className="mdo-cell-fixed mdo-no-padding-left"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                                      <td className="mdo-clickable mdo-fixed"><span className="mdo-text"><a href="#" className="mdo-text-underline-link">MAT-700002</a></span></td>
                                      <td><span className="mdo-text">Turbine Blade - Stage 2</span></td>
                                      <td><span className="mdo-text">25</span></td>
                                      <td><span className="mdo-text">EA</span></td>
                                    </tr>
                                    <tr>
                                      <td className="mdo-fixed"><i className="mdo-icon-chevron-right"></i></td>
                                      <td className="mdo-fixed">
                                        <div className="mdo-option mdo-option-square mdo-float-left">
                                          <input type="checkbox" name="home-tree" id="home-tree-rec07" />
                                          <label htmlFor="home-tree-rec07"></label>
                                        </div>
                                      </td>
                                      <td className="mdo-cell-fixed mdo-no-padding-left"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                                      <td className="mdo-clickable mdo-fixed"><span className="mdo-text"><a href="#" className="mdo-text-underline-link">MAT-700003</a></span></td>
                                      <td><span className="mdo-text">Turbine Blade - Stage 3</span></td>
                                      <td><span className="mdo-text">12</span></td>
                                      <td><span className="mdo-text">EA</span></td>
                                    </tr>
                                  </tbody>
                                </table>

                                {/* Additional Equipment Items */}
                                <table className="mdo-table mdo-module mdo-condensed mdo-excel" style={{marginLeft: '86px'}}>
                                  <tbody>
                                    <tr>
                                      <td className="mdo-fixed"><i className="mdo-icon-chevron-right"></i></td>
                                      <td className="mdo-fixed">
                                        <div className="mdo-option mdo-option-square mdo-float-left">
                                          <input type="checkbox" name="home-tree" id="home-tree-rec08" />
                                          <label htmlFor="home-tree-rec08"></label>
                                        </div>
                                      </td>
                                      <td className="mdo-cell-fixed mdo-no-padding-left"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                                      <td className="mdo-clickable mdo-fixed"><span className="mdo-text"><a href="#" className="mdo-text-underline-link">EQ-500001</a></span></td>
                                      <td><span className="mdo-text">Turbine Rotor</span></td>
                                    </tr>
                                    <tr>
                                      <td className="mdo-fixed"><i className="mdo-icon-chevron-right"></i></td>
                                      <td className="mdo-fixed">
                                        <div className="mdo-option mdo-option-square mdo-float-left">
                                          <input type="checkbox" name="home-tree" id="home-tree-rec09" />
                                          <label htmlFor="home-tree-rec09"></label>
                                        </div>
                                      </td>
                                      <td className="mdo-cell-fixed mdo-no-padding-left"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                                      <td className="mdo-clickable mdo-fixed"><span className="mdo-text"><a href="#" className="mdo-text-underline-link">EQ-500002</a></span></td>
                                      <td><span className="mdo-text">Turbine Casing</span></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Material Master View 2: 360° View */}
                  {materialMasterView === 2 && (
                    <div data-tabset="dataset-home" data-tab="2" className="mdo-tab-content mdo-fill-height mdo-selected">
                      <div className="mdo-card mdo-vertical">
                        <div>
                          <div className="mdo-content" style={{padding: '1rem'}}>
                            
                            {/* CSS Grid Layout */}
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1rem'}}>
                              
                              {/* Material Header - Full Width */}
                              <div style={{gridColumn: 'span 12'}}>
                                <div className="mdo-chart-widget">
                                  <div className="mdo-card mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-atom mdo-padding-right-medium">
                                      <img src="assets/img/wheel-bearing.svg" width="46" alt="alt" />
                                    </div>
                                    <div className="mdo-padding-top-medium">
                                      <div className="mdo-text mdo-font-large mdo-flat-alt">1000034562 - Brng,Roller,12mm,Chromium,45cm</div>
                                    </div>
                                    <div className="mdo-atom mdo-padding-top-small">
                                      <span className="mdo-button"><i className="fa-light fa-folder-tree"></i></span>
                                    </div>
                                    <div className="mdo-atom mdo-padding-top-small">
                                      <span className="mdo-button"><i className="fa-light fa-clone"></i></span>
                                    </div>
                                    <div className="mdo-atom mdo-padding-top-small">
                                      <span className="mdo-button"><i className="fa-light fa-message-lines"></i></span>
                                    </div>
                                    <div className="mdo-atom mdo-padding-right-large mdo-padding-top-small">
                                      <span className="mdo-button"><i className="fa-light fa-gear"></i></span>
                                    </div>
                                    <div className="mdo-atom mdo-padding-left-medium mdo-padding-top-small">
                                      <span className="mdo-button"><i className="fa-light fa-pen-line mdo-margin-right-small"></i>Change request<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Data Record - Left Half */}
                              <div style={{gridColumn: 'span 6'}}>
                                <div className="mdo-chart-widget">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Data record</div></div>
                                        <div className="mdo-atom mdo-allow-overflow mdo-padding-left-large">
                                          <ul className="mdo-tabs-alt6 mdo-compact">
                                            <li className="mdo-tab mdo-selected"><i className="fa-light fa-presentation-screen"></i></li>  
                                            <li className="mdo-tab"><i className="fa-solid fa-circle-check mdo-text-success"></i></li>
                                            <li className="mdo-tab"><i className="fa-solid fa-circle-xmark mdo-text-error"></i></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mdo-padding-top-medium">
                                      <table className="mdo-table mdo-excel mdo-module mdo-fixed-table mdo-flat-alt">
                                        <tbody>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Record number</span></td>
                                            <td><span className="mdo-text"><a href="#">1000034562</a></span></td>  
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">ABC indicator</span></td>
                                            <td><span className="mdo-text">A - Critcal</span></td>  
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Material type</span></td>
                                            <td><span className="mdo-text">ERSA</span></td>  
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Material group</span></td>
                                            <td><span className="mdo-text">110323 - Roller Bearings</span></td>  
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Material description</span></td>
                                            <td><span className="mdo-text">Brng,Roller,12mm,Chromium,45cm</span></td>  
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Catalog profile</span></td>
                                            <td><span className="mdo-text">-</span></td>  
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Label type</span></td>
                                            <td><span className="mdo-text">Standard</span></td>  
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Package type</span></td>
                                            <td><span className="mdo-text">Standard</span></td>  
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Plant</span></td>
                                            <td><span className="mdo-text">Plant 001</span></td>  
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Notes</span></td>
                                            <td><span className="mdo-text">-</span></td>  
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Change Requests - Right Top Quarter */}
                              <div style={{gridColumn: 'span 3'}}>
                                <div className="mdo-chart-widget mdo-clickable">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Change requests</div></div>
                                      </div>
                                    </div>
                                    <div className="mdo-padding-top-medium">
                                      <table className="mdo-table mdo-excel mdo-module mdo-fixed-table mdo-flat-alt">
                                        <tbody>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Open</span></td>
                                            <td><span className="mdo-text"><a href="#">5</a></span></td> 
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Completed</span></td>
                                            <td><span className="mdo-text"><a href="#">75</a></span></td> 
                                          </tr>															
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Similar Records - Right Top Quarter */}
                              <div style={{gridColumn: 'span 3'}}>
                                <div className="mdo-chart-widget mdo-clickable">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Similar records</div></div>
                                        <div className="mdo-atom"><span className="mdo-button"><i className="mdo-icon-find"></i></span></div>
                                      </div>
                                    </div>
                                    <div className="mdo-padding-top-medium">
                                      <div className="mdo-text mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-error">2</span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Data Quality - Right Half */}
                              <div style={{gridColumn: 'span 6'}}>
                                <div className="mdo-chart-widget">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Data quality - Standard quality matrix<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div></div>
                                      </div>
                                    </div>
                                    <div className="mdo-padding-top-medium">
                                      <div className="mdo-grid">
                                        <div className="mdo-col-1 mdo-text-center mdo-border-right">
                                          <div className="mdo-text mdo-text-center">Overall score</div>
                                          <div className="mdo-padding-top-small">
                                            <div style={{fontSize: '48px', fontWeight: '700'}}>70%</div>
                                          </div>
                                          <div className="mdo-text mdo-text-center">Compliance</div>
                                          <div className="mdo-text mdo-text-center"><span className="mdo-label mdo-label-warning">Partially compliant</span></div>
                                        </div>
                                        <div className="mdo-col-2 mdo-padding-left-medium">
                                          <table className="mdo-table">
                                            <tbody>
                                              <tr>
                                                <td className="mdo-fixed"><div className="mdo-text">Accuracy</div></td>
                                                <td>
                                                  <div className="mdo-progress-segment">
                                                    <div style={{width: '75%'}} className="mdo-success-segment"></div>
                                                  </div>
                                                </td>
                                                <td className="mdo-fixed"><div className="mdo-text mdo-text-right">75%</div></td>
                                              </tr>
                                              <tr>
                                                <td className="mdo-fixed"><div className="mdo-text">Completeness</div></td>
                                                <td>
                                                  <div className="mdo-progress-segment">
                                                    <div style={{width: '50%'}} className="mdo-warning-segment"></div>
                                                  </div>
                                                </td>
                                                <td className="mdo-fixed"><div className="mdo-text mdo-text-right">50%</div></td>
                                              </tr>
                                              <tr>
                                                <td className="mdo-fixed"><div className="mdo-text">Consistency</div></td>
                                                <td>
                                                  <div className="mdo-progress-segment">
                                                    <div style={{width: '25%'}} className="mdo-error-segment"></div>
                                                  </div>
                                                </td>
                                                <td className="mdo-fixed"><div className="mdo-text mdo-text-right">25%</div></td>
                                              </tr>
                                              <tr>
                                                <td className="mdo-fixed"><div className="mdo-text">Integrity</div></td>
                                                <td>
                                                  <div className="mdo-progress-segment">
                                                    <div style={{width: '15%'}} className="mdo-error-segment"></div>
                                                  </div>
                                                </td>
                                                <td className="mdo-fixed"><div className="mdo-text mdo-text-right">15%</div></td>
                                              </tr>
                                              <tr>
                                                <td className="mdo-fixed"><div className="mdo-text">Uniqueness</div></td>
                                                <td>
                                                  <div className="mdo-progress-segment">
                                                    <div style={{width: '32%'}} className="mdo-warning-segment"></div>
                                                  </div>
                                                </td>
                                                <td className="mdo-fixed"><div className="mdo-text mdo-text-right">32%</div></td>
                                              </tr>
                                              <tr>
                                                <td className="mdo-fixed"><div className="mdo-text">Validity</div></td>
                                                <td>
                                                  <div className="mdo-progress-segment">
                                                    <div style={{width: '90%'}} className="mdo-success-segment"></div>
                                                  </div>
                                                </td>
                                                <td className="mdo-fixed"><div className="mdo-text mdo-text-right">90%</div></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Attachments - Left Half */}
                              <div style={{gridColumn: 'span 6'}}>
                                <div className="mdo-chart-widget">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Attachments</div></div>
                                        <div className="mdo-atom">
                                          <div className="mdo-filter-pill mdo-filter-pill-search mdo-width-200"><input type="text" placeholder="Search" /></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mdo-section mdo-padding-bottom-small">
                                      <div className="mdo-card">
                                        <div className="mdo-allow-overflow">
                                          <ul className="mdo-tabs">	
                                            <li className="mdo-tab mdo-selected"><span className="mdo-text-line">Engineering<span className="mdo-text-secondary mdo-padding-left-small">3</span></span></li>
                                            <li className="mdo-tab"><span className="mdo-text-line">Guidelines<span className="mdo-text-secondary mdo-padding-left-small">5</span></span></li>
                                            <li className="mdo-tab"><span className="mdo-text-line">Invoices</span></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <table className="mdo-table mdo-module mdo-hover mdo-striped">
                                        <thead>
                                          <tr>
                                            <th className="mdo-fixed"></th>
                                            <th className="mdo-no-padding-left"><div className="mdo-text">File name</div></th>
                                            <th className="mdo-no-padding-left"><div className="mdo-text">Uploaded by</div></th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td className="mdo-fixed"><div className="mdo-text"><img src="assets/img/ext/pdf.svg" width="16" alt="alt" className="mdo-float-left" /></div></td>
                                            <td className="mdo-no-padding-left"><div className="mdo-text"><a href="#" className="mdo-padding-left-small">Operational manual</a></div></td>
                                            <td className="mdo-no-padding-left"><div className="mdo-text">Rick Woods</div></td>
                                          </tr>
                                          <tr>
                                            <td className="mdo-fixed"><div className="mdo-text"><img src="assets/img/ext/pdf.svg" width="16" alt="alt" className="mdo-float-left" /></div></td>
                                            <td className="mdo-no-padding-left"><div className="mdo-text"><a href="#" className="mdo-padding-left-small">Part specification</a></div></td>
                                            <td className="mdo-no-padding-left"><div className="mdo-text">Rick Woods</div></td>
                                          </tr>
                                          <tr>
                                            <td className="mdo-fixed"><div className="mdo-text"><img src="assets/img/ext/pdf.svg" width="16" alt="alt" className="mdo-float-left" /></div></td>
                                            <td className="mdo-no-padding-left"><div className="mdo-text"><a href="#" className="mdo-padding-left-small">Part catalogue</a></div></td>
                                            <td className="mdo-no-padding-left"><div className="mdo-text">Rick Woods</div></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Recent Activity - Right Half */}
                              <div style={{gridColumn: 'span 6'}}>
                                <div className="mdo-chart-widget">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section mdo-padding-bottom-medium">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Recent activity</div></div>
                                        <div className="mdo-atom"><div className="mdo-filter-pill mdo-filter-pill-binary">CDE only</div></div>
                                        <div className="mdo-atom mdo-padding-left-large"><span className="mdo-button"><i className="mdo-icon-find"></i></span></div>
                                      </div>
                                    </div>
                                    <div className="mdo-padding-top-small">
                                      <ul className="mdo-timeline">
                                        <li><div className="mdo-text"><span className="mdo-text-secondary mdo-padding-right-small">18 May 2024</span>Change request approved by Rahul Modi<span className="mdo-label mdo-label-info mdo-margin-left-small mdo-font-adjust">CDE</span></div></li>
                                        <li><div className="mdo-text"><span className="mdo-text-secondary mdo-padding-right-small">16 May 2024</span>Executed against schema Duplicate check</div></li>
                                        <li><div className="mdo-text"><span className="mdo-text-secondary mdo-padding-right-small">14 May 2024</span>Change request approved by Rick Woods<span className="mdo-label mdo-label-info mdo-margin-left-small mdo-font-adjust">CDE</span></div></li>
                                        <li><div className="mdo-text"><span className="mdo-text-secondary mdo-padding-right-small">12 May 2024</span>Record was created via delta sync</div></li>
                                        <li><div className="mdo-text"><span className="mdo-text-secondary mdo-padding-right-small">10 May 2024</span>Record was exported</div></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Related Data - Full Width */}
                              <div style={{gridColumn: 'span 12'}}>
                                <div className="mdo-chart-widget">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Related data</div></div>
                                        <div className="mdo-atom">
                                          <span className="mdo-button"><i className="mdo-icon-more"></i></span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mdo-section mdo-padding-bottom-small">
                                      <div className="mdo-card">
                                        <div className="mdo-allow-overflow">
                                          <ul className="mdo-tabs">	
                                            <li className="mdo-tab mdo-selected"><span className="mdo-text-line">Info records<span className="mdo-text-secondary mdo-padding-left-small">2</span></span></li>
                                            <li className="mdo-tab"><span className="mdo-text-line">Bill of materials<span className="mdo-text-secondary mdo-padding-left-small">5</span></span></li>
                                            <li className="mdo-tab"><span className="mdo-text-line">Task lists<span className="mdo-text-secondary mdo-padding-left-small">5</span></span></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <table className="mdo-table mdo-module mdo-hover mdo-striped">
                                        <tbody>
                                          <tr>
                                            <th><div className="mdo-text">Record number</div></th>
                                            <th><div className="mdo-text">Info record (SAP number)</div></th>
                                            <th><div className="mdo-text">Vendor</div></th>
                                            <th><div className="mdo-text">Description</div></th>
                                            <th><div className="mdo-text">Order unit</div></th>
                                          </tr>
                                          <tr>
                                            <td><a href="#">IR100012</a></td>
                                            <td><div className="mdo-text">10000410</div></td>
                                            <td><div className="mdo-text">1000221 - Venture engineering</div></td>
                                            <td><div className="mdo-text">Material  1000034562, Vendor 1000221</div></td>
                                            <td><div className="mdo-text">BOX</div></td>
                                          </tr>
                                          <tr>
                                            <td><a href="#">IR100345</a></td>
                                            <td><div className="mdo-text">10004510</div></td>
                                            <td><div className="mdo-text">1003990 - Bosch</div></td>
                                            <td><div className="mdo-text">Material  1000034562, Vendor 1003990</div></td>
                                            <td><div className="mdo-text">BOX</div></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="mdo-section mdo-padding-top-small mdo-padding-bottom-small">
                                      <div className="mdo-card">		
                                        <div className="mdo-atom mdo-padding-right-small">
                                          <ul className="mdo-button-group">
                                            <li><span className="mdo-button"><i className="mdo-icon-chevron-left mdo-disabled"></i></span></li>
                                            <li><span className="mdo-button"><i className="mdo-icon-chevron-right"></i></span></li>
                                            <li><span className="mdo-text mdo-padding-left-medium mdo-padding-right-small mdo-text-secondary">1-2 / 2</span></li>
                                          </ul>
                                        </div>														  
                                        <div></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Org Levels - Full Width */}
                              <div style={{gridColumn: 'span 12'}}>
                                <div className="mdo-chart-widget">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Org levels</div></div>
                                        <div className="mdo-atom">
                                          <span className="mdo-button"><i className="mdo-icon-more"></i></span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mdo-section mdo-padding-bottom-small">
                                      <div className="mdo-card">
                                        <div className="mdo-allow-overflow">
                                          <ul className="mdo-tabs">	
                                            <li className="mdo-tab mdo-selected"><span className="mdo-text-line">Plant<span className="mdo-text-secondary mdo-padding-left-small">2</span></span></li>
                                            <li className="mdo-tab"><span className="mdo-text-line">Valuation<span className="mdo-text-secondary mdo-padding-left-small">5</span></span></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <table className="mdo-table mdo-module mdo-hover mdo-striped">
                                        <tbody>
                                          <tr>
                                            <th><div className="mdo-text">Plant</div></th>
                                            <th><div className="mdo-text">MRP type</div></th>
                                            <th><div className="mdo-text">Lot size</div></th>
                                            <th><div className="mdo-text">Reorder point</div></th>
                                            <th><div className="mdo-text">Max stock</div></th>
                                          </tr>
                                          <tr>
                                            <td><div className="mdo-text">A001</div></td>
                                            <td><div className="mdo-text">ND</div></td>
                                            <td><div className="mdo-text">EX</div></td>
                                            <td><div className="mdo-text">1</div></td>
                                            <td><div className="mdo-text">2</div></td>
                                          </tr>
                                          <tr>
                                            <td><div className="mdo-text">A002</div></td>
                                            <td><div className="mdo-text">PD</div></td>
                                            <td><div className="mdo-text">EX</div></td>
                                            <td><div className="mdo-text">4</div></td>
                                            <td><div className="mdo-text">5</div></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="mdo-section mdo-padding-top-small mdo-padding-bottom-small">
                                      <div className="mdo-card">		
                                        <div className="mdo-atom mdo-padding-right-small">
                                          <ul className="mdo-button-group">
                                            <li><span className="mdo-button"><i className="mdo-icon-chevron-left mdo-disabled"></i></span></li>
                                            <li><span className="mdo-button"><i className="mdo-icon-chevron-right"></i></span></li>
                                            <li><span className="mdo-text mdo-padding-left-medium mdo-padding-right-small mdo-text-secondary">1-2 / 2</span></li>
                                          </ul>
                                        </div>														  
                                        <div></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Classification Data - Full Width */}
                              <div style={{gridColumn: 'span 12'}}>
                                <div className="mdo-chart-widget">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Classification data</div></div>
                                        <div className="mdo-atom">
                                          <span className="mdo-button"><i className="mdo-icon-more"></i></span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mdo-section mdo-padding-bottom-medium">
                                      <div className="mdo-card">
                                        <div className="mdo-allow-overflow">
                                          <ul className="mdo-tabs">	
                                            <li className="mdo-tab mdo-selected"><span className="mdo-text-line">Material class<span className="mdo-text-secondary mdo-padding-left-small">2</span></span></li>
                                            <li className="mdo-tab"><span className="mdo-text-line">Variant class<span className="mdo-text-secondary mdo-padding-left-small">1</span></span></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="mdo-card mdo-contained mdo-clickable">
                                        <div><div className="mdo-text"><i className="mdo-icon-chevron-down mdo-padding-right-small"></i><strong>Bearing, roller</strong></div></div>
                                      </div>
                                      <table className="mdo-table mdo-excel mdo-module mdo-fixed-table mdo-flat-alt">
                                        <tbody>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Type</span></td>
                                            <td><span className="mdo-text">Roller</span></td>  
                                            <td><span className="mdo-text"></span></td>  
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Diameter</span></td>
                                            <td><span className="mdo-text">9</span></td>  
                                            <td><span className="mdo-text">CM</span></td> 
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Material</span></td>
                                            <td><span className="mdo-text">Chromium</span></td>  
                                            <td><span className="mdo-text"></span></td> 
                                          </tr>
                                        </tbody>
                                      </table>	
                                      <div className="mdo-card mdo-contained mdo-clickable mdo-padding-top-small">
                                        <div><div className="mdo-text"><i className="mdo-icon-chevron-right mdo-padding-right-small"></i><strong>Governance class</strong></div></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Material Usage - Full Width */}
                              <div style={{gridColumn: 'span 12'}}>
                                <div className="mdo-chart-widget">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Material usage in SAP/S4 HANA</div></div>
                                        <div className="mdo-atom">
                                          <span className="mdo-button"><i className="mdo-icon-more"></i></span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mdo-section mdo-padding-bottom-medium">
                                      <div className="mdo-card">
                                        <div className="mdo-allow-overflow">
                                          <ul className="mdo-tabs">	
                                            <li className="mdo-tab mdo-selected"><span className="mdo-text-line">Open POs</span></li>
                                            <li className="mdo-tab"><span className="mdo-text-line">Stock data</span></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="mdo-text mdo-fill-width mdo-font-x-large mdo-padding-top-medium"><span className="mdo-chart-metric">12</span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Material Master View 3: Chart View */}
                  {materialMasterView === 3 && (
                    <div data-tabset="dataset-home" data-tab="3" className="mdo-tab-content mdo-fill-height mdo-selected">
                      <div className="mdo-card mdo-vertical">
                        {/* Header */}
                        <div className="mdo-section mdo-padding-left-medium mdo-padding-right-medium">
                          <div className="mdo-card mdo-padding-top-small">
                            <div className="mdo-padding-top-medium"><div className="mdo-text mdo-font-large mdo-flat-alt">Standard quality matrix<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div></div>
                            <div className="mdo-atom mdo-padding-top-small mdo-padding-right-medium">
                              <span className="mdo-text mdo-text-secondary">Last updated: 12 Sep 2024 11:34 AM</span>
                            </div>
                            <div className="mdo-atom mdo-padding-top-small mdo-padding-right-large">
                              <span className="mdo-text"><span className="mdo-label mdo-label-info mdo-float-left mdo-logo-system">New data available</span></span>
                            </div>
                            <div className="mdo-atom mdo-padding-top-small">
                              <span className="mdo-button"><i className="fa-light fa-message-lines"></i></span>
                            </div>
                            <div className="mdo-atom mdo-padding-top-small">
                              <span className="mdo-button"><i className="fa-light fa-sliders"></i></span>
                            </div>
                            <div className="mdo-atom mdo-padding-top-small">
                              <span className="mdo-button"><i className="fa-light fa-repeat"></i></span>
                            </div>
                            <div className="mdo-atom mdo-padding-top-small">
                              <span className="mdo-button"><i className="mdo-icon-more"></i></span>
                            </div>
                          </div>
                        </div>

                        {/* Filters */}
                        <div className="mdo-section mdo-padding-left-medium mdo-padding-right-medium mdo-padding-top-medium">
                          <div className="mdo-card">
                            <div className="mdo-allow-overflow">
                              <div className="mdo-filter-pill mdo-filter-pill-binary">CDE only</div>
                              <div className="mdo-filter-pill mdo-filter-user">Business rule<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div>
                              <div className="mdo-filter-pill mdo-filter-user">Attribute<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div>
                              <div className="mdo-filter-pill mdo-filter-user">DQ category<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div>
                              <div className="mdo-filter-pill mdo-filter-user">DQ status<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div>
                              <div className="mdo-filter-pill mdo-filter-pill-new"><i className="fa-light fa-filter"></i></div>
                              <div className="mdo-button"><i className="mdo-icon-more"></i></div>
                            </div>
                          </div>
                        </div>

                        {/* Content Grid */}
                        <div>
                          <div className="mdo-content" style={{padding: '1rem'}}>
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1rem'}}>
                              {/* Records Card */}
                              <div className="mdo-chart-widget" style={{gridColumn: 'span 3'}}>
                                <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div><div className="mdo-text mdo-font-large">Records</div></div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mdo-text mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric">150,000</span></div>
                                  </div>
                                </div>
                              </div>

                              {/* Compliant Card */}
                              <div className="mdo-chart-widget" style={{gridColumn: 'span 3'}}>
                                <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div><div className="mdo-text mdo-font-large">Compliant</div></div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mdo-text mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-success">75,500</span></div>
                                  </div>
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div className="mdo-atom"><div className="mdo-text mdo-text-right mdo-font-x-small mdo-text-success">50.33%</div></div>
                                      <div className="mdo-padding-top-medium mdo-padding-left-medium">
                                        <div className="mdo-progress-segment mdo-progress-align">
                                          <div style={{width: '33%'}} className="mdo-success-segment"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Partially Compliant Card */}
                              <div className="mdo-chart-widget" style={{gridColumn: 'span 3'}}>
                                <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div><div className="mdo-text mdo-font-large">Partially compliant</div></div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mdo-text mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-warning">6,500</span></div>
                                  </div>
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div className="mdo-atom"><div className="mdo-text mdo-text-right mdo-font-x-small mdo-text-warning">4.33%</div></div>
                                      <div className="mdo-padding-top-medium mdo-padding-left-medium">
                                        <div className="mdo-progress-segment mdo-progress-align">
                                          <div style={{width: '4%'}} className="mdo-warning-segment"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Non-Compliant Card */}
                              <div className="mdo-chart-widget" style={{gridColumn: 'span 3'}}>
                                <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div><div className="mdo-text mdo-font-large">Non-compliant</div></div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mdo-text mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-error">68,000</span></div>
                                  </div>
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div className="mdo-atom"><div className="mdo-text mdo-text-right mdo-font-x-small mdo-text-error">45.33%</div></div>
                                      <div className="mdo-padding-top-medium mdo-padding-left-medium">
                                        <div className="mdo-progress-segment mdo-progress-align">
                                          <div style={{width: '23%'}} className="mdo-error-segment"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Data Quality Score Card with ECharts Trend */}
                              <div className="mdo-chart-widget" style={{gridColumn: 'span 6'}}>
                                <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div><div className="mdo-text mdo-font-large">Data quality score</div></div>
                                      <div className="mdo-atom mdo-allow-overflow mdo-padding-left-large">
                                        <ul className="mdo-tabs-alt6 mdo-compact">
                                          <li 
                                            className={`mdo-tab ${chartViewDQScoreTab === 0 ? 'mdo-selected' : ''}`}
                                            onClick={() => setChartViewDQScoreTab(0)}
                                          >
                                            <i className="fa-light fa-presentation-screen"></i>
                                          </li>  
                                          <li 
                                            className={`mdo-tab ${chartViewDQScoreTab === 1 ? 'mdo-selected' : ''}`}
                                            onClick={() => setChartViewDQScoreTab(1)}
                                          >
                                            <i className="fa-light fa-chart-line"></i>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mdo-padding-top-medium">
                                    {chartViewDQScoreTab === 0 && (
                                      <div className="mdo-grid">
                                        <div className="mdo-col-1 mdo-text-center">
                                          <div className="mdo-padding-top-large">
                                            <div style={{fontSize: '48px', fontWeight: '700', color: '#FB8230'}}>60%</div>
                                            <span className="mdo-text-secondary">Trend<i className="fa-light fa-arrow-down-right mdo-margin-left-small"></i></span>
                                          </div>
                                        </div>
                                        <div className="mdo-col-2 mdo-padding-left-medium">
                                          <table className="mdo-table">
                                            <tbody>
                                              <tr>
                                                <td className="mdo-fixed"><div className="mdo-text">Accuracy</div></td>
                                                <td>
                                                  <div className="mdo-progress-segment">
                                                    <div style={{width: '75%'}} className="mdo-success-segment"></div>
                                                  </div>
                                                </td>
                                                <td className="mdo-fixed"><div className="mdo-text mdo-text-right">75%</div></td>
                                              </tr>
                                              <tr>
                                                <td className="mdo-fixed"><div className="mdo-text">Completeness</div></td>
                                                <td>
                                                  <div className="mdo-progress-segment">
                                                    <div style={{width: '50%'}} className="mdo-warning-segment"></div>
                                                  </div>
                                                </td>
                                                <td className="mdo-fixed"><div className="mdo-text mdo-text-right">50%</div></td>
                                              </tr>
                                              <tr>
                                                <td className="mdo-fixed"><div className="mdo-text">Consistency</div></td>
                                                <td>
                                                  <div className="mdo-progress-segment">
                                                    <div style={{width: '25%'}} className="mdo-error-segment"></div>
                                                  </div>
                                                </td>
                                                <td className="mdo-fixed"><div className="mdo-text mdo-text-right">25%</div></td>
                                              </tr>
                                              <tr>
                                                <td className="mdo-fixed"><div className="mdo-text">Integrity</div></td>
                                                <td>
                                                  <div className="mdo-progress-segment">
                                                    <div style={{width: '15%'}} className="mdo-error-segment"></div>
                                                  </div>
                                                </td>
                                                <td className="mdo-fixed"><div className="mdo-text mdo-text-right">15%</div></td>
                                              </tr>
                                              <tr>
                                                <td className="mdo-fixed"><div className="mdo-text">Uniqueness</div></td>
                                                <td>
                                                  <div className="mdo-progress-segment">
                                                    <div style={{width: '32%'}} className="mdo-warning-segment"></div>
                                                  </div>
                                                </td>
                                                <td className="mdo-fixed"><div className="mdo-text mdo-text-right">32%</div></td>
                                              </tr>
                                              <tr>
                                                <td className="mdo-fixed"><div className="mdo-text">Validity</div></td>
                                                <td>
                                                  <div className="mdo-progress-segment">
                                                    <div style={{width: '90%'}} className="mdo-success-segment"></div>
                                                  </div>
                                                </td>
                                                <td className="mdo-fixed"><div className="mdo-text mdo-text-right">90%</div></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    )}
                                    {chartViewDQScoreTab === 1 && (
                                      <ReactECharts
                                        option={{
                                          textStyle: {
                                            fontFamily: 'Lato, sans-serif'
                                          },
                                          grid: {
                                            left: '4%',
                                            right: '0',
                                            top: '5%',
                                            bottom: '50px',
                                            containLabel: true
                                          },
                                          tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                              type: 'cross',
                                              crossStyle: {
                                                color: '#999'
                                              }
                                            }
                                          },
                                          legend: {
                                            data: ['Overall score', 'Accuracy', 'Completeness', 'Consistency']
                                          },
                                          xAxis: [{
                                            type: 'category',
                                            data: ['Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24', 'Jun 24'],
                                            axisPointer: {
                                              type: 'shadow'
                                            },
                                            axisLine: {
                                              show: false
                                            }
                                          }],
                                          yAxis: [{
                                            show: false,
                                            type: 'value',
                                            min: 0,
                                            max: 500,
                                            interval: 50
                                          }],
                                          series: [
                                            {
                                              name: 'Overall score',
                                              type: 'bar',
                                              color: '#EBF1F5',
                                              data: [280, 700, 175, 182, 48, 200]
                                            },
                                            {
                                              name: 'Accuracy',
                                              type: 'line',
                                              color: '#EB3B5B',
                                              data: [140, 350, 85, 90, 24, 30]
                                            },
                                            {
                                              name: 'Completeness',
                                              type: 'line',
                                              color: '#FB8230',
                                              data: [100, 85, 26, 145, 9, 150]
                                            },
                                            {
                                              name: 'Consistency',
                                              type: 'line',
                                              color: '#F8B732',
                                              data: [25, 200, 76, 10, 300, 75]
                                            }
                                          ]
                                        }}
                                        style={{ height: '280px', width: '100%' }}
                                      />
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* Data Dimensions Card with ECharts */}
                              <div className="mdo-chart-widget" style={{gridColumn: 'span 6'}}>
                                <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div><div className="mdo-text mdo-font-large">Data dimensions</div></div>
                                      <div className="mdo-atom mdo-allow-overflow mdo-padding-left-large">
                                        <ul className="mdo-tabs-alt6 mdo-compact">
                                          <li className="mdo-tab"><i className="fa-light fa-hashtag"></i></li>  
                                          <li className="mdo-tab mdo-selected"><i className="fa-light fa-percent"></i></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mdo-padding-top-medium">
                                    <ReactECharts
                                      option={{
                                        color: ['#20BF6C', '#FB8230', '#EB3B5B', '#d48265'],
                                        textStyle: {
                                          fontFamily: 'Lato, sans-serif'
                                        },
                                        legend: {
                                          selectedMode: false
                                        },
                                        tooltip: {
                                          trigger: 'axis',
                                          axisPointer: {
                                            type: 'cross',
                                            crossStyle: {
                                              color: '#999'
                                            }
                                          }
                                        },
                                        yAxis: {
                                          type: 'value',
                                          show: false
                                        },
                                        xAxis: {
                                          type: 'category',
                                          data: ['Accuracy', 'Completeness', 'Consistency', 'Integrity', 'Uniqueness', 'Validity'],
                                          axisLine: {
                                            show: false
                                          }
                                        },
                                        grid: {
                                          left: '0',
                                          right: '3%',
                                          top: '5%',
                                          bottom: '50px',
                                          containLabel: true
                                        },
                                        series: [
                                          {
                                            name: 'Fully compliant',
                                            type: 'bar',
                                            stack: 'total',
                                            barWidth: '50%',
                                            label: {
                                              show: true,
                                              color: 'white',
                                              fontSize: 10,
                                              formatter: (params: any) => Math.round(params.value * 1000) / 10 + '%'
                                            },
                                            data: [0.15, 0.46, 0.46, 0.51, 0.59, 0.50]
                                          },
                                          {
                                            name: 'Partially compliant',
                                            type: 'bar',
                                            stack: 'total',
                                            barWidth: '50%',
                                            label: {
                                              show: true,
                                              color: 'white',
                                              fontSize: 10,
                                              formatter: (params: any) => Math.round(params.value * 1000) / 10 + '%'
                                            },
                                            data: [0.49, 0.20, 0.29, 0.21, 0.14, 0.35]
                                          },
                                          {
                                            name: 'Non-compliant',
                                            type: 'bar',
                                            stack: 'total',
                                            barWidth: '50%',
                                            label: {
                                              show: true,
                                              color: 'white',
                                              fontSize: 10,
                                              formatter: (params: any) => Math.round(params.value * 1000) / 10 + '%'
                                            },
                                            data: [0.36, 0.34, 0.25, 0.28, 0.27, 0.15]
                                          }
                                        ]
                                      }}
                                      style={{ height: '280px', width: '100%' }}
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Duplicate Records Card - Full Width */}
                              <div className="mdo-chart-widget" style={{gridColumn: 'span 12'}}>
                                <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div><div className="mdo-text mdo-font-large">Duplicate records</div></div>
                                      <div className="mdo-atom"><span className="mdo-button"><i className="mdo-icon-find"></i></span></div>
                                      <div className="mdo-atom mdo-allow-overflow mdo-padding-left-large">
                                        <ul className="mdo-tabs-alt6 mdo-compact">
                                          <li className="mdo-tab mdo-selected"><i className="fa-light fa-presentation-screen"></i></li>  
                                          <li className="mdo-tab"><i className="fa-light fa-chart-line"></i></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mdo-grid mdo-fill-height mdo-padding-top-small mdo-padding-bottom-medium">
                                      {/* Left Column */}
                                      <div className="mdo-col-1 mdo-fill-height mdo-padding-right-medium">
                                        <div className="mdo-grid mdo-padding-bottom-large mdo-border-bottom">
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Duplicate records<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-error">2,488</span></div>
                                            <div className="mdo-fill-width mdo-padding-top-small"><span className="mdo-label mdo-label-error"><i className="fa-light fa-arrow-down-right mdo-margin-right-small"></i>2%</span></div>
                                          </div>
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Duplicate groups<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-warning">412</span></div>
                                            <div className="mdo-fill-width mdo-padding-top-small"><span className="mdo-label mdo-label-error"><i className="fa-light fa-arrow-down-right mdo-margin-right-small"></i>3%</span></div>
                                          </div>
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Unique records<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-success">32,200</span></div>
                                            <div className="mdo-fill-width mdo-padding-top-small"><span className="mdo-label mdo-label-success"><i className="fa-light fa-arrow-up-right mdo-margin-right-small"></i>4%</span></div>
                                          </div>
                                        </div>
                                        <p className="mdo-padding-top-medium"><span className="mdo-font-small mdo-text-unread">Match confidence<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></p>
                                        <div className="mdo-grid">
                                          <div className="mdo-col-1 mdo-text-center mdo-padding-top-medium">
                                            <div style={{position: 'relative', width: '90px', height: '90px', margin: '0 auto'}}>
                                              <div style={{fontSize: '28px', fontWeight: '700', color: '#EB3B5B', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>25%</div>
                                            </div>
                                          </div>
                                          <div className="mdo-col-2 mdo-padding-left-medium">
                                            <table className="mdo-table">
                                              <tbody>
                                                <tr>
                                                  <td className="mdo-fixed"><div className="mdo-text">Highest</div></td>
                                                  <td>
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '25%'}} className="mdo-success-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-secondary">103</div></td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-success">25%</div></td>
                                                </tr>
                                                <tr>
                                                  <td className="mdo-fixed"><div className="mdo-text">High</div></td>
                                                  <td>
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '25%'}} className="mdo-info-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-secondary">103</div></td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-info">25%</div></td>
                                                </tr>
                                                <tr>
                                                  <td className="mdo-fixed"><div className="mdo-text">Medium</div></td>
                                                  <td>
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '25%'}} className="mdo-warning-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-secondary">103</div></td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-warning">25%</div></td>
                                                </tr>
                                                <tr>
                                                  <td className="mdo-fixed"><div className="mdo-text">Low</div></td>
                                                  <td>
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '25%'}} className="mdo-error-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-secondary">103</div></td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-error">25%</div></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Right Column */}
                                      <div className="mdo-col-1 mdo-fill-height mdo-padding-left-medium mdo-border-left">
                                        <div className="mdo-grid mdo-padding-bottom-large mdo-border-bottom">
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Unprocessed groups<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-warning">200</span></div>
                                          </div>
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Expiring groups<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-error">112</span></div>
                                          </div>
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Processed groups<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-success">100</span></div>
                                          </div>
                                        </div>
                                        <p className="mdo-padding-top-medium"><span className="mdo-font-small mdo-text-unread">Remediation progress<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></p>
                                        <div className="mdo-grid">
                                          <div className="mdo-col-1 mdo-text-center mdo-padding-top-medium">
                                            <div style={{position: 'relative', width: '90px', height: '90px', margin: '0 auto'}}>
                                              <div style={{fontSize: '28px', fontWeight: '700', color: '#21BF6B', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>75%</div>
                                            </div>
                                          </div>
                                          <div className="mdo-col-2 mdo-padding-left-medium">
                                            <table className="mdo-table">
                                              <tbody>
                                                <tr>
                                                  <td className="mdo-fixed"><div className="mdo-text">Processed</div></td>
                                                  <td>
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '75%'}} className="mdo-success-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-secondary">200</div></td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-success">75%</div></td>
                                                </tr>
                                                <tr>
                                                  <td className="mdo-fixed"><div className="mdo-text">Submitted</div></td>
                                                  <td>
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '50%'}} className="mdo-info-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-secondary">170</div></td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-info">50%</div></td>
                                                </tr>
                                                <tr>
                                                  <td className="mdo-fixed"><div className="mdo-text">Unprocessed</div></td>
                                                  <td>
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '25%'}} className="mdo-warning-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-secondary">100</div></td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-warning">25%</div></td>
                                                </tr>
                                                <tr>
                                                  <td className="mdo-fixed"><div className="mdo-text">Expired</div></td>
                                                  <td>
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '15%'}} className="mdo-error-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-secondary">97</div></td>
                                                  <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-error">15%</div></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Record Survivorship Card - Full Width */}
                              <div className="mdo-chart-widget" style={{gridColumn: 'span 12'}}>
                                <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div><div className="mdo-text mdo-font-large">Record survivorship</div></div>
                                      <div className="mdo-atom"><span className="mdo-button"><i className="mdo-icon-find"></i></span></div>
                                      <div className="mdo-atom mdo-allow-overflow mdo-padding-left-large">
                                        <ul className="mdo-tabs-alt6 mdo-compact">
                                          <li className="mdo-tab mdo-selected"><i className="fa-light fa-presentation-screen"></i></li>  
                                          <li className="mdo-tab"><i className="fa-light fa-chart-line"></i></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mdo-grid mdo-padding-bottom-medium mdo-fill-height mdo-padding-top-small">
                                      {/* Left Column */}
                                      <div className="mdo-col-1 mdo-padding-right-medium mdo-fill-height">
                                        <div className="mdo-fill-width mdo-font-small mdo-padding-top-small mdo-padding-bottom-medium">
                                          <span className="mdo-text-unread">Survival rate<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span>
                                        </div>
                                        <ReactECharts
                                          option={{
                                            grid: {
                                              top: '5%',
                                              show: false,
                                              containLabel: true
                                            },
                                            tooltip: {
                                              trigger: 'item'
                                            },
                                            textStyle: {
                                              fontFamily: 'Lato, sans-serif'
                                            },
                                            legend: {
                                              bottom: '10%',
                                              selectedMode: false
                                            },
                                            series: [{
                                              name: 'Survival',
                                              type: 'pie',
                                              radius: ['80%', '100%'],
                                              avoidLabelOverlap: false,
                                              clockwise: false,
                                              top: '0px',
                                              height: '90px',
                                              silent: true,
                                              label: {
                                                show: true,
                                                formatter: '{d}%'
                                              },
                                              data: [
                                                { value: 1048, name: 'Survived', itemStyle: {color: '#20BF6C'} },
                                                { value: 735, name: 'Not survived', itemStyle: {color: '#EB3B5B'} }
                                              ]
                                            }]
                                          }}
                                          style={{ height: '152px', width: '100%' }}
                                        />
                                        <table className="mdo-table mdo-excel mdo-module mdo-fixed-table mdo-flat-alt mdo-margin-top-large">
                                          <tbody>
                                            <tr>
                                              <td className="mdo-cell-fixed mdo-width-200"><span className="mdo-text mdo-text-unread">Not survived</span></td>
                                              <td><span className="mdo-text mdo-text-right mdo-text-error">735</span></td> 
                                              <td><span className="mdo-text mdo-text-right"><span className="mdo-label mdo-label-error"><i className="fa-light fa-arrow-down-right mdo-margin-right-small"></i>2%</span></span></td> 
                                            </tr>
                                            <tr>
                                              <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Survived</span></td>
                                              <td><span className="mdo-text mdo-text-right mdo-text-success">1048</span></td> 
                                              <td><span className="mdo-text mdo-text-right"><span className="mdo-label mdo-label-error"><i className="fa-light fa-arrow-down-right mdo-margin-right-small"></i>4%</span></span></td> 
                                            </tr>
                                            <tr>
                                              <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Dataset coverage</span></td>
                                              <td><span className="mdo-text mdo-text-right mdo-text-info">64%</span></td> 
                                              <td><span className="mdo-text mdo-text-right"><span className="mdo-label mdo-label-success"><i className="fa-light fa-arrow-up-right mdo-margin-right-small"></i>5%</span></span></td> 
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                      {/* Right Column */}
                                      <div className="mdo-col-2 mdo-padding-left-medium mdo-border-left mdo-fill-height">
                                        <div className="mdo-grid mdo-padding-bottom-medium">
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Unprocessed records<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-error">200</span></div>
                                          </div>
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Processed records<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-success">112</span></div>
                                          </div>
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Auto processed<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-info">100</span></div>
                                          </div>
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Manual override<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric">50</span></div>
                                          </div>
                                        </div>
                                        <div className="mdo-grid mdo-padding-top-small">
                                          <div className="mdo-col-1">
                                            <table className="mdo-table mdo-module mdo-hover mdo-striped">
                                              <thead>
                                                <tr>
                                                  <th colSpan={3}><div className="mdo-text mdo-text-left">Failed rules - top 5</div></th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td><div className="mdo-text"><i className="fa-solid fa-circle-xmark mdo-text-error mdo-margin-right-small"></i>Manufacturer check</div></td>
                                                  <td className="mdo-width-250">
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '75%'}} className="mdo-default-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td><div className="mdo-text mdo-text-right mdo-text-secondary">1200</div></td>
                                                  <td><div className="mdo-text mdo-text-right">85%</div></td>
                                                </tr>
                                                <tr>
                                                  <td><div className="mdo-text"><i className="fa-solid fa-circle-xmark mdo-text-error mdo-margin-right-small"></i>Vendor check</div></td>
                                                  <td>
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '65%'}} className="mdo-default-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td><div className="mdo-text mdo-text-right mdo-text-secondary">700</div></td>
                                                  <td><div className="mdo-text mdo-text-right">66%</div></td>
                                                </tr>
                                                <tr>
                                                  <td><div className="mdo-text"><i className="fa-solid fa-circle-xmark mdo-text-error mdo-margin-right-small"></i>Consistency rule</div></td>
                                                  <td>
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '55%'}} className="mdo-default-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td><div className="mdo-text mdo-text-right mdo-text-secondary">544</div></td>
                                                  <td><div className="mdo-text mdo-text-right">50%</div></td>
                                                </tr>
                                                <tr>
                                                  <td><div className="mdo-text"><i className="fa-solid fa-circle-xmark mdo-text-error mdo-margin-right-small"></i>Regex rule A</div></td>
                                                  <td>
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '45%'}} className="mdo-default-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td><div className="mdo-text mdo-text-right mdo-text-secondary">312</div></td>
                                                  <td><div className="mdo-text mdo-text-right">20%</div></td>
                                                </tr>
                                                <tr>
                                                  <td><div className="mdo-text"><i className="fa-solid fa-circle-xmark mdo-text-error mdo-margin-right-small"></i>Regex rule B</div></td>
                                                  <td>
                                                    <div className="mdo-progress-segment">
                                                      <div style={{width: '35%'}} className="mdo-default-segment"></div>
                                                    </div>
                                                  </td>
                                                  <td><div className="mdo-text mdo-text-right mdo-text-secondary">111</div></td>
                                                  <td><div className="mdo-text mdo-text-right">7%</div></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Classification Card - Full Width */}
                              <div className="mdo-chart-widget" style={{gridColumn: 'span 12'}}>
                                <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div><div className="mdo-text mdo-font-large">Classification</div></div>
                                      <div className="mdo-atom"><span className="mdo-button"><i className="mdo-icon-find"></i></span></div>
                                      <div className="mdo-atom mdo-allow-overflow mdo-padding-left-large">
                                        <ul className="mdo-tabs-alt6 mdo-compact">
                                          <li className="mdo-tab mdo-selected"><i className="fa-light fa-presentation-screen"></i></li>  
                                          <li className="mdo-tab"><i className="fa-light fa-chart-line"></i></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mdo-grid mdo-padding-bottom-medium mdo-padding-top-small mdo-fill-height">
                                      {/* Left Column */}
                                      <div className="mdo-col-1 mdo-fill-height mdo-padding-right-medium">
                                        <div className="mdo-grid mdo-padding-bottom-medium">
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Noun-modifier combos<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-info">1,400</span></div>
                                            <div className="mdo-fill-width mdo-padding-top-small"><span className="mdo-label mdo-label-error"><i className="fa-light fa-arrow-up-right mdo-margin-right-small"></i>2%</span></div>
                                          </div>
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Unclassified records<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-error">11,444</span></div>
                                            <div className="mdo-fill-width mdo-padding-top-small"><span className="mdo-label mdo-label-success"><i className="fa-light fa-arrow-down-right mdo-margin-right-small"></i>4%</span></div>
                                          </div>
                                        </div>
                                        <div className="mdo-grid mdo-padding-bottom-medium mdo-padding-top-medium">
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Missing short desc<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-error">2,543</span></div>
                                          </div>
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Missing long desc<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-error">2,200</span></div>
                                          </div>
                                        </div>
                                        <div className="mdo-grid mdo-padding-bottom-medium mdo-padding-top-medium">
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Missing attributes<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-error">3,101</span></div>
                                          </div>
                                          <div className="mdo-col-1"></div>
                                        </div>
                                      </div>
                                      {/* Middle Column */}
                                      <div className="mdo-col-1 mdo-fill-height mdo-border-left mdo-padding-left-medium mdo-padding-right-medium">
                                        <div className="mdo-fill-width mdo-font-small mdo-padding-top-small mdo-padding-bottom-medium">
                                          <span className="mdo-text-unread">Short description health check<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span>
                                        </div>
                                        <ReactECharts
                                          option={{
                                            grid: {
                                              top: '5%',
                                              show: false,
                                              containLabel: true
                                            },
                                            tooltip: {
                                              trigger: 'item'
                                            },
                                            textStyle: {
                                              fontFamily: 'Lato, sans-serif'
                                            },
                                            legend: {
                                              bottom: '10%',
                                              selectedMode: false
                                            },
                                            series: [{
                                              name: 'Short Description',
                                              type: 'pie',
                                              radius: ['80%', '100%'],
                                              avoidLabelOverlap: false,
                                              clockwise: false,
                                              top: '0px',
                                              height: '90px',
                                              silent: true,
                                              label: {
                                                show: true,
                                                formatter: '{d}%'
                                              },
                                              data: [
                                                { value: 1048, name: 'Present', itemStyle: {color: '#20BF6C'} },
                                                { value: 735, name: 'Missing', itemStyle: {color: '#EB3B5B'} }
                                              ]
                                            }]
                                          }}
                                          style={{ height: '145px', width: '100%' }}
                                        />
                                        <div className="mdo-fill-width mdo-font-small mdo-padding-top-small mdo-padding-bottom-medium">
                                          <span className="mdo-text-unread">Long description health check<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span>
                                        </div>
                                        <ReactECharts
                                          option={{
                                            grid: {
                                              top: '5%',
                                              show: false,
                                              containLabel: true
                                            },
                                            tooltip: {
                                              trigger: 'item'
                                            },
                                            textStyle: {
                                              fontFamily: 'Lato, sans-serif'
                                            },
                                            legend: {
                                              bottom: '10%',
                                              selectedMode: false
                                            },
                                            series: [{
                                              name: 'Long Description',
                                              type: 'pie',
                                              radius: ['80%', '100%'],
                                              avoidLabelOverlap: false,
                                              clockwise: false,
                                              top: '0px',
                                              height: '90px',
                                              silent: true,
                                              label: {
                                                show: true,
                                                formatter: '{d}%'
                                              },
                                              data: [
                                                { value: 900, name: 'Present', itemStyle: {color: '#20BF6C'} },
                                                { value: 600, name: 'Missing', itemStyle: {color: '#EB3B5B'} }
                                              ]
                                            }]
                                          }}
                                          style={{ height: '145px', width: '100%' }}
                                        />
                                      </div>
                                      {/* Right Column */}
                                      <div className="mdo-col-1 mdo-fill-height mdo-border-left mdo-padding-left-medium">
                                        <div className="mdo-grid mdo-padding-bottom-medium">
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Unprocessed<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-error">422</span></div>
                                          </div>
                                          <div className="mdo-col-1">
                                            <div className="mdo-fill-width mdo-font-small mdo-padding-top-small"><span className="mdo-text-unread">Processed<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span></div>
                                            <div className="mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric mdo-text-success">840</span></div>
                                          </div>
                                        </div>
                                        <div className="mdo-fill-width mdo-font-small mdo-padding-top-small mdo-padding-bottom-medium">
                                          <span className="mdo-text-unread">Overall progress<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span>
                                        </div>
                                        <div className="mdo-fill-width mdo-font-small mdo-padding-top-small mdo-padding-bottom-medium">
                                          <span className="mdo-text-unread">Unclassified records status<i className="fa-light fa-circle-question mdo-margin-left-small"></i></span>
                                        </div>
                                        <table className="mdo-table">
                                          <tbody>
                                            <tr>
                                              <td className="mdo-fixed"><div className="mdo-text">Not submitted</div></td>
                                              <td>
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '75%'}} className="mdo-success-segment"></div>
                                                </div>
                                              </td>
                                              <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-success">75</div></td>
                                            </tr>
                                            <tr>
                                              <td className="mdo-fixed"><div className="mdo-text">No match found</div></td>
                                              <td>
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '50%'}} className="mdo-info-segment"></div>
                                                </div>
                                              </td>
                                              <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-info">50</div></td>
                                            </tr>
                                            <tr>
                                              <td className="mdo-fixed"><div className="mdo-text">Multiple matches</div></td>
                                              <td>
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '25%'}} className="mdo-warning-segment"></div>
                                                </div>
                                              </td>
                                              <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-warning">25</div></td>
                                            </tr>
                                            <tr>
                                              <td className="mdo-fixed"><div className="mdo-text">Awaiting review</div></td>
                                              <td>
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '15%'}} className="mdo-error-segment"></div>
                                                </div>
                                              </td>
                                              <td className="mdo-fixed"><div className="mdo-text mdo-text-right mdo-text-error">15</div></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Material Master View 4: Profile View */}
                  {materialMasterView === 4 && (
                    <div data-tabset="dataset-home" data-tab="4" className="mdo-tab-content mdo-fill-height mdo-selected">
                      <div className="mdo-card mdo-vertical">
                        <div>
                          <div className="mdo-content" style={{padding: '1rem'}}>
                            
                            {/* CSS Grid Layout */}
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1rem'}}>
                              
                              {/* Summary - Left Third (4 cols) */}
                              <div style={{gridColumn: 'span 4'}}>
                                <div className="mdo-chart-widget">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Summary</div></div>
                                      </div>
                                    </div>
                                    <div className="mdo-padding-top-medium">
                                      <table className="mdo-table mdo-excel mdo-module mdo-fixed-table mdo-flat-alt">
                                        <tbody>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Number of rows</span></td>
                                            <td><span className="mdo-text">1088</span></td> 
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Number of columns</span></td>
                                            <td><span className="mdo-text">18</span></td> 
                                          </tr>	
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Last run</span></td>
                                            <td><span className="mdo-text">10 May 2024 12:45PM</span></td> 
                                          </tr>
                                          <tr>
                                            <td className="mdo-cell-fixed"><span className="mdo-text mdo-text-unread">Next run</span></td>
                                            <td><span className="mdo-text">17 May 2024 12:45PM</span></td> 
                                          </tr>														
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Columns by Type - Right Two Thirds (8 cols) */}
                              <div style={{gridColumn: 'span 8'}}>
                                <div className="mdo-chart-widget">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Columns by type</div></div>
                                      </div>
                                    </div>
                                    <div id="data-profiling-columns" style={{minHeight: '200px'}}>
                                      <ReactECharts
                                        option={{
                                          color: ['#20BF6C', '#FB8230', '#F8B732', '#20BF6C', '#10B9B2', '#2D99DB'],
                                          textStyle: {
                                            fontFamily: 'Lato, sans-serif'
                                          },
                                          legend: {
                                            selectedMode: false,
                                            bottom: '10%'
                                          },
                                          tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                              type: 'cross',
                                              crossStyle: {
                                                color: '#999'
                                              }
                                            }
                                          },
                                          grid: {
                                            left: '0',
                                            right: '0',
                                            top: '10%',
                                            bottom: '5%',
                                            containLabel: true
                                          },
                                          xAxis: {
                                            type: 'category',
                                            data: ['Number', 'Text', 'Boolean', 'Datetime', 'Binary', 'Timestamp'],
                                            axisLine: {
                                              show: false
                                            }
                                          },
                                          yAxis: {
                                            type: 'value',
                                            show: false
                                          },
                                          series: [
                                            {
                                              colorBy: 'data',
                                              barWidth: '50%',
                                              label: {
                                                show: true,
                                                color: 'white'
                                              },
                                              data: [4, 7, 12, 10, 5, 4],
                                              type: 'bar'
                                            }
                                          ]
                                        }}
                                        style={{ height: '200px', width: '100%' }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Fields - Full Width */}
                              <div style={{gridColumn: 'span 12'}}>
                                <div className="mdo-chart-widget">
                                  <div className="mdo-card mdo-vertical mdo-accent" style={{padding: '1rem'}}>
                                    <div className="mdo-section">
                                      <div className="mdo-card">
                                        <div><div className="mdo-text mdo-font-large">Fields</div></div>
                                        <div className="mdo-atom mdo-allow-overflow mdo-padding-left-large">
                                          <ul className="mdo-tabs-alt6 mdo-compact">
                                            <li className="mdo-tab"><i className="fa-light fa-hashtag"></i></li>  
                                            <li className="mdo-tab mdo-selected"><i className="fa-light fa-percent"></i></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <table className="mdo-table mdo-module mdo-hover mdo-striped">
                                        <thead>
                                          <tr>
                                            <th colSpan={2}><span className="mdo-text">Name<i className="mdo-icon-outgoing mdo-margin-left-small"></i></span></th>
                                            <th><span className="mdo-text mdo-text-left">Type</span></th>
                                            <th><span className="mdo-text mdo-text-left">Distribution</span></th>
                                            <th><span className="mdo-text mdo-text-center">Distinct</span></th>
                                            <th><span className="mdo-text mdo-text-center">Non-distinct</span></th>
                                            <th><span className="mdo-text mdo-text-center">Null</span></th>
                                            <th><span className="mdo-text mdo-text-center">Min length</span></th>
                                            <th><span className="mdo-text mdo-text-center">Max length</span></th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td className="mdo-fixed"><span className="mdo-text"><i className="mdo-icon-hashtag"></i></span></td>
                                            <td className="mdo-no-padding-left"><span className="mdo-text"><a href="#">ID</a></span></td>
                                            <td><span className="mdo-text"><span className="mdo-font-x-small mdo-margin-right-small mdo-label mdo-hollow mdo-width-100 mdo-float-left">Numeric</span></span></td>
                                            <td>
                                              <div className="mdo-text mdo-text-center">
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '25%'}} className="mdo-default-segment"></div>
                                                </div>
                                              </div>
                                            </td>
                                            <td><span className="mdo-text mdo-text-center">75%</span></td>
                                            <td><span className="mdo-text mdo-text-center">25%</span></td>
                                            <td><span className="mdo-text mdo-text-center">7%</span></td>
                                            <td><span className="mdo-text mdo-text-secondary mdo-text-center"><i className="mdo-icon-empty-set"></i></span></td>
                                            <td><span className="mdo-text mdo-text-secondary mdo-text-center"><i className="mdo-icon-empty-set"></i></span></td>
                                          </tr>
                                          <tr>
                                            <td className="mdo-fixed"><span className="mdo-text"><i className="mdo-icon-hashtag"></i></span></td>
                                            <td className="mdo-no-padding-left"><span className="mdo-text"><a href="#">Country code</a></span></td>
                                            <td><span className="mdo-text"><span className="mdo-font-x-small mdo-margin-right-small mdo-label mdo-hollow mdo-width-100 mdo-float-left">Numeric</span></span></td>
                                            <td>
                                              <div className="mdo-text mdo-text-center">
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '10%'}} className="mdo-default-segment"></div>
                                                </div>
                                              </div>
                                            </td>
                                            <td><span className="mdo-text mdo-text-center">90%</span></td>
                                            <td><span className="mdo-text mdo-text-center">10%</span></td>
                                            <td><span className="mdo-text mdo-text-center">10%</span></td>
                                            <td><span className="mdo-text mdo-text-center">2</span></td>
                                            <td><span className="mdo-text mdo-text-center">2</span></td>
                                          </tr>
                                          <tr>
                                            <td className="mdo-fixed"><span className="mdo-text"><i className="mdo-icon-text"></i></span></td>
                                            <td className="mdo-no-padding-left"><span className="mdo-text"><a href="#">Description</a></span></td>
                                            <td><span className="mdo-text"><span className="mdo-font-x-small mdo-margin-right-small mdo-label mdo-hollow mdo-width-100 mdo-float-left">String</span></span></td>
                                            <td>
                                              <div className="mdo-text mdo-text-center">
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '60%'}} className="mdo-default-segment"></div>
                                                </div>
                                              </div>
                                            </td>
                                            <td><span className="mdo-text mdo-text-center">40%</span></td>
                                            <td><span className="mdo-text mdo-text-center">60%</span></td>
                                            <td><span className="mdo-text mdo-text-center">10%</span></td>
                                            <td><span className="mdo-text mdo-text-center">4</span></td>
                                            <td><span className="mdo-text mdo-text-center">45</span></td>
                                          </tr>
                                          <tr>
                                            <td className="mdo-fixed"><span className="mdo-text"><i className="mdo-icon-text"></i></span></td>
                                            <td className="mdo-no-padding-left"><span className="mdo-text"><a href="#">Long description</a></span></td>
                                            <td><span className="mdo-text"><span className="mdo-font-x-small mdo-margin-right-small mdo-label mdo-hollow mdo-width-100 mdo-float-left">String</span></span></td>
                                            <td>
                                              <div className="mdo-text mdo-text-center">
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '50%'}} className="mdo-default-segment"></div>
                                                </div>
                                              </div>
                                            </td>
                                            <td><span className="mdo-text mdo-text-center">50%</span></td>
                                            <td><span className="mdo-text mdo-text-center">50%</span></td>
                                            <td><span className="mdo-text mdo-text-center">5%</span></td>
                                            <td><span className="mdo-text mdo-text-center">2</span></td>
                                            <td><span className="mdo-text mdo-text-center">25</span></td>
                                          </tr>
                                          <tr>
                                            <td className="mdo-fixed"><span className="mdo-text"><i className="fa-light fa-calendar"></i></span></td>
                                            <td className="mdo-no-padding-left"><span className="mdo-text"><a href="#">Created</a></span></td>
                                            <td><span className="mdo-text"><span className="mdo-font-x-small mdo-margin-right-small mdo-label mdo-hollow mdo-width-100 mdo-float-left">Datetime</span></span></td>
                                            <td>
                                              <div className="mdo-text mdo-text-center">
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '100%'}} className="mdo-default-segment"></div>
                                                </div>
                                              </div>
                                            </td>
                                            <td><span className="mdo-text mdo-text-center">100%</span></td>
                                            <td><span className="mdo-text mdo-text-center">-</span></td>
                                            <td><span className="mdo-text mdo-text-center">12%</span></td>
                                            <td><span className="mdo-text mdo-text-secondary mdo-text-center"><i className="mdo-icon-empty-set"></i></span></td>
                                            <td><span className="mdo-text mdo-text-secondary mdo-text-center"><i className="mdo-icon-empty-set"></i></span></td>
                                          </tr>
                                          <tr>
                                            <td className="mdo-fixed"><span className="mdo-text"><i className="mdo-icon-hashtag"></i></span></td>
                                            <td className="mdo-no-padding-left"><span className="mdo-text"><a href="#">Country code</a></span></td>
                                            <td><span className="mdo-text"><span className="mdo-font-x-small mdo-margin-right-small mdo-label mdo-hollow mdo-width-100 mdo-float-left">Numeric</span></span></td>
                                            <td>
                                              <div className="mdo-text mdo-text-center">
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '10%'}} className="mdo-default-segment"></div>
                                                </div>
                                              </div>
                                            </td>
                                            <td><span className="mdo-text mdo-text-center">90%</span></td>
                                            <td><span className="mdo-text mdo-text-center">10%</span></td>
                                            <td><span className="mdo-text mdo-text-center">10%</span></td>
                                            <td><span className="mdo-text mdo-text-center">2</span></td>
                                            <td><span className="mdo-text mdo-text-center">2</span></td>
                                          </tr>
                                          <tr>
                                            <td className="mdo-fixed"><span className="mdo-text"><i className="mdo-icon-text"></i></span></td>
                                            <td className="mdo-no-padding-left"><span className="mdo-text"><a href="#">Description</a></span></td>
                                            <td><span className="mdo-text"><span className="mdo-font-x-small mdo-margin-right-small mdo-label mdo-hollow mdo-width-100 mdo-float-left">String</span></span></td>
                                            <td>
                                              <div className="mdo-text mdo-text-center">
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '60%'}} className="mdo-default-segment"></div>
                                                </div>
                                              </div>
                                            </td>
                                            <td><span className="mdo-text mdo-text-center">40%</span></td>
                                            <td><span className="mdo-text mdo-text-center">60%</span></td>
                                            <td><span className="mdo-text mdo-text-center">10%</span></td>
                                            <td><span className="mdo-text mdo-text-center">4</span></td>
                                            <td><span className="mdo-text mdo-text-center">45</span></td>
                                          </tr>
                                          <tr>
                                            <td className="mdo-fixed"><span className="mdo-text"><i className="mdo-icon-text"></i></span></td>
                                            <td className="mdo-no-padding-left"><span className="mdo-text"><a href="#">Long description</a></span></td>
                                            <td><span className="mdo-text"><span className="mdo-font-x-small mdo-margin-right-small mdo-label mdo-hollow mdo-width-100 mdo-float-left">String</span></span></td>
                                            <td>
                                              <div className="mdo-text mdo-text-center">
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '50%'}} className="mdo-default-segment"></div>
                                                </div>
                                              </div>
                                            </td>
                                            <td><span className="mdo-text mdo-text-center">50%</span></td>
                                            <td><span className="mdo-text mdo-text-center">50%</span></td>
                                            <td><span className="mdo-text mdo-text-center">5%</span></td>
                                            <td><span className="mdo-text mdo-text-center">2</span></td>
                                            <td><span className="mdo-text mdo-text-center">25</span></td>
                                          </tr>
                                          <tr>
                                            <td className="mdo-fixed"><span className="mdo-text"><i className="fa-light fa-calendar"></i></span></td>
                                            <td className="mdo-no-padding-left"><span className="mdo-text"><a href="#">Created</a></span></td>
                                            <td><span className="mdo-text"><span className="mdo-font-x-small mdo-margin-right-small mdo-label mdo-hollow mdo-width-100 mdo-float-left">Datetime</span></span></td>
                                            <td>
                                              <div className="mdo-text mdo-text-center">
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '100%'}} className="mdo-default-segment"></div>
                                                </div>
                                              </div>
                                            </td>
                                            <td><span className="mdo-text mdo-text-center">100%</span></td>
                                            <td><span className="mdo-text mdo-text-center">-</span></td>
                                            <td><span className="mdo-text mdo-text-center">12%</span></td>
                                            <td><span className="mdo-text mdo-text-secondary mdo-text-center"><i className="mdo-icon-empty-set"></i></span></td>
                                            <td><span className="mdo-text mdo-text-secondary mdo-text-center"><i className="mdo-icon-empty-set"></i></span></td>
                                          </tr>
                                          <tr>
                                            <td className="mdo-fixed"><span className="mdo-text"><i className="fa-light fa-calendar"></i></span></td>
                                            <td className="mdo-no-padding-left"><span className="mdo-text"><a href="#">Created</a></span></td>
                                            <td><span className="mdo-text"><span className="mdo-font-x-small mdo-margin-right-small mdo-label mdo-hollow mdo-width-100 mdo-float-left">Datetime</span></span></td>
                                            <td>
                                              <div className="mdo-text mdo-text-center">
                                                <div className="mdo-progress-segment">
                                                  <div style={{width: '100%'}} className="mdo-default-segment"></div>
                                                </div>
                                              </div>
                                            </td>
                                            <td><span className="mdo-text mdo-text-center">100%</span></td>
                                            <td><span className="mdo-text mdo-text-center">-</span></td>
                                            <td><span className="mdo-text mdo-text-center">12%</span></td>
                                            <td><span className="mdo-text mdo-text-secondary mdo-text-center"><i className="mdo-icon-empty-set"></i></span></td>
                                            <td><span className="mdo-text mdo-text-secondary mdo-text-center"><i className="mdo-icon-empty-set"></i></span></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: All datasets */}
      {activeTab === 5 && (
        <div data-tabset="global-inbox" data-tab="5" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div className="mdo-section">
              <div className="mdo-card mdo-padding-all-medium">	
                <div>
                  <div className="mdo-text mdo-font-x-large">All datasets</div>
                </div>
                <div className="mdo-atom">
                  <span className="mdo-button mdo-minor" data-modal="#new-database">
                    New dataset
                  </span>
                </div>
              </div>
            </div>
            <div> 
              <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                <table className="mdo-table mdo-module mdo-hover mdo-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sample Dataset</td>
                      <td>Master Data</td>
                      <td>Active</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 7: Duplicate check */}
      {activeTab === 7 && (
        <div data-tabset="global-inbox" data-tab="7" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div className="mdo-section mdo-padding-left-medium mdo-padding-top-medium mdo-padding-right-medium">
              <div className="mdo-card">
                <div>
                  <div className="mdo-text mdo-font-x-large">Duplicate check</div>
                </div>
                <div className="mdo-atom">
                  <span className="mdo-button mdo-minor">Run check</span>
                </div>
              </div>
            </div>
            <div>
              <div className="mdo-card mdo-vertical">
                <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                  <div className="mdo-card mdo-padding-all-medium mdo-margin-bottom-medium">
                    <div className="mdo-text mdo-margin-bottom-small"><strong>Duplicate Detection Settings</strong></div>
                    <div className="mdo-field">
                      <span className="mdo-field-label">Similarity threshold</span>
                      <div className="mdo-field-input">
                        <input type="text" value="85%" readOnly />
                      </div>
                    </div>
                  </div>
                  <table className="mdo-table mdo-module mdo-hover">
                    <thead>
                      <tr>
                        <th><span className="mdo-text">Material</span></th>
                        <th><span className="mdo-text">Potential Duplicate</span></th>
                        <th><span className="mdo-text">Similarity</span></th>
                        <th><span className="mdo-text">Action</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>MAT-100 - Bearing 6205</td>
                        <td>MAT-105 - Bearing 6205-2RS</td>
                        <td>92%</td>
                        <td><span className="mdo-button mdo-minor">Review</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>	
            </div>
          </div>
        </div>
      )}

      {/* Tab 8: Classification check */}
      {activeTab === 8 && (
        <div data-tabset="global-inbox" data-tab="8" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div className="mdo-section mdo-padding-left-medium mdo-padding-top-medium mdo-padding-right-medium">
              <div className="mdo-card">
                <div className="mdo-card mdo-justified">
                  <div>
                    <div className="mdo-text mdo-font-x-large">Classification check</div>
                  </div>
                  <div className="mdo-atom">
                    <span className="mdo-button mdo-minor">Validate classifications</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mdo-card mdo-vertical">
                <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                  <table className="mdo-table mdo-module mdo-hover">
                    <thead>
                      <tr>
                        <th><span className="mdo-text">Material</span></th>
                        <th><span className="mdo-text">Current Class</span></th>
                        <th><span className="mdo-text">Suggested Class</span></th>
                        <th><span className="mdo-text">Confidence</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>MAT-200</td>
                        <td>Equipment</td>
                        <td>Component</td>
                        <td>High</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>	
            </div>
          </div>
        </div>
      )}

      {/* Tab 9: Survivorship check */}
      {activeTab === 9 && (
        <div data-tabset="global-inbox" data-tab="9" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-header">
            <div className="mdo-padding-right-medium">
              <div className="mdo-card mdo-vertical">
                <div className="mdo-section mdo-padding-left-medium mdo-padding-top-medium">
                  <div className="mdo-card mdo-justified">
                    <div className="mdo-atom mdo-padding-right-large">
                      <div className="mdo-text mdo-wrap mdo-font-x-large">Survivorship check<br /><span className="mdo-font-small mdo-text-secondary">Material master</span></div>
                    </div>
                    <div className="mdo-padding-right-large">
                      <span className="mdo-text mdo-text-secondary mdo-text-right">Last run: 12/09/2024 11:34AM &middot; Next run: 14/09/2024 11:34AM</span>
                    </div>
                    <div className="mdo-atom"><span className="mdo-button"><i className="fa-light fa-play"></i></span></div>
                    <div className="mdo-atom"><span className="mdo-button"><i className="fa-light fa-clock"></i></span></div>
                    <div className="mdo-atom mdo-padding-right-large"><span className="mdo-button"><i className="mdo-icon-more"></i></span></div>
                    <div className="mdo-atom mdo-allow-overflow">
                      <ul className="mdo-tabs-alt6 mdo-compact">
                        <li className="mdo-tab mdo-selected"><i className="fa-light fa-table"></i></li>
                        <li className="mdo-tab"><i className="fa-light fa-folder-tree"></i></li>
                      </ul>
                    </div>
                    <div className="mdo-atom mdo-padding-left-large mdo-allow-overflow">
                      <span className="mdo-button mdo-major mdo-fixed-button mdo-sidesheet-close">Submit</span>
                    </div>
                  </div>
                </div>
                <div className="mdo-section mdo-padding-bottom-small mdo-padding-top-small mdo-allow-overflow mdo-padding-left-medium">
                  <div className="mdo-card">
                    <div className="mdo-allow-overflow">
                      <div className="mdo-filter-pill mdo-filter-pill-binary"><i className="fa-solid fa-circle-small mdo-text-unprocessed mdo-margin-right-small"></i>Unprocessed<span className="mdo-text-secondary mdo-padding-left-small">2650</span></div>
                      <div className="mdo-filter-pill mdo-filter-pill-binary"><i className="fa-solid fa-circle-small mdo-text-info mdo-margin-right-small"></i>Processed<span className="mdo-text-secondary mdo-padding-left-small">215</span></div>
                      <div className="mdo-filter-pill mdo-filter-pill-binary"><i className="fa-solid fa-circle-small mdo-text-success mdo-margin-right-small"></i>Submitted<span className="mdo-text-secondary mdo-padding-left-small">100</span></div>
                      <div className="mdo-filter-pill mdo-filter-pill-binary"><i className="fa-solid fa-circle-small mdo-text-disabled mdo-margin-right-small"></i>Expired<span className="mdo-text-secondary mdo-padding-left-small">1</span></div>
                      <div className="mdo-filter-pill mdo-filter-pill-binary"><i className="fa-solid fa-circle-small mdo-text-disabled mdo-margin-right-small"></i>Skipped<span className="mdo-text-secondary mdo-padding-left-small">1</span></div>
                      <div className="mdo-filter-pill">Validation<span className="mdo-padding-left-small mdo-text-error">7</span><i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div>
                      <div className="mdo-filter-pill">Changes<span className="mdo-padding-left-small mdo-text-secondary">11</span><i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mdo-content">
                    <div className="mdo-padding-left-medium mdo-padding-right-medium">
                      <table className="mdo-table mdo-module mdo-condensed mdo-excel">
                        <thead>
                          <tr>
                            <th className="mdo-fixed">
                              <div className="mdo-text">
                                <div className="mdo-option mdo-option-square mdo-float-left">
                                  <input type="checkbox" name="diw-schema3" id="diw-schema3-rec00" />
                                  <label htmlFor="diw-schema3-rec00"></label>
                                </div>
                              </div>
                            </th>
                            <th className="mdo-fixed mdo-relative mdo-cell-fixed">
                              <span className="mdo-button mdo-float-left"><i className="fa-light fa-gear"></i></span>
                            </th>
                            <th className="mdo-fixed mdo-cell-fixed"><span className="mdo-text">Record #</span></th>
                            <th className="mdo-fixed"><span className="mdo-text">Record status</span></th>
                            <th><span className="mdo-text mdo-text-center">DQ score</span></th>
                            <th className="mdo-fixed"><span className="mdo-text">Business rules</span></th>
                            <th><span className="mdo-text">Material type</span></th>
                            <th><span className="mdo-text">Base UoM</span></th>
                            <th><span className="mdo-text">Industry code</span></th>
                            <th><span className="mdo-text">Plant</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={2}></td>
                            <td><span className="mdo-text mdo-text-secondary">Search</span></td>
                            <td><span className="mdo-text mdo-text-secondary">Search</span></td>
                            <td><span className="mdo-text mdo-text-secondary">Search</span></td>
                            <td><span className="mdo-text mdo-text-secondary">Search</span></td>
                            <td className="mdo-category-cell-alt2"><span className="mdo-text mdo-text-secondary">Search</span></td>
                            <td><span className="mdo-text mdo-text-secondary">Search</span></td>
                            <td><span className="mdo-text mdo-text-secondary">Search</span></td>
                            <td><span className="mdo-text mdo-text-secondary">Search</span></td>
                          </tr>
                          <tr className="mdo-row-warning">
                            <td>
                              <div className="mdo-text">
                                <div className="mdo-option mdo-option-square mdo-float-left">
                                  <input type="checkbox" name="diw-schema3" id="diw-schema3-rec01" />
                                  <label htmlFor="diw-schema3-rec01"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="mdo-button mdo-float-left"><i className="fa-solid fa-circle-small mdo-text-unprocessed"></i></span>
                            </td>
                            <td><span className="mdo-text"><a href="#" className="mdo-text-underline-link">VERP5553</a></span></td>
                            <td>
                              <div className="mdo-card mdo-padding-top-small">
                                <div className="mdo-padding-right-medium">
                                  <span className="mdo-text">
                                    <span className="toggle-switch">
                                      <span className="toggle-knob"></span>
                                    </span>
                                  </span>
                                </div>
                                <div className="mdo-atom">
                                  <span className="mdo-text"><i className="fa-light fa-user-edit"></i></span>
                                </div>
                              </div>
                            </td>
                            <td><span className="mdo-text mdo-text-center mdo-clickable"><span>85%</span></span></td>
                            <td>
                              <div className="mdo-card mdo-padding-top-small">
                                <div className="mdo-atom mdo-padding-right-small">
                                  <span className="mdo-text mdo-flat mdo-wrap"><i className="fa-solid fa-circle-check mdo-text-success"></i></span>
                                </div>
                                <div>
                                  <span className="mdo-text mdo-flat mdo-wrap">All business rules have passed</span>
                                </div>
                              </div>
                            </td>
                            <td className="mdo-category-cell-alt2"><span className="mdo-text">HALB-Semifinished Product</span></td>
                            <td><span className="mdo-text">EA-each</span></td>
                            <td><span className="mdo-text">240002</span></td>
                            <td><span className="mdo-text">Plant 0001</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 10: All schemas */}
      {activeTab === 10 && (
        <div data-tabset="global-inbox" data-tab="10" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div className="mdo-section">
              <div className="mdo-card mdo-padding-all-medium">		
                <div className="mdo-atom mdo-no-desktop">
                  <span className="mdo-button">
                    <i className="fa-light fa-bars"></i>
                  </span>
                </div>															  
                <div>
                  <div className="mdo-text mdo-font-x-large">All schemas</div>
                </div>
                <div className="mdo-atom">
                  <span className="mdo-button mdo-minor">
                    New schema
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="mdo-content">
                <div className="mdo-padding-left-medium mdo-padding-right-medium">
                  <table className="mdo-table mdo-module mdo-hover mdo-striped">
                    <thead>
                      <tr>
                        <th className="mdo-fixed"><span className="mdo-button mdo-float-left mdo-hidden"><i className="fa-light fa-columns-3"></i></span></th>
                        <th><span className="mdo-text">Schema</span></th>
                        <th><span className="mdo-text">Dataset</span></th>
                        <th><span className="mdo-text">Type</span></th>
                        <th><span className="mdo-text mdo-text-center">Result</span></th>
                        <th><span className="mdo-text mdo-text-center">Home page</span></th>
                        <th><span className="mdo-text">Started</span></th>
                        <th className="mdo-fixed"><span className="mdo-text">Finished</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <ul className="mdo-button-group">
                            <li><span className="mdo-button"><i className="mdo-icon-more"></i></span></li>
                            <li><span className="mdo-button"><i className="fa-light fa-clock"></i></span></li>
                            <li><span className="mdo-button"><i className="mdo-icon-play"></i></span></li>
                          </ul>
                        </td>
                        <td><a href="#">Classification check</a></td>
                        <td>PO Text</td>
                        <td><span className="mdo-label mdo-label">Classification</span></td>
                        <td>
                          <span className="mdo-label mdo-label-error mdo-margin-right-small">55</span>
                          <span className="mdo-label mdo-label-warning mdo-margin-right-small">111</span>
                          <span className="mdo-label mdo-label-info mdo-margin-right-small">89</span>
                          <span className="mdo-label mdo-label-success">2.6k</span>
                        </td>
                        <td><span className="mdo-text mdo-text-center"><i className="fa-solid fa-star"></i></span></td>
                        <td>12 May 2020 12:00</td>
                        <td>12 May 2020 12:00</td>
                      </tr>
                      <tr>
                        <td>
                          <ul className="mdo-button-group">
                            <li><span className="mdo-button"><i className="mdo-icon-more"></i></span></li>
                            <li><span className="mdo-button"><i className="fa-light fa-clock"></i></span></li>
                            <li><span className="mdo-button"><i className="mdo-icon-play"></i></span></li>
                          </ul>
                        </td>
                        <td><a href="#">Data cataloging</a></td>
                        <td>PO Text</td>
                        <td><span className="mdo-label mdo-label">Classification</span></td>
                        <td>
                          <span className="mdo-label mdo-label-error mdo-margin-right-small">55</span>
                          <span className="mdo-label mdo-label-warning mdo-margin-right-small">111</span>
                          <span className="mdo-label mdo-label-info mdo-margin-right-small">89</span>
                          <span className="mdo-label mdo-label-success">2.6k</span>
                        </td>
                        <td><span className="mdo-text mdo-text-center"><i className="fa-solid fa-star"></i></span></td>
                        <td>12 May 2020 12:00</td>
                        <td>12 May 2020 12:00</td>
                      </tr>
                      <tr>
                        <td>
                          <ul className="mdo-button-group">
                            <li><span className="mdo-button"><i className="mdo-icon-more"></i></span></li>
                            <li><span className="mdo-button"><i className="fa-light fa-clock"></i></span></li>
                            <li><span className="mdo-button"><i className="mdo-icon-play"></i></span></li>
                          </ul>
                        </td>
                        <td><a href="#">Duplicate check</a></td>
                        <td>Vendor</td>
                        <td><span className="mdo-label mdo-label">Duplicate</span></td>
                        <td>
                          <span className="mdo-label mdo-label-error mdo-margin-right-small">12</span>
                          <span className="mdo-label mdo-label-warning mdo-margin-right-small">45</span>
                          <span className="mdo-label mdo-label-info mdo-margin-right-small">67</span>
                          <span className="mdo-label mdo-label-success">1.2k</span>
                        </td>
                        <td><span className="mdo-text mdo-text-center"><i className="fa-light fa-star"></i></span></td>
                        <td>15 Jun 2020 09:30</td>
                        <td>15 Jun 2020 09:45</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 12: Data summary report */}
      {activeTab === 12 && (
        <div data-tabset="global-inbox" data-tab="12" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div>
              <div className="mdo-card">
                <div className="mdo-allow-overflow">
                  <div className="mdo-card mdo-vertical mdo-header">
                    <div className="mdo-section mdo-padding-left-medium mdo-padding-right-medium mdo-padding-top-medium mdo-padding-bottom-small">
                      <div className="mdo-card">
                        <div className="mdo-atom mdo-no-desktop">
                          <span className="mdo-button"><i className="mdo-icon-menu"></i></span>
                        </div>
                        <div><div className="mdo-text mdo-font-x-large">Admin report<i className="mdo-icon-menu-arrow mdo-no-desktop-inline mdo-padding-left-small mdo-font-small"></i></div></div>
                      </div>
                    </div>
                    <div>
                      <div className="mdo-card mdo-vertical">
                        <div className="mdo-section mdo-padding-left-medium mdo-padding-right-medium mdo-padding-top-small">
                          <div className="mdo-card">
                            <div className="mdo-allow-overflow">
                              <div className="mdo-filter-pill">Dataset<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div>
                              <div className="mdo-filter-pill">User<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div>
                              <div className="mdo-filter-pill">Date range<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="mdo-content">
                            <div className="mdo-padding-left-medium mdo-padding-right-medium">
                              <div className="mdo-chart-widget">
                                <div className="mdo-card mdo-vertical">
                                  <div className="mdo-section">
                                    <div className="mdo-card">
                                      <div><div className="mdo-text mdo-font-large">Number of requests</div></div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mdo-text mdo-fill-width mdo-font-x-large mdo-padding-top-small"><span className="mdo-chart-metric">1.4k</span></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 13: Products */}
      {activeTab === 13 && (
        <div data-tabset="global-inbox" data-tab="13" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div className="mdo-section mdo-padding-left-medium mdo-padding-right-medium mdo-padding-top-medium">
              <div className="mdo-card">
                <div>
                  <div className="mdo-text mdo-font-x-large">Products</div>
                </div>
                <div className="mdo-atom">
                  <span className="mdo-button mdo-minor">New product</span>
                </div>
              </div>
            </div>
            <div> 
              <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                <div className="mdo-grid mdo-grid-3">
                  <div className="mdo-card mdo-padding-all-medium mdo-margin-bottom-medium">
                    <div className="mdo-text-center mdo-margin-bottom-small">
                      <i className="fa-light fa-box fa-3x"></i>
                    </div>
                    <div className="mdo-text mdo-text-center"><strong>Product A</strong></div>
                    <div className="mdo-text mdo-text-center mdo-text-secondary">Category: Electronics</div>
                  </div>
                  <div className="mdo-card mdo-padding-all-medium mdo-margin-bottom-medium">
                    <div className="mdo-text-center mdo-margin-bottom-small">
                      <i className="fa-light fa-box fa-3x"></i>
                    </div>
                    <div className="mdo-text mdo-text-center"><strong>Product B</strong></div>
                    <div className="mdo-text mdo-text-center mdo-text-secondary">Category: Machinery</div>
                  </div>
                  <div className="mdo-card mdo-padding-all-medium mdo-margin-bottom-medium">
                    <div className="mdo-text-center mdo-margin-bottom-small">
                      <i className="fa-light fa-box fa-3x"></i>
                    </div>
                    <div className="mdo-text mdo-text-center"><strong>Product C</strong></div>
                    <div className="mdo-text mdo-text-center mdo-text-secondary">Category: Components</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 14: Assets */}
      {activeTab === 14 && (
        <div data-tabset="global-inbox" data-tab="14" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div>
              <div className="mdo-card">
                <div className="mdo-allow-overflow">
                  <div className="mdo-card mdo-vertical mdo-header">
                    <div className="mdo-section mdo-padding-left-medium mdo-padding-right-medium mdo-padding-top-medium mdo-padding-bottom-small">
                      <div className="mdo-card">
                        <div className="mdo-atom mdo-no-desktop">
                          <span className="mdo-button"><i className="mdo-icon-menu"></i></span>
                        </div>
                        <div><div className="mdo-text mdo-font-x-large">Assets<i className="mdo-icon-menu-arrow mdo-no-desktop-inline mdo-padding-left-small mdo-font-small"></i></div></div>
                      </div>
                    </div>
                    <div>
                      <div className="mdo-card mdo-vertical">
                        <div className="mdo-section mdo-padding-left-medium mdo-padding-right-medium mdo-padding-top-small">
                          <div className="mdo-card">
                            <div className="mdo-allow-overflow">
                              <div className="mdo-filter-pill mdo-filter-pill-search"><input type="text" placeholder="Search hierarchy" value="" /></div>
                              <div className="mdo-filter-pill">Category<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div>
                              <div className="mdo-filter-pill">Location<i className="mdo-icon-menu-arrow mdo-margin-left-small mdo-font-x-small"></i></div>
                              <div className="mdo-filter-pill mdo-filter-pill-binary mdo-selected">Linear</div>
                              <div className="mdo-filter-pill mdo-filter-pill-binary">Flagged for deletion</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium mdo-padding-top-small">
                            <table className="mdo-table mdo-module mdo-hover mdo-striped">
                              <thead>
                                <tr>
                                  <th className="mdo-fixed mdo-no-padding-right"><span className="mdo-text"></span></th>
                                  <th><span className="mdo-text">Location</span></th>
                                  <th><span className="mdo-text">Description</span></th>
                                  <th><span className="mdo-text">Code</span></th>
                                  <th><span className="mdo-text">Category</span></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <ul className="mdo-button-group mdo-float-left mdo-hover-only">
                                      <li><span className="mdo-button"><i className="mdo-icon-more"></i></span></li>
                                    </ul>
                                  </td>
                                  <td className="mdo-no-padding-left">
                                    <div className="mdo-card mdo-contained mdo-clickable">
                                      <div className="mdo-atom"><span className="mdo-button"><i className="mdo-icon-chevron-down"></i></span></div>
                                      <div className="mdo-atom"><div className="mdo-text mdo-font-xx-small mdo-padding-right-medium mdo-text-success"><i className="fa-solid fa-circle"></i></div></div>
                                      <div><div className="mdo-text"><span className="mdo-margin-right-medium"><i className="mdo-icon-map-marker-alt"></i></span><a href="#">Rail branch 001</a></div></div>
                                    </div>
                                  </td>
                                  <td><div className="mdo-text">KM 100.550-120.450 RB</div></td>
                                  <td><div className="mdo-text">CP-86451</div></td>
                                  <td><div className="mdo-text">Locations and facilities</div></td>
                                </tr>
                                <tr>
                                  <td>
                                    <ul className="mdo-button-group mdo-float-left mdo-hover-only">
                                      <li><span className="mdo-button"><i className="mdo-icon-more"></i></span></li>
                                    </ul>
                                  </td>
                                  <td className="mdo-no-padding-left">
                                    <div className="mdo-card mdo-contained mdo-clickable mdo-padding-left-medium">
                                      <div className="mdo-atom"><span className="mdo-button"><i className="mdo-icon-chevron-right"></i></span></div>
                                      <div className="mdo-atom"><div className="mdo-text mdo-font-xx-small mdo-padding-right-medium mdo-text-success"><i className="fa-solid fa-circle"></i></div></div>
                                      <div><div className="mdo-text"><span className="mdo-margin-right-medium"><i className="mdo-icon-map-marker-alt"></i></span><a href="#">Track 001</a></div></div>
                                    </div>
                                  </td>
                                  <td><div className="mdo-text">KM 100.550-120.450 RT</div></td>
                                  <td><div className="mdo-text">CP-86452</div></td>
                                  <td><div className="mdo-text">Locations and facilities</div></td>
                                </tr>
                                <tr>
                                  <td>
                                    <ul className="mdo-button-group mdo-float-left mdo-hover-only">
                                      <li><span className="mdo-button"><i className="mdo-icon-more"></i></span></li>
                                    </ul>
                                  </td>
                                  <td className="mdo-no-padding-left">
                                    <div className="mdo-card mdo-contained mdo-clickable mdo-padding-left-medium">
                                      <div className="mdo-atom"><span className="mdo-button"><i className="mdo-icon-chevron-right"></i></span></div>
                                      <div className="mdo-atom"><div className="mdo-text mdo-font-xx-small mdo-padding-right-medium mdo-text-success"><i className="fa-solid fa-circle"></i></div></div>
                                      <div><div className="mdo-text"><span className="mdo-margin-right-medium"><i className="mdo-icon-map-marker-alt"></i></span><a href="#">Track 002</a></div></div>
                                    </div>
                                  </td>
                                  <td><div className="mdo-text">KM 100.550-120.450 RT</div></td>
                                  <td><div className="mdo-text">CP-86453</div></td>
                                  <td><div className="mdo-text">Locations and facilities</div></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 15: Spares */}
      {activeTab === 15 && (
        <div data-tabset="global-inbox" data-tab="15" className="mdo-tab-content mdo-fill-height mdo-relative">
          <div id="spare_empty_state" className="mdo-empty-state">
            <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '140px'}}>
              <g className="ng-star-inserted">
                <path d="M36.1049 137.627C33.14 136.912 -2.48445 130.495 0.137846 83.1526C2.7601 35.811 6.0518 21.5738 19.9019 16.3649C33.7523 11.1561 67.42 -13.4907 93.839 9.94458C120.258 33.3802 148.767 54.4 137.454 91.8201C126.141 129.24 124.288 141.723 94.7715 139.813C65.2555 137.902 50.204 141.015 36.1049 137.627Z" fill="#F9FBFD"></path>
              </g>
            </svg>
            <p className="mdo-font-x-large">Nothing to see here</p>
            <p className="mdo-text-secondary">Please search for a record to display</p>
          </div>
        </div>
      )}

      {/* Tab 16: All pages */}
      {activeTab === 16 && (
        <div data-tabset="global-inbox" data-tab="16" className="mdo-tab-content mdo-fill-height">
          <div className="mdo-card mdo-vertical mdo-header">
            <div className="mdo-section">
              <div className="mdo-card mdo-padding-all-medium">
                <div>
                  <div className="mdo-text mdo-font-x-large">All pages</div>
                </div>
                <div className="mdo-atom">
                  <span className="mdo-button mdo-minor mdo-fixed-button">
                    New page
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
                <table className="mdo-table mdo-module mdo-hover mdo-striped">
                  <thead>
                    <tr>
                      <th><span className="mdo-text"></span></th>
                      <th><span className="mdo-text">Page</span></th>
                      <th><span className="mdo-text mdo-text-center">Home page</span></th>
                      <th><span className="mdo-text">Created by</span></th>
                      <th><span className="mdo-text">Modified by</span></th>
                      <th><span className="mdo-text mdo-text-right">Modified on</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="mdo-fixed"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                      <td><a href="#">Equipment insights</a></td>
                      <td><span className="mdo-text mdo-text-center"><i className="fa-solid fa-star"></i></span></td>
                      <td><span className="mdo-text">Rick Woods</span></td>
                      <td><span className="mdo-text">Rick Woods</span></td>
                      <td className="mdo-text-right">12 May 2020 5:12PM</td>
                    </tr>
                    <tr>
                      <td className="mdo-fixed"><span className="mdo-button mdo-float-left"><i className="mdo-icon-more"></i></span></td>
                      <td><a href="#">Sales insights</a></td>
                      <td><span className="mdo-text mdo-text-center"><i className="fa-light fa-star"></i></span></td>
                      <td><span className="mdo-text">Prospecta</span></td>
                      <td><span className="mdo-text">-</span></td>
                      <td className="mdo-text-right">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mdo-section mdo-padding-top-small mdo-padding-bottom-small">
              <div className="mdo-card">
                <div className="mdo-atom mdo-padding-left-medium">
                  <ul className="mdo-button-group">
                    <li><span className="mdo-button"><i className="mdo-icon-chevron-left mdo-disabled"></i></span></li>
                    <li><span className="mdo-button"><i className="mdo-icon-chevron-right"></i></span></li>
                    <li><span className="mdo-text mdo-padding-left-medium mdo-padding-right-small mdo-text-secondary">1-2 / 2</span></li>
                  </ul>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Default/Fallback */}
      {![0, 1, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16].includes(activeTab) && (
        <div className="mdo-card mdo-vertical mdo-header">
          <div className="mdo-section mdo-padding-all-medium">
            <div className="mdo-card">
              <div>
                <div className="mdo-text mdo-font-x-large">Welcome to MDO</div>
              </div>
            </div>
          </div>
          <div className="mdo-content mdo-padding-left-medium mdo-padding-right-medium">
            <p>Please select an item from the navigation menu.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkspaceContent;
