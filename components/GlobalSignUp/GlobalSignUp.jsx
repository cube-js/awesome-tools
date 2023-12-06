import * as React from 'react';
import classnames from 'classnames/bind';
import classes from './GlobalSignUp.module.css';

const cn = classnames.bind(classes);


export const GlobalSignUp = ({ className, children }) => {
  return (
    <div
      style={
          {
            '--section_padding_top': `48px`,
            '--section_padding_bottom': `48px`,
          }
        }
        className={cn(
          'Section',
          `Section--appearance-dark`,
          `Section--gap-xl`,
          cn('GlobalSignUp', className)
        )}
    >
      <div
        className={cn(
          'SectionContent',
          `SectionContent--align-none`,
          `SectionContent--size-m`,
          `Section--gap-none`,
          classes.GlobalSignUp__content
        )}
      >
        <h2 className={classes.GlobalSignUp__title}>Deliver better data, faster—with Cube.</h2>
        <div className={classes.GlobalSignUp__buttons}>{children}</div>
      </div>
    </div>
  );
};
