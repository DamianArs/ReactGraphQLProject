import * as React from 'react';
import { RoutingComponent } from './common';
import { HeaderLayoutComponent } from './components';
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';
import { ToastContainer, toast } from 'react-toastify';



export const client= new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

function App() {

  return (
  <ApolloProvider client={client}>
    <HeaderLayoutComponent>
      <RoutingComponent/>
      <ToastContainer position="bottom-left" hideProgressBar={true}/>
    </HeaderLayoutComponent>
  </ApolloProvider>
  );
}

export default App;
