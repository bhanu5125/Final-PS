// GradioComponent.js
import React from 'react';
import Modal from './Modal';
import './GradioComponent.css';

const GradioComponent = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div id="gradio-container">
        <iframe
          className='ifr'
          title="Gradio Chatbot"
          src="https://8d5487171f2a5d97ee.gradio.live/"
        ></iframe>
      </div>
    </Modal>
  );
};

export default GradioComponent;
