/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, WebView} from 'react-native';

const html = `
<html>
  <head>
    <title>Proofn Recaptcha</title>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </head>
  <body>
    <script>
      function captchaCallback(token) {
        window.postMessage(token);
      }
    </script>
    <form action="?" method="POST">
      <div
        class="g-recaptcha"
        <!-- input your site key here -->
        data-sitekey="XXXX"
        data-callback="captchaCallback"
      >
      </div>
    </form>
  </body>
</html>
`

type Props = {};
export default class App extends Component<Props> {
  webMessage(event) {
    // handle token from recaptcha here
    console.warn(event.nativeEvent.data);
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          originWhitelist={['*']}
          // input your baseUrl config from your google console
          source={{ html, baseUrl: 'http://localhost' }}
          style={{ width: 300 }}
          useWebKit
          onMessage={event => this.webMessage(event)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
