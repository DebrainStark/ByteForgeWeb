import React, { useState } from 'react';

const ProcessStageCard = ({ stage, isEven, index }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Side panel renderer
  const renderSidePanel = () => {
    if (stage.sidePanel.table) {
      return (
        <div className="stage-table">
          <h5 className="side-panel-title">{stage.sidePanel.title}</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {stage.sidePanel.table.headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stage.sidePanel.table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>
                        {typeof cell === 'boolean' ? (
                          cell ? <i className="bi bi-check-lg check-icon"></i> : ''
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    
    return (
      <>
        <h5 className="side-panel-title">{stage.sidePanel.title}</h5>
        <div className="side-panel-items">
          {stage.sidePanel.items.map((item, itemIndex) => (
            <div key={itemIndex} className="side-panel-item">
              <h6 className="item-title">{item.title}</h6>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div id={stage.id} className={`process-stage-card reveal-section ${isEven ? 'even' : 'odd'}`}>
      <div className="stage-connector-line">
        <div className="connector-dot"></div>
      </div>
      
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-lg-6 ${isEven ? 'order-lg-2' : ''}`}>
            <div className="stage-content1 slide-in-element">
              <div className="stage-header">
                <div className="stage-icon-container">
                  <div className="stage-icon1">
                    <i className={`bi bi-${stage.icon}`}></i>
                  </div>
                  <div className="icon-pulse"></div>
                </div>
                
                <div className="stage-title-container1">
                  <div className="stage-number1">{stage.number}</div>
                  <h2 className="stage-title">{stage.title}</h2>
                  <h4 className="stage-subtitle">{stage.subtitle}</h4>
                </div>
              </div>
              
              <div className="stage-description">
                <p>{stage.description}</p>
                
                <div className={`stage-tasks ${expanded ? 'expanded' : ''}`}>
                  <h5 className="tasks-title">This phase includes:</h5>
                  <ul className="tasks-list">
                    {stage.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="task-item">
                        <div className="task-bullet">
                          <div className="bullet-inner"></div>
                        </div>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {!expanded && stage.tasks.length > 3 && (
                  <button 
                    className="expand-tasks-btn"
                    onClick={() => setExpanded(true)}
                  >
                    <span>View All Tasks</span>
                    <i className="bi bi-chevron-down"></i>
                  </button>
                )}
                
                <p className="stage-conclusion">{stage.conclusion}</p>
              </div>
            </div>
          </div>
          
          <div className={`col-lg-6 ${isEven ? 'order-lg-1' : ''}`}>
            <div className="stage-side-panel fade-in-element delay-1">
              <div className="side-panel-inner">
                {renderSidePanel()}
                
                <div className="panel-accent"></div>
              </div>
              
              <div className="side-panel-decorations">
                <div className="panel-corner panel-corner-tl"></div>
                <div className="panel-corner panel-corner-tr"></div>
                <div className="panel-corner panel-corner-bl"></div>
                <div className="panel-corner panel-corner-br"></div>
                
                <div className="panel-rivet panel-rivet-tl"></div>
                <div className="panel-rivet panel-rivet-tr"></div>
                <div className="panel-rivet panel-rivet-bl"></div>
                <div className="panel-rivet panel-rivet-br"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="forge-ember-container stage-embers"></div>
    </div>
  );
};

export default ProcessStageCard;