
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import "./application.scss"
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const NewApplication = () => {

    const navigate = useNavigate();

    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    useEffect(() => {
        document.title = "ARIOS | App Registration"
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
        <h3>Application Registration</h3>
      </div>
      <div className="button-wrapper">
      <button onClick={handleClick} className="btn-success"> Save </button>
      <button onClick={() => { navigate("/ad/app") }} className="btn-success"> Back </button>
      </div>
    </div>
    
    <div className="page-content-wrapper">
        <div>Appliaction Information</div>
        <hr />
          <div className="personal-information-section">
            <table>
              <tr>
                <td><label htmlFor="" className="table-label">Name</label></td>
                <td style={{width:'35%'}}><input type="text" style={{width:'100%'}} /></td>
                <td className="spaced"><label htmlFor="" className="table-label">Adapter</label></td>
                <td style={{width:'35%'}}>
                    <select>
                      <option>--Select--</option>
                      <option>Flexcube</option>
                      <option>OBDX</option>
                      <option>ERP</option>
                      <option>Finacle</option>
                    </select>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="" className="table-label">Version</label></td>
                <td style={{width:'35%'}}><input type="text" style={{width:'100%'}} /></td>
                <td className="spaced"><label htmlFor="" className="table-label">Type</label></td>
                <td style={{width:'35%'}}>
                    <select>
                      <option>--Select--</option>
                      <option>WebApp</option>
                      <option>MobileApp</option>
                      <option>WindowsApp</option>
                      <option>MacApp</option>
                    </select>
                </td>
              </tr>
              <tr>
                <td>
                    <label htmlFor="">URL</label>
                </td>
                <td colSpan={4}>
                    <input style={{width:'86%'}} type="text" />
                </td>
              </tr>
              <tr>
                <td>
                    <label htmlFor="">Description</label>
                </td>
                <td colSpan={4}>
                    <textarea name="" id="" cols="100" rows="4"></textarea>
                </td>
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

export default NewApplication