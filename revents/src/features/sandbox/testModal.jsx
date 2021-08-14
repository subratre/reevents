import React from "react";
import ModalWrapper from "../../App/Common/modal/ModalWrapper";

const testModal = ({ data }) => {
  return (
    <ModalWrapper size="mini" header="Test Modal">
      <div>The data is: {data}</div>
    </ModalWrapper>
  );
};

export default testModal;
