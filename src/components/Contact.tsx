import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const SUBMISSION_LIMIT = 2;
const STORAGE_KEY = 'contactFormSubmissions';
const getToday = () => new Date().toISOString().slice(0, 10);

type SubmissionData = {
  date: string;  // YYYY-MM-DD
  count: number;
};

// Load submission data from localStorage
function loadSubmissions() : SubmissionData {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return { date: getToday(), count: 0 };
  try {
    return JSON.parse(data);
  } catch {
    return { date: getToday(), count: 0 };
  }
}

// Save submission data to localStorage
function saveSubmissions(data : SubmissionData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */
    const submissions = loadSubmissions();
    // Reset count if date changed
    if (submissions.date !== getToday()) {
      submissions.date = getToday();
      submissions.count = 0;
      saveSubmissions(submissions);
    }

    if(submissions.count >= SUBMISSION_LIMIT) {
      alert("La limite quotidienne de messages a été atteinte.\nVous pouvez toujours me contacter à l'adresse earnandrianina@gmail.com.");
      return;
    }

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send(process.env.REACT_APP_SERVICE_ID ?? '', process.env.REACT_APP_TEMPLATE_ID ?? '', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
          submissions.count++;
          saveSubmissions(submissions);
          alert('Message envoyé!');
        },
        (error) => {
          console.error('Email error:', error.text);
          alert("Il semble que le service soit en panne. Veuillez m'envoyer directement un e-mail à l'adresse earnandrianina@gmail.com");
        },
      );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>Ouvert à vos idées, collaborations et projets – n'hésitez pas à me contacter !</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Nom"
                placeholder="Quel est votre nom?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Veuillez entrer votre nom" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="Comment vous joindre?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Veuillez entrer votre email" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Envoyez-moi toutes vos demandes ou questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Veuillez entrer le message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Envoyer
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;