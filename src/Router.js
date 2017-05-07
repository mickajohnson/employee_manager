import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
      <Scene key="login" title="Please Login" component={LoginForm} />
    </Scene>

    <Scene key="main">
      <Scene
        rightTitle="Add"
        onRight={() => Actions.employeeCreate()}
        key="employeeList"
        title="Employees"
        component={EmployeeList}
        initial
      />
      <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
      <Scene key="employeeEdit" title="Edit Employee" component={EmployeeEdit} />
    </Scene>
    </Router>
  );
};

export default RouterComponent;
