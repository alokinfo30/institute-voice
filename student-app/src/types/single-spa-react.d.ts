declare module 'single-spa-react' {
  import { ComponentType } from 'react';
  
  interface SingleSpaReactOpts {
    React: any;
    ReactDOM: any;
    rootComponent: ComponentType<any> | (() => JSX.Element);
    errorBoundary?: (err: Error, info: { componentStack: string }, props: any) => JSX.Element;
  }

  export default function singleSpaReact(opts: SingleSpaReactOpts): {
    bootstrap: () => Promise<void>;
    mount: () => Promise<void>;
    unmount: () => Promise<void>;
  };
}