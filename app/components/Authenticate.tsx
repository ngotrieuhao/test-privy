'use client';

import { usePrivy } from '@privy-io/react-auth';

const Authenticate: React.FC = () => {
  const { authenticated, user, login, logout } = usePrivy();
  console.log(" user:", user)
  
  return authenticated ? (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Chào mừng trở lại!</h1>
          <p className="text-gray-600">{user?.email?.address}</p>
        </div>
        <button
          onClick={logout}
          className="w-full py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Chào mừng</h1>
          <p className="text-gray-600">Đăng nhập để tiếp tục</p>
        </div>
        <button
          onClick={login}
          className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default Authenticate;
