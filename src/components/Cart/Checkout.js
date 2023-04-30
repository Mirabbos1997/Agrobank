import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
// const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    firstName: true,
    lastName: true,
    middleName: true,
    currency: true,
    amount: true,
    cardNumber: true,
    paymentSystem: true,
    expiryDate: true,
    bankAccountNo: true
  });

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const middleNameInputRef = useRef();
  const currencyRef = useRef();
  const amountRef = useRef();
  const cardNumberRef = useRef();
  const paymentSystemRef = useRef();
  const expiryDateRef = useRef();
  const bankAccountNoRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredMiddleName = middleNameInputRef.current.value;
    const enteredCurrency = currencyRef.current.value;
    const enteredAmount = amountRef.current.value;
    const enteredCardNumber = cardNumberRef.current.value;
    const enteredPaymentSystem = paymentSystemRef.current.value;
    const enteredExpiryDate = expiryDateRef.current.value;
    const enteredBankAccountNo = bankAccountNoRef.current.value;
    var paymentServiceProvider = "";


    const dataRow = [
      paymentServiceProvider = "",

      {
        currency: enteredCurrency,
        amount: enteredAmount,
        categoryId: Math.random(),
      },


      {
        firstName: enteredFirstName,
        lastName: enteredLastName,
        middleName: enteredMiddleName,
        clientId: Math.random()
      },


      {
        cardNumber: enteredCardNumber,
        paymentSystem: enteredPaymentSystem,
        expiryDate: enteredExpiryDate,
        bankAccountNo: enteredBankAccountNo
      },


      {
        supplierId: "",
        regionId: "",
        paymentNo: ""
      },


      {
        type: ""
      }

    ]

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName);
    const enteredMiddleNameIsValid = !isEmpty(enteredMiddleName);
    const enteredCurrencyIsValid = !isEmpty(enteredCurrency);
    const enteredAmountIsValid = !isEmpty(enteredAmount);
    const enteredCardNumberIsValid = !isEmpty(enteredCardNumber);
    const enteredPaymentSystemIsValid = !isEmpty(enteredPaymentSystem);
    const enteredExpiryDateIsValid = !isEmpty(enteredExpiryDate);
    const enteredBankAccountNoIsValid = !isEmpty(enteredBankAccountNo);

    setFormInputsValidity({
      firstName: enteredFirstNameIsValid,
      lastName: enteredLastNameIsValid,
      middleName: enteredMiddleNameIsValid,
      currency: enteredCurrencyIsValid,
      amount: enteredAmountIsValid,
      cardNumber: enteredCardNumberIsValid,
      paymentSystem: enteredPaymentSystemIsValid,
      expiryDate: enteredExpiryDateIsValid,
      bankAccountNo: enteredBankAccountNoIsValid,
    });

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredMiddleNameIsValid &&
      enteredCurrencyIsValid &&
      enteredAmountIsValid &&
      enteredCardNumberIsValid &&
      enteredPaymentSystemIsValid &&
      enteredExpiryDateIsValid &&
      enteredBankAccountNoIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      dataRow
    });
  };

  const firstNameControlClasses = `${classes.control} ${formInputsValidity.firstName ? '' : classes.invalid
    }`;
  const lastNameControlClasses = `${classes.control} ${formInputsValidity.lastName ? '' : classes.invalid
    }`;
  const middleNameControlClasses = `${classes.control} ${formInputsValidity.middleName ? '' : classes.invalid
    }`;
  const currencyControlClasses = `${classes.control} ${formInputsValidity.currency ? '' : classes.invalid
    }`;
  const amountControlClasses = `${classes.control} ${formInputsValidity.amount ? '' : classes.invalid
    }`;
  const cardNumberControlClasses = `${classes.control} ${formInputsValidity.cardNumber ? '' : classes.invalid
    }`;
  const paymentSystemControlClasses = `${classes.control} ${formInputsValidity.paymentSystem ? '' : classes.invalid
    }`;
  const expiryDateControlClasses = `${classes.control} ${formInputsValidity.expiryDate ? '' : classes.invalid
    }`;
  const bankAccountNoControlClasses = `${classes.control} ${formInputsValidity.bankAccountNo ? '' : classes.invalid
    }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={firstNameControlClasses}>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='firstName' ref={firstNameInputRef} />
        {!formInputsValidity.firstName && <p>Please enter a valid firstName!</p>}
      </div>
      <div className={lastNameControlClasses}>
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' id='lastName' ref={lastNameInputRef} />
        {!formInputsValidity.lastName && <p>Please enter a valid lastName!</p>}
      </div>
      <div className={middleNameControlClasses}>
        <label htmlFor='middleName'>Middle Name</label>
        <input type='text' id='middleName' ref={middleNameInputRef} />
        {!formInputsValidity.middleName && <p>Please enter a valid middleName!</p>}
      </div>

      <div className={cardNumberControlClasses}>
        <label htmlFor='cardNumber'>Card Number</label>
        <input type='text' id='cardNumber' ref={cardNumberRef} />
        {!formInputsValidity.cardNumber && <p>Please enter a valid cardNumber!</p>}
      </div>
      <div className={paymentSystemControlClasses}>
        <label htmlFor='paymentSystem'>Payment System</label>
        <input type='text' id='paymentSystem' ref={paymentSystemRef} />
        {!formInputsValidity.paymentSystem && <p>Please enter a valid paymentSystem!</p>}
      </div>
      <div className={expiryDateControlClasses}>
        <label htmlFor='expiryDate'>Expiry Date</label>
        <input type='text' id='expiryDate' ref={expiryDateRef} />
        {!formInputsValidity.expiryDate && <p>Please enter a valid data!</p>}
      </div>
      <div className={bankAccountNoControlClasses}>
        <label htmlFor='bankAccountNo'>Bank AccountNo</label>
        <input type='text' id='bankAccountNo' ref={bankAccountNoRef} />
        {!formInputsValidity.bankAccountNo && <p>Please enter a valid bankAccountNo!</p>}
      </div>
      <div className={currencyControlClasses}>
        <label htmlFor='currency'>Currency</label>
        <input type='text' id='currency' ref={currencyRef} />
        {!formInputsValidity.currency && <p>Please enter a valid currency!</p>}
      </div>
      <div className={amountControlClasses}>
        <label htmlFor='amount'>Amount</label>
        <input type='text' id='amount' ref={amountRef} />
        {!formInputsValidity.amount && <p>Please enter a valid amount!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form >
  );
};

export default Checkout;