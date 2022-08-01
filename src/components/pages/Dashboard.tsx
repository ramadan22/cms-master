import React from 'react';
import Templates from '../templates/Default';
import ChartBar from '../molecules/chart/ChartBar';
import ChartLine from '../molecules/chart/ChartLine';

const Dashboard = () => (
  <Templates>
    <>
      <div className="bg-blue-500 px-3 md:px-8 h-40" />
      <div className="px-3 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <ChartBar />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <ChartLine />
            </div>
          </div>
        </div>
      </div>
      <div className="px-3">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            <div className="px-4 mb-10">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                <div className="flex flex-wrap border-b border-gray-200">
                  <div className="bg-yellow-600 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-pink">
                    graffiik
                  </div>
                  <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right">
                    <h5 className="text-gray-500 font-light tracking-wide text-base mb-1">Traffic</h5>
                    <span className="text-3xl text-gray-900">350,897</span>
                  </div>
                </div>
                <div className="text-sm text-gray-700 pt-4 flex items-center">
                  <span className="text-green-500 ml-1 mr-2">3.48</span>
                  <span className="font-light whitespace-nowrap">Since last month</span>
                </div>
              </div>
            </div>
            <div className="px-4 mb-10">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                <div className="flex flex-wrap border-b border-gray-200">
                  <div className="bg-green-600 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-orange">
                    icon groups
                  </div>
                  <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right">
                    <h5 className="text-gray-500 font-light tracking-wide text-base mb-1">New Users</h5>
                    <span className="text-3xl text-gray-900">2,356</span>
                  </div>
                </div>
                <div className="text-sm text-gray-700 pt-4 flex items-center">
                  <span className="text-red-500 ml-1 mr-2">3.48</span>
                  <span className="font-light whitespace-nowrap">Since last week</span>
                </div>
              </div>
            </div>

            <div className="px-4 mb-10">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                <div className="flex flex-wrap border-b border-gray-200">
                  <div className="bg-green-600 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-orange">
                    icon groups
                  </div>
                  <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right">
                    <h5 className="text-gray-500 font-light tracking-wide text-base mb-1">New Users</h5>
                    <span className="text-3xl text-gray-900">2,356</span>
                  </div>
                </div>
                <div className="text-sm text-gray-700 pt-4 flex items-center">
                  <span className="text-red-500 ml-1 mr-2">3.48</span>
                  <span className="font-light whitespace-nowrap">Since last week</span>
                </div>
              </div>
            </div>

            <div className="px-4 mb-10">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                <div className="flex flex-wrap border-b border-gray-200">
                  <div className="bg-green-600 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-orange">
                    icon groups
                  </div>
                  <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right">
                    <h5 className="text-gray-500 font-light tracking-wide text-base mb-1">New Users</h5>
                    <span className="text-3xl text-gray-900">2,356</span>
                  </div>
                </div>
                <div className="text-sm text-gray-700 pt-4 flex items-center">
                  <span className="text-red-500 ml-1 mr-2">3.48</span>
                  <span className="font-light whitespace-nowrap">Since last week</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  </Templates>
);

export default Dashboard;
