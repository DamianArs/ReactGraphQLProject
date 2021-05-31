import * as React from 'react';
import { RoutingComponent } from './common';
import { HeaderLayoutComponent } from './components';
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';
import { ToastContainer, toast } from 'react-toastify';
import {Provider} from 'react-redux'
import { store } from './Store';



export const client= new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

function App() {
  

  return (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <HeaderLayoutComponent>
        <RoutingComponent/>
        <ToastContainer position="bottom-left" hideProgressBar={true}/>
      </HeaderLayoutComponent>
    </ApolloProvider>
  </Provider>
  );
}

export default App;
