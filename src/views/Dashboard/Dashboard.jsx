import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Store from "@material-ui/icons/Store";
import { Update, BarChart, PieChart, BubbleChart, ShowChart } from "@material-ui/icons";
import AccessTime from "@material-ui/icons/AccessTime";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

import {
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0,
    movType: 'nao-importadas' // a movimentaçao clicada irá mostrar as informacoes
  };

  changeMovType(type) {
    this.setState({ movType: type });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3} onClick={() => this.changeMovType('nao-importadas')}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <BarChart />
                  </CardIcon>
                  <p className={classes.cardCategory}>Movimentações	não Importadas</p>
                  <h3 className={classes.cardTitle}>9</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <Update />
                    Atualizado em: 05/03/2019 11:21
                  </div>
                </CardFooter>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={6} md={3} onClick={() => this.changeMovType('nao-pagas')}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <PieChart />
                </CardIcon>
                <p className={classes.cardCategory}>Movimentações não Efetivadas</p>
                <h3 className={classes.cardTitle}>13</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Atualizado em: 05/03/2019 11:21
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3} onClick={() => this.changeMovType('nao-efetivadas')}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <ShowChart />
                </CardIcon>
                <p className={classes.cardCategory}>Movimentações não Pagas</p>
                <h3 className={classes.cardTitle}>4</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Atualizado em: 05/03/2019 11:21
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <BubbleChart />
                </CardIcon>
                <p className={classes.cardCategory}>Movimentações com erro</p>
                <h3 className={classes.cardTitle}>10</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Atualizado em: 05/03/2019 11:21
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          {this.state.movType === 'nao-importadas' &&
            <GridItem xs={12} sm={12} md={12}>
              <Card chart>
                <CardHeader color="info">
                  <ChartistGraph
                    className="ct-chart"
                    data={completedTasksChart.data}
                    type="Line"
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Movimentações não importadas</h4>
                  <p className={classes.cardCategory}>
                    Last Campaign Performance
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> campaign sent 2 days ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          }
          {this.state.movType === 'nao-pagas' &&
            <GridItem xs={12} sm={12} md={12}>
              <Card chart>
                <CardHeader color="warning">
                  <ChartistGraph
                    className="ct-chart"
                    data={completedTasksChart.data}
                    type="Line"
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Movimentações não pagas</h4>
                  <p className={classes.cardCategory}>
                    Last Campaign Performance
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> campaign sent 2 days ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          }
          {this.state.movType === 'nao-efetivadas' &&
            <GridItem xs={12} sm={12} md={12}>
              <Card chart>
                <CardHeader color="info">
                  <ChartistGraph
                    className="ct-chart"
                    data={completedTasksChart.data}
                    type="Line"
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Movimentações não importadas</h4>
                  <p className={classes.cardCategory}>
                    Last Campaign Performance
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> campaign sent 2 days ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          }
          {this.state.movType === 'com-erro' &&
            <GridItem xs={12} sm={12} md={12}>
              <Card chart>
                <CardHeader color="error">
                  <ChartistGraph
                    className="ct-chart"
                    data={completedTasksChart.data}
                    type="Line"
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Movimentações não importadas</h4>
                  <p className={classes.cardCategory}>
                    Last Campaign Performance
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> campaign sent 2 days ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          }
        </GridContainer>
          <GridContainer> 
          {this.state.movType === 'nao-importadas' &&           
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <CardHeader color="info">
                    <h4 className={classes.cardTitleWhite}>Movimentações não importadas</h4>
                    <p className={classes.cardCategoryWhite}>
                      Todas as movimentações da última consulta.
                    </p>
                  </CardHeader>
                  <CardBody>
                    <Table
                      tableHeaderColor="info"
                      tableHead={["ID_FUND_ORDER", "Name", "Salary", "Country"]}
                      tableData={[
                        ["1", "Dakota Rice", "$36,738", "Niger"],
                        ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                        ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                        ["4", "Philip Chaney", "$38,735", "Korea, South"]
                      ]}
                    />
                  </CardBody>
                </Card>
              </GridItem>
            }
            {this.state.movType === 'nao-pagas' &&           
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <CardHeader color="warning">
                    <h4 className={classes.cardTitleWhite}>Movimentações não importadas</h4>
                    <p className={classes.cardCategoryWhite}>
                      Todas as movimentações da última consulta.
                    </p>
                  </CardHeader>
                  <CardBody>
                    <Table
                      tableHeaderColor="warning"
                      tableHead={["ID_FUND_ORDER", "Name", "Salary", "Country"]}
                      tableData={[
                        ["1", "Dakota Rice", "$36,738", "Niger"],
                        ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                        ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                        ["4", "Philip Chaney", "$38,735", "Korea, South"]
                      ]}
                    />
                  </CardBody>
                </Card>
              </GridItem>
            }
          </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
