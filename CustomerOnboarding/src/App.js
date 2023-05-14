import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import Summary from './components/Summary';
import Login from './components/Login';

const { Header, Content } = Layout;

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customers, setCustomers] = useState([]);

  const login = () => {
    setIsLoggedIn(true);
  };

  const addCustomer = (customer) => {
    setCustomers([...customers, { ...customer, onboardingStatus: 'inProgress', id: customers.length +1 }]);
  };

  const updateOnboardingStatus = (index, status) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index].onboardingStatus = status;
    setCustomers(updatedCustomers);
  };

  return (
    <Layout>
      <Header>
        <h1 style={{ color: '#fff', textAlign: 'center' }}>Customer Onboarding Application</h1>
      </Header>
      <Content style={{ padding: '50px' }}>
        {isLoggedIn ? (
          <>
            <Row justify="center" gutter={[16, 16]}>
              <Col span={12}>
                <CustomerForm addCustomer={addCustomer} />
              </Col>
            </Row>
            <Row justify="center" gutter={[16, 16]}>
              <Col span={12}>
                <h2>Customer List</h2>
                <CustomerList customers={customers} updateOnboardingStatus={updateOnboardingStatus} />
              </Col>
            </Row>
            <Row justify="center" gutter={[16, 16]}>
              <Col span={12}>
                <Summary customers={customers} />
              </Col>
            </Row>
          </>
        ) : (
          <Row justify="center">
            <Col span={8}>
              <Login login={login} />
            </Col>
          </Row>
        )}
      </Content>
    </Layout>
  );
};

export default App;
