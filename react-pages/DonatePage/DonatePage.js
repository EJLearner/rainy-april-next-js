import Image from 'next/image';
import React, {useState} from 'react';

import Button from '../../components/Button';
import ContentContainer from '../../components/ContentContainer';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TopLinks from '../../components/TopLinks';
import topImage from '../../images/donate-top.png';
import blueLogo from '../../images/rainy-logo-blue.png';
import supportPicture from '../../images/support-picture.png';
import {misc} from '../../utils/constants';

import StyledDonatePage from './StyledDonatePage';

const SELECT_AMOUNT_ID = 'select-amount';
const ERROR_ID = 'error-message';
const MINIMUM_DONATION = 1;

function DonatePage() {
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function validateOtherAmount(value, allowEmpty = true) {
    const validDollarAmount = /^(\d+)?(\.(\d{2})?)?$/;

    if (!value.match(validDollarAmount)) {
      setErrorMessage('Amount must be valid.');
      return false;
    } else if (value && Number(value) < MINIMUM_DONATION) {
      setErrorMessage(`Amount must be at least $${MINIMUM_DONATION}`);
      return false;
    }

    if (!allowEmpty && !value) {
      setErrorMessage('Amount must be provided.');
      return false;
    }

    setErrorMessage('');
    return true;
  }

  function renderAmountButtons() {
    const amounts = [100, 150, 250, 300, 400, 500];

    return amounts.map((amount) => {
      const amountString = String(amount);

      return (
        <Button
          className="preset-buttons"
          key={amountString}
          onClick={() => {
            validateOtherAmount(amountString);
            setAmount(String(amountString));
          }}
        >{`$${amountString}`}</Button>
      );
    });
  }

  function renderOtherAmount() {
    const hasError = Boolean(errorMessage);
    const labelledBy = [SELECT_AMOUNT_ID, hasError && ERROR_ID].filter((id) => id).join(' ');

    return (
      <div className="dollar-symbol-and-input">
        <span>$</span>
        <input
          aria-invalid={hasError}
          aria-labelledby={labelledBy}
          className={hasError ? 'error-input' : undefined}
          name="other-amount"
          onBlur={(event) => validateOtherAmount(event.target.value)}
          onChange={(event) => setAmount(event.target.value)}
          pattern="\d{1,}"
          placeholder="USD"
          size="8"
          type="text"
          value={amount}
        />
      </div>
    );
  }

  function renderDonateButton() {
    const hasError = Boolean(errorMessage);
    const title = errorMessage || undefined;

    return (
      <form
        action="https://www.paypal.com/donate"
        className="donate-button-form"
        method="post"
        onSubmit={(event) => {
          if (!validateOtherAmount(amount, false)) {
            event.preventDefault();
          }
        }}
      >
        <input name="business" type="hidden" value="asdayjones@gmail.com" />
        <input name="no_recurring" type="hidden" value="0" />
        <input name="item_name" type="hidden" value="Rainy April Day Productions" />
        <input name="amount" type="hidden" value={amount} />
        <input name="currency_code" type="hidden" value="USD" />
        <Button className="donate-button" disabled={hasError} name="submit" title={title} type="submit">
          Donate
        </Button>
      </form>
    );
  }

  return (
    <Layout>
      <SEO pageTitle="Donate" />
      <TopLinks />
      <ContentContainer>
        <StyledDonatePage>
          <Image alt={misc.PRESENTATIONAL_IMAGE} className="top-image" src={topImage} />
          <div className="content-wrapper">
            <div className="content">
              <div className="image-thanks-wrapper">
                {/* TODO - low priority - figure out why I get Image component warning here */}
                <Image alt="film crew" className="support-image" src={supportPicture} width={400} />
                <div className="logo-and-text">
                  <Image alt="company logo" className="logo" src={blueLogo} width={50} />
                  <h2>Your Support Means The World</h2>
                  <p>
                    Thank you so very much for your donation—and even more special—thank you for your support of this
                    project. Your donation helps us to create quality, impactful films that emphasize underrepresented
                    perspectives and experiences.
                  </p>
                </div>
              </div>
              <div className="donation-options-box">
                <h2>Make a Secure Donation</h2>
                <div className="error-space">
                  {errorMessage && (
                    <div id={ERROR_ID} role="alert">
                      {errorMessage}
                    </div>
                  )}
                </div>
                <div className="inputs-grid">
                  {renderAmountButtons()}
                  {renderOtherAmount()}
                  {renderDonateButton()}
                </div>
              </div>
            </div>
          </div>
        </StyledDonatePage>
      </ContentContainer>
    </Layout>
  );
}

export default DonatePage;