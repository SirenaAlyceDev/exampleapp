import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="w-screen h-full text-white">
      <NavBar />
      <div className="p-4 h-screen">
        <div className="grid grid-cols-2 border-2 border-white items-center h-3/5">
          <div>
            <h2 className="text-pink-600 text-2xl font-extrabold">
              Hey! I'm Sirena Alyce
            </h2>
          </div>
          <div>
            <p>
              I'm a front-end developer in Atlanta, GA. Powder gummi bears
              soufflé donut jelly-o pudding pie liquorice oat cake. Lemon drops
              powder lemon drops brownie dragée sugar plum. Tiramisu jelly beans
              pudding cupcake ice cream marzipan ice cream pie.
            </p>
          </div>
        </div>
        <div className="border-2 border-white">
          <div>
            <h2 className="text-pink-600 text-2xl">About</h2>
          </div>
          <div>
            <p>
              Liquorice candy canes candy croissant sweet cake halvah. Donut
              bear claw lollipop sweet fruitcake pudding candy croissant.
              Jujubes jelly lemon drops chocolate bar muffin jelly icing. Tart
              gummi bears croissant danish lemon drops pudding powder chocolate
              cake sweet roll. Pie caramels bear claw shortbread pastry gummies.
              Cake cookie biscuit bear claw sugar plum cookie halvah. Sesame
              snaps candy gummies marshmallow liquorice topping. Powder gummi
              bears cotton candy gingerbread soufflé sesame snaps apple pie
              dessert cheesecake. Cookie cotton candy chocolate toffee tiramisu
              chocolate bonbon liquorice.
            </p>
          </div>
        </div>
        <div className="border-2 border-white h-2/5">
          <div className="border-2 border-white">
            <h2 className="text-pink-600 text-2xl">Projects</h2>
          </div>
          <div className="grid grid-cols-3 h-full content-center">
            <div className="border-2 border-pink-500">Project 1</div>
            <div className="border-2 border-pink-500">Project 2</div>
            <div className="border-2 border-pink-500">Project 3</div>
          </div>
        </div>
        <div className="border-2 border-white h-1/5">
          <div className="border-2 border-white">
            <h2 className="text-pink-600 text-2xl">Latest Articles</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
