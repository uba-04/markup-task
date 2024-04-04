import React, { useState } from 'react';

function ModalBox() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>close</span>
            <h1>Modal box</h1>
            <p>This is just an example of a basic Modal box.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalBox;