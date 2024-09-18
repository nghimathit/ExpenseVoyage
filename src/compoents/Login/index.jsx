import React from 'react'

const Login = () => {
  return (
   <div>
     <div class="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 class="text-2xl font-bold text-center mb-6">Đăng Nhập</h2>
        <form>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
                <input type="email" id="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required/>
            </div>
            <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700" for="password">Mật Khẩu</label>
                <input type="password" id="password" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required/>
            </div>
            <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Đăng Nhập
            </button>
        </form>
        <p class="mt-4 text-sm text-center text-gray-600">
            Chưa có tài khoản? <a href="#" class="text-blue-500 hover:underline">Đăng Ký ngay</a>
        </p>
    </div>

</div>
  
  )
}

export default Login