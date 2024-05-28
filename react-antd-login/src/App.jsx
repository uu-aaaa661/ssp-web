import MyLayout from './components/MyLayout'
import { Route,Routes} from 'react-router-dom'
import Studytype from './pages/study_type'
import Studylist from './pages/study_list'
import Videotype from './pages/study_type'
import Videolist from './pages/video_list'
import Download from './pages/download'


function App() {
  return (
    <> 
      <div >
          <MyLayout>
            <Routes>
              <Route path='study_type' element={<Studytype/>}/>
              <Route path='study_list' element={<Studylist/>}/>
              <Route path='video_type' element={<Videotype/>}/>
              <Route path='video_list' element={<Videolist/>}/>
              <Route path='download' element={<Download/>}/>
            </Routes>
          </MyLayout>
      </div>
    </>
  )
}

export default App
