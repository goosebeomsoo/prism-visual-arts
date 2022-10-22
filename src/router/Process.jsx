import { React } from 'react';
import wording from '../db/wording.json';

function Process() {
  const processList = wording.process.map((list, index) => (
    <div className="process-block" key={list.title}>
      <div className="block-copy-content">
        <h3 className="copy-sub-heading">
          {index + 1}
        </h3>
        <h2 className="copy-heading">
          {list.title}
        </h2>
        <p className="copy-body">
          {list.desc}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="page-process">
      <div className="page-container container">
        <div className="content">
          {processList}
        </div>
      </div>
    </div>
  );
}

export default Process;
