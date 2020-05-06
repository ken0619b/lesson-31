import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  // A class component becomes an error boundary if it defines either (or both) of the lifecycle methods
  // static getDerivedStateFromError() or componentDidCatch().
  // Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown.
  // Use componentDidCatch() to log error information.

  static getDerivedStateFromError(error) {
    // process the error

    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
          <ErrorImageText>
            This Page is Lost in Space You thought this mission to the moon
            would be a quick six month thing. Your neighbor offered to look
            after your dog. Your high school math teacher was impressed. He once
            said you wouldn’t amount to anything.You sure showed him. But now
            here you are, fifty feet from your spaceship with no way to get
            back. Your dog will be so sad. Your math teacher will be so smug.
            Pretty devastating.
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
