import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './features/dashboard/homepage';
import Corporate from './features/Navigation/corporate/corporate.jsx';
import AboutUs from './features/Navigation/corporate/aboutus.jsx';
import VissionMission from './features/Navigation/corporate/vission_mission.jsx';
import CoreValue from './features/Navigation/corporate/corevalue.jsx';
import SocialResponsibility from './features/Navigation/corporate/social_responsibility.jsx';
import Location from './features/Navigation/corporate/location.jsx';
import Solutions from './features/Navigation/solutions/solutions.jsx';
import BigData from './features/Navigation/solutions/bigData.jsx';
import BusinessIntelligence from './features/Navigation/solutions/businessIntelligence.jsx';
import DataMangement from './features/Navigation/solutions/dataManagement.jsx';
import EnterpriseData from './features/Navigation/solutions/enterprisedata.jsx';
import ApplicationMiddleware from './features/Navigation/solutions/applicationMiddleware.jsx';
import Products from './features/Navigation/product/products.jsx';
import LogMode from './features/Navigation/product/logmode.jsx';
import Industries from './features/Navigation/industries/industries.jsx';
import Telecommunications from './features/Navigation/industries/telecommunication.jsx';
import Retail from './features/Navigation/industries/retail.jsx';
import FinancialServices from './features/Navigation/industries/financialServices.jsx';
import Manufacturing from './features/Navigation/industries/manufacturing.jsx';
import Utilities from './features/Navigation/industries/utilities.jsx';
import Government from './features/Navigation/industries/government.jsx';
import Services from './features/Navigation/services/service.jsx';
import EnterpriseMobility from './features/Navigation/services/enterpriseMobility.jsx';
import BusinessProcess from './features/Navigation/services/enterprisemobility/businessProcess.jsx';
import B2BMobileApps from './features/Navigation/services/enterprisemobility/b2bMobile.jsx';
import EnterpriseAndroidApp from './features/Navigation/services/enterprisemobility/enterpriseAndroidApp.jsx';
import EnterpriseApp from './features/Navigation/services/enterprisemobility/enterpriseApp.jsx';
import EnterpriseIOSApp from './features/Navigation/services/enterprisemobility/enterpriseIosApp.jsx';
import MobileBusiness from './features/Navigation/services/enterprisemobility/mobileBusiness.jsx';
import MobileApps from './features/Navigation/services/mobileApps.jsx';
import AndroidApp from './features/Navigation/services/mobileapps/androidApp.jsx';
import Windows8App from './features/Navigation/services/mobileapps/windows8app.jsx';
import BlackberryApp from './features/Navigation/services/mobileapps/blackberryApp.jsx';
import IphoneApp from './features/Navigation/services/mobileapps/iphoneApp.jsx';
import BusinessIntelligenceService from './features/Navigation/services/businessIntelligence.jsx';
import WebApplication from './features/Navigation/services/webApplication.jsx';
import CMRApplication from './features/Navigation/services/webapplication/cmrApplication.jsx';
import InventoryManagement from './features/Navigation/services/webapplication/inventoryManagement.jsx';
import ContentManagement from './features/Navigation/services/webapplication/contentManagement.jsx';
import CustomWebApp from './features/Navigation/services/webapplication/customWebApp.jsx';
import OpenSource from './features/Navigation/services/webapplication/openSource.jsx';
import TestingandQAservices from './features/Navigation/services/testingandQA.jsx';
import EnterpriseMobilityService from './features/Navigation/services/testing&QA/enterpriseMobilityServices.jsx';
import MobileAppsDevelopment from './features/Navigation/services/testing&QA/mobileAppDevelopment.jsx';
import Businessintelligenceservices from './features/Navigation/services/testing&QA/businessintelligence.jsx';
import WebApplicationDevelopment from './features/Navigation/services/testing&QA/webApplicationDevelopment.jsx';
import TestingAndQAServices from './features/Navigation/services/testing&QA/testingAndQA.jsx';
import Form from './features/dashboard/form.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>,
        children:[
          {
            path:'/form',
            element:<Form></Form>
          },
        ]
      },
      {
        path:'/corporate',
        element:<Corporate></Corporate>,
        children:[
          {
            path:'/corporate/aboutus',
            element:<AboutUs></AboutUs>
          },
          {
            path:'/corporate/vissionmission',
            element:<VissionMission></VissionMission>
          },
          {
            path:'/corporate/corevalue',
            element:<CoreValue></CoreValue>
          },
          {
            path:'/corporate/socialresponsibility',
            element:<SocialResponsibility></SocialResponsibility>
          },
          {
            path:'/corporate/location',
            element:<Location></Location>
          }
        ]
      },
      {
        path:'/solutions',
        element:<Solutions></Solutions>,
        children:[
          {
            path:'/solutions/bigdata',
            element:<BigData></BigData>
          },
          {
            path:'/solutions/businessIntelligence',
            element:<BusinessIntelligence></BusinessIntelligence>
          },
          {
            path:'/solutions/datamanagement',
            element:<DataMangement></DataMangement>
          },
          {
            path:'/solutions/enterprisedatawarehouse',
            element:<EnterpriseData></EnterpriseData>
          },
          {
            path:'/solutions/applicationmiddleware',
            element:<ApplicationMiddleware></ApplicationMiddleware>
          }
        ]
      },
      {
        path:'/products',
        element:<Products></Products>,
        children:[
          {
            path:'/products/logmode',
            element:<LogMode></LogMode>
          }
        ]
      },
      {
        path:'/industries',
        element:<Industries></Industries>,
        children:[
          {
            path:'/industries/telecommunications',
            element:<Telecommunications></Telecommunications>
          },
          {
            path:'/industries/retail',
            element:<Retail></Retail>
          },
          {
            path:'/industries/financialservices',
            element:<FinancialServices></FinancialServices>
          },
          {
            path:'/industries/manufacturing',
            element:<Manufacturing></Manufacturing>
          },
          {
            path:'/industries/utilities',
            element:<Utilities></Utilities>
          },
          {
            path:'/industries/government',
            element:<Government></Government>
          }
        ]
      },
      {
        path:'/services',
        element:<Services></Services>,
        children:[
          {
            path:'/services/enterprisemobility',
            element:<EnterpriseMobility></EnterpriseMobility>,
            children:[
              {
                path:'/services/enterprisemobility/businessProcess',
                element:<BusinessProcess></BusinessProcess>
              },
              {
                path:'/services/enterprisemobility/b2bmobileapps',
                element:<B2BMobileApps></B2BMobileApps>
              },
              {
                path:'/services/enterprisemobility/enterpriseandroidapp',
                element:<EnterpriseAndroidApp></EnterpriseAndroidApp>
              },
              {
                path:'/services/enterprisemobility/enterpriseapp',
                element:<EnterpriseApp></EnterpriseApp>
              },
              {
                path:'/services/enterprisemobility/enterpriseiosapp',
                element:<EnterpriseIOSApp></EnterpriseIOSApp>
              },
              {
                path:'/services/enterprisemobility/mobilebusiness',
                element:<MobileBusiness></MobileBusiness>
              }
            ]
          },
          {
            path:'/services/mobileapps',
            element:<MobileApps></MobileApps>,
            children:[
              {
                path:'/services/mobileapps/andriodapp',
                element:<AndroidApp></AndroidApp>
              },
              {
                path:'/services/mobileapps/window8',
                element:<Windows8App></Windows8App>
              },
              {
                path:'/services/mobileapps/blackberry',
                element:<BlackberryApp></BlackberryApp>
              },
              {
                path:'/services/mobileapps/iphoneapp',
                element:<IphoneApp></IphoneApp>
              }
            ]
          },
          {
            path:'/services/businessintelligenceservices',
            element:<BusinessIntelligenceService></BusinessIntelligenceService>
          },
          {
            path:'/services/webapplication',
            element:<WebApplication></WebApplication>,
            children:[
              {
                path:'/services/webapplication/crmapplication',
                element:<CMRApplication></CMRApplication>
              },
              {
                path:'/services/webapplication/inventory',
                element:<InventoryManagement></InventoryManagement>
              },
              {
                path:'/services/webapplication/contentmanagement',
                element:<ContentManagement></ContentManagement>
              },
              {
                path:'/services/webapplication/customwebapp',
                element:<CustomWebApp></CustomWebApp>
              },
              {
                path:'/services/webapplication/opensourcedevelopment',
                element:<OpenSource></OpenSource>
              }
            ]
          },
          {
            path:'/services/testing',
            element:<TestingandQAservices></TestingandQAservices>,
            children:[
              {
                path:'/services/testing/enterprisemobilityservice',
                element:<EnterpriseMobilityService></EnterpriseMobilityService>
              },
              {
                path:'/services/testing/mobileappsdevelopment',
                element:<MobileAppsDevelopment></MobileAppsDevelopment>
              },
              {
                path:'/services/testing/businessintelligenceservices',
                element:<Businessintelligenceservices></Businessintelligenceservices>
              },
              {
                path:'/services/testing/webapplicationdevelopment',
                element:<WebApplicationDevelopment></WebApplicationDevelopment>
              },
              {
                path:'/services/testing/testingandQAservices',
                element:<TestingAndQAServices></TestingAndQAServices>
              }
            ]
          }
        ]
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
