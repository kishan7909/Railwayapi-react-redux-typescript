import React from "react";
import PropTypes from "prop-types";
import Dialogue from "reactstrap/lib/Modal";
import Header from "reactstrap/lib/ModalHeader";
import Body from "reactstrap/lib/ModalBody";
import Footer from "reactstrap/lib/ModalFooter";

const Modal = ({ isOpen, toggle, size, className, header, body, footer }) => {
  !size && (size = "md");
  return (
    <Dialogue {...{ isOpen, toggle, size, className }}>
      {header && (
        <Header
          {...{ toggle, children: header }}
          className="bg-info text-white"
        />
      )}
      {body && <Body {...{ children: body }} />}
      {footer && <Footer {...{ children: footer }} />}
    </Dialogue>
  );
};

const children = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  header: children,
  body: children,
  footer: children
};

export default Modal;
