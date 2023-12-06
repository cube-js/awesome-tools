import * as React from 'react';
import classnames from 'classnames/bind';
import classes from './CTAButtons.module.css';
import ButtonLanding from '../ButtonLanding/ButtonLanding';
import { trackClick } from '../../utils/tracking';

const cn = classnames.bind(classes);

export const CTAButtons = ({
  reverseButtonsOrder = false,
  signupCTAId,
  bookDemoCTAId,
}) => {
  const reverse = reverseButtonsOrder;

  const bookProps = {
    href: 'https://cube.dev/contact',
    onClick: bookDemoCTAId ? trackClick(bookDemoCTAId) : undefined,
    children: 'Request a demo',
  };

  const signupProps = {
    href: 'https://cubecloud.dev/auth/signup',
    onClick: signupCTAId ? trackClick(signupCTAId) : undefined,
    children: 'Try Free',
  };
  return (
    <>
      <ButtonLanding
        size="l"
        color="cherry"
        variant="default"
        className={classes.CTAButtons__button}
        {...(reverse ? bookProps : signupProps)}
      />

      <ButtonLanding
        size="l"
        color="cherry"
        variant="outline"
        appearance="dark"
        className={classes.CTAButtons__button}
        {...(reverse ? signupProps : bookProps)}
      />
    </>
  );
};
