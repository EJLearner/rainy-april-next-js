import styled from 'styled-components';

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
      display: flex;
      flex-direction: column;
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

  a {
    background-color: var(--accent-yellow);
    color: var(--black);
    margin-top: 1em;
    padding: 4px 8px;
    text-align: center;
    display: inline-block;
    align-self: center;
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
  }
`;

export default StyledDonatePage;
