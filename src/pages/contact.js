import React, { useState } from "react"
import styled from "styled-components";
import { post } from 'axios';

import {
  Layout,
  Container,
  Seo,
  Title,
  Button,
  Footer,
} from "../components/shared"

const ContactForm = styled.form`
  margin-top: ${({ theme }) => theme.space[5]};
  @media ${({ theme }) => theme.breakpoints.up.md} {
    margin-top: ${({ theme }) => theme.space[6]};
  }
`;

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[5]};
  }

  label {
    display: flex;
    align-items: center;
    font-weight: ${({ theme }) => theme.fontWeight[1]};

    svg {
      margin-right: ${({ theme }) => theme.space[1]};
    }
  }

  input,
  textarea {
    display: block;
    width: 100%;
    padding: ${({ theme }) => theme.space[2]};
    border: 1px solid ${({ theme }) => theme.palette.inputBorder};
    font-size: 1rem;
    outline: none;
    margin-top: ${({ theme }) => theme.space[2]};
    box-shadow: none;
    text-shadow: none;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
      border-color: ${({ theme }) => theme.palette.yellow};
    }
  }

  textarea {
    min-height: 165px;
  }
`;

const StatusMessage = styled.p`
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ type, theme }) => type === FORM_STATUS.ERROR ? theme.palette.error : theme.palette.success};
  font-weight: ${({ theme }) => theme.fontWeight[1]};
`;

const INITIAL_FORM_VALUES = {
  name: "",
  emailAddress: "",
  message: ""
}

const FORM_STATUS = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS"
}

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);

  const handleInputChange = (e, input) => {
    if (formStatus) {
      setFormStatus(null);
    }

    const currentFormValues = formValues;
    setFormValues({
      ...currentFormValues,
      [input]: e.target.value
    })
  }

  const clearFormValues = () => {
    setFormValues(INITIAL_FORM_VALUES)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      // const res = await post('/.netlify/functions/mailer', {
      const res = await post('/.netlify/functions/mailer', {
        name: formValues.name,
        email: formValues.emailAddress,
        message: formValues.message
      });

      if (res.status !== 200) {
        setFormStatus(FORM_STATUS.ERROR);
      } else {
        clearFormValues();
        setFormStatus(FORM_STATUS.SUCCESS);
      }

      setIsSubmitting(false);
    } catch(e) {
      setIsSubmitting(false);
      setFormStatus(FORM_STATUS.ERROR);
    }

  }


  return (
    <Layout>
      <Seo title="Contact" />
      <Container>
        <Title>Want to discuss a project?</Title>
        <p>Want to discuss a project you have in mind? I would love to hear from you! It all starts with a commitment free chat over a cup of tea...</p>

        <ContactForm method="POST" onSubmit={handleSubmit}>

          <FormField>
            <label htmlFor="name">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9053 11.8058C11.2677 12.4432 10.4031 12.8012 9.5015 12.8012C8.59994 12.8012 7.7353 12.4432 7.0977 11.8058H11.9053ZM6.9515 7.70195H6.96H6.9515ZM12.0515 7.70195H12.06H12.0515ZM17.1515 9.40195C17.1515 10.4066 16.9536 11.4013 16.5692 12.3295C16.1847 13.2576 15.6212 14.101 14.9109 14.8113C14.2005 15.5217 13.3572 16.0852 12.429 16.4696C11.5009 16.8541 10.5061 17.052 9.5015 17.052C8.49689 17.052 7.50211 16.8541 6.57397 16.4696C5.64583 16.0852 4.8025 15.5217 4.09213 14.8113C3.38177 14.101 2.81827 13.2576 2.43382 12.3295C2.04937 11.4013 1.8515 10.4066 1.8515 9.40195C1.8515 7.37305 2.65748 5.42724 4.09213 3.99259C5.52679 2.55793 7.4726 1.75195 9.5015 1.75195C11.5304 1.75195 13.4762 2.55793 14.9109 3.99259C16.3455 5.42724 17.1515 7.37305 17.1515 9.40195Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Let's start with your name
            </label>
            <input required type="text" id="name" name="name" onChange={(e) => handleInputChange(e, "name")} value={formValues.name} />
          </FormField>

          <FormField>
            <label htmlFor="email">
              <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                <path d="M1.54102 4.48098L8.08141 8.84125C8.35385 9.02302 8.67403 9.12002 9.00154 9.12002C9.32906 9.12002 9.64923 9.02302 9.92167 8.84125L16.4621 4.48098H1.54102ZM3.19891 13.5994H14.8042C15.2439 13.5994 15.6656 13.4247 15.9765 13.1138C16.2874 12.8029 16.4621 12.3812 16.4621 11.9415V3.65204C16.4621 3.21233 16.2874 2.79064 15.9765 2.47973C15.6656 2.16881 15.2439 1.99414 14.8042 1.99414H3.19891C2.75921 1.99414 2.33752 2.16881 2.0266 2.47973C1.71569 2.79064 1.54102 3.21233 1.54102 3.65204V11.9415C1.54102 12.3812 1.71569 12.8029 2.0266 13.1138C2.33752 13.4247 2.75921 13.5994 3.19891 13.5994Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect x="0.00152588" y="0.691406" width="18" height="14.2105" fill="white"/>
                </clipPath>
                </defs>
              </svg>
              Followed by your email address
            </label>
            <input required type="email" id="email" email="email" onChange={(e) => handleInputChange(e, "emailAddress")} value={formValues.emailAddress}/>
          </FormField>

          <FormField>
            <label htmlFor="message">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.51505 13.652H10.4871H6.51505ZM8.5015 1.75195V2.60195V1.75195ZM13.9109 3.99255L13.3099 4.5935L13.9109 3.99255ZM16.1515 9.40195H15.3015H16.1515ZM1.7015 9.40195H0.851501H1.7015ZM3.69305 4.5935L3.0921 3.99255L3.69305 4.5935ZM5.4959 12.4076C4.90164 11.8131 4.49698 11.0559 4.33308 10.2315C4.16919 9.40708 4.25341 8.5526 4.57512 7.77608C4.89683 6.99956 5.44156 6.33587 6.14044 5.86892C6.83933 5.40198 7.66098 5.15275 8.5015 5.15275C9.34202 5.15275 10.1637 5.40198 10.8626 5.86892C11.5614 6.33587 12.1062 6.99956 12.4279 7.77608C12.7496 8.5526 12.8338 9.40708 12.6699 10.2315C12.506 11.0559 12.1014 11.8131 11.5071 12.4076L11.0413 12.8725C10.775 13.1388 10.5638 13.455 10.4197 13.803C10.2756 14.151 10.2015 14.524 10.2015 14.9006V15.352C10.2015 15.8028 10.0224 16.2352 9.70358 16.554C9.38477 16.8728 8.95237 17.052 8.5015 17.052C8.05063 17.052 7.61823 16.8728 7.29942 16.554C6.98061 16.2352 6.8015 15.8028 6.8015 15.352V14.9006C6.8015 14.1399 6.4989 13.4097 5.9617 12.8725L5.4959 12.4076Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
              Great! How can I help?
            </label>
            <textarea required name="message" id="message" value={formValues.message} onChange={(e) => handleInputChange(e, "message")} />
          </FormField>
          {formStatus === FORM_STATUS.ERROR && (
            <StatusMessage type={FORM_STATUS.ERROR}>Whoops, something has gone wrong while sending your message.<br/>Please try again...</StatusMessage>
          )}
          {formStatus === FORM_STATUS.SUCCESS && (
            <StatusMessage type={FORM_STATUS.SUCCESS}>Yay! your message is on it's way to my inbox...<br/>Thank you for getting in touch, I will get back to you within a few days.</StatusMessage>
          )}
          <Button isNavButton={false} buttonText={isSubmitting ? "Sending..." : "Send message"} type="submit" />
        </ContactForm>
        <Footer />
      </Container>
    </Layout>
  )
}

export default ContactPage
