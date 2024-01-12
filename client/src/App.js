import { Route, Routes } from 'react-router-dom'
import { path } from './ultils/contants'
import {
  Home,
  Login,
  RentalAparment,
  RentalHouse,
  RentalSpace,
  RentalRoom,
  HomePage,
  DetailPost,
} from './containers/public/index'
function App() {
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalAparment />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
          <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
          <Route
            path={path.DETAIL_POST__TITLE__POSTID}
            element={<DetailPost />}
          />
          <Route path={'chi-tiet/*'} element={<DetailPost />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
