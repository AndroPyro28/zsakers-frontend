import './App.css';
import {AppMain, GlobalStyles} from "./appComponents"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import PublicRoutes from './routes/PublicRoutes';
import Index from './pages/public/index/Index';
import About from './pages/public/about/About';
import Login from './pages/public/login/Login';
import Signup from './pages/public/signup/Signup';
import Inventory from './pages/admin/inventory/Inventory';
import AdminRoutes  from './routes/AdminRoutes';
import CustomerRoutes from './routes/CustomerRoutes';
import Store from './pages/customer/store/Store';
import StaffRoutes from './routes/StaffRoutes';
import Pos from './pages/staff/pos/Pos';
import Checkout from './pages/customer/checkout/Checkout';
import Payment from './pages/customer/payment/Payment';
import Employees from './pages/admin/employees/Employees';
import {ToastContainer} from 'react-toastify';
import Orders from './pages/admin/orders/Orders';
import OrderDetails from './pages/admin/order_details/OrderDetails';
import Purchases from './pages/customer/purchases/Purchases';
import Preparing from './components/purchases/Preparing';
import ToReceive from './components/purchases/ToReceive';
import PurchaseDetails from './pages/customer/purchase-detail/PurchaseDetails';
import '@progress/kendo-theme-default/dist/all.css';
import "react-toastify/dist/ReactToastify.css";
import Online from './pages/admin/orders/Online';
import Walkin from './pages/admin/orders/Walkin';
import Sales from './pages/admin/sales/Sales';
import Profile from './pages/customer/profile/Profile';
import History from './pages/customer/profile/History';
import Personal from './pages/customer/profile/Personal';
import ForgotPassword from './pages/public/forgot-password/ForgotPassword';
import UpdatePasswordRoutes from './routes/UpdatePasswordRoutes';
import ResetPassword from './pages/public/reset-password/ResetPassword';
import ChangePassword from './pages/shared/password/ChangePassword';
import Weekly from './pages/admin/report/Weekly';
import Yearly from './pages/admin/report/Yearly';

function App() {

  const router = createBrowserRouter([
    { // public
      element: <PublicRoutes />,
      path:"/",
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          element: <About />,
          path: 'about'
        },
        {
          element: <Login />,
          path:'login'
        },
        {
          element: <Signup />,
          path:'signup'
        },
        {
          element: <ForgotPassword />,
          path:'forgot-password'
        },
        
      ]
    },
    { // admin 
      element: <AdminRoutes />,
      path: '/admin',
      children: [
        {
          path: 'inventory',
          children: [
            {
              element: <Inventory />,
              index: true
            }
          ]
        },
        {
          path:'pos',
          element: <Pos />
        },
        {
          path: 'password',
          children: [
            {
              element: <ChangePassword />,
              index: true,
            }, 
          ]
        },
        {
          path: 'sales',
          children: [
            {
              element: <Sales />,
              index: true,
            }, 
            {
              element: <Weekly />,
              path: 'report/weekly'
            },
            {
              element: <Yearly />,
              path: 'report/yearly'
            }
          ]
        },
        {
          path: 'employees',
          children: [
            {
              element: <Employees />,
              index: true
            }
          ]
        },
        {
          path: 'orders',
          element: <Orders />,
          children: [
            {
              element: <Online />,
              index: true
            },
            {
              element: <Online />,
              path: 'online',
            },
            {
              element: <Walkin />,
              path: 'walk-in'
            },
          ]
        },
        {
          path: 'orders/online/:order_id',
          element: <OrderDetails />,
        },
        {
          path: 'orders/walk-in/:order_id',
          element: <OrderDetails />,
        },
      ]
    },
    { // customer
      element: <CustomerRoutes />,
      path: '/customer',
      children: [
        {
          path: '',
          element: <Index />
        },
        {
          path: 'password',
          children: [
            {
              element: <ChangePassword />,
              index: true,
            }, 
          ]
        },
       
        {
          path: 'store',
          children: [
            {
              element: <Store />,
              index: true,
            }, 
          ]
        },

        {
          path: 'profile',
          element: <Profile />,
          children: [
            {
              element: <Personal />,
              index: true
            },
            {
              path: 'personal',
              element: <Personal />,
            },
            {
              path: 'history',
              element: <History />,
            }
          ]
        },
        {
          path: 'checkout',
          children: [
            {
              element: <Checkout />,
              index: true
            }
          ]
        },
        {
          path: 'payment',
          children: [
            {
              element: <Payment />,
              index: true
            }
          ]
        },
        {
          path: 'purchases',
          element: <Purchases />,
          children: [
            {
              index: true,
              element: <Preparing />
            },
            {
              path: 'preparing',
              element: <Preparing />
            },
            {
              path: 'to-receive',
              element: <ToReceive />
            },
            
          ]
        },
        {
          path: 'purchase-details/:order_id',
          element: <PurchaseDetails />
        }
      ]
    },
    { // staff
      element: <StaffRoutes />,
      path: '/staff',
      children: [
        {
            path:'pos',
            element: <Pos />
        },
        {
          path: 'sales',
          children: [
            {
              element: <Sales />,
              index: true,
            }, 
          ]
        },
        {
          path: 'password',
          children: [
            {
              element: <ChangePassword />,
              index: true,
            }, 
          ]
        },
        {
          path: 'orders',
          element: <Orders />,
          children: [
            {
              element: <Online />,
              index: true
            },
            {
              element: <Online />,
              path: 'online',
            },
            {
              element: <Walkin />,
              path: 'walk-in'
            },
          ]
        },
        {
          path: 'orders/online/:order_id',
          element: <OrderDetails />,
        },
        {
          path: 'orders/walk-in/:order_id',
          element: <OrderDetails />,
        },
      ]
    },
    {
      element: <UpdatePasswordRoutes />,
      path:'/reset-password',
      children: [
        {
          index: true,
          element: <ResetPassword />
        }
      ]
    }
  ])
  
  return (
    <AppMain>
      <GlobalStyles />
      <ToastContainer autoClose={2500} />
      <RouterProvider router={router} />
    </AppMain>
  );
}

export default App;
