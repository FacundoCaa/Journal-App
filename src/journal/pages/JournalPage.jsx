import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelected } from "../views"

export const JournalPage = () => {
  
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }

  const { isSaving, active } = useSelector( state => state.journal)
  
  return (
    <JournalLayout>

      
      {
        ( active != null )
          ? <NoteView />
          : <NothingSelected />
      }
      
      
      

      <IconButton 
        onClick={ onClickNewNote }
        disabled={ isSaving }
        size='large'
        sx={{
          color: 'white',
          ackgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30}}/>
      </IconButton>

    </JournalLayout>
  )
}
