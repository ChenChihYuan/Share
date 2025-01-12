import React, {useState} from 'react'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import {makeStyles} from '@mui/styles'
import Dialog from './Dialog'
import ModelIcon from '../assets/2D_Icons/Model.svg'
import {ControlButton} from './Buttons'
import {useNavigate} from 'react-router-dom'


/**
 * Display sample models control button
 * @return {Object} React component
 */
export default function SampleModelsControl() {
  const [isDialogDisplayed, setIsDialogDisplayed] = useState(false)

  return (
    <ControlButton
      placement='top'
      title='Sample Models'
      isDialogDisplayed={isDialogDisplayed}
      setIsDialogDisplayed={setIsDialogDisplayed}
      icon={<ModelIcon/>}
      dialog={
        <SampleModelsDialog
          isDialogDisplayed={isDialogDisplayed}
          setIsDialogDisplayed={setIsDialogDisplayed}
        />}
    />)
}


/**
 * @param {boolean} isDialogDisplayed
 * @param {function} setIsDialogDisplayed
 * @return {Object} React component
 */
function SampleModelsDialog({isDialogDisplayed, setIsDialogDisplayed}) {
  const [selected, setSelected] = React.useState('')
  const classes = useStyles()
  const navigate = useNavigate()
  const handleSelect = (e) => {
    setSelected(e.target.value)
    const modelPath = {
      1: '/share/v/gh/OlegMoshkovich/BLDRS_models/main/haus.ifc',
      2: '/share/v/gh/Swiss-Property-AG/Portfolio/main/ASTRA.ifc',
      3: '/share/v/gh/Swiss-Property-AG/Portfolio/main/EISVOGEL.ifc',
      4: '/share/v/gh/Swiss-Property-AG/Portfolio/main/KNIK.ifc',
      5: '/share/v/gh/Swiss-Property-AG/Portfolio/main/MOMENTUM%20TINYHOUSE.ifc',
      6: '/share/v/gh/Swiss-Property-AG/Portfolio/main/NIEDERSCHERLI.ifc',
      // eslint-disable-next-line max-len
      7: '/share/v/gh/sujal23ks/BCF/main/packages/fileimport-service/ifc/ifcs/171210AISC_Sculpture_brep.ifc/120010/120020/120023/5007/2907#c:-115.5,-36.4,109.55,0,-41.93,13.88',
      // eslint-disable-next-line max-len
      8: '/share/v/gh/Alhakam/BIMsage/master/BIMsage-Source/BIMsage/src/test/resources/ontology/20200121_Promnitz_Stones.ifc/70/91/116/131/80830#c:-7.58,-3.45,0,0.11,-1.73,-0.32',

    }
    navigate({
      pathname: modelPath[e.target.value],
    })
    setIsDialogDisplayed(false)
  }


  return (
    <Dialog
      icon={<ModelIcon/>}
      headerText='Sample Models'
      isDialogDisplayed={isDialogDisplayed}
      setIsDialogDisplayed={setIsDialogDisplayed}
      content={
        <div className={classes.content}>
          <div style={{textAlign: 'left'}}>
            <p>
              We believe GitHub provides an excellent foundation for the new BIM ecosystem.
            </p>
            <p>
              Models hosted on GitHub are accessed in BLDRS by dropping a GitHub link into the search bar.
            </p>
            <p>
              Please visit our
              &nbsp;
              <a
                className={classes.link}
                target="_blank"
                href='https://github.com/bldrs-ai/Share/wiki/Open-IFC-model-hosted-on-GitHub'
                rel="noreferrer"
              >wiki</a>
              &nbsp; to learn more.
            </p>
            <p>
              Currently there are thousands of IFC files hosted on github, we highlighted several of them:
            </p>
          </div>
          <div >
            <TextField
              className={classes.root}
              value={selected}
              onChange={(e) => handleSelect(e)}
              variant='outlined'
              label='Highlighted IFCs'
              select
              size='small'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Sample Project</MenuItem>
              <MenuItem value={2}>Astra</MenuItem>
              <MenuItem value={4}>Open Source House</MenuItem>
              <MenuItem value={3}>Eisvogel</MenuItem>
              <MenuItem value={8}>High Fidelity Scan</MenuItem>
              <MenuItem value={7}>Structural Detail</MenuItem>
            </TextField>
          </div>
        </div>

      }
    />
  )
}


const useStyles = makeStyles({
  content: {
    width: '260px',
    height: '380px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  link: {
    color: 'blue',
    borderBottom: '1px solid blue',
    cursor: 'pointer',
  },
  root: {
    'width': '260px',
    '& .MuiOutlinedInput-input': {
      color: 'blue',
    },
    // TODO(oleg): Find suited colors
    // '& .MuiInputLabel-root': {
    //   color: 'blue',
    // },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'blue',
    },
    '&:hover .MuiOutlinedInput-input': {
      color: 'gray',
    },
    '&:hover .MuiInputLabel-root': {
      color: 'gray',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: 'blue',
    },
    // TODO(oleg): Find suited colors
    // '& .MuiInputLabel-root.Mui-focused': {
    //   color: 'blue',
    // },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'blue',
    },
  },
})
