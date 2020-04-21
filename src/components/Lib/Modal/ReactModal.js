import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ReactModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <button onClick={modalHandler}>Open modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "brown",
          },
        }}
      >
        <h2>Modal title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non
          nesciunt maxime molestias praesentium. Iusto fuga corporis sequi, quod
          sint earum repellat ullam, dolore illo asperiores nulla. Possimus,
          maiores cum?
        </p>
        <div>
          <button onClick={modalHandler}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
}

export default ReactModal;
