import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'
import { Home } from './pages/Home.jsx'
import { Issues } from './pages/Issues.jsx'
import { IssueDetails } from './pages/IssueDetails.jsx'
import { About } from './pages/About.jsx'
import { NotFound } from './pages/NotFound.jsx'

/**
 * Every screen in the app, in one place.
 *
 * HashRouter (URLs look like /#/issues) is chosen on purpose: it works on
 * GitHub Pages, on any static host and even from a plain folder, with no
 * server rewrite rules. Swap it for BrowserRouter once there is a server
 * that can serve index.html for every path.
 */
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="issues" element={<Issues />} />
          <Route path="issue/:issueId" element={<IssueDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
