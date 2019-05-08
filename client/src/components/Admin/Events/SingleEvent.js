import React from "react";
import styled from "styled-components";
import { Button, Card, Image } from "semantic-ui-react";
import moment from "moment";

class SingleEvent extends React.Component {
  configureTime = info => {
    const dateSplit = info.split("T");
    const date = dateSplit[0];
    const time = dateSplit[1].split(".");
    const splitTime = time[0].split(":");
    const finalTime = splitTime[0] + ":" + splitTime[1];
    const finalDate = moment(date + " " + finalTime).format("dddd, MMMM Do YYYY, h:mma");
    return finalDate;
  };

  render() {
    const { single, index } = this.props;
    console.log("the one");
    console.log(single);
    return (
      <div>
        <Card as='a' href={single.link} target='_blank'>
          <Image src={single.image} />
          <Card.Content>
            <Card.Header>{single.title}</Card.Header>
            <Card.Meta>{single.sub_title}</Card.Meta>
            <Card.Description>Index #{single.index}</Card.Description>
          </Card.Content>
          <Card.Content>
            <Card.Header as='a' href={single.link} target='_blank'>
              {single.link_text}
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button onClick={() => this.props.editButton(single)} color='teal' basic>
                Edit
              </Button>
              <Button
                onClick={() => this.props.deleteButton(single)}
                color='orange'
                basic
              >
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default SingleEvent;
