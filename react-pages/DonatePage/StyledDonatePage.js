import styled from 'styled-components';

const inputRightPaddingPx = 8;
const errorColor = '#ff0033';

const StyledDonatePage = styled.div`
  --gray-background: rgb(222, 222, 222);
  position: relative;

  * {
    border-radius: 8px;
  }

  img {
    border-radius: 0px;
    height: auto;
  }

  .top-image {
    width: 100%;
    position: absolute;
  }

  .content-wrapper {
    position: absolute;
    width: 100%;
  }

  .content {
    margin: 32px 128px;
    display: flex;
    gap: 32px;
    justify-content: center;
  }

  .image-thanks-wrapper {
    background-color: var(--gray-background);
    width: 400px;
    font-size: 16px;

    .logo-and-text {
      padding: 16px 32px;
    }

    .logo {
      margin-left: -10px;
      width: 50px;
    }

    h2 {
      margin-top: 8px;
      font-size: 16px;
    }
  }

  .donation-options-box {
    align-self: flex-start;
    background-color: var(--accent-yellow);
    margin-top: 64px;
    width: 200px;
    padding: 16px;

    h2 {
      text-align: center;
      font-size: 16px;
    }
  }

  .inputs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'presetValueButton1 presetValueButton2 presetValueButton3'
      'presetValueButton4 presetValueButton5 presetValueButton6'
      'input input input'
      'donate-button donate-button donate-button';
    gap: 12px;
  }

  .preset-buttons {
    color: var(--black);
    background-color: var(--white);
  }

  .dollar-symbol-and-input {
    padding: 0;
    position: relative;
    grid-area: input;

    span {
      display: block;
      position: absolute;
      left: 8px;
      top: 6px;
    }

    input {
      border: none;
      padding-right: ${inputRightPaddingPx}px;
      width: 100%;
      height: 100%;
      text-align: right;
      width: calc(100% - (${inputRightPaddingPx}px + 1px));
    }
  }

  .error-space {
    color: ${errorColor};
    min-height: 20px;
    font-size: 12px;
    text-align: center;
    transform: translateY(-3px);
  }

  .space {
    grid-area: space;
  }

  input:invalid {
    outline: ${errorColor} solid 3px;
  }

  .donate-button-form {
    margin-top: 10px;
    grid-area: donate-button;
  }

  .donate-button {
    background-color: var(--blue);
    color: var(--white);
    width: 100%;
    height: 100%;
  }

  button:hover {
    filter: brightness(0.8);
  }

  @media screen and (max-width: 800px) {
    .content {
      flex-direction: column;
      margin: 16px;
      gap: 0;
    }

    .image-thanks-wrapper {
      width: 100%;
    }

    .donation-options-box {
      align-self: center;
    }
  }
`;

export default StyledDonatePage;
