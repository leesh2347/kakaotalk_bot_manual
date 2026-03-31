import { Outlet, NavLink } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header className="header">
        <a href="/" className="header-home-link">메인으로</a>
        <table className="nav">
          <tbody>
            <tr>
              <td>
                <NavLink to="/maple" className="nav-link">
                  <img src="Images/maplelogo.jpg" alt="메이플" />
                  <p>메이플<br/>관련 기능</p>
                </NavLink>
              </td>
              <td>
                <NavLink to="/lostark" className="nav-link">
                  <img src="Images/loalogo.jpg" alt="로아" />
                  <p>로스트아크<br/>관련 기능</p>
                </NavLink>
              </td>
              <td>
                <NavLink to="/misc" className="nav-link">
                  <img src="Images/miscicon.jpg" alt="그외" />
                  <p>그 외 기능</p>
                </NavLink>
              </td>
              <td>
                <NavLink to="/fun" className="nav-link">
                  <img src="Images/funicon.jpg" alt="재미" />
                  <p>재미요소</p>
                </NavLink>
              </td>
              <td>
                <NavLink to="/pok" className="nav-link">
                  <img src="Images/pokicon.png" alt="pok" />
                  <p>포켓몬 게임</p>
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
      <div className="content_div">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
