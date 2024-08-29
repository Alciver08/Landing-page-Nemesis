import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
const AppRoutes = (): JSX.Element => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Eventos" element={<>Eventos </>} />
                <Route path="/user-profile" element={<></>} />
            </Routes>
        </Router>

    )
}

export default AppRoutes
