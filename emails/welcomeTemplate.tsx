import React from 'react';
import { Html, Body, Container, Text, Link, Preview } from "@react-email/components";

const WelcomeTemplate = () => {
    return(
      <Html>
          <Preview>Welcome aboard!</Preview>
          <Body>
              <Container>
                  <Text>Hello Javad</Text>
              </Container>
          </Body>
      </Html>
    );
}

export default WelcomeTemplate