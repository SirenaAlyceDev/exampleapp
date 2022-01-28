import NavBar from "../components/NavBar";

export default function Blog() {
  return (
    <div className="w-screen h-full text-white">
      <NavBar />
      <div className="grid border-2 border-white h-56 content-center">
        <h2 className="text-pink-600 text-9xl font-extrabold">Blog</h2>
      </div>
      <div>
          individual project
      </div>
    </div>
  );
}
