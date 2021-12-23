import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout'
import { GetStart } from './pages/get-start'
import { TestRoute } from './pages/test-route'

export const App = () => (
  <BrowserRouter>
    <Layout
      menus={[
        { name: '基本用法', to: '/' },
        { name: '测试路由', to: '/test' },
      ]}
    >
      <Routes>
        <Route path="/" element={<GetStart />} />
        <Route path="/test" element={<TestRoute />} />
      </Routes>
    </Layout>
  </BrowserRouter>
)
