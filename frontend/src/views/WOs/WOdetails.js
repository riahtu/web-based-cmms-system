import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
} from "reactstrap";

class WOdetails extends Component {
  state = { wo: {}, id: this.props.match.params.id };

  componentDidMount() {
    fetch("/api/wos/" + this.state.id, {
      method: "get",
    })
      .then((res) => res.json())
      .then((wo) => {
        this.setState({ wo });
      });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>
              <i className="icon-info pr-1"></i>wo Title: {this.state.wo.title}{" "}
            </strong>
          </CardHeader>
          <CardBody>
            <Table responsive striped hover>
              <tr>
                <td>
                  <strong>Instructions: </strong>
                </td>
                <td>{this.state.wo.instructions}</td>
              </tr>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default WOdetails;
