export default function About(){
    return(
        <div className="flex flex-col items-center justify-center text-center space-y-6 p-6 max-w-3xl mx-auto bg-white  rounded-lg mt-10">
        <h1 className="text-3xl font-bold text-gray-800">About us</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to Food App, your go-to destination for discovering and enjoying delicious food! Our mission is to make finding and ordering food easier, faster, and more fun. Whether you're craving a local favorite or exploring new cuisines, we've got something for everyone.
          <br /><br />
          With a simple and intuitive interface, our app connects you to top-rated restaurants, delivers real-time updates on your orders, and helps you discover new tastes from the comfort of your home.
          <br /><br />
          Join us in making every meal a delightful experience.
        </p>
      </div>
      
    )
}