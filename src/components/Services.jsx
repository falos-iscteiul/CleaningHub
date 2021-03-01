import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import firebase from 'firebase';
import '../App.css'; 

class Services extends React.Component 
{
  constructor(props) 
  {
    super(props)

    this.state = { 
        showModal: false,
        rowInformation : []
    }
  }

  /*
  contractClick() 
  {
    this.setState({showModal: true})
    // <ModalContractService></ModalContractService>
  }
*/

  componentDidMount() 
  {
    const config = 
    {
        apiKey: "AIzaSyB2t8aMWPcQFGCKCy-TzAW_WsA-vm37VrQ",
        authDomain: "cleaninghub-23a2c.firebaseapp.com",
        databaseURL: "https://cleaninghub-23a2c-default-rtdb.firebaseio.com",
        projectId: "cleaninghub-23a2c",
        storageBucket: "cleaninghub-23a2c.appspot.com",
        messagingSenderId: "967816808845",
        appId: "1:967816808845:web:2fba9803b8bbafff38d5c4",
        measurementId: "G-MMCZ5W595Q"
    };
    
    firebase.initializeApp(config);
    
    const db = firebase.firestore();

    const array = [];

    db.collection("Colaboradores")
    .get()
    .then((querySnapshot) => {

        querySnapshot.forEach((doc) => 
        {
            // alert(doc.id, " => ", doc.data());
            // alert(doc.data().PrimeiroNome);
            array.push(doc.data());
        });

        // console.log(this.state.row[0].PrimeiroNome);
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

    this.setState({rowInformation: array})
  }

  render () 
  { 
    const useRowStyles = makeStyles({
      root: {
        '& > *': {
          borderBottom: 'unset',
        },
      },
    });

    {/*
      function createData(name, averageRating, distance, priceWithoutProducts, priceWithProducts) 
      {
        return {
          name,
          averageRating,
          distance,
          priceWithoutProducts,
          priceWithProducts,
          history: [
            { date: '2020-01-05', 
              service: 'Limpeza de 2 quartos',
              rating: 3.4, 
              value: 25
            },
            { 
              date: '2020-01-02', 
              service: 'Limpeza de jardim', 
              rating: 3.2, 
              value: 30
            },
          ],
        };
      }
    */}
    function Row(props) 
    {
      const { row } = props;
      const [open, setOpen] = React.useState(false);
      const classes = useRowStyles();

      return (
        <React.Fragment>
          <TableRow className={classes.root}>
            <TableCell>
              <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.averageRating}</TableCell>
            <TableCell>{row.distance}</TableCell>
            <TableCell>{row.priceWithoutProducts}</TableCell>
            <TableCell>{row.priceWithProduct}</TableCell>
            <TableCell><button onClick={() => this.state.showModal=true}>Contratar</button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box margin={1}>
                  <Typography variant="h6" gutterBottom component="div">
                    Histórico
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow >
                        <TableCell>Date</TableCell>
                        <TableCell>Serviço</TableCell>
                        <TableCell>Rating</TableCell>
                        <TableCell>Valor</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/*
                        <TableRow key={historyRow.date}>
                          <TableCell>{historyRow.date}</TableCell>
                          <TableCell>{historyRow.service}</TableCell>
                          <TableCell>{historyRow.rating}</TableCell>
                          <TableCell>{historyRow.value}</TableCell>
                        </TableRow>   
                      */}          
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      );
    }
    
    Row.propTypes = {
      row: PropTypes.shape({
        name: PropTypes.string.isRequired,
        averageRating: PropTypes.string.isRequired,
        distance: PropTypes.string.isRequired,
        history: PropTypes.arrayOf(
          PropTypes.shape({
            amount: PropTypes.number.isRequired,
            customerId: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
          }),
        ).isRequired,
        priceWithoutProducts: PropTypes.string.isRequired,
        priceWithProduct: PropTypes.number.isRequired,
      }).isRequired,
    };
    
    /*
    const rows = [
      createData('Teste', 4.6, 28, 8, 11),
      createData('Albano Manuel', 4.5, 12.7, 9, "-"),
      createData('Oksana Klymenko', 4.3, 3.2, 8, 10),
      createData('Zulmira Felisberta', 3.9, 18.4, 10, 12)
    ];
    */

  const showHideClassName = this.state.showModal ? "modal display-block" : "modal display-none";

  return (
    <div style={{paddingTop:100}}>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nome</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Distância</TableCell>
            <TableCell>Preço S/ Produtos</TableCell>
            <TableCell>Preço C/ Produtos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.rowInformation.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <div className={showHideClassName}>
      <section className="modal-main">          
        <p>Olá Modal!</p>
        <button type="button">
          Close
        </button>
      </section>
    </div>
    </div>
  );

}
}

export default Services