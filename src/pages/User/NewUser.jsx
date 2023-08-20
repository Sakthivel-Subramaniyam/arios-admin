
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import "./NewUser.scss"
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const NewUser = () => {

    const navigate = useNavigate();

    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    useEffect(() => {
        document.title = "ARIOS | User Registration"
     }, []);

     const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };
    
  return (
    <div className="page-wrapper"> 
    <div className="page-title-bar">
      <div className="title">
        <h3>User Registration</h3>
      </div>
      <div className="button-wrapper">
      <button onClick={handleClick} className="btn-success"> Save </button>
      <button onClick={() => { navigate("/users") }} className="btn-success"> Back </button>
      </div>
    </div>
    
    <div className="page-content-wrapper">
        <div>Personal Information</div>
        <hr />
          <div className="personal-information-section">
            <table>
              <tr>
                <td><label htmlFor="" className="table-label">First Name</label></td>
                <td style={{width:'35%'}}><input type="text" style={{width:'100%'}} /></td>
                <td className="spaced"><label htmlFor="" className="table-label">Last Name</label></td>
                <td style={{width:'35%'}}><input type="text" style={{width:'100%'}} /></td>
              </tr>
              <tr>
                <td><label htmlFor="" className="table-label">Email</label></td>
                <td style={{width:'35%'}}><input type="text" style={{width:'100%'}} /></td>
                <td className="spaced"><label htmlFor="" className="table-label">Mobile</label></td>
                <td style={{width:'35%'}}><input type="text" style={{width:'100%'}} /></td>
              </tr>
              <tr>
                <td><label htmlFor="" className="table-label">Password</label></td>
                <td style={{width:'35%'}}><input type="text" style={{width:'100%'}} /></td>
                <td className="spaced"><label htmlFor="" className="table-label">Confirm Password</label></td>
                <td style={{width:'35%'}}><input type="text" style={{width:'100%'}} /></td>
              </tr>
            </table>
          </div>

        <div>Setting</div>
        <hr />
        <div className="personal-information-section">
            <table>
              <tr>
                <td><label htmlFor="" className="table-label">Role</label></td>
                <td style={{width:'35%'}}>
                    <select>
                      <option>--Select--</option>
                      <option>Admin</option>
                      <option>User</option>
                      <option>Manager</option>
                    </select>
                </td>
                <td className="spaced"><label htmlFor="" className="table-label">Password Expire</label></td>
                <td style={{width:'35%'}}><select>
                      <option>--Select--</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select></td>
              </tr>
            </table>
          </div>


          <div>Notification</div>
        <hr />
        <div className="personal-information-section">
            <table>
              <tr>
                <td><label htmlFor="" className="table-label">Send Report</label></td>
                <td style={{width:'35%'}}>
                    <select>
                      <option>--Select--</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                </td>
                <td className="spaced"><label htmlFor="" className="table-label">Attach Report</label></td>
                <td style={{width:'35%'}}><select>
                      <option>--Select--</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select></td>
              </tr>
            </table>
          </div>


    </div>

    <Snackbar
        open={open}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
        onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your details are saved successfully!!!
        </Alert>
        </Snackbar>

  </div>
  )
}

export default NewUser