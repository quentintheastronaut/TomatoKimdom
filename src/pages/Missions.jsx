import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Mission from '../components/Mission/Mission'
import { setStateTodo } from '../redux/action';
import '../styles/Missions.css'
import flag from '../assets/img/flag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import MyButton from '../components/Button/Button.jsx'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {addTodo, deleteTodo} from '../redux/action'
 
const font =  "'Baloo Tammudu 2'";

const theme = createMuiTheme({
  typography: {
    fontFamily: font
  },});





  const useStyles = makeStyles({
    root: {
        fontFamily: font
    },
    MuiTypography: {
        root: {
            fontFamily: font
        },
    }
  });
  

function Missions() {

    const classes = useStyles();
    const todos = useSelector((state) => state.todos)
    const [open, setOpen] = React.useState(false);
    const [task, setTask] = React.useState("");

    const dispatch = useDispatch();

    function handleCheck(id,newValue){
        dispatch(setStateTodo(id,newValue))
        console.log(id,newValue)
        console.log(todos)
    }

    function handleEdit(id,newValue){

    }

    function handleDelete(id,newValue){
        dispatch(deleteTodo(id))
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (newTask) => {
        dispatch(addTodo(newTask))
        setOpen(false);
    };

    const handleChange = (e) => {
        setTask(e.target.value)
    };

    return (
        <div className="Body">
            <div className="title">
                <img src={flag} alt="" style={{width: "25px" ,height: "25px",padding: "0 10px"}}/>
                Mission
            </div>
            <div className="Missions-nav">
                <MyButton title={<FontAwesomeIcon icon={faPlus}/>} onClick={handleClickOpen}></MyButton>
            </div>
            <div className="Missions-wrapper">
                {
                    todos.map((todo) => <Mission mission={todo} onEdit={handleEdit} onDelete={handleDelete} onChange={handleCheck}/>)
                }
            </div>

            <ThemeProvider theme={theme}>
            <Dialog open={open} onClose={handleClose}  classes={{root: classes.root}}>
                <div>
                    <DialogTitle classes={{root: classes.root}}>Add new task</DialogTitle>
                    <DialogContent classes={{root: classes.root}}>
                    <TextField classes={{root: classes.root}}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="New task"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                    />
                    </DialogContent>
                    <DialogActions classes={{root: classes.root}}>
                    <Button onClick={handleClose} color="primary" classes={{root: classes.root}}>
                        Cancel
                    </Button>
                    <Button onClick={() => handleSubmit(task)} color="primary" classes={{root: classes.root}}>
                        Add
                    </Button>
                    </DialogActions>
                </div> 
            </Dialog>
            </ThemeProvider>

        </div>
    )
}

export default Missions
