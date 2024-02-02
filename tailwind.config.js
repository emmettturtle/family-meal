/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/App/App.jsx",
    "./src/pages/AuthPage/AuthPage.jsx",
    "./src/pages/HomePage/HomePage.jsx",
    "./src/pages/MemberCreatePage/MemberCreatePage.jsx",
    "./src/pages/NewRestPostPage/NewRestPostPage.jsx",
    "./src/pages/RestCreatePage/RestCreatePage.jsx",
    "./src/components/LoginForm/LoginForm.jsx",
    "./src/components/NavBar/NavBar.jsx",
    "./src/components/Post/Post.jsx",
    "./src/components/SignUpFormFunc/SignUpFormFunc.jsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#138D54',
        secondaryBG: '#F1F2ED'
      }
    },
  },
  plugins: [],
}

