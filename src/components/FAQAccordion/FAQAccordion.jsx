import React, { useState } from "react";
import "./FAQAccordion.css";

const FAQAccordion = () => {
  const faqs = [
    {
      question: "How do I open my cryptoinvestmentworldwide.com Account?",
      answer: (
        <>
          It's quite easy and convenient. Follow this{" "}
          <a
            href="/Signup"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#5d8aa8" }}
          >
            link
          </a>
          , fill in the registration form and then press "Register".
        </>
      ),
    },
    {
      question: "How can I Invest with cryptoinvestmentworldwide.com?",
      answer:
        "To make an investment, you must first become a member of cryptoinvestmentworldwide.com. Once you are signed up, you can make your first deposit. All deposits must be made through the Members Area. You can login using the member username and password you receive when signup.",
    },
    {
      question:
        "I wish to invest with cryptoinvestmentworldwide.com but I don’t have any e-currency account. What should I do?",
      answer: "You can open an account in Blockchain or Binance.",
    },
    {
      question: "Which e-currencies do you accept?",
      answer: "We accept Bitcoin, USDT and Ethereum for now!",
    },
    {
      question: "How can I withdraw funds?",
      answer:
        "Login to your account using your username and password and check the withdrawal section.",
    },
    {
      question:
        "After I make a withdrawal request, when will the funds be available on my e-currency account?",
      answer: "All payments are instant.",
    },
    {
      question:
        "How long does it take for my deposit to be added to my account?",
      answer: "Your account will be updated as fast as you deposit.",
    },
    {
      question:
        "What if I can't log into my account because I forgot my password?",
      answer:
        "Click forgot password, type your username or e-mail and you will receive your account information.",
    },
    {
      question: "Does my daily profit go directly to my currency account?",
      answer:
        "No, profits are gathered on your cryptoinvestmentworldwide.com account and you can withdraw them anytime.",
    },
    {
      question: "How do you calculate the interest on my account?",
      answer:
        "It depends on the plan where you deposit, you will get daily interest in your balance to withdraw.",
    },
    {
      question: "Can I make a direct deposit from my account balance?",
      answer:
        "Yes! To make a deposit from your cryptoinvestmentworldwide.com account balance. Simply login into your account and click on make deposit then select the deposit from account balance radio button.",
    },
    {
      question:
        "Can I make an additional deposit to cryptoworldwideinvestment.com account once it has been opened?",
      answer: "Yes, you can but all transactions are handled separately.",
    },
    {
      question: "How can I check my account balances?",
      answer:
        "You can access the account information 24 hours, seven days a week over the internet.",
    },
    {
      question: "May I open several accounts in your program?",
      answer:
        "No, if we find that one member has more than one account, the entire funds will be frozen.",
    },
    {
      question: "How does the referral program work?",
      answer:
        "Invite your friends and earn money for advertising. We offer a referral program with 3% commission.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqPage">
      <h2 style={{ textAlign: "center" }} className="faqHead">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            // marginBottom: "10px",
            border: "1px solid #5d8aa8",
            // borderRadius: "5px",
          }}
        >
          <div
            onClick={() => toggleAccordion(index)}
            style={{
              background: "#17181f",
              //   border: "1px solid #FFD700",
              padding: "20px",
              fontSize: "18px",
              cursor: "pointer",
              //   fontWeight: "light",
              //   borderBottom: openIndex === index ? "1px solid #FFD700" : "none",
            }}
          >
            {faq.question}
          </div>
          {openIndex === index && (
            <div
              style={{ padding: "20px", background: "#17181f", border: "none" }}
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
