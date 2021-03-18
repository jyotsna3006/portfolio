const emailjs = require ('emailjs-com')

const SubmitForm = (e) => {
    e.preventDefault();

    emailjs.SendForm('jyotsna_kumari' , 'template_lgo437i' , 'contact-form' , 'user_8ltiM5Gup5OdHIr7kfx6F')
    .then(result => alert('Your message has been sent. I will reach you Shortly.Thankyou'))
    .catch(err => 'Oops!! please try again!'))
}
document.querySelector('.SubmitButton').addEventListener('Click', SubmitForm)