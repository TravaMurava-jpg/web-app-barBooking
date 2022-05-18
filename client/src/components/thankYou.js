import React from "react";
import { Row, Col } from "reactstrap";

export default _ => {
  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Спасибо!</p>
          <i className="fas fa-bar thank-you-pizza"></i>
          <p className="thanks-subtext">
            Данные о вашем бронировании должны прийти вам на e-mail.
          </p>
        </Col>
      </Row>
    </div>
  );
};
