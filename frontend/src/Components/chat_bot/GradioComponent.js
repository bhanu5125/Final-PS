// GradioComponent.js
import React from 'react';
import Modal from './Modal';
import './GradioComponent.css';

const GradioComponent = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div id="gradio-container">
        <iframe
          title="Gradio Chatbot"
          src="https://f8f949da7314647d66.gradio.live"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </Modal>
  );
};

export default GradioComponent;
