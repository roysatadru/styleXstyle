import React from 'react';

import Typography from '../../Typography';
import BtnLink from '../../UI/BtnLink';

import classes from './FooterList.module.scss';

const footerList = props => {
  const listHeader = props.heading + '';

  const generateLinkList = (header, list) => {
    return (
      <div className={classes.FooterList}>
        <Typography variant="h5">{header.toUpperCase()}</Typography>
        <ul className={classes.FooterLinkList}>
          {list.map((item, index) => (
            <li key={index}>
              <BtnLink>{item}</BtnLink>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  let output = null;

  if (listHeader.startsWith('subMap')) {
    const listOutput = [];

    for (const item in props.listOrMap) {
      listOutput.push(<React.Fragment key={item}>{generateLinkList(item, props.listOrMap[item])}</React.Fragment>);
    }

    output = <div className={classes.MultipleFooterList}>{listOutput}</div>;
  } else {
    output = generateLinkList(listHeader, props.listOrMap);
  }

  return output;
};

export default footerList;
