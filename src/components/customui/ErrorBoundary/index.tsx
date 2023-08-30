import React, { ErrorInfo } from "react";

interface Props {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // console.log(error)
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log({ error, info });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }
    // If hasError is false then render the children instead
    return this.props.children;
  }
}
