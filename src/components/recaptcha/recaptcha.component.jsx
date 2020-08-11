import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCAPTCHAForm = props => {
  const recaptchaRef = React.useRef();

  const onSubmitWithReCAPTCHA = async () => {
    const token = await recaptchaRef.current.executeAsync();

    // apply to form data

    console.log(token);
  };

  return (
    <form onSubmit={onSubmitWithReCAPTCHA}>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="Your client site key"
      />
    </form>
  );
};

export default ReCAPTCHAForm;
